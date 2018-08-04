import React, {Component} from 'react';
import './AboutMe.scss';

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

          </div>
        </div>
      </div>
    )
  }
}
