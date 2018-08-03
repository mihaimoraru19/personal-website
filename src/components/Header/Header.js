import React, {Component} from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="Sticky-container">
        <div className="Logo">
          <img src={require('../../assets/logo-v2-01.svg')} alt="Mihai Moraru logo"/>
        </div>
        <ul className="Header-links">
          <li>Home</li>
          <li>About Me</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}
