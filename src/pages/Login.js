import React, { useState } from "react";
import Logo from "../components/layout/Logo";

const Login = ({ history }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  const onChangeText = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (username !== "" && password !== "") {
      history.push("/dashboard");
    }
  };
  return (
    <div className="login-page">
      <div className="login-block">
        <div className="top">
          <Logo size={1.5} color="#272822" />
        </div>
        <div className="body">
          <form onSubmit={onSubmit} className="form">
            <div className="form-item">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => onChangeText(e)}
                placeholder="username"
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => onChangeText(e)}
                placeholder="password"
              />
            </div>
            <input type="submit" value="Login" className="btn btn-dark" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
