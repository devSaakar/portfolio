import React from "react";
import { motion } from "framer-motion";
import {AppWrap} from '../../wrapper';
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: { duration: 2, ease: "easeInOut" },
    },
  };
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div className="my-intro">
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Sakar</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 2 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-bg.png" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >{[images.sass,images.react,images.redux].map((circle,index)=>(
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="circle" />
        </div>
      ))}</motion.div>
    </div>
  );
};

export default AppWrap(Header,'home');
