import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import logo from "../../assets/icons/logo.png";
import user from "../../assets/icons/user.svg";
import lock from "../../assets/icons/lock.svg";
import "./signup.css";
import { useAuth } from "../../contexts/authContexts"

const ColorButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    borderRadius: 25,
    width: 260,
    color: "#fff",
    color: theme.palette.getContrastText("#fff"),
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }));

  export default function Signup() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth()


    async function handleSignup() {
        if (password !== passwordConfirm) {
          console.log("Passwords Not Same!");
          setError(true);
          setPassword("");
          setPasswordConfirm("");
          return;
        }
        try {
          setError("")
          setLoading(true)
          console.log(1111)
          console.log(email)
          console.log(password)
          await signup(email, password)
          console.log("signup")
          navigate("/login");
        } catch {
          setError("Failed to create an account")
        }
        setLoading(false)
    }

    return (
        <div className="login">
          <div className="signup-welcome">
            <h1>Welcome,</h1>
            <h3>lets get started.</h3>
          </div>
          <div className="bottom-container">
            <img src={logo} alt=""></img>
            <div className="login-form">
              <div className="emailfield">
                <img src={user} alt=""></img>
                <input
                  type="text"
                  value={fullName}
                  placeholder="Enter Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="emailfield">
                <img src={user} alt=""></img>
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
              <div className="passfield">
                <img src={lock} alt=""></img>
                <input
                  type="password"
                  value={passwordConfirm}
                  placeholder="Confirm Password"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>
            </div>
            <ColorButton
              variant="contained"
              type="submit"
              color="primary"
              onClick={() => {
                handleSignup();
              }}
            >
              Sign Up
            </ColorButton>
            <br></br>
            <div style={{ color: "gray", padding: "12px 8px 4px" }}>Or</div>
            <h3 className="gradient">
              <Link to="/login">Already have an account?</Link>
            </h3>
          </div>
          {/* <SnackBar
            message="Invalid entries or passwords are not same"
            severity="error"
            showBar={error}
            callback={() => {
              setError(false);
            }}
          /> */}
        </div>
      );
  }