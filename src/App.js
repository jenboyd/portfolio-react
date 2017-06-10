import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <div className='nav'>
        <div className='home'><Link to="/">Jennifer Boyd</Link></div>
        <div className='nav-links-wrapper'>
          <Link to="/resume" className='nav-link'>Resume</Link>
          <Link to="/projects" className='nav-link'>Projects</Link>
        </div>
      </div>
      <Route exact path="/" component={About}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
    </div>
  </Router>
)

const About = () => (
  <div className='about'>
    <h3>Hi There! I&#39;m Jen, an interior designer turned web developer.</h3>
  </div>
)

const Resume = () => (
  <div className='resume'>
    <h2>Resume</h2>
  </div>
)

const Projects = ({ match }) => (
  <div className='projects'>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App
