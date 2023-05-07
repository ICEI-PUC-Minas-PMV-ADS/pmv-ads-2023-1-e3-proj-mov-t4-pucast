import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import { IRequest } from "../../../shared/interfaces/IRequest";
import { statuscode } from "../../../shared/interfaces/StatusCode";
import { IResponse } from "../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../shared/ErrorHandling/ParametersError/IResponseError";
import { GeneratorJwtService } from "../../../shared/Services/GeneratorJwtService";

class VerifyToken {

    constructor(
        private generatorJwtService: GeneratorJwtService
    ){};

    public handle(req: IRequest<any, any>, res: IResponse<IResponseError>, next: NextFunction) {

        try {
            
            const { authorization } = req.headers;
            
            if (!authorization) return res.status(statuscode.UNAUTHORIZED).json({
                message: 'The authentication token was not entered!',
                statusCode: statuscode.UNAUTHORIZED
            });

            jwt.verify(authorization, process.env.SECRET_JWT as string, (error, decoded) => {
                
                if (!!error) return res.status(statuscode.UNAUTHORIZED).json({
                    message: error.message,
                    statusCode: statuscode.UNAUTHORIZED
                });

                else {

                    //@ts-ignore
                    req.jwt = this.generatorJwtService.execute({ user_id: decoded.user_id });
                    next();

                };
    
            });


        } catch (error: any) {
            return res.status(statuscode.INTERNAL_SERVER_ERROR).json(error.message);
        };

    };

};

export { VerifyToken };