import { User } from "../../domain/entities/User";
export interface IUserService {
  register(name: string, email: string, password: string): Promise<User>;
}
