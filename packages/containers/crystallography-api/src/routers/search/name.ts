import { Client } from 'elasticsearch';
import { Firestore } from '@google-cloud/firestore';
import Joi from "joi";
import { Router, Request, Response } from "express";


export const getNameSearchRouter = ({ firestore, elasticSearch }: { firestore: Firestore, elasticSearch: Client }) => {
    const router = Router();

    router.post("/", (req: Request, res: Response) => {

        if (!req.body) {
            return res.status(500).json({
                status: 500,
                title: "Invalid Body Params",
                detail: "Invalid Body Params",
            });
        }

        let page: number = parseInt(req.body.page as string, 10);
        page = page && isFinite(page) ? page : 1;

        let name = req.body.name || "";
        name = name.replace(/[^\-()'a-z/\\,.\][α-ωΑ-Ω0-9]/gmi, " ").replace(/\s+/g, " ").trim();

        const pageNameValidation = Joi.object().keys({
            name: Joi.string().min(3).max(255).required(),
            page: Joi.number().integer().min(1).max(99999).required(),
        });

        const validationRes = pageNameValidation.validate({
            name, page,
        });

        if (validationRes.error) {
            return res.status(400).json({
                status: 400,
                title: "Incorrect author or page",
                detail: "Incorrect author or page",
            });
        }

        // @FIXME: add pagination
        elasticSearch.search({
            index: 'structures.documents',
            body: {
                query: {
                    "multi_match": {
                        "query": name,
                        "fields": [
                            'commonname^4', 'mineral^4', 'chemname^4', 'title'
                        ]
                    }
                }
            }
        })
        .then((data: any)=> {
            return res.status(200).json({
                meta: {
                    total: 0,
                    pages: 0,
                    searchString: req.body.name,
                },
                data
            });
        })
        .catch((e: any) => {
            return res.status(500).json({
                status: 500,
                title: "Something wrong with connection to elastic search",
                detail: "Something wrong with connection to elastic search",
            });
        });


    });

    return router;
};