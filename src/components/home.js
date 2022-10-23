import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
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
              <a href="#aboutGlocalBodh" className="nav-item nav-link ">
                About Us
              </a>
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
              <a href="#salient" className="nav-item nav-link ">
                Salient Features
              </a>
              <a href="#forUsers" className="nav-item nav-link ">
                For Users
              </a>

              <a href="#contact" className="nav-item nav-link ">
                Contact Us
              </a>
            </div>
            <Link
              className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block"
              to="/"
            >
              <img className="logo" src="img/logo.png" alt="" />
            </Link>
          </div>
        </nav>

        {/* <!-- Carousel Start --> */}
        <div
          className="container-fluid p-0 mb-5 wow fadeIn"
          data-wow-delay="0.1s"
          style={{ marginTop: "-80px" }}
        >
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              >
                <img
                  className="img-fluid"
                  src="img/carousel-1.jpg"
                  alt="Image"
                />
              </button>
              <button
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                <img
                  className="img-fluid"
                  src="img/carousel-2.jpg"
                  alt="Image"
                />
              </button>
              <button
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                <img
                  className="img-fluid"
                  src="img/carousel-3.jpg"
                  alt="Image"
                />
              </button>
              <button
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              >
                <img
                  className="img-fluid"
                  src="img/carousel-4.jpg"
                  alt="Image"
                />
              </button>
              <button
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              >
                <img
                  className="img-fluid"
                  src="img/carousel-5.jpg"
                  alt="Image"
                />
              </button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white text-uppercase mb-4 animated zoomIn header-heading">
                      About GlocalBodh
                    </h4>
                    <h1 className="display-1 text-white mb-0 animated zoomIn header-text">
                      We are India's First Platform for Social Sector Updates{" "}
                      <br />
                      Want to connect with NGO's ? GlocalBodh is here !!
                    </h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                <div className="carousel-caption">
                  <div
                    className="p-3 header-container"
                    style={{ maxWidth: "900px" }}
                  >
                    <h4 className="text-white text-uppercase mb-4 animated zoomIn header-heading">
                      Events
                    </h4>
                    <h1 className="display-1 text-white mb-0 animated zoomIn header-text">
                      We provide Broadcasting services for <br />
                      Workshops and Trainings <br />
                      Awards and Competitions <br />
                      Exhibitions and Summits
                    </h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src="img/carousel-3.jpg" alt="Image" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white text-uppercase mb-4 animated zoomIn header-heading">
                      NGO Sourcing
                    </h4>
                    <h1 className="display-1 text-white mb-0 animated zoomIn header-text">
                      NGO Sourcing through Funding Updates <br />
                      Due Diligence
                    </h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src="img/carousel-4.jpg" alt="Image" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white text-uppercase mb-4 animated zoomIn header-heading">
                      Jobs
                    </h4>
                    <h1 className="display-1 text-white mb-0 animated zoomIn header-text">
                      Post your jobs with us and find the most appropriate
                      candidate within Social Sector For
                      <br />
                      Corporates <br />
                      NGOs
                      <br />
                      Government
                    </h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src="img/carousel-5.jpg" alt="Image" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white text-uppercase mb-4 animated zoomIn header-heading">
                      Collaboration
                    </h4>
                    <h1 className="display-1 text-white mb-0 animated zoomIn header-text">
                      Find the best and relevant NGO as
                      <br />
                      Project Collaboration Partner <br />
                      NGO clients for service providers
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <!-- Carousel End --> */}

        {/* <!-- About Start --> */}
        <div className="container-xxl py-5" id="aboutGlocalBodh">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="img-border">
                  <img className="img-fluid" src="img/about.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="h-100">
                  <h6
                    className="section-title bg-white text-start text-primary pe-3"
                    style={{ textDecoration: "underline" }}
                  >
                    About GlocalBodh
                  </h6>
                  <h1 className="display-6 mb-4 about-us-custom">
                    India's 1st Platform for{" "}
                    <span className="text-primary about-us-custom">
                      Live and Relevant
                    </span>{" "}
                    Social Sector Updates.
                  </h1>
                  <p className="about_us">
                    Through GlocalBodh, we strive hard to provide Most Relevant
                    and Live Update pertaining to –
                  </p>
                  <ul className="about_us">
                    <li>Funding/Grant updates</li>
                    <li>Collaboration Updates</li>
                    <li>Event Updates</li>
                    <li>Social Sector Job Updates</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4 about_us out_of_div">
                We are connected to around 3000 + NGOs across Maharashtra, with
                a potential of Pan India outreach. Our objective is to bridge
                the gap between Grassroot NGOs and CBOs with all Opportunities
                within the Social Sector.
              </p>
              <br />
              <p className="mb-4 about_us out_of_div">
                We intend to provide you a seamless platform to post your
                requirement for free and help us help you get the most relevant
                audience to create impact, within the Social Sector
              </p>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}
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
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <img
                    className="text-primary mb-4 fact_img"
                    src="img/Downloads.png"
                    alt=""
                  />
                  <h5 className="mb-3">Downloads</h5>
                  <div className="display-5 mb-0 same_fact">
                    <h1 className="display-5 mb-0" data-bs-toggle="counter-up">
                      1400{" "}
                    </h1>
                    <h1>+</h1>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <img
                    className="text-primary mb-4 fact_img"
                    src="img/Our-Reach.png"
                    alt=""
                  />
                  <h5 className="mb-3">Our Reach</h5>
                  <div className="display-5 mb-0 same_fact">
                    <h1 className="display-5 mb-0" data-toggle="counter-up">
                      3000{" "}
                    </h1>
                    <h1>+</h1>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <img
                    className="text-primary mb-4 fact_img"
                    src="img/Districts.png"
                    alt=""
                  />
                  <h5 className="mb-3">Districts</h5>
                  <div className="display-5 mb-0 same_fact">
                    <h1 className="display-5 mb-0" data-toggle="counter-up">
                      30{" "}
                    </h1>
                    <h1>+</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Facts End --> */}

        {/* <!-- Service Start --> */}
        <div className="container-xxl py-5" id="services">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 className="section-title bg-white text-center text-primary px-3">
                Services
              </h6>
              <p
                className="display-6 mb-4 about-us-custom"
                style={{
                  fontSize: "1.8rem",
                  color: "black",
                  fontWeight: "lighter",
                }}
              >
                We can help you reach out to your Relevant Audience from Social
                Sector with Complete Transparency through our integrated
                platforms and range of services. <br /> Our proficiency lies in
                providing end-to-end broadcasting with real-time dashboards and
                facilitation for your requirements
              </p>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <Link
                  className="service-item d-block rounded text-center h-100 p-4"
                  to="/events"
                >
                  <img
                    className="img-fluid rounded mb-4"
                    src="img/service-1.jpg"
                    alt=""
                  />
                  <h4 className="mb-0">Events</h4>
                </Link>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <Link
                  className="service-item d-block rounded text-center h-100 p-4"
                  to="/ngoSourcing"
                >
                  <img
                    className="img-fluid rounded mb-4"
                    src="img/service-2.jpg"
                    alt=""
                  />
                  <h4 className="mb-0">NGO Sourcing</h4>
                </Link>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <Link
                  className="service-item d-block rounded text-center h-100 p-4"
                  to="/jobs"
                >
                  <img
                    className="img-fluid rounded mb-4"
                    src="img/service-3.jpg"
                    alt=""
                  />
                  <h4 className="mb-0">Jobs</h4>
                </Link>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <Link
                  className="service-item d-block rounded text-center h-100 p-4"
                  to="/collaboration"
                >
                  <img
                    className="img-fluid rounded mb-4"
                    src="img/service-4.png"
                    alt=""
                  />
                  <h4 className="mb-0">Collaboration</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Service End --> */}
        {/* <!-- Feature Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="h-100">
                  <h6
                    className="section-title bg-white text-start text-primary pe-3"
                    id="salient"
                  >
                    Salient Features
                  </h6>
                  <h1 className="display-6 mb-4">How we make a Difference?</h1>
                  <p className="mb-4 salient-features-para">
                    GlocalBodh understands the Social Sector as it is connected
                    to Grassroot NGOs, CBOs, Institutions, SHGs, and other
                    Social Organisations since 2015. We provide all the support
                    you require; right from providing a free platform with
                    advanced features; to focusing on registration for your
                    requirement. Our motto is to provide seamless platform with
                    facilitation to our clients who wish to reach their audience
                    within Social Sector as our success lies in your success
                  </p>
                  {/* <div className="row g-4">
                    <div className="col-12">
                      <div className="skill">
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Digital Marketing</p>
                          <p className="mb-2">85%</p>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="skill">
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">SEO & Backlinks</p>
                          <p className="mb-2">90%</p>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="skill">
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Design & Development</p>
                          <p className="mb-2">95%</p>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div> */}
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

        {/* <!--for users start--> */}

        {/* <!-- ======= Our Services Section ======= --> */}
        <section id="services-list" className="services-list">
          <div
            className="container fadeInUp wow"
            data-wow-delay="0.1s"
            data-aos="fade-up"
          >
            <div className="User_header">
              <h6
                className="section-title bg-white text-start text-primary pe-3"
                id="forUsers"
              >
                For Users
              </h6>
            </div>

            <div className="row gy-5">
              <div
                className="col-lg-4 col-md-6 d-flex fadeInUp wow"
                data-wow-delay="0.1s"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <img className="user-img" src="img/project-1.png" alt="" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Grants and Funding Updates
                    </a>
                  </h4>
                  <p className="description">
                    Get Live and Relevant updates on Funds, CSR Funds, Grants,
                    and Foreign Funding opportunities
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6 d-flex fadeInUp wow"
                data-wow-delay="0.1s"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <img className="user-img" src="img/project-2.png" alt="" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Workshops and Trainings
                    </a>
                  </h4>
                  <p className="description">
                    Apply to numerous Live Workshops and Training sessions
                    within Social Sector
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6 d-flex fadeInUp wow"
                data-wow-delay="0.1s"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <img className="user-img" src="img/project-3.png" alt="" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Awards and Competitions
                    </a>
                  </h4>
                  <p className="description">
                    Apply to all relevant and live competitions and nominations
                    for awards across the nation
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6 d-flex fadeInUp wow"
                data-wow-delay="0.1s"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                  <img className="user-img" src="img/project-4.png" alt="" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Social Sector Jobs
                    </a>
                  </h4>
                  <p className="description">
                    Apply from a range of jobs from Social Sector, Corporate and
                    Government organisations relevant to your profile
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6 d-flex fadeInUp wow"
                data-wow-delay="0.1s"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="icon flex-shrink-0">
                  <img className="user-img" src="img/project-5.png" alt="" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Exhibitions and Summits
                    </a>
                  </h4>
                  <p className="description">
                    Explore various state-level and nation-level summits and
                    exhibitions and socialize
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6 d-flex fadeInUp wow"
                data-wow-delay="0.1s"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="icon flex-shrink-0">
                  <img
                    className="user-img"
                    src="img/project-6.png"
                    alt=""
                    style={{
                      width: "24px",
                      height: "auto",
                      marginLeft: "8px",
                    }}
                  />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Collaboration Updates
                    </a>
                  </h4>
                  <p className="description">
                    Stay updated with News updates filtered only for Social
                    Sector
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Our Services Section --> */}

        {/* <!--for users end--> */}

        {/* <!-- Footer Start --> */}
        <div
          className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5" id="contact">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Address</h5>
                <a
                  href="https://www.google.co.in/maps/place/Renovate+India(GlocalBodh)/@19.060803,72.8829175,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c89f77bd7cbf:0x35c4b3f90f649c1e!8m2!3d19.060803!4d72.8851062"
                  className="anchor-link text-icon dt-icon-bg-on dt-icon-hover-on dt-icon-hover-bg-on"
                >
                  <p className="mb-2">
                    <i className="fa fa-map-marker-alt me-3"></i>2/C, First
                    floor, Kurla Kamgar CHS LTD., Nandikeshwar Temple lane,
                    Kamgar Nagar, Kurla (East), Mumbai 400024
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
                    href="https://www.facebook.com/Glocal-Bodh-111320554665937"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-outline-secondary rounded-circle me-1"
                    href="https://www.youtube.com/watch?v=Lt3wbpVel8g"
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
                  Our Services
                </a>
                <a
                  className="btn btn-link"
                  target="_blank"
                  href="https://www.glocalbodh.com/terms"
                >
                  Terms & Condition
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
                {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ****/}
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
