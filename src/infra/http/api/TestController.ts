import { Request, Response } from 'express';
import app from '../../server';

export default class TestController {
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        app.get("/test", (req: Request, res: Response) => {
            res.status(200).send("Test route is working");
        });
    }
}
