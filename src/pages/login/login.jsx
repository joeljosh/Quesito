import React,{useState,useEffect} from 'react';

import logo from "../../assets/icons/logo.png";
import loginImg from "../../assets/icons/login3D.png";
import user from "../../assets/icons/user.svg";
import lock from "../../assets/icons/lock.svg";

import './login.css'

export const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="login">
      <div className="welcome">
        <h1>Welcome,</h1>
        <h3>lets get started.</h3>
        <img
          className="welcome-img"
          src={loginImg}
          alt=""
          style={{ opacity: show ? 0 : 1 }}
        />
      </div>
      <div className="bottom-container">
        <img src={logo} alt="" />
        {show && (
          <div className="login-form">
            <div className="emailfield">
              <img src={user} alt="" />
              <input
                type="email"
                value={email}
                placeholder="Enter Email-ID"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="passfield">
              <img src={lock} alt=""></img>
              <input
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              style={{
                color: 'gray',
                textAlign: "right",
                margin: "16px 56px 0 0",
              }}
            >
              <span>Forgot Password?</span>
            </div>
          </div>
        )}
        <br></br>
        {/* <ColorButton
          variant="contained"
          type="submit"
          color="primary"
          className={classes.button}
          onClick={() => Togglelogin()}
        >
          {"Log In"}
        </ColorButton>
        <br></br>
        <div style={{ color: "gray", padding: "12px 8px 4px" }}>Or</div>
        <h3 className="gradient">
          <Link to="/signup">Create an account?</Link>
        </h3>
      </div>
      <SnackBar
        message="Invalid e-mail and/or password"
        severity="error"
        showBar={error}
        callback={() => {
          setError(false);
        }}
      /> */}
    </div>
    </div>
    )
}