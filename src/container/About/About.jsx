import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import './About.scss';

import { urlFor,client } from '../../client';

const About = () => {
  // const abouts = [
  //   {title:'Web Development',description:'I am good Web Developer',imgURL:images.about01},
  //   {title:'Web Design',description:'I am good Web Developer',imgURL:images.about02},
  //   {title:'UI/UX',description:'I am good Web Developer',imgURL:images.about03},
  //   {title:'Web Animations ',description:'I am good Web Developer',imgURL:images.about04},
  // ];

  const [abouts, setAbouts] = useState([]);

  useEffect(()=>{
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data)=>setAbouts(data))
  },[])

  return (
    <div className='app__about'>
      <h2 className="head-text">
        I know that 
        <span> Good Website </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map(about=>
          <motion.div
            key={about.title}
            whileInView={{opacity:1}}
            whileHover={{scale:1.2}}
            transition={{duration:0.5, type:'tween '}}
            className='app__profiles-item'
          >
            <img src={urlFor(about.imgUrl)} alt={`${about.title}.png`} />
            <h2 className="bold-text about-title">{about.title}</h2>
            <p className="p-text about-description">{about.description}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default About
