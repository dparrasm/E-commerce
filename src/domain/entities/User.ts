import { Email } from "../valueObjects/email";

export interface User {
  id: string;
  name: string;
  email: Email;
  password: string;
}
