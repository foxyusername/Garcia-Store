import { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";


export function Login({setstate,getdata,getdata2}) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [username, setUsername] = useState("");
  const [checked, setChecked] = useState(false);

  function handleChangeEmail(e) {
    setLoginEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setLoginPassword(e.target.value);
  }

  function handleCheck() {
    axios.post("http://localhost:3000/select", {
      login_email: loginEmail,
      login_password: loginPassword,
    }).then((response) => {
      if (response.data === "no accounts found") {
        setUsername("no accounts found");
        setstate(false);
      } else {
        getdata(loginPassword);
        getdata2(loginEmail);
        setUsername("");
        setChecked(true);
        setstate(true);
 // navigate to home on successful login
      }
    });


  }

  return (
    <div className="main-box">
      <div className="login-box" style={{ borderTop: username === "no accounts found" ? "5px solid red" : null }}>
        <h3>{username}</h3>
        <div className="inputs">
          <label>👤</label>
          <input type="text" placeholder="Email" onChange={handleChangeEmail} required />
        </div>
        <div className="inputs">
          <label>🔒</label>
          <input type="password" placeholder="Password" maxLength={12} onChange={handleChangePassword} required />
        </div>
        <button type="submit" className="button" onClick={handleCheck}>
          Login
        </button>
        {checked && <Navigate to="/home" />}
      </div>
      <a href="/register">
        <p className="link">create new account</p>
      </a>
    </div>
  );

}
