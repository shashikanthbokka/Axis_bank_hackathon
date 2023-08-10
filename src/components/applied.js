import React from "react";
import "./applied.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Rpllistitemav from "./rpl-list-item-av";

function Applied() {
  return (
    <>
      <div className="dboard-screen">
        <div className="left-part">
          <div className="left-align">
            <div className="lp-button">
              <FontAwesomeIcon icon={faHouse} className="icon" />{" "}
              <Link id="link" to="/dashboard-a">
                Dashboard
              </Link>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faChartSimple} className="icon" />
              <Link id="link" to="/applied">
                Applications
              </Link>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faChartSimple} className="icon" />
              <Link id="link" to="/assesment">
                Assesments
              </Link>
            </div>

            <div>
              <p className="lp-text">ACCOUNT PAGES</p>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faUser} className="icon" />{" "}
              <Link id="link" to="/profile-a">
                Profile
              </Link>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faFile} className="icon" /> Sign Out
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="rp-upper">
            <p>Dashboard</p>
          </div>
          {/* <div className="rp-middle">
            <div className="rpm-align">
              <div className="rpm-pic">
                <img src="/assets/Image.png" />
              </div>
              <div className="rpm-text">
                <h3>Bokka Shashikanth</h3>
                <p>shashikanthb13@gmail.com</p>
              </div>
            </div>
            <div> */}
          {/* <div className="rpm-buttons">
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faBox} className="icon1" />{" "}
                  <button>Overview</button>
                </div>
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faWrench} className="icon1" />{" "}
                  <button>Edit</button>
                </div>
              </div> */}
          {/* </div>
          </div> */}
          <div className="rp-lower">
            <div className="rpl-heading">
              <h3>All applied Jobs</h3>
            </div>
            <div className="rpl-list-items">
              <Rpllistitemav />
              <Rpllistitemav />
              <Rpllistitemav />
              <Rpllistitemav />
              <Rpllistitemav />
              <Rpllistitemav />
              <Rpllistitemav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Applied;
