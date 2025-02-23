import { User } from "@domain/entities/User";
import { PasswordHasher } from "@domain/services/PasswordHasher";
import { UserRepository } from "@infrastructure/data/UserRepository";
import { Email } from "@domain/valueObjects/email";
import { Logger } from "@infrastructure/utils/Logger";

export class LoginUser {
  constructor(
    private userRepository: UserRepository,
    private passwordHasher: PasswordHasher,
  ) {}

  async execute(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findByEmail(new Email(email));
    if (!user) {
      Logger.error("LoginUser - User doest not exist");
      throw new Error("User does not exist");
    }

    const passwordMatches = await this.passwordHasher.compare(
      password,
      user.password,
    );
    if (!passwordMatches) {
      Logger.error("LoginUser - Some information is not correct");
      throw new Error("Some information is not correct");
    }

    return user;
  }
}
