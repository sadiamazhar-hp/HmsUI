import React from "react";

export default function LoginForm() {
  return (
    <div className="half">
        <div className="form-box">
          <h3>LOGIN</h3>
          <input placeholder="Email" /><br /><br />
          <input placeholder="Password" type="password" /><br /><br />
          <button className="submit">Login</button>
        </div>
    </div>
  );
}
