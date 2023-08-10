import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import "./signin.css";
import "../App.css";
function Signinhr() {
  return (
    <>
      <div className="sin-page">
        <nav className="navbar-1">
          <div className="logo-1">
            <Link to="/">Logo</Link>
          </div>
          <ul>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/signupoption">Sign up</Link>
            </li>
          </ul>
        </nav>
        <div className="form-inner">
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />
            <label htmlfor="email"></label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faLock} />
            <label htmlfor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password.."
            />
          </div>

          <button className="signinbutton">
            <Link to="/dashboard-hr">GET STARTED</Link>
          </button>

          {/* <div className="Forgot_password">
            <button className="Forgot_password"></button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Signinhr;
