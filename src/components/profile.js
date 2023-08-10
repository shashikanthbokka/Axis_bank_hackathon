import React from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faBox,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <>
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
            <p>Profile</p>
          </div>
          <div className="rp-middle">
            <div className="rpm-align">
              <div className="rpm-pic">
                <img src="/assets/Image.png" />
              </div>
              <div className="rpm-text">
                <h3>Bokka Shashikanth</h3>
                <p>shashikanthb13@gmail.com</p>
              </div>
            </div>
            <div>
              <div className="rpm-buttons">
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faBox} className="icon1" />{" "}
                  <button>Overview</button>
                </div>
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faWrench} className="icon1" />{" "}
                  <button>Edit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="rp-lower">
            <div className="rpl-heading">
              <h3>Profile Information</h3>
            </div>
            <div className="rpl-list-items">
              <div className="rpl-list-item">
                <b>lorem ipsum :</b> lorem ipsum
              </div>
              <div className="rpl-list-item">
                <b>lorem ipsum :</b> lorem ipsum
              </div>
              <div className="rpl-list-item">
                <b>lorem ipsum :</b> lorem ipsum
              </div>
              <div className="rpl-list-item">
                <b>lorem ipsum :</b> lorem ipsum
              </div>
              <div className="rpl-list-item">
                <b>lorem ipsum :</b> lorem ipsum
              </div>
              <div className="rpl-list-item">
                <b>lorem ipsum :</b> lorem ipsum
              </div>
              <div className="rpl-list-item">
                <b>lorem ipsum :</b> lorem ipsum
              </div>
              <div className="rpl-list-item">
                <b>lorem ipsum :</b> lorem ipsum
              </div>
              <div className="rpl-list-item">
                <b>lorem ipsum :</b> lorem ipsum
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
