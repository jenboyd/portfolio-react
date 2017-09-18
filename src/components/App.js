import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ResumeText from './ResumeText'
import InteriorDesign from './InteriorDesign'

import Hostess from '../img/hostess.jpg';
import BostonDayTrips from '../img/boston-day-trips-landing.jpg';
import TicTacToe from '../img/tic-tac-toe.jpg';
import Headshot from '../img/headshot1.png';

const App = () => (
  <Router>
    <div>
      <div className='container'>
        <div className='nav'>
          <div className='home'>
            <Link to="/">
              <div className='logo'>
                <h1>Jennifer Boyd</h1>
              </div>
            </Link>
          </div>
          <div className='nav-links-wrapper'>
            <Link to="/resume" className='nav-link'>Resume</Link>
            <Link to="/about" className='nav-link'>About</Link>
          </div>
        </div>

        <div className='route-container'>
          <Route exact path="/" component={Projects}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/about" component={About}/>
          <Route path="/interior-design" component={InteriorDesign}/>
        </div>


        <footer>
          <p>hello@jennifer-boyd.com</p>
          <div className='social'>
            <i className="fa fa-github" aria-hidden="true" />
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </div>
        </footer>
      </div>
    </div>
  </Router>
)

const About = () => (
  <div className='about'>
    <img src={Headshot} alt="Headshot" />
    <h2>Hello!</h2>
    <p>I am an interior designer turned web developer. I carry my passion for design
    into every development project and am excited about using the latest front end
    technologies to create engaging user experiences on the web.
    </p>
  </div>
)

const Resume = () => (
  <div className='resume'>
    <ResumeText/>
  </div>
)

const Projects = () => (
  <div className='projects'>
    <div className='project'>
      <a href="https://jenboyd.github.io/capstone-ember/">
        <img src={Hostess} alt="Project Image" />
      </a>
      <div className='project-info'>
        <h3>Hostess</h3>
        <p>Client: Sass, Ember, JavaScript</p>
        <p>API: Ruby on Rails</p>
        <p>Party planning web application for avid list makers. Built with Ember, JavaScript and Ruby on Rails as my final project
         for General Assembly&#39;s Web Development Immersive program. Users can create multiple party dashboards
        and add various lists to each dashboard with the ability to modify a list or item as needed.</p>
      </div>
    </div>
    <div className='project'>
      <a href="https://jenboyd.github.io/boston-day-trips/">
        <img src={BostonDayTrips} alt="Project Image" />
      </a>
      <div className='project-info'>
        <h3>Boston Day Trips</h3>
        <p>Client: Sass, JavaScript, Jquery, Handlebars</p>
        <p>API: Ruby on Rails</p>
        <p>For the weekend travel gurus, this app helps users find day trips within
        the Boston area. I used Jquery and Handlebars to create a dynamic application
        that users can interact with by signing in, seaching for trips, and commenting on
        trips. Built as my second project at General Assembly.</p>
      </div>
    </div>
    <div className='project'>
      <a href="https://jenboyd.github.io/tic-tac-toe/">
        <img src={TicTacToe} alt="Project Image" />
      </a>
      <div className='project-info'>
        <h3>Tic Tac Toe</h3>
        <p>Client: JavaScript, Jquery</p>
        <p>My first app built during General Assembly&#39;s Web Development Immersive program. My take on a traditional tic-tac-toe game built with JavaScript.</p>
      </div>
    </div>
    <Link to="/interior-design"><p className='interior-links'>Interior Design Projects<i className="fa fa-angle-right mini" aria-hidden="true"></i></p></Link>
  </div>
)

export default App
