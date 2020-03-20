// import { getApplication } from "@chemistry/application-cod-search";
import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { getPlatformAPI } from "./platform-api";

// Initializing Core Platrofm Components
const history = createBrowserHistory();
const platformAPI = getPlatformAPI();

const getApplication = () => {
  const Routes: any[] = [{
      // tslint:disable-next-line
      component() {},
      routes: [
      ],
  }];
  return { Routes };
};

// Load Platform Application
const application = getApplication();

// Load Platform Layout and Features
import { getLayout } from "../layout";
const { Layout } = getLayout({ platformAPI, application });

ReactDOM.render(
    <Router
      history={history}
    ><Layout />
    </Router>,
    document.getElementById("app"),
);
