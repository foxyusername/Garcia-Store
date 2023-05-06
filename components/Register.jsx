import "../css/register.css";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export function Register({registerState,getusername,getemail,getpassword}) {
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [confirm, setconfirm] = useState("");
  const [boolean, setboolean] = useState(false);
  const [checked, setchecked] = useState(false);
  const [err, seterr] = useState("");
  const [errchecker, setchecker] = useState(false);
  const [navigation, setNavigation] = useState(false);
  const [data, setdata] = useState({});

  function change(event) {
    let value = event.target.value;
    setPassword(value);
  }

  function confirmation(event) {
    let value = event.target.value;
    setconfirm(value);
  }

  function check(e) {
    e.preventDefault();
    setchecked(true);
    if (confirm === password) {
      setboolean(true);

      axios
        .post("http://localhost:3000/insert", {
          username: username,
          password: password,
          email: email,
        })
        .then((response) => {
          if (response.data == "0") {
            seterr("");
            setchecker(false);
            setNavigation(true); // set navigation to true on success
            registerState(true);
            getusername(username);
            getpassword(password);
            getemail(email);
          } else {
            seterr("email has already been used");
            setchecker(true);
           registerState(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setboolean(false);
    }
  }

  return (
    <div>
      <div className="main-div">
        <form className="main-form" onSubmit={check}>
          <div
            className="Form"
            style={{ borderBottom: errchecker ? "5px solid red" : null }}
          >
            <h2>Registration</h2>
            <div className="second-form">
              <input
                type="text"
                placeholder="Username"
                required
                onChange={(event) => {
                  setusername(event.target.value);
                }}
              ></input>
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              ></input>
              <input
                type="password"
                placeholder="Password"
                maxLength={12}
                required
                onChange={change}
              ></input>
              <input
                type="password"
                placeholder="Confirm Password"
                maxLength={12}
                required
                onChange={confirmation}
              ></input>
              {!boolean && checked ? <p>Incorrect Password</p> : null}
              <br />
              <button className="submit-register" type="submit">
                Submit
              </button>
              <br />
              <br />
              <br />
              <p className="error">{err}</p>
            </div>
          </div>
        </form>
        {navigation && <Navigate to="/home" />} {/* render the navigation component if navigation is true */}
      </div>
    </div>
  );
}
