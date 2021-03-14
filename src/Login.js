import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
const Login = () => {
  const signIn = () => {
    console.log("signin");
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/06/Snapchat_logo.jpg"
          alt=""
        />
        <Button variant="contained" onClick={signIn} color="primary">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
