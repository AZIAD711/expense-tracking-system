import logo from "../../assets/image/logo-small.png"
import emailIcon from "../../assets/icon/email-icon.png"
import passwordIcon from "../../assets/icon/password-icon.png"
import nameIcon from "../../assets/icon/name-icon.png"
import phoneNumberIcon from "../../assets/icon/phone-number-icon.png"
import submitButtonIcon from "../../assets/icon/submit-icon.png"
import sccuessMessagePhoto from "../../assets/image/sccuess-message.png"
import "./create-account.css"
import { Link } from "react-router-dom"
export default function CreateAccountPage() {
    return (
        <section className="create-account-page">
            <form action="">
                {/* HEADER OF FORM */}
                <section className="header-of-form">
                    <img src={logo} alt="logo" loading="lazy" />
                    <h2>Create Account</h2>
                    <p>Add personal details</p>
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
                    {/* FULL NAME INPUT */}
                    <section className="name-input">
                        <img src={nameIcon} alt="name icon" loading="lazy" />
                        <input type="text" placeholder="Enter Name" name="name" id="name" />
                    </section>
                    {/* PHONE NUMBER INPUT */}
                    <section className="phone-number-input">
                        <img src={phoneNumberIcon} alt="phone-number icon" loading="lazy" />
                        <input type="tel" placeholder="Enter Phone Number" name="phone-number" id="phone-number" />
                    </section>
                </section>
                {/* SUBMIT BUTTON */}
                <section className="submit-button">
                    <img src={submitButtonIcon} alt="submit button icon" loading="lazy" />
                    <button
                        type="button"
                        onClick={() =>openDialog()}
                    >
                        Submit
                    </button>
                </section>

                {/* SHOW SUCCESS MESSAGE
                <dialog id="sccuessMessage">
                    <img src={sccuessMessagePhoto} alt="sccuess message photo" loading="lazy" />
                    <h2>Your Account Has Been Created </h2>
                    <Link to="/login">Go to Login</Link>
                    {/* <button
                        onClick={() => document.getElementById("sccuessMessage").close()}
                    >
                        Close
                    </button> */}
                {/* </dialog>  */}
                {/* LOGIN LINK */}
                <p>
                    You Already Have Account ? <Link to="/login">Login </Link>
                </p>
            </form>
        </section>
    )
}