import React, { useState } from "react";
import "./Navbar.scss";

import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import {routes} from '../../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#contact">{'< Sakar />'}</a>
      </div>
      <ul className="app__navbar-links">
        {routes.map((link) => {
          return (
            <li className="app__flex p-text" key={`link-${link}`}>
              <div className="app__link-hover"></div>
              <a className="app__link" href={`#${link}`}>
                {link}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease:'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {routes.map((link) => {
                return (
                  <li key={`mobile-link-${link}`}>
                    <a className="app__link" onClick={() => setToggle(false)} href={`#${link}`}>
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
