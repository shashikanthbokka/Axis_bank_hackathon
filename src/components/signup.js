import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";

function Signup() {
  return (
    <>
      <div className="sup-page">
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

          {/* <button className="signupbutton">CONTINUE</button> */}
        </div>
      </div>
      <div className="full-form">
        <div className="sup-form">
          <h1>Educational Qualifications</h1>
          <div className="sup-form-inner">
            <h3>Latest Education</h3>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input type="text" id="degree" placeholder=" Degree" />
            </div>
            <div className="sfi-line-2">
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="majorsub" placeholder="Major Subject" />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="cgpa" placeholder="CGPA" />
              </div>
            </div>
            <div className="sfi-line-3">
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="clgyear" placeholder="College Year" />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="passout"
                  placeholder="Passing Out Year"
                />
              </div>
            </div>
            <div className="sfi-line-4">
              <div className="sfi-line-4-input">
                <button>ADD</button>
              </div>
              <div className="sfi-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sup-form">
          <h1>Work Experience</h1>
          <div className="sup-form-inner">
            <h3>Add New Experience</h3>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input type="text" id="degree" placeholder="Employer" />
            </div>
            <div className="sfi-line-2">
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="majorsub" placeholder="Role" />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="cgpa" placeholder="From - To Date" />
              </div>
            </div>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input type="text" id="degree" placeholder="Employer" />
            </div>

            <div className="sfi-line-4">
              <div className="sfi-line-4-input">
                <button>ADD</button>
              </div>
              <div className="sfi-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sup-form">
          <h1>Skills</h1>
          <div className="sup-form-inner">
            <h3>Enter all skills ( comma seperated )</h3>
            <div className="sfi-line-1">
              <input
                type="text"
                id="degree"
                placeholder="Enter the skills .."
              />
            </div>

            <div className="sfi-line-4">
              <div className="sfi-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="big-btn">
          <button>
            <Link to="/dashboard-a">CONTINUE</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;
