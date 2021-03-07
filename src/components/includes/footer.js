import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Facebook from "./../../assets/img/Homev4/Facebook.png";
import Instagram from "./../../assets/img/Homev4/Instagram.png";
import Pinterest from "./../../assets/img/Homev4/Pinterest.png";
import Twitter from "./../../assets/img/Homev4/Twitter.png";
import E from "./../../assets/img/Homev4/E.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navleft: [
        {
          nav_link: "About Us",
          href: "/",
        },
        {
          nav_link: " Press",
          href: "/",
        },
        {
          nav_link: "Founder",
          href: "/",
        },
        {
          nav_link: "Charity",
          href: "/",
        },
      ],
      navright: [
        {
          nav_link: "Contact Us",
          href: "/",
        },
        {
          nav_link: "Blog",
          href: "/",
        },
        {
          nav_link: "Promotions",
          href: "/",
        },
        {
          nav_link: "FAQ’s",
          href: "/",
        },
      ],
      social: [
        {
          nav_link: Pinterest,
          href: "/",
        },
        {
          nav_link: Instagram,
          href: "/",
        },
        {
          nav_link: Twitter,
          href: "/",
        },
        {
          nav_link: Facebook,
          href: "/",
        },
        {
          nav_link: E,
          href: "/",
        },
      ],
    };
  }
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="social-links-footer">
                <h3>Social Links</h3>
                <ul>
                  {this.state.social.map(function (Page, PageList) {
                    return <Social key={PageList} link={Page} />;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-6">
                  <div className="footer-links">
                    <h3>Navigation</h3>
                    <ul>
                      {this.state.navright.map(function (navright, navlist) {
                        return <NavLinksright key={navlist} link={navright} />;
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="footer-links">
                    <h3>Get in Touch</h3>
                    <ul>
                      {this.state.navleft.map(function (navleft, navlist) {
                        return <NavLinksleft key={navlist} link={navleft} />;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright © 2020 Planet Employ - All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

class NavLinksleft extends Component {
  render() {
    return (
      <li>
        <Link to={{ pathname: this.props.link.href }}>
          {this.props.link.nav_link}
        </Link>
      </li>
    );
  }
}

class NavLinksright extends Component {
  render() {
    return (
      <li>
        <Link to={{ pathname: this.props.link.href }}>
          {this.props.link.nav_link}
        </Link>
      </li>
    );
  }
}

class Social extends Component {
  render() {
    return (
      <li>
        <Link to={{ pathname: this.props.link.href }}>
          <img src={this.props.link.nav_link} alt="social" />
        </Link>
      </li>
    );
  }
}
