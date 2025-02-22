import { useState } from "react";
import "./Register.css";
import { UserService } from "@application/services/UserService";
import { UserRepository } from "@infrastructure/data/UserRepository";
import { RegisterUser } from "@application/usecases/RegisterUser";
interface RegisterFormState {
  name: string;
  password: string;
  email: string;
}

const userRepository = new UserRepository();
const registerUser = new RegisterUser(userRepository);
const userService = new UserService(registerUser);

export default function Register() {
  const [registerForm, setRegisterForm] = useState<RegisterFormState>({
    name: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState<string>("");

  const handleRegisterForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prevRegisterForm) => ({
      ...prevRegisterForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { name, password, email } = registerForm;
      await userService.register(name, email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="register-form">
      <form className="register-form__form" onSubmit={handleSubmit}>
        <input
          className="register-form__input"
          type="text"
          name="name"
          placeholder="Name"
          value={registerForm.name}
          onChange={handleRegisterForm}
        />
        <input
          className="register-form__input"
          aria-label="email"
          type="text"
          name="email"
          placeholder="Email"
          value={registerForm.email}
          onChange={handleRegisterForm}
        />
        <input
          className="register-form__input"
          type="password"
          name="password"
          placeholder="Password"
          value={registerForm.password}
          onChange={handleRegisterForm}
        />
        <p>{error}</p>
        <button type="submit" aria-label="Sign up">
          Sign up
        </button>
      </form>
    </div>
  );
}
