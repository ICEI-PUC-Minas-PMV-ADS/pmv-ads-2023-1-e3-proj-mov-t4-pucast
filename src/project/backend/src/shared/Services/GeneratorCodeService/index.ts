import crypto from 'crypto';
import { ICodeExpiresIn, IResCodeExpiresIn } from './IGeneratorCodeService';

class GeneratorCodeService {

    public execute({ expiresMin }: ICodeExpiresIn): IResCodeExpiresIn {

        const currentDate = new Date();

        const code = crypto.randomBytes(4).toString("hex");
        const codeExpiresIn = new Date(currentDate.setMinutes(currentDate.getMinutes() + expiresMin));

        return {
            codeExpiresIn,
            code
        };
        
    };

};

export {
    GeneratorCodeService
};