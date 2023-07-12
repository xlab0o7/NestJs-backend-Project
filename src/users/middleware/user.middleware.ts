import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
@Injectable()
export class UserMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        let date = new Date().toDateString();
        let protocol = req.protocol;
        let url = req.originalUrl;
        let host = req.hostname;
        let method = req.method;

        console.log(`Request..... ${date}  ${protocol}//${host}:3000${url}  /${method} `)
        next();
    }
}