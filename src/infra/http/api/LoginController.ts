import { Request, Response } from 'express';
import app from '../../server';
import UserService from '../service/UserService';
import LoginService from '../service/LoginService';
import User from 'src/entity/User';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default class LoginController {
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        app.post("/login", async (req: Request, res: Response) => {
            const { email, password } = req.body;
            const user: any = await LoginService.login(email, password);

            if(!user){
                res.status(403).send("Unauthorized");
                return
            }

            const token = jwt.sign({
                id: user.id,
                name: user.name,
                email: user.email
            }, process.env.JWT_SECRET || '');

            res.status(200).send({
                user: user,
                token: token
            });
        });
    }
}
