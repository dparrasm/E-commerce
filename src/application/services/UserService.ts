import { RegisterUser } from "../usecases/RegisterUser";
import { User } from "../../domain/entities/User";

export class UserService {
  constructor(private registerUser: RegisterUser) {}

  async register(name: string, email: string, password: string): Promise<User> {
    return this.registerUser.execute(name, email, password);
  }
}
