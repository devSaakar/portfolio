import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  const { name, email, message } = formData;
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:saakarchauhan@gmail.com" className="p-text">
            saakarchauhan@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91(9149032877)" className="p-text">
            +91 9149032877
          </a>
        </div>
      </div>
      {isFormSubmitted ? (
        <div>
          <h3 className="head-text">Thankyou for getting in touch.</h3>
        </div>
      ) : (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>
          <div >
              <textarea
                className="p-text"
                name="message"
                value={message}
                onChange={handleChange}
                // cols="30"
                // rows="10"
                placeholder="Your Message"
              />
            </div>
            <button className="p-text" type="submit" onClick={handleSubmit}>
              {loading ? "Sending" : "Send Message"}
            </button>
          
        </form>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
