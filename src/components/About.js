import React from 'react'

import Headshot from '../img/headshot_bw.png';

const About = () => (
  <div className='about'>
     <div>
      <img src={Headshot} alt="Project Image" />
      <p>
        I am an interior designer turned web developer, avid runner, coffee fanatic, and Hokie Football fan. 
        I carry my passion for design into every development project and am excited about using the latest front end
        technologies to create engaging user experiences.
      </p>
    </div>
  </div>
)

export default About
