import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './skeleton copy.css'
import './App.css'
// import Nav from './components/Nav.jsx'

export default class App extends Component {
  render() {
    return (
      <div id='main'>
        <div id='intro'>
          <h1>Hi, I'm Gavin Mayo.</h1>
          <p>
            I am a software developer who has past experience with managerial roles. <br />
            I have a love for learning and always strive to be great at what I do. <br />
            I am dedicated to developing new skills and refining them into workable, desired skills.
          </p>
        </div>
        <div id='projects'>
          <h2>Projects I have made or been a part of: </h2>
          <div id='pokemon'>
            <h5>
              <sup>01</sup>Small Pokémon game, made with HTML, CSS, jQuery, vanilla Javascript and deployed to Github Pages.
            </h5>
            <a href='https://github.com/Raedanwin/Pokemon' target='_blank'>Github Repository</a>
            <br/>
            <br/>
            <a href='https://raedanwin.github.io/Pokemon/' target='_blank'>Live Site</a>
            <br/>
            <a href='https://raedanwin.github.io/Pokemon/' target='_blank'><img src='https://i.imgur.com/0uvwhRW.png?1'/></a>
          </div>
          <br/>
          <div id='pantry'>
            <h5>
              <sup>02</sup>Full CRUD app, made with Express, MongoDB, Mongoose, EJS and deployed to Heroku.<br/>
              Search for a recipe, log your ingredients and make and save your own recipes.
            </h5>
            <a href='https://github.com/Raedanwin/Restful-Pantry' target='_blank'>Github Repository</a>
            <br/>
            <br/>
            <a href='https://polar-oasis-16482.herokuapp.com/pantry' target='_blank'>Live Site</a>
            <br/>
            <a href='https://polar-oasis-16482.herokuapp.com/pantry' target='_blank'><img src='https://i.imgur.com/DMSK0A1.png?1'/></a>
          </div>
          <br/>
          <div id='insta'>
            <h5>
              <sup>03</sup>Team-built full CRUD app, made with Express, MongoDB, Mongoose, React and deployed to Heroku.<br/>
              Instagram clone with a feed, profile and user registration-login-authentification, built by four people including me.
            </h5>
            <a href='https://github.com/cwhitney85/instaclone-client' target='_blank'>Github Repository (Front-end)</a><br/>
            <a href='https://github.com/cwhitney85/instaClone' target='_blank'>Github Repository (Back-end)</a>
            <br/>
            <br/>
            <a href='https://stark-ocean-08311.herokuapp.com/home' target='_blank'>Live Site</a>
            {/* <br/> */}
            {/* <a href='https://stark-ocean-08311.herokuapp.com/home' target='_blank'><img src=''/></a> */}
          </div>
          <br/>
          <div id='show'>
            <h5>
              <sup>04</sup>App made with Python, Flask, React, PostgreSQL, Axios and deployed to Heroku.<br/>
              Search for a certain TV show or movie to find details on it and what platforms you can watch it on and save it to customized watch-list.
            </h5>
            <a href='https://github.com/Raedanwin/Showaholic-front-end' target='_blank'>Github Repository (Front-end)</a><br/>
            <a href='https://github.com/Raedanwin/Showaholic-back-end' target='_blank'>Github Repository (Back-end)</a>
            <br/>
            <br/>
            {/* <a href='' target='_blank'>Live Site</a> */}
            <br/>
            {/* <a href='' target='_blank'><img src=''/></a> */}
          </div>
        </div>
        <div id='contact'>
          <a href='https://github.com/Raedanwin' target='_blank'><img id='github' src='https://i.imgur.com/NFn1mx1.png'/></a>
          <a href='https://www.linkedin.com/in/gavin-mayo/' target='_blank'><img id='linkedin' src="https://i.imgur.com/FGGaGNC.png?1"/></a>
          <br/>
          <footer>Email me at gavinmayo001@gmail.com!</footer>
        </div>
      </div>
    )
  }
}
