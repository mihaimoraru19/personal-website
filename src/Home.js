import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
          {/* Home Screen */}
          <div id="Home" className="Hero-container">
            <Header />
            <div className="Intro">
              <AnchorLink href="#About">
                <img src={require('./assets/logo-v2-01.svg')} alt="Logo Mihai Moraru" className="Floating-image"/>
              </AnchorLink>
              <div className="Intro-text">
                <div className="Hello">
                  HI! I AM <span className="Name">MIHAI MORARU</span>
                </div>
              </div>
              <div className="Developer">Junior Full-Stack Developer</div>
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
        {/* Resume */}
        <Resume />
        {/* Contact */}
        <Contact />
        <div className="Footer">
          <img style={{maxHeight: '80%', marginRight: '20px'}} src={require('./assets/logo-v2-01.svg')} alt="Logo Mihai Moraru"/>
          <div>Copyright <span className="Name">Mihai Moraru</span> © 2018</div>
        </div>
      </div>
    );
  }
}

