import logo from "../../assets/image/logo-small.png"
import emailIcon from "../../assets/icon/email-icon.png"
import passwordIcon from "../../assets/icon/password-icon.png"
import loginButtonIcon from "../../assets/icon/login-buuton-icon.png"
import "./Login.css"
import { Link } from "react-router-dom"
export default function LoginPage() {
    return (
        <section className="login-page">
            <form action="">
                {/* HEADER OF FORM */}
                <section className="header-of-form">
                    <img src={logo} alt="logo" loading="lazy" />
                    <h2>👋Welcome Back</h2>
                    <p>Sign in to counitue</p>
                </section>
                {/* INPUTS GROUP */}
                <section className="input-group">
                    {/* EMAIL INPUT */}
                    <section className="email-input">
                        <img src={emailIcon} alt="email icon" loading="lazy" />
                        <input type="email" placeholder="Enter Email Address" name="email" id="email" />
                    </section>
                    {/* PASSWORD INPUT */}
                    <section className="password-input">
                        <img src={passwordIcon} alt="password icon" loading="lazy" />
                        <input type="password" placeholder="Enter Password" name="password" id="password" />
                    </section>
                </section>
                {/* FORGET PASSWORD LINK */}
                <Link to="">Forget Password ?</Link>
                {/* SUBMIT BUTTON */}
                <section className="login-button">
                    <img src={loginButtonIcon} alt="login button icon" loading="lazy" />
                    <button type="submit">Login</button>
                </section>
                {/* CREATE ACCOUNT LINK */}
                <p>
                    You New in website ? <Link to="">create account </Link>
                </p>
            </form>
        </section>
    )
}