import { RegisterUser } from "../usecases/RegisterUser";
import { LoginUser } from "../usecases/LoginUser";
import { User } from "@domain/entities/User";

export class UserService {
  private registerUser?: RegisterUser;
  private loginUser?: LoginUser;
  private currentUser: User | null = null;
  private authToken: string | null = null;

  constructor({
    registerUser,
    loginUser,
  }: {
    registerUser?: RegisterUser;
    loginUser?: LoginUser;
  }) {
    this.registerUser = registerUser;
    this.loginUser = loginUser;
  }

  async register(name: string, email: string, password: string): Promise<User> {
    if (!this.registerUser) throw new Error("RegisterUser is not available");
    const user = await this.registerUser.execute(name, email, password);
    this.setSession(user);
    return user;
  }

  async login(email: string, password: string): Promise<User> {
    if (!this.loginUser) throw new Error("LoginUser is not available");
    const user = await this.loginUser.execute(email, password);
    this.setSession(user);
    return user;
  }

  logout(): void {
    this.currentUser = null;
    this.authToken = null;
    // También podríamos limpiar cookies/localStorage si fuera necesario
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  private setSession(user: User): void {
    this.currentUser = user;
    this.authToken = this.generateToken(); // Simulando generación de token
  }

  private generateToken(): string {
    return Math.random().toString(36).substring(2); // Token de sesión simple
  }

  getAuthToken(): string | null {
    return this.authToken;
  }
}
