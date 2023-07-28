import React from "react";

import Hiroshima from "../images/hiroshima.jpeg";

const Contact = () => {
  return (
    <div className="page-content">
      <div className="contact">
        <h1>Get in touch!</h1>
        <div className="contact-form">
          <form className="form">
            <label htmlFor="name">
              {" "}
              <span className="label">Name</span>
              <input id="name" type="text"></input>
            </label>
            <label htmlFor="email">
              {" "}
              <span className="label">Email</span>
              <input id="email" type="text"></input>
            </label>

            <label htmlFor="query" className="query">
              {" "}
              <span className="label">
                Let us know what we can help you with..
              </span>
              <textarea id="query" type="textarea" rows="5"></textarea>
            </label>
            <div className="button">
              <button className="form-submit" type="button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="recommend">
        <h3>Recommended Articles</h3>
      </div>

      <div className="contact-img">
        <img src={Hiroshima} alt="tok" />
      </div>
    </div>
  );
};

export default Contact;
