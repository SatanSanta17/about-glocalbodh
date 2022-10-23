import React from "react";
import { Link } from "react-router-dom";
function navBar() {
  return (
    <nav
      className="indx-navbar navbar navbar-expand-lg navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <a href="#" className="navbar-brand ms-3 d-lg-none">
        MENU
      </a>
      <button
        type="button"
        className="navbar-toggler me-3"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav me-auto p-3 p-lg-0 right_nav">
          <Link className="nav-item nav-link active " to="/">
            Home
          </Link>
          {/* <a href="#aboutGlocalBodh" className="nav-item nav-link ">
            About Us
          </a> */}
          <Link className="nav-item nav-link" to="/">
            About Us
          </Link>
          <div className="nav-item dropdown">
            <a
              href="#services"
              className="nav-link dropdown-toggle "
              data-bs-toggle="dropdown"
            >
              Services
            </a>

            <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
              <Link className="dropdown-item nav-link" to="/events">
                Events
              </Link>
              <Link className="dropdown-item nav-link" to="/ngoSourcing">
                NGO Sourcing
              </Link>
              <Link className="dropdown-item nav-link" to="/jobs">
                Jobs
              </Link>
              <Link className="dropdown-item nav-link" to="/collaboration">
                Collaboration
              </Link>
            </div>
          </div>
          {/* <a href="#salient" className="nav-item nav-link ">
            Salient Features
          </a> */}
          <Link className="nav-item nav-link" to="/">
            Salient Features
          </Link>
          {/* <a href="#forUsers" className="nav-item nav-link ">
            For Users
          </a> */}

          <Link className="nav-item nav-link" to="/">
            For Users
          </Link>
          {/* <a href="#contact" className="nav-item nav-link ">
            Contact Us
          </a> */}

          <Link className="nav-item nav-link" to="/">
            Contact Us
          </Link>
        </div>
        <Link
          className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block"
          to="/"
        >
          <img className="logo" src="img/logo.png" alt="" />
        </Link>
      </div>
    </nav>
  );
}

export default navBar;
