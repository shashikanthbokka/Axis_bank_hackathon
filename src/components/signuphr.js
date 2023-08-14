import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./signuphr.css";

function Signuphr() {
  return (
    <>
      <div className="sin-page">
        <nav className="navbar-1">
          <div className="logo-1">
            <Link to="/">
              <img id="logo" src="/assets/axisbank-logo.png" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/signinoption">Sign in</Link>
            </li>
            <li>
              <Link to="/signupoption">Sign up</Link>
            </li>
          </ul>
        </nav>
        <div className="form-inner">
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="text"
              id="fname"
              name="fname"
              placeholder=" Full Name"
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="User Name"
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="tel"
              id="phno"
              name="phno"
              placeholder="Contact Number"
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faLock} />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password.."
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="text"
              id="fname"
              name="fname"
              placeholder=" Company Name"
            />
          </div>

          <button className="signinbutton">
            <Link to="/signinhr">GET STARTED</Link>
          </button>

          {/* <div className="Forgot_password">
            <button className="Forgot_password"></button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Signuphr;
