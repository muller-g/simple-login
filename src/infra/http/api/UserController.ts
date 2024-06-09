import { Request, Response } from 'express';
import app from '../../server';
import User from '../../../entity/User';
import UserService from '../service/UserService';
import EnsureUserToken from '../middleware/EnsureUserToken';
import logger from '../../../service/WinstonLogger';

export default class UserController {
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        logger.info("User routes start");

        app.post("/users", async (req: Request, res: Response) => {
            try {
                const { name, email, password, phone } = req.body;
                const user: User = await User.createUser(
                    name,
                    email,
                    phone,
                    password
                );
    
                return res.status(200).json(await UserService.create(user));
            } catch(e){
                return res.status(500).json("Error");
            }
        });

        app.get("/users", EnsureUserToken.validate, async (req: Request, res: Response) => {
            try {
                return res.status(200).json(await UserService.get());
            } catch(e){
                return res.status(500).json("Error");
            } 
        });
    }
}
