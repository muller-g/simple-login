import User from "src/entity/User";
import { prisma } from "../../database/client";

export default class UserService {
    static async create(user: User){
        try {
            return await prisma.user.create({
                data: user
            });
        } catch (e: any){
            return e.message;
        }
    }

    static async get(){
        try {
            return await prisma.user.findMany({});
        } catch (e: any){
            return e.message;
        }
    }
}