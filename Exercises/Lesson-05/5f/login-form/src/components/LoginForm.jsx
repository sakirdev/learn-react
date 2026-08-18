import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div>
        <input className="login-input" placeholder="Email" />
      </div>
      <div>
        <input
          className="login-input"
          placeholder="Password"
          type={showPassword ? "password" : "text"}
        />
        <button className="show-button" onClick={toggleShowPassword}>
          {showPassword ? "Show" : "Hide"}
        </button>
      </div>
      <button className="login-button">Login</button>
      <button className="login-button">Sign up</button>
    </>
  );
}

export default LoginForm;
