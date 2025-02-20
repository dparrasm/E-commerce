import { User } from './../../domain/entities/User';
import { Email } from '../../domain/valueObjects/email';
import { IUserRepository } from './../../domain/repositories/IUserRepository';
import { v4 as uuidv4 } from 'uuid';

export class RegisterUser {
    constructor(private userRepository: IUserRepository) {}

    async execute(name: string, email: string, password: string): Promise<User>{
        const emailV0 = new Email(email)

        const existingUser = await this.userRepository.findByEmail(emailV0)

        if(existingUser){
            throw new Error("User with this email already exist")
        }

        const userV0: User = {id: uuidv4(), name, email: emailV0.getValue(), password}
        await this.userRepository.save(userV0)
        return userV0
    }
}