import React from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      mobileMenu: false
    }
  }

  toggleMenu() {
    const currentState = this.state.mobileMenu;
    this.setState({ mobileMenu: !currentState })
  }

  render() {

    $(window).scroll(function() {
    	if ($(window).scrollTop() > 75 ){
     		$('.nav').addClass('collapse');
        $('.container').addClass('collapse');

      } else {
        $('.nav').removeClass('collapse');
        $('.container').removeClass('collapse');

     	};
    });

    return (
      <div className='nav'>

        <div className='home'>

          <div className={`nav-mobile-wrapper ${this.state.mobileMenu ? '' : 'collapse'} `}>
              <Link to="/" className='nav-link' onClick={() => this.toggleMenu()}>Projects</Link>
              <Link to="/resume" className='nav-link' onClick={() => this.toggleMenu()}>Resume</Link>
              <Link to="/about" className='nav-link' onClick={() => this.toggleMenu()}>About</Link>
          </div>

          <div className='nav-mobile-menu-button' onClick={() => this.toggleMenu()}>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>

          <div className='logo'>
            <h1>jb</h1>
          </div>
          <h2 className='nav-add-info'>
            Hello, I am a web developer and designer
            based in Washington, DC.
          </h2>
        </div>

        <div className='nav-links-wrapper'>
          <Link to="/" className='nav-link'>Projects</Link>
          <Link to="/resume" className='nav-link'>Resume</Link>
          <Link to="/about" className='nav-link'>About</Link>
        </div>
      </div>
    )
  }
}

export default Nav
