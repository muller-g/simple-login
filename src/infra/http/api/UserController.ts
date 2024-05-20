import { Request, Response } from 'express';
import app from '../../server';
import User from '../../../entity/User';
import UserService from '../service/UserService';
import EnsureUserToken from '../middleware/EnsureUserToken';

export default class UserController {
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        app.post("/users", async (req: Request, res: Response) => {
            const { name, email, password, phone } = req.body;
            const user: User = await User.createUser(
                name,
                email,
                phone,
                password
            );

            res.status(200).json(await UserService.create(user));
        });

        app.get("/users", EnsureUserToken.validate, async (req: Request, res: Response) => {
            res.status(200).json(await UserService.get());
        });
    }
}
