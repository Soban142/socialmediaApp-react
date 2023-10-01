import "./register.css"

const Register = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Facebook</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder="Username" className="loginInput" />
                    <input type="Email" placeholder="Email" className="loginInput" />
                    <input type="password" placeholder="Enter password" className="loginInput" />
                    <input type="password" placeholder="Confirm password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">
                        Log into account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register