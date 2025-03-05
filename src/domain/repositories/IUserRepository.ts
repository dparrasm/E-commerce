import { User } from "../entities/User";
import { Email } from "../valueObjects/Email";

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  save(user: User): Promise<void>;
}
