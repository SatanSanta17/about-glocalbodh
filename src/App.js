import "./App.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./lib/animate/animate.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/lightbox/css/lightbox.min.css";
import "./lib/wow/wow.min.js";
// import "./lib/easing/easing.min.js";
import "./lib/waypoints/waypoints.min.js";
import "./lib/counterup/counterup.min.js";
import "./lib/owlcarousel/owl.carousel.min.js";
// import "./lib/lightbox/js/lightbox.min.js";
import "./js/main.js";

import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/home";
import Events from "./components/services/events";
import NgoSourcing from "./components/services/ngoSourcing";
import Jobs from "./components/services/jobs";
import Collaboration from "./components/services/collaboration";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ngoSourcing" element={<NgoSourcing />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/collaboration" element={<Collaboration />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
