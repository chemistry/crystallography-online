variable "project_id" {
    description = "Google Cloud Projec ID"
    type        = string
}
variable "domain" {
    description = "Deployment Domain"
    type        = string
}
variable "region" {
    description = "Infrastructure Region"
    default     = "europe-west1"
    type        = string
}
variable "service_name_graphql" {
  default       = "graphql-api"
}

// Secret variables
variable "MONGO_CONNECTION" {
  description   = "Connection string to MongoDB"
  type          = string
  sensitive     = true
}

terraform {
    required_version = ">= 0.14"

    required_providers {
        # Cloud Run support was added on 3.3.0
        google = ">= 3.3"
    }
}

provider "google" {
    project = var.project_id
}

# Enables the Cloud Run API
resource "google_project_service" "run_api" {
    service = "run.googleapis.com"
    disable_on_destroy = true
}

# Create the Cloud Run service
resource "google_cloud_run_service" "run_service" {
    name = var.service_name_graphql
    location = var.region
    autogenerate_revision_name = true

    metadata {
        namespace = var.project_id
    }

    template {
        spec {
            containers {
                image = data.external.image_digest.result.image
                env {
                    name = "MONGO_CONNECTION"
                    value = var.MONGO_CONNECTION
                }
            }
        }
    }

    traffic {
        percent         = 100
        latest_revision = true
    }

    # Waits for the Cloud Run API to be enabled
    depends_on = [google_project_service.run_api]
}

# Allow unauthenticated users to invoke the service
resource "google_cloud_run_service_iam_member" "run_all_users" {
    service  = google_cloud_run_service.run_service.name
    location = google_cloud_run_service.run_service.location
    role     = "roles/run.invoker"
    member   = "allUsers"
}

resource "google_cloud_run_domain_mapping" "run_service" {
    location = var.region
    name     = var.domain

    metadata {
        namespace = var.project_id
    }

    spec {
        route_name = google_cloud_run_service.run_service.name
    }
}

# WORKAROUND
data "external" "image_digest" {
  program = ["bash", "get_latest_tag.sh", var.project_id, var.service_name_graphql]
}
# END WORKAROUND

# Display the service URL
output "service_url" {
    value = google_cloud_run_service.run_service.status[0].url
}