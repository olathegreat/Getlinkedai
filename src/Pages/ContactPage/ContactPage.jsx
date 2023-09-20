import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./ContactPage.css";

const ContactPage = () => {
  const [formDetails, setFormDetails] = useState({});
  return (
    <div className="contact-page">
      <Nav />

      <main>
        <div className="left">
          <h3>Get in touch</h3>

          <p>
            Contact
            <br></br>
            Information
          </p>

          <p>
            27, Alara Street <br></br>
            Yaba 100012 <br></br>
            Lagos State
          </p>

          <p>Call Us: 07067981819</p>

          <p>
            We are open from Monday-Friday
            <br></br>
            08:00am-05:00pm
          </p>

          <h5>Share on</h5>

          <div className="social-media">
            <img src="/images/instagram.png" alt="instagram-icon" />
            <img src="/images/twitter.png" alt="twitter-icon" />
            <img src="/images/facebook.png" alt="facebook-icon" />
            <img src="/images/linkedin.png" alt="linkedin-icon" />
          </div>
        </div>

        <div className="right">
          <form>
            <h4>
              Questions or need assistance?<br></br>
              Let us know about it!
            </h4>

            <p className="mobile-only">
              {" "}
              Email us to ask any question related to our event
            </p>

            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFormDetails({ ...formDetails, first_name: e.target.value });
              }}
              value={formDetails.first_name}
            />
            <input
              type="email"
              placeholder="Mail"
              onChange={(e) => {
                setFormDetails({ ...formDetails, email: e.target.value });
              }}
              value={formDetails.email}
            />
            <textarea
              placeholder="Message"
              onChange={(e) => {
                setFormDetails({ ...formDetails, message: e.target.value });
              }}
              value={formDetails.message}
            />

            <div className="button-wrapper">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <div className="mobile-sm-link">
          <h5>Share on</h5>

          <div className="social-media">
            <img src="/images/instagram.png" alt="instagram-icon" />
            <img src="/images/twitter.png" alt="twitter-icon" />
            <img src="/images/facebook.png" alt="facebook-icon" />
            <img src="/images/linkedin.png" alt="linkedin-icon" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
