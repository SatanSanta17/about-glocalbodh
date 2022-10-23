import React from "react";
import { Link } from "react-router-dom";
function events() {
  return (
    <div>
      <body>
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
          className="container-fluid page-header-events py-5 mb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 service-head">
            <h1 className="display-4 text-white-services-head animated slideInDown mb-3">
              Events
            </h1>
          </div>
          <p className="text-white-services">
            GlocalBodh gives you an end-to-end event handling experience <br />
            through a user-friendly interface. <br />
            We understand your requirements and target <br />
            the required set of audience through series of existing <br />
            channels and boost your outreach
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
                    src="img/events.png"
                    className="text-primary mb-4 events-icon"
                    alt=""
                  />
                  <h5 className="mb-3">Events</h5>
                  <p style={{ color: "black" }}>
                    Webinars <br />
                    Workshops (Online and Offline) <br />
                    Training Sessions (Online and Offline)
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp bouncy-box"
                data-wow-delay="0.3s"
              >
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <img
                    src="img/awards.png"
                    className="text-primary mb-4 events-icon"
                    alt=""
                  />
                  <h5 className="mb-3">Awards and Competitions</h5>
                  <p style={{ color: "black" }}>
                    Award Nominations <br />
                    Competitions entries
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp bouncy-box"
                data-wow-delay="0.5s"
              >
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <img
                    src="img/exhibition.png"
                    className="text-primary mb-4 events-icon"
                    alt=""
                  />
                  <h5 className="mb-3">Exhibitions and Summits</h5>
                  <p style={{ color: "black" }}>
                    Seminars <br />
                    Exhibitions <br />
                    Corporate/NGO Summits <br />
                    Conclaves
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Facts End --> */}
        {/* <!-- Feature Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="h-100">
                  <h6 className="section-title bg-white text-start text-primary pe-3">
                    How We Do It
                  </h6>
                  <h1 className="display-6 mb-4"></h1>
                  <div className="row g-4">
                    <div
                      className="col-lg-4 col-md-6 d-flex fadeInUp wow how-to-do"
                      data-wow-delay="0.1s"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="icon flex-shrink-0">
                        <img
                          className="how-to-do-img"
                          src="img/demographics.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="title">
                          <a href="#" className="stretched-link">
                            Demographics
                          </a>
                        </h4>
                        <p className="description">
                          With an extensive profiling of audience depending on
                          their Thematic Area, Location, Demographics, Area of
                          Interest, Work Profile, etc. GlocalBodh shortlists
                          your target audience within and outside the GlocalBodh
                          ecosystem
                        </p>
                      </div>
                    </div>
                    {/* <!-- End Service Item --> */}

                    <div
                      className="col-lg-4 col-md-6 d-flex fadeInUp wow how-to-do"
                      data-wow-delay="0.1s"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="icon flex-shrink-0">
                        <img
                          className="how-to-do-img"
                          src="img/User-Engagement.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="title">
                          <a href="#" className="stretched-link">
                            User Engagement
                          </a>
                        </h4>
                        <p className="description">
                          Once posted, our algorithm and team will initiate
                          campaigns through Push Notifications, Mailers, Social
                          Media, etc. on a periodic basis until the event date.
                        </p>
                      </div>
                    </div>
                    {/* <!-- End Service Item --> */}
                    <div
                      className="col-lg-4 col-md-6 d-flex fadeInUp wow how-to-do"
                      data-wow-delay="0.1s"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="icon flex-shrink-0">
                        <img
                          className="how-to-do-img"
                          src="img/Report.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="title">
                          <a href="#" className="stretched-link">
                            Reporting
                          </a>
                        </h4>
                        <p className="description">
                          Our system provides real-time updates about acquired
                          audience through our dashboard
                        </p>
                      </div>
                    </div>
                    {/* <!-- End Service Item --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="img-border">
                  <img className="img-fluid" src="img/feature.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature End --> */}
        {/* <!-- Testimonial Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h6 className="section-title bg-white text-center text-primary px-3">
                How We Make A difference
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
                    src="img/Relevant-Audience-within-Social-Sector-78x80.png"
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">
                      Relevant Audience within Social Sector
                    </h5>
                  </div>
                </div>
                <p className="mb-0">
                  Students, Interns, NGO Staff, NGO Volunteers, NGO Board
                  Members/Founders, CSR Professionals, Social Forums, Social
                  Entrepreneurs, Social Enterprises, CSR Heads...... We have it
                  all
                </p>
              </div>
              <div className="testimonial-item bg-light rounded p-4 job-thing">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle border p-1"
                    src="img/Complete-Transperency-60x80.png"
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">Complete Transparency</h5>
                  </div>
                </div>
                <p className="mb-0">
                  We provide complete transparency through our intuitive
                  dashboard with real-time registrations, no. of views, audience
                  reach out and customised registration details
                </p>
              </div>
              <div className="testimonial-item bg-light rounded p-4 job-thing">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle border p-1"
                    src="img/Dedicated-Payment-Gateway-Integration-80x80.png"
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">Dedicated Payment Gateway</h5>
                  </div>
                </div>
                <p className="mb-0">
                  No need to provide bank account details or QR code to
                  customers. We provide integrate payment gateway for all your
                  requirements
                </p>
              </div>
              <div className="testimonial-item bg-light rounded p-4 job-thing">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle border p-1"
                    src="img/Higher-ROI-100x80.png"
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">High ROI</h5>
                  </div>
                </div>
                <p className="mb-0">
                  Through filtered campaigns, you reach your specific audience
                  with ease, within Social Sector
                </p>
              </div>
              <div className="testimonial-item bg-light rounded p-4 job-thing">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle border p-1"
                    src="img/dashboard-80x80.png"
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">Language/Banner Support</h5>
                  </div>
                </div>
                <p className="mb-0">
                  Our unique solution provides technical edge to your event,
                  providing regional language and automated banner support to
                  your post
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial End --> */}
        {/* <!--post button--> */}
        <button className="post">POST AN EVENT</button>
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
                  <a
                    className="anchor-link"
                    href="mailto:inquiry@glocalbodh.com"
                  >
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
      </body>
    </div>
  );
}

export default events;
