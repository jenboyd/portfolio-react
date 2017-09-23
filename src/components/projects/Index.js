import React from 'react'

import Project from './Project'

import InteriorDesign from '.././InteriorDesign'
import Telerehab from '../../img/telerehab_1.png';
import Hostess from '../../img/hostess_2.jpg';
import BostonDayTrips from '../../img/boston-day-trips-2.jpg';
import TicTacToe from '../../img/tic-tac-toe.jpg';

const Index = () => (
  <div className='projects'>
    <Project
     name='American Care'
     href='https://jenboyd.github.io/telerehab-site/'
     src={Telerehab}
     client='HTML, CSS, Less, JavaScript, Adobe Illustrator'
     desc='Logo and website redesign for American Care, a hypothetical telemedicine client. The goal of the design was
     to streamline the information presented to the viewer and inspire them to take action to reach their health goals. The logo represents the
     intersection between technology and health.'
    />

    <Project
     name='Hostess'
     href='https://jenboyd.github.io/capstone-ember'
     src={Hostess}
     client='Sass, Ember, JavaScript'
     api='Ruby on Rails'
     login='hello@hostessapp.com'
     desc='Party planning web application for avid list makers. Built with Ember, JavaScript and Ruby on Rails as my final project
      for General Assembly&#39;s Web Development Immersive program. Users can create multiple party dashboards
     and add various lists to each dashboard with the ability to modify a list or item as needed.'
    />

    <Project
     name='Boston Day Trips'
     href='https://jenboyd.github.io/boston-day-trips/'
     src={BostonDayTrips}
     client='Sass, JavaScript, Jquery, Handlebars'
     api='Ruby on Rails'
     login='hello@bostondaytripsapp.com'
     desc='For the weekend travel gurus, this app helps users find day trips within
     the Boston area. I used Jquery and Handlebars to create a dynamic application
     that users can interact with by signing in, seaching for trips, and commenting on
     trips. Built as my second project at General Assembly.'
    />

    <Project
     name='Tic Tac Toe'
     href='https://jenboyd.github.io/tic-tac-toe/'
     src={TicTacToe}
     login='hello@tictactoeapp.com'
     client='Sass, JavaScript, Jquery, Handlebars'
     desc='My first app built during General Assembly&#39;s Web Development Immersive program. My take on a traditional tic-tac-toe game built with JavaScript.'
    />
  </div>
)

export default Index
