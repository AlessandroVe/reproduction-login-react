import "./Login.css";

import React, { Component } from "react";

/* assets */
import logoForm from "../../assets/icons/mountain.png";
import logoUser from "../../assets/icons/user.png"
import logoPassword from "../../assets/icons/padlock.png";




/* func Components */
import ValidateInput from "../../components/funcComponents/ValidateInput/ValidateInput";

class Login extends Component {
    constructor(props) {
        super(props)
    }
    handleClick = () => {
        
    }
    render() {
        return (
            <div className="login">
                <div className="box-login">
                    <form className="login-form">
                        <span className="form-logo">
                            <img src={logoForm}></img>
                        </span>
                        <span className="form-title">LOG IN</span>
                        <ValidateInput class="form-user" type="text" label="Username" inputIcon={logoUser} />
                        <ValidateInput class="form-password" type="password" label="Password" inputIcon={logoPassword} />
                        <div className="form-checkbox">
                            <input id="check" type="checkbox"></input>
                            <label for="check">Remember me</label>
                        </div>
                        <div className="form-button">
                            <button>Login
                            </button>
                        </div>
                        <div className="form-forgot">
                           <a >
                           Forgot Password?
                           </a>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}
export default Login; 