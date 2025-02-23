import { useState } from "react";
import "./Login.css";
import { UserService } from "@application/services/UserService";
import { UserRepository } from "@infrastructure/data/UserRepository";
import { LoginUser } from "@application/usecases/LoginUser";
import { PasswordHasher } from "@domain/services/PasswordHasher";
interface LoginFormState {
  password: string;
  email: string;
}

const userRepository = new UserRepository();
const passwordHasher = new PasswordHasher();
const loginUser = new LoginUser(userRepository, passwordHasher);
const userService = new UserService({ loginUser });

export default function Login() {
  const [loginForm, setLoginForm] = useState<LoginFormState>({
    password: "",
    email: "",
  });
  const [error, setError] = useState<string>("");

  const handleLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prevLoginForm) => ({
      ...prevLoginForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { password, email } = loginForm;
      await userService.login(email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };
  return (
    <div className="login-form">
      <form className="login-form__form" onSubmit={handleSubmit}>
        <input
          className="login-form__input"
          aria-label="email"
          type="text"
          name="email"
          placeholder="Email"
          value={loginForm.email}
          onChange={handleLoginForm}
        />
        <input
          className="login-form__input"
          type="password"
          name="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={handleLoginForm}
        />
        <p>{error}</p>
        <button type="submit" aria-label="Sign in">
          Sign up
        </button>
      </form>
    </div>
  );
}
