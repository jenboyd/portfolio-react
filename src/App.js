import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ResumeText from './ResumeText'

//npm run watch-css
const App = () => (
  <Router>
    <div>
      <div className='nav'>
        <div className='home'><Link to="/">JB</Link></div>
        <div className='nav-links-wrapper'>
          <Link to="/resume" className='nav-link'>Resume</Link>
          <Link to="/projects" className='nav-link'>Projects</Link>
        </div>
      </div>
      <Route exact path="/" component={About}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/interior-design" component={InteriorDesign}/>
    </div>
  </Router>
)

const About = () => (
  <div className='about'>
    <img src="./img/headshot1.png" alt="Profile Image"/>
    <h3><span className='highlight'>Hello!</span> I&#39;m Jen, an interior designer turned web developer. I am
    excited by all things design and enjoy bringing data to life through front end development.</h3>
    <Link to="/resume"><i className="fa fa-chevron-right fixed" aria-hidden="true"></i></Link>
  </div>
)

const Resume = () => (
  <div className='resume'>
    <ResumeText/>
    <Link to="/"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
    <Link to="/projects"><i className="fa fa-chevron-right fixed" aria-hidden="true"></i></Link>
  </div>
)

const Projects = () => (
  <div className='projects'>
    <div className='project'>
      <a href="https://jenboyd.github.io/capstone-ember/">
        <img src="./img/hostess.jpg" alt="Hostess Project Image"/>
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
        <img src="./img/boston-day-trips-landing.jpg" alt="Boston Day Trips Project Image"/>
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
        <img src="./img/tic-tac-toe.jpg" alt="TicTacToe Project Image"/>
      </a>
      <div className='project-info'>
        <h3>Tic Tac Toe</h3>
        <p>Client: JavaScript, Jquery</p>
        <p>My first app built during General Assembly&#39;s Web Development Immersive program. My take on a traditional tic-tac-toe game built with JavaScript.</p>
      </div>
    </div>
    <Link to="/interior-design"><p className='interior-links'>Interior Design Projects<i className="fa fa-chevron-right mini" aria-hidden="true"></i></p></Link>
    <Link to="/resume"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
  </div>
)

const InteriorDesign = () => (
  <div className='interior-design'>
    <h3>Interior Design Projects</h3>
    <p>All renderings are undergraduate projects created using a combination of Sketchup, Revit, and Photoshop.</p>

    <div className='images'>
      <img src="./img/design/Agency_1.jpg" alt="Design Project Image"/>
      <img src="./img/design/Agency_3.jpg" alt="Design Project Image"/>
      <img src="./img/design/Agency_2.jpg" alt="Design Project Image"/>
      <img src="./img/design/apt_1.jpg" alt="Design Project Image"/>
      <img src="./img/design/apt_2.jpg" alt="Design Project Image"/>
      <img src="./img/design/LivingArea.jpg" alt="Design Project Image"/>
      <img src="./img/design/helsinki_lobby.jpg" alt="Design Project Image"/>
      <img src="./img/design/hermosa_1.jpg" alt="Design Project Image"/>
      <img src="./img/design/hermosa_2.jpg" alt="Design Project Image"/>
      <img src="./img/design/hotel_1.jpg" alt="Design Project Image"/>
      <img src="./img/design/hotel_2.jpg" alt="Design Project Image"/>
      <img src="./img/design/lounge_1.jpg" alt="Design Project Image"/>
      <img src="./img/design/Workstation.jpg" alt="Design Project Image"/>
      <img src="./img/design/rehab_1.jpg" alt="Design Project Image"/>
      <img src="./img/design/rehab_2.jpg" alt="Design Project Image"/>
      <img src="./img/design/spa_1.jpg" alt="Design Project Image"/>
      <img src="./img/design/spa_2.jpg" alt="Design Project Image"/>
      <img src="./img/design/spa_3.jpg" alt="Design Project Image"/>
      <img src="./img/design/spa_4.jpg" alt="Design Project Image"/>
    </div>
    <Link to="/projects"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>

  </div>
)

export default App
