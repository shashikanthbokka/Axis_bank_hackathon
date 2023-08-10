import React from "react";
import { Link } from "react-router-dom";

function Signupoption() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/signuphr">Sign up as HR</Link>
        </li>
        <li>
          <Link to="/signup">Sign up as applicant</Link>
        </li>
      </ul>
    </div>
  );
}

export default Signupoption;
