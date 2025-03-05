import { Email } from "../valueObjects/Email";

export interface User {
  id: string;
  name: string;
  email: Email;
  password: string;
}
