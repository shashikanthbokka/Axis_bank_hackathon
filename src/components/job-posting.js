import React from "react";
import "./job-posting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
function Jobposting() {
  return (
    <div className="dboard-screen">
      <div className="left-part">
        <div className="left-align">
          <div className="lp-button">
            <FontAwesomeIcon icon={faHouse} className="icon" /> Dashboard
          </div>
          <div className="lp-button">
            <FontAwesomeIcon icon={faChartSimple} className="icon" />
            Post A Job
          </div>
          <div>
            <p className="lp-text">ACCOUNT PAGES</p>
          </div>
          <div className="lp-button">
            <FontAwesomeIcon icon={faUser} className="icon" /> Profile
          </div>
          <div className="lp-button">
            <FontAwesomeIcon icon={faFile} className="icon" /> Sign Out
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="rp-upper">
          <p> Posting a New Job</p>
        </div>
        <div className="rp-form">
          <h1>Job Details</h1>
          <div className="rp-form-inner">
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="jobtitle"
                placeholder="Job Title/Job Role"
              />
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

                <input type="text" id="majorsub" placeholder="College Year" />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="cgpa" placeholder="Passing Out Year" />
              </div>
            </div>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input type="text" id="degree" placeholder=" Degree" />
            </div>
            <div className="sfi-line-1 ">
              <FontAwesomeIcon icon={faUser} />

              <input type="text" id="degree" placeholder=" Degree" />
              <button>Enhance</button>
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
      </div>
    </div>
  );
}
export default Jobposting;
