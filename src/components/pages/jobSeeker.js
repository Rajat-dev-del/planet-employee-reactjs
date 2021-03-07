import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./../includes/footer";
import Header from "./../includes/header";
import Sidebar from "./../includes/sidebar";
import { Container, Row, Col } from "reactstrap";
import user from "../../assets/img/Job-Seekers/user.svg";
import phone from "../../assets/img/Job-Seekers/phone.svg";
import mail from "../../assets/img/Job-Seekers/mail.svg";
import edit from "../../assets/img/Job-Seekers/edit.svg";
import calendar from "../../assets/img/Job-Seekers/calendar.svg";
import { PieChart } from "react-minimal-pie-chart";

class Jobseeker extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="dashboard-panel">
          <Sidebar />
          <div className="main-panel">
            <div className="user-heading">
              <h3>Welcome,</h3>
              <h4>
                John!<span>👋</span>
              </h4>
            </div>
            <div className="user-contact-details">
              <div className="contact-details">
                <div className="contact-icon">
                  <img src={user} alt="icon" />
                </div>
                <div className="contact-text">
                  <span className="name">PA Assigned Name</span>
                  <p className="name-details">Andries Grootoonk</p>
                </div>
              </div>
              <div className="contact-details">
                <div className="contact-icon">
                  <img src={phone} alt="icon" />
                </div>
                <div className="contact-text">
                  <span className="name">PA Assigned Name</span>
                  <p className="name-details">Andries Grootoonk</p>
                </div>
              </div>
              <div className="contact-details">
                <div className="contact-icon">
                  <img src={mail} alt="icon" />
                </div>
                <div className="contact-text">
                  <span className="name">PA Assigned Name</span>
                  <p className="name-details">Andries Grootoonk</p>
                </div>
              </div>
            </div>
            <div className="curriculum-vitae">
              <h3>Curriculum Vitae</h3>
              <table className="curriculum-tabel">
                <thead>
                  <tr>
                    <th className="serial-num">#</th>
                    <th className="cv-section">CV Section</th>
                    <th className="candidate-complete">Candidate Completed</th>
                    <th className="personal-agency">Personal Agency</th>
                    <th className="action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="serial-num" data-label="serial-num">
                      1
                    </td>
                    <td className="cv-section" data-label="cv-section">
                      Position Preffered
                    </td>
                    <td
                      className="candidate-complete"
                      data-label="candidate-complete"
                    >
                      <div>
                        <span className="green"></span>
                        yes
                      </div>
                    </td>
                    <td
                      className="personal-agency"
                      data-label="personal-agency"
                    >
                      <div>
                        <span className="green"></span>
                        Done
                      </div>
                    </td>
                    <td className="action" data-label="action">
                      <div>
                        <img src={edit} alt="edit" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-num" data-label="serial-num">
                      2
                    </td>
                    <td className="cv-section" data-label="cv-section">
                      Family Details
                    </td>
                    <td
                      className="candidate-complete"
                      data-label="candidate-complete"
                    >
                      <div>
                        <span className="red"></span>
                        No
                      </div>
                    </td>
                    <td
                      className="personal-agency"
                      data-label="personal-agency"
                    >
                      <div>
                        <span className="red"></span>
                        Pending
                      </div>
                    </td>
                    <td className="action" data-label="action">
                      <div>
                        <img src={edit} alt="edit" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-num" data-label="serial-num">
                      3
                    </td>
                    <td className="cv-section" data-label="cv-section">
                      Education &amp; Qualification
                    </td>
                    <td
                      className="candidate-complete"
                      data-label="candidate-complete"
                    >
                      <div>
                        <span className="green"></span>
                        yes
                      </div>
                    </td>
                    <td
                      className="personal-agency"
                      data-label="personal-agency"
                    >
                      <div>
                        <span className="green"></span>
                        Done
                      </div>
                    </td>
                    <td className="action" data-label="action">
                      <div>
                        <img src={edit} alt="edit" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-num" data-label="serial-num">
                      4
                    </td>
                    <td className="cv-section" data-label="cv-section">
                      Employment &amp; Experience
                    </td>
                    <td
                      className="candidate-complete"
                      data-label="candidate-complete"
                    >
                      <div>
                        <span className="green"></span>
                        yes
                      </div>
                    </td>
                    <td
                      className="personal-agency"
                      data-label="personal-agency"
                    >
                      <div>
                        <span className="green"></span>
                        Done
                      </div>
                    </td>
                    <td className="action" data-label="action">
                      <div>
                        <img src={edit} alt="edit" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-num" data-label="serial-num">
                      5
                    </td>
                    <td className="cv-section" data-label="cv-section">
                      Sport, Hobbies &amp; Internet
                    </td>
                    <td
                      className="candidate-complete"
                      data-label="candidate-complete"
                    >
                      <div>
                        <span className="green"></span>
                        yes
                      </div>
                    </td>
                    <td
                      className="personal-agency"
                      data-label="personal-agency"
                    >
                      <div>
                        <span className="green"></span>
                        Done
                      </div>
                    </td>
                    <td className="action" data-label="action">
                      <div>
                        <img src={edit} alt="edit" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-num" data-label="serial-num">
                      6
                    </td>
                    <td className="cv-section" data-label="cv-section">
                      Personality
                    </td>
                    <td
                      className="candidate-complete"
                      data-label="candidate-complete"
                    >
                      <div>
                        <span className="red"></span>
                        No
                      </div>
                    </td>
                    <td
                      className="personal-agency"
                      data-label="personal-agency"
                    >
                      <div>
                        <span className="red"></span>
                        Pending
                      </div>
                    </td>
                    <td className="action" data-label="action">
                      <div>
                        <img src={edit} alt="edit" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-num" data-label="serial-num">
                      7
                    </td>
                    <td className="cv-section" data-label="cv-section">
                      Knowledge &amp; Capabilities
                    </td>
                    <td
                      className="candidate-complete"
                      data-label="candidate-complete"
                    >
                      <div>
                        <span className="green"></span>
                        yes
                      </div>
                    </td>
                    <td
                      className="personal-agency"
                      data-label="personal-agency"
                    >
                      <div>
                        <span className="green"></span>
                        Done
                      </div>
                    </td>
                    <td className="action" data-label="action">
                      <div>
                        <img src={edit} alt="edit" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-num" data-label="serial-num">
                      8
                    </td>
                    <td className="cv-section" data-label="cv-section">
                      Video Interview
                    </td>
                    <td
                      className="candidate-complete"
                      data-label="candidate-complete"
                    >
                      <div>
                        <span className="green"></span>
                        yes
                      </div>
                    </td>
                    <td
                      className="personal-agency"
                      data-label="personal-agency"
                    >
                      <div>
                        <span className="green"></span>
                        Done
                      </div>
                    </td>
                    <td className="action" data-label="action">
                      <div>
                        <img src={edit} alt="edit" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="video-static-section">
              <div className="video-request-statistic">
                <h4>Video Requests Statistic</h4>
                <div className="circular-progressbar">
                  <PieChart
                    data={[
                      { title: "One", value: 50, color: "#00CED1" },
                      { title: "Two", value: 15, color: "#6DD400" },
                      { title: "Three", value: 20, color: "#FCB42F" },
                      { title: "Four", value: 20, color: "#FF3D55" },
                    ]}
                    lineWidth={35}/>
                </div>
                <div className="total-video-status">
                  <div className="status">
                    <div className="video-status blue-video">
                      <span className="video-num">10</span>
                      <p className="video-text">Total Video Request Received</p>
                    </div>
                  </div>
                  <div className="status">
                    <div className="video-status green-video">
                      <span className="video-num">03</span>
                      <p className="video-text">Total Video Request Received</p>
                    </div>
                  </div>
                  <div className="status">
                    <div className="video-status red-video">
                      <span className="video-num">04</span>
                      <p className="video-text">Total Video Request Received</p>
                    </div>
                  </div>
                  <div className="status">
                    <div className="video-status yello-video">
                      <span className="video-num">04</span>
                      <p className="video-text">Total Video Request Received</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="curriculum-vitae video-statistic">
                <h4>
                  Video Statistic <span>(Latest 10)</span>
                </h4>
                <table className="curriculum-tabel">
                  <thead>
                    <tr>
                      <th className="serial-num">#</th>
                      <th className="cv-section">Company Name</th>
                      <th className="candidate-complete">
                        Request Received Date
                      </th>
                      <th className="personal-agency"> Job Seekers Action</th>
                      <th className="action" data-label="action">
                        Action Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        1
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        Planet Employ
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <Link className="approve-btn" to="/">
                            Approve
                          </Link>
                          <Link className="decline-btn" to="/">
                            Decline
                          </Link>
                        </div>
                      </td>
                      <td className="action" data-label="action"></td>
                    </tr>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        2
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        HCL
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <span className="red"></span>
                          Declined
                        </div>
                      </td>
                      <td className="action" data-label="action">
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        3
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        HestaBit
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <Link className="approve-btn" to="/">
                            Approve
                          </Link>
                          <Link className="decline-btn" to="/">
                            Decline
                          </Link>
                        </div>
                      </td>
                      <td className="action" data-label="action"></td>
                    </tr>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        4
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        Vipro
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <span className="green"></span>
                          Done
                        </div>
                      </td>
                      <td className="action" data-label="action">
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        5
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        IBM
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <span className="green"></span>
                          Done
                        </div>
                      </td>
                      <td className="action" data-label="action">
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        6
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        Apple Inc
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <span className="red"></span>
                          Declined
                        </div>
                      </td>
                      <td className="action" data-label="action">
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        7
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        Google
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <span className="green"></span>
                          Done
                        </div>
                      </td>
                      <td className="action" data-label="action">
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        8
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        Samsung
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <Link className="approve-btn" to="/">
                            Approve
                          </Link>
                          <Link className="decline-btn" to="/">
                            Decline
                          </Link>
                        </div>
                      </td>
                      <td className="action" data-label="action"></td>
                    </tr>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        9
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        Andrimeda Tech
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <span className="red"></span>
                          Declined
                        </div>
                      </td>
                      <td className="action" data-label="action">
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-num" data-label="serial-num">
                        10
                      </td>
                      <td className="cv-section" data-label="cv-section">
                        Lion Technology
                      </td>
                      <td
                        className="candidate-complete"
                        data-label="candidate-complete"
                      >
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                      <td
                        className="personal-agency"
                        data-label="personal-agency"
                      >
                        <div>
                          <span className="red"></span>
                          Declined
                        </div>
                      </td>
                      <td className="action" data-label="action">
                        <div>
                          <p>
                            <img src={calendar} alt="calender" />
                          </p>
                          <p>29 December 2019</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Jobseeker;
