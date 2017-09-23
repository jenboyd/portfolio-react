import React from 'react'

const Project = (props) => (
  <div className='project'>
    <a href={props.href}>
      <img src={props.src} alt={props.name} />
    </a>
    <div className='project-info'>
      <h3>{props.name}</h3>
      <div className='tech'>
      {props.client && <h4>Client: {props.client}</h4>}
      {props.api && <h4>API: {props.api}</h4>}
      </div>
      <p>{props.desc}</p>

      {props.login && <div className='login'>
        <p>Try out the app with:</p>
        <p className='login-info'>username: {props.login}</p>
        <p className='login-info'>password: 123</p>
      </div>}
    </div>
  </div>
)

export default Project
