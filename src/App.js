import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main-container">
      <h1 className="title">Around Japan in 80 days</h1>
      <div className="wrapper">
        <div className="navbar">
          <ul>
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/articles">
                Articles
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>

            <Route exact path="/articles" element={<Articles />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
