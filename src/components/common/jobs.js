import React from "react";
import { Link } from "react-router-dom";

function Jobs(props) {
  return (
    <div className={props.jobclass}>
      <div className="job-img">
        <div className="brand-pic">
          <img src={props.brandSrc} alt="brand" />
        </div>
        <div className="man-pic">
          <img src={props.personSrc} alt="man" />
        </div>
        <span className="connected-people">Connected People</span>
        <p className="number">{props.number}</p>
      </div>

      <div className="line"></div>
      <div className="text-job">
        <p className="do-not-lose-btn">{props.losebtn}</p>
        <p className="job-text">
          {props.paratext}
          <span>...More</span>
        </p>
        <div className="signup-btn">
          <Link to="/jobSeeker" className={props.registerClass}>
            Register Now
          </Link>
          <Link to="/" className={props.loginClass}>
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
