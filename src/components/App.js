import React from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Index from './projects/Index'
import Resume from './Resume'
import InteriorDesign from './InteriorDesign'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>

          <Nav />
          <div className='container'>
            <div className='route-container'>
              <Route exact path="/" component={Index}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/about" component={About}/>
              <Route path="/interior-design" component={InteriorDesign}/>
            </div>

            <footer>
              <p>hello@jennifer-boyd.com</p>
              <div className='social'>
                <a href="https://github.com/jenboyd/"><i className="fa fa-github" aria-hidden="true" /></a>
                <a href="https://www.linkedin.com/in/jennifer-boyd/"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
              </div>
            </footer>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
