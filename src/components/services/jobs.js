import React from "react";
import { Link } from "react-router-dom";

function jobs() {
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
        className="container-fluid page-header-jobs py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5 service-head">
          <h1 className="display-4 text-white-services-head animated slideInDown mb-3">
            Jobs
          </h1>
        </div>
        <p className="text-white-services">
          Post your jobs with us and find the most appropriate candidate within
          Social Sector for Corporates,NGOs and Government.
        </p>
        <ul
          className="text-white-services"
          style={{ marginTop: "-50px", marginLeft: "35px" }}
        >
          <li>
            Post your job requirement to get relevant applications within Social
            Sector
          </li>
          <li>
            Get a dedicated dashboard with options to review the applications,
            download resume, call and email candidates.
          </li>
          <li>Provision to route the applicants to your recruitment webpage</li>
        </ul>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="section-title bg-white text-center text-primary px-3">
              How we do it?
            </h6>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item bg-light rounded p-4 job-thing">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/Post-with-GlocalBodh-75x88.png"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Post with GlocalBodh</h5>
                </div>
              </div>
              <p className="mb-0">
                Unlock the desired package and submit the requirements as per
                job role. Our team will approve and push the job on platform
                within 24hrs Get notified through app with comments for
                amendments if identified (e.g. salary numbers,unsupported format
                etc.)
              </p>
            </div>
            <div className="testimonial-item bg-light rounded p-4 job-thing">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/Notification-Campaign-80x88.png"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">Notification Campaign</h5>
                </div>
              </div>
              <p className="mb-0">
                Once approved, every individual will be notified about your job
                post for greater visibility Job posts will be pushed atop the
                list during last 5 days of expiry Job post will get
                automatically deleted post expiry to avoid unwanted applications
              </p>
            </div>
            <div className="testimonial-item bg-light rounded p-4 job-thing">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/Whats-new--75x88.png"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="mb-1">What’s new !!</h5>
                </div>
              </div>
              <p className="mb-0">
                Get notified from app any time you receive a new job
                application. Upload your organization logo for better
                identification Send notification to the candidate of
                acceptance/rejection of their application through a single click
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      {/* <!--post button--> */}
      <button className="post">POST A JOB</button>
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
              <img
                className="services-img"
                src="img/ngo-sourcing.png"
                alt=""
                style={{ height: "130px" }}
              />
            </div>
            <div className="service-text">
              <h1 className="service">NGO Sourcing</h1>
              <div>
                <button className="view-details-btn">
                  <Link to="/ngoSourcing" className="view-details-btn">
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

export default jobs;
