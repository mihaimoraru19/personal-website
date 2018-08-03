import React, { Component } from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header'
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
          {/* Home Screen */}
          <div className="Hero-container">
            <div className="Intro">
              <img src={require('./assets/logo-v2-01.svg')} alt="Logo Mihai Moraru" className="Floating-image"/>
              <div>
                HELLO, MY NAME IS <span className="Name">MIHAI MORARU</span><br/>
                <span className="Developer">Junior Full-Stack Developer</span>
              </div>

            </div>
            <div className="Social">
              <a className="Social-icon Social-icon-facebook" href="https://www.facebook.com/MihaiMoraru19" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
              </a>
              <a className="Social-icon Social-icon-linkedin" href="https://www.linkedin.com/in/mihaimoraru19/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']}/>
              </a>
              <a className="Social-icon Social-icon-github" href="https://www.github.com/afmihai" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']}/>
              </a>
            </div>
          </div>
        {/* About Me */}
        <AboutMe />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

