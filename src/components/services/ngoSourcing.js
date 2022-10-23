import React from "react";
import { Link } from "react-router-dom";

function ngoSourcing() {
  return (
    <div>
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
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header-ngoSourcing py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5 service-head">
          <h1 className="display-4 text-white-services-head animated slideInDown mb-3">
            Ngo Sourcing
          </h1>
        </div>
        <p className="text-white-services">
          GlocalBodh is connect to a wide variety of NGOs and CBOs across the
          nation. <br />
          Through a unified solution and technical aid, <br />
          we have simplified the process of NGO identification <br />
          and due diligence with Glocalbodh. <br />
        </p>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Facts Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="row g-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="col-lg-3 col-md-6 wow fadeInUp bouncy-box"
              data-wow-delay="0.1s"
            >
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <img
                  src="img/NGO-Sourcing-through-Funding-Updates-75x75.png"
                  className="text-primary mb-4 events-icon"
                  alt=""
                />
                <h5 className="mb-3">NGO Sourcing Through Funding Updates</h5>
                <p style={{ color: "black" }}>
                  CSR projects <br />
                  Grants <br />
                  NGO projects
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp bouncy-box"
              data-wow-delay="0.3s"
            >
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <img
                  src="img/Due-Diligence-70x75.png"
                  className="text-primary mb-4 events-icon"
                  alt=""
                />
                <h5 className="mb-3">Due Diligence</h5>
                <p style={{ color: "black" }}>
                  Level 1 NGO assessments <br />
                  Document Verification <br />
                  Attestation from Chartered Accountants, Human Resource and
                  Legal perspective
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="section-title bg-white text-center text-primary px-3">
              How are we different?
            </h6>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp ngo-sourcing-difference"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center p-4">
                <img
                  className="img-fluid border difference-img p-2 mb-4"
                  src="img/Customised-Sourcing-Form-75x75.png"
                  alt=""
                />
                <div className="team-text">
                  <div className="">
                    <h5>Customised Sourcing Form</h5>
                  </div>
                </div>
                <p style={{ color: "black" }}>
                  Create sourcing form based on your qualifications levels.{" "}
                  <br />
                  Select from 8 parameters for Level 1 assessment of applicant
                  NGOs <br />
                  Get scrutinised responses based on projects’ thematic area,
                  location, project experience, turnover etc. and find the
                  perfect match
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp ngo-sourcing-difference"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center p-4">
                <img
                  className="img-fluid border difference-img  p-2 mb-4"
                  src="img/dashboard-80x80.png"
                  alt=""
                />
                <div className="team-text">
                  <div className="">
                    <h5>Dedicated Dashboard</h5>
                  </div>
                </div>
                <p style={{ color: "black" }}>
                  Export the responses into excel format <br />
                  Get filtered NGOs only which qualify your requirements <br />
                  Get necessary documents for Level 1 Verification <br />
                  Documents submitted will be assessed and approved by
                  GlocalBodh Team
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp ngo-sourcing-difference"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center p-4">
                <img
                  className="img-fluid border difference-img p-2 mb-4"
                  src="img/Due-Diligence-70x75.png"
                  alt=""
                />
                <div className="team-text">
                  <div className="">
                    <h5>Due Diligence</h5>
                  </div>
                </div>
                <p style={{ color: "black" }}>
                  Get all the necessary verifications done from industry
                  professionals <br />
                  Attestation and Detailed Due Diligence report per NGO <br />
                  Expertise include C.A.s, H.R.s and Legal professionals <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
      {/* <!--post button--> */}
      <button className="post">POST FUNDING REQUEST</button>
      {/* <!-- end --> */}

      {/* <!-- other services --> */}
      <div className="more-services">
        <div
          className="other-service-head fadeInUp wow"
          data-wow-delay="0.1s"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1>Other Services</h1>
        </div>
        <div className="other-services">
          <div
            className="service-container fadeInUp wow"
            data-wow-delay="0.1s"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-img-container">
              <img
                className="services-img"
                src="img/EVENTS-300x267.png"
                alt=""
                style={{ margin: "0 70px" }}
              />
            </div>
            <div className="service-text">
              <h1 className="service">Event</h1>
              <div>
                <button className="view-details-btn">
                  <Link to="/events" className="view-details-btn">
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div
            className="service-container fadeInUp wow"
            data-wow-delay="0.1s"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-img-container">
              <img className="services-img" src="img/jobs.png" alt="" />
            </div>
            <div className="service-text">
              <h1 className="service">Jobs</h1>
              <div>
                <button className="view-details-btn">
                  <Link to="/jobs" className="view-details-btn">
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div
            className="service-container fadeInUp wow"
            data-wow-delay="0.1s"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-img-container">
              <img
                className="services-img"
                src="img/collaboration.png"
                alt=""
              />
            </div>
            <div className="service-text">
              <h1 className="service">Collaboration</h1>
              <div>
                <button className="view-details-btn">
                  <Link to="/collaboration" className="view-details-btn">
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- other services end --> */}

      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <a
                href="https://www.google.co.in/maps/place/Renovate+India(GlocalBodh)/@19.060803,72.8829175,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c89f77bd7cbf:0x35c4b3f90f649c1e!8m2!3d19.060803!4d72.8851062"
                className="anchor-link text-icon dt-icon-bg-on dt-icon-hover-on dt-icon-hover-bg-on"
              >
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3"></i>
                  2/C, First floor, Kurla Kamgar CHS LTD., Nandikeshwar Temple
                  lane, Kamgar Nagar, Kurla (East), Mumbai 400024
                </p>
              </a>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+91 7506877488
              </p>
              <p className="mb-2">
                <a className="anchor-link" href="mailto:inquiry@glocalbodh.com">
                  <i className="fa fa-envelope me-3"></i>
                </a>
                inquiry@glocalbodh.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle me-1"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle me-1"
                  href="https://www.facebook.com/Glocal-Bodh-111320554665937"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle me-1"
                  href="https://www.youtube.com/channel/UC57V7oAlhVlFbL2C27WFUaQ"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle me-0"
                  href="https://www.linkedin.com/company/glocal-bodh/about/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a href="#">GlocalBodh</a>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By <a href="#">Burhanuddin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default ngoSourcing;
