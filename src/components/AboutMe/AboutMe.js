import React, {Component} from 'react';
import './AboutMe.css';

export default class AboutMe extends Component {
  render () {
    return (
      <div id="About" className="About-me">
        <div className="Content">
          <div className="Picture">
            <span className="Who">ABOUT ME</span>
            <img className="Image" src={require("../../assets/round-mihai.svg")} alt="Mihai Moraru"/>
            <div className="Small-details">
              AGE: 18<br/>
              Location: Romania
            </div>
          </div>
          <div className="Divider"> </div>
          <div className="Description">
            I'm a passionate developer who started to learn programming on his own a few years ago and consolidated my knowledge through study materials from the web & workshops and gained experience by working at Gentlab.
            Besides work, I try to learn as much as I can through personal projects.
            Starting October 1st, I will be a student at Babes-Bolyai University in Cluj-Napoca.
            I believe that every software created should be a response to a need or a problem that we have.
          </div>
        </div>
      </div>
    )
  }
}
