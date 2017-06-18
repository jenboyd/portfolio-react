import React from 'react'

const ResumeText = () => (
  <div className='resume-text'>
    <div className='left'>
      <div className='technologies'>
        <h3>Technologies</h3>
        <div className='icons'>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-react-original-wordmark"></i>
          <i className="devicon-meteor-plain-wordmark"></i>

          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-css3-plain-wordmark"></i>
          <i className="devicon-sass-original"></i>

          <i className="devicon-ruby-plain-wordmark"></i>
          <i className="devicon-git-plain-wordmark"></i>
          <i className="devicon-photoshop-line"></i>
        </div>
      </div>
      <h3>Education</h3>
      <div className='education'>
        <h4>Virginia Polytechnic & State University</h4>
        <p>B.S. Interior Design</p>
        <p>May 2012</p>
      </div>
      <div className='education'>
        <h4>General Assembly</h4>
        <p>Web Development Immersive Course</p>
        <p>August 2016</p>
      </div>
      <div className='contact'>
        <h3>Contact</h3>
        <p><i className="fa fa-envelope"></i>jenniferlboyd1@gmail.com</p>
        <a href="https://github.com/jenboyd/portfolio-site/blob/master/jennifer-boyd-resume.pdf"><i className="fa fa-download" />Resume Download</a>
      </div>
    </div>
    <div className='right'>
      <h3>Development & Design Experience</h3>
      <div className='experience'>
        <a href="http://www.circulation.com"><h4>Front End Developer - Circulation</h4></a>
        <p>January 2017 - Present</p>
        <ul>
          <li>Built out new features and refined existing code for the Circulation platform using React, Redux, and Meteor.</li>
          <li>Worked closely with the back end team, senior engineers, and UX designer.</li>
          <li>Had the opportunity to collaborate with the other members of the front end team to refactor the front end code base to use Redux and Meteor.</li>
          <li>Gained exposure to the entire architecture of the site, deployment, HIPAA Compliance, and working with the Google Maps API.</li>
        </ul>
      </div>
      <div className='experience'>
        <a href="https://generalassemb.ly/education/web-development-immersive"><h4>General Assembly - Boston</h4></a>
        <p>August 2016 - November 2016</p>
        <ul>
          <li>12-week full-time immersive course in web development technologies and best practices.</li>
          <li>Gained experience in all phases of a development project from wireframes and modeling through to deployment.</li>
          <li>Built out 4 full stack applications throughout the course.</li>
        </ul>
      </div>
      <div className='experience'>
        <a href="https://gensler.com"><h4>Interior Designer - Gensler</h4></a>
        <p>May 2012 - August 2016</p>
        <ul>
          <li>Team member on both large and small scale commercial interiors projects</li>
          <li>Contributed to all phases of the design process from design development through construction administration.</li>
          <li>Gained experience working as the primary client contact and solving complex problems on a team.</li>
          <li>Technologies: Revit, Sketchup, Octane Rendering, Bluebeam, Adobe Creative Suites</li>
        </ul>
      </div>
    </div>
  </div>
)

export default ResumeText
