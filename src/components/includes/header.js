import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Logo from "../../assets/img/Homev4/Logo.png";
import { BsArrowLeft } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Service: [
        {
          nav_link: "Home",
          href: "/",
        },
        {
          nav_link: "About Us",
          href: "raffles",
        },
        {
          nav_link: "Contact",
          href: "/",
        },
      ],
    };
  }
  toggleMenu = () => {
    document.body.classList.toggle("modal-open");
    document.getElementById("menu-nav").classList.toggle("mobile-menu");
  };
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 41) {
      document.getElementById("myHeader").classList.add("sticky");
    } else {
      document.getElementById("myHeader").classList.remove("sticky");
    }
  };
  sidebarMenu = () => {
    document.getElementById("sidebar-menu").classList.toggle("open");
    document.body.classList.toggle("body-lock");
  };
  render() {
    return (
      <header id="myHeader">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="menu">
            <nav id="menu-nav">
              <ul>
                {this.state.Service.map(function (Service, ServiceList) {
                  return <NavLinks key={ServiceList} link={Service} />;
                })}
              </ul>
            </nav>
            <div
              className="menu-toggle"
              id="toggleid"
              onClick={this.toggleMenu}
            >
              <span>
                <FiMenu />
              </span>
            </div>
          </div>
        </div>
        <div className="side-bar-menu">
          <div className="sidebar-toggle">
            <span onClick={this.sidebarMenu}>
              Menu
            </span>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;

class NavLinks extends React.Component {
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
