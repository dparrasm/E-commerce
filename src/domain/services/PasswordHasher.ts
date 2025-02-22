import bcrypt from "bcryptjs";
export interface IPasswordHasher {
    hash(password: string): Promise<string>;
    compare(plainPassword: string, hashedPassword: string): Promise<boolean>;
}

export class PasswordHasher implements IPasswordHasher {
    async hash(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    async compare(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword);
    }
}