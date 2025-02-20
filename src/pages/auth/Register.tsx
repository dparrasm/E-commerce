import { useState } from "react";
import "./Register.css"
interface RegisterFormState {
    name: string;
    password: string;
    email: string;
}

export default function Register() {
    const [registerForm, setRegisterForm] = useState<RegisterFormState>({ name: '', password: '', email: '' })

    const handleRegisterForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterForm((prevRegisterForm) => ({
            ...prevRegisterForm,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("handleSubmit")
        console.log("Aquí deberíamos hacer unos controles y eso, antes de subir datos raros")
    }

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
                    type="email"
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
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}