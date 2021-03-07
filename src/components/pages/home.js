import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./../includes/footer";
import Logo from "../../assets/img/Homev4/Logo.png";
import { Container, Row, Col } from "reactstrap";
import Jobs from "../common/jobs.js";
import girl from "./../../assets/img/Homev4/girl.png";
import people from "./../../assets/img/Homev4/people.png";
import man from "./../../assets/img/Homev4/man.png";
import employers from "./../../assets/img/Homev4/employers.png";
import personalagencies from "./../../assets/img/Homev4/personalagencies.png";
import jobseekers from "./../../assets/img/Homev4/jobseekers.png";
import bannerVideo from "./../../assets/img/Homev4/bannerVideo.ogv";

class Home extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <video
            className="video"
            autoPlay="true"
            loops
          >
            <source src={bannerVideo} type="video/mp4" />
          </video>
        </div>
        <div className="home-main">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="container">
            <div className="jobs-section">
              <div className="row align-items-strech">
                <div className="col-xl-4">
                  <Jobs
                    jobclass="job-seekers job-seeker"
                    brandSrc={jobseekers}
                    personSrc={man}
                    number="6,453,777"
                    paratext="Never Look for Another Job Again!"
                    registerClass="red-register"
                    loginClass="red-login"
                  />
                </div>
                <div className="col-xl-4">
                  <Jobs
                    jobclass="job-seekers personal-agencies"
                    brandSrc={personalagencies}
                    personSrc={girl}
                    number="2,369,256"
                    paratext="Build Your Base Now!"
                    losebtn="Do NOT Lose Out !"
                    registerClass="yellow-register"
                    loginClass="yellow-login"
                  />
                </div>
                <div className="col-xl-4">
                  <Jobs
                    jobclass="job-seekers employee"
                    brandSrc={employers}
                    personSrc={people}
                    number="5,966,259"
                    paratext="Go Direct! - Qualified Candidate Interviews to Your Mobile"
                    registerClass="blue-register"
                    loginClass="blue-login"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-ribbon">
          <div className="container">
            <div className="alternative-recruitment">
              <p>Alternative Recruitment</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Home;
