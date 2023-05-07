import { IUserRepository } from '../../../../repositories/Users/IUsersRepositories';
import { ILoginUserDTO } from '../../IUserDTOs/ILoginUserDTO';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { IResponseSucess } from '../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import bcrypt from 'bcryptjs';
import { GeneratorJwtService } from '../../../../shared/Services/GeneratorJwtService';
import { IResponseJwtDTO } from '../../IUserDTOs/IResponseJwtDTO';

class UserLoginService {

    constructor(
        private usersRepository: IUserRepository,
        private generatorJwtService: GeneratorJwtService
    ){};

    async execute({ email, password }: ILoginUserDTO): Promise<Either<ParametersError, ParametersSucess<IResponseJwtDTO>>> {
        
        const userAlreadyExists = await this.usersRepository.exists(email);

        if (!userAlreadyExists) return error(new ParametersError('Incorrect password or email address!', statuscode.BAD_REQUEST));

        if (!bcrypt.compareSync(password, userAlreadyExists.password as string)) return error(new ParametersError('Incorrect password or email address!', statuscode.BAD_REQUEST));

        const jwt = this.generatorJwtService.execute({ user_id: userAlreadyExists.id as number });

        return sucess(
            new ParametersSucess('Usuário conectado', statuscode.OK, { jwt })
        );
         
    };

};

export { UserLoginService };