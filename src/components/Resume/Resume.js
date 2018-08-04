import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './Resume.scss';

export default class Resume extends Component {
  render() {
    const mainTechnologies = [
      {title: 'Java', img: require('./assets/java.svg')},
      {title: 'Spring Framework', img: require('./assets/spring.svg')},
      {title: 'ReactJS & React Native', img: require('./assets/react.svg')},
      {title: 'JavaScript', img: require('./assets/js.svg')},
      {title: 'CSS', img: require('./assets/css.svg')},
      {title: 'HTML', img: require('./assets/html.svg')},
      {title: 'MySQL', img: require('./assets/mysql.svg')}
    ];
    const lessExperienced = [
      {title: 'C++', img: require('./assets/cpp.svg')},
      {title: 'C#', img: require('./assets/csharp.svg')}
    ];
    const learning = [
      {title: 'NodeJS', img: require('./assets/node.svg')},
      {title: 'Python', img: require('./assets/py.svg')}
    ];
    const renderMainTechnologies = mainTechnologies.map((item, i) =>
      <Tooltip key={i} title={item.title}>
        <img className="Language" src={item.img} alt={item.title}/>
      </Tooltip>
    );
    const renderLessExperienced = lessExperienced.map((item, i) =>
      <Tooltip key={i} title={item.title}>
        <img className="Language" src={item.img} alt={item.title}/>
      </Tooltip>
    );
    const renderLearning = learning.map((item, i) =>
      <Tooltip key={i} title={item.title}>
        <img className="Language" src={item.img} alt={item.title}/>
      </Tooltip>
    );
    return (
      <div id="Resume" className="Wrapper">
        <div className="Resume-container">
          <div className="Resume-title">
            RESUME
          </div>
          <div className="Sides">
            <div className="Job">
              <div style={{display: "block"}}><span className="Gentlab">GENTLAB</span> - Full-Stack Web & Mobile Developer</div>
              <span className="Job-description">
                  April 2017 - Present
                  <br/>
                  My main responsibilities are to implement new features and fix bugs on the web and mobile for an eLearning platform, <span style={{color: '#FFCE07', }}>Knolyx</span>.
                  In the past I worked for a platform dedicated to communities, <span style={{color: '#8ec742'}}>Kommio</span>.
                  I am currently working with Java & Spring Framework on the back-end and ReactJS on the front-end.
                  For mobile development we are working with React Native.
              </span>
            </div>
            <div className="Divider-resume"> </div>
            <div className="Technologies">
              <div className="Technologies-title">
                Technologies Used
              </div>
              <div className="Main">
                <span style={{display: 'block'}}>Main technologies</span>
                {renderMainTechnologies}
                <span style={{display: 'block', marginTop: '10px'}}>Less experienced</span>
                {renderLessExperienced}
                <span style={{display: 'block', marginTop: '10px'}}>Learning</span>
                {renderLearning}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
