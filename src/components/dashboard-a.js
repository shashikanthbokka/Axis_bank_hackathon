import React from "react";
import "./dashboard-a.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faBox,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

function Dashboarda() {
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
              <Link id="link" to="/job-posting">
                Post A Job
              </Link>
            </div>
            <div>
              <p className="lp-text">ACCOUNT PAGES</p>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faUser} className="icon" />{" "}
              <Link id="link" to="/profile">
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
            </div>
          </div>
          <div className="rp-lower">
            <div className="rpl-heading">
              <h3>All Jobs</h3>
            </div>
            <div className="rpl-list-items">
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Company Name</p>
                </div>
                <div className="part-2">
                  <h2>Role</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5">
                  <p>
                    <b>Status :</b> Selected for Round 1
                  </p>
                </div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Company Name</p>
                </div>
                <div className="part-2">
                  <h2>Role</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5">
                  <p>
                    <b>Status :</b> Selected for Round 1
                  </p>
                </div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Company Name</p>
                </div>
                <div className="part-2">
                  <h2>Role</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5">
                  <p>
                    <b>Status :</b> Selected for Round 1
                  </p>
                </div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Company Name</p>
                </div>
                <div className="part-2">
                  <h2>Role</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5">
                  <p>
                    <b>Status :</b> Selected for Round 1
                  </p>
                </div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Company Name</p>
                </div>
                <div className="part-2">
                  <h2>Role</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5">
                  <p>
                    <b>Status :</b> Selected for Round 1
                  </p>
                </div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Company Name</p>
                </div>
                <div className="part-2">
                  <h2>Role</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5">
                  <p>
                    <b>Status :</b> Selected for Round 1
                  </p>
                </div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Company Name</p>
                </div>
                <div className="part-2">
                  <h2>Role</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5">
                  <p>
                    <b>Status :</b> Selected for Round 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboarda;
