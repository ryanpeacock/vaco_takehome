import React, { useState } from "react";
import Logo from "../components/layout/Logo";

const Login = ({ history }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const { username, password } = loginData;

  const onChangeText = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      history.push("/dashboard");
    } else {
      setError("Please Fill in all fields");
      setShowError(true);
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
          {showError && (
            <p style={{ color: "#f92672", textAlign: "center" }}>{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
