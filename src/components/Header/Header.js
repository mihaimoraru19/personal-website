import React, {Component} from 'react';
import './Header.css';
import classnames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false
    }
  }

  listenScrollEvent = () => {
    if (window.scrollY > 20) {
      this.setState({change: true})
    } else {
      this.setState({change: false})
    }
  };
  componentDidMount(){
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    const {change} = this.state;
    return (
      <div className={classnames('Sticky-header', {'changed': change})}>
        <div className="Logo">
          <img className="Round" src={require("../../assets/round-mihai.svg")} alt="Mihai Moraru Rounded"/>
        </div>
        <div className="Links">
          <AnchorLink href="#Home" className="Home">
            <Tooltip title="Home">
              <svg className="Link" id="i-home" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
              </svg>
            </Tooltip>
          </AnchorLink>
          <AnchorLink href="#About" className="About">
            <Tooltip title="About Me">
              <svg className="Link" id="i-user" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
              </svg>
            </Tooltip>
          </AnchorLink>
          <AnchorLink href="#Resume" className="Resume">
            <Tooltip title="Resume">
              <svg className="Link" id="i-clipboard" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 2 L12 6 20 6 20 2 12 2 Z M11 4 L6 4 6 30 26 30 26 4 21 4" />
              </svg>
            </Tooltip>
          </AnchorLink>
          <AnchorLink href="#Contact" className="Contact">
            <Tooltip title="Contact">
              <svg className="Link" id="i-mail" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
              </svg>
            </Tooltip>
          </AnchorLink>
        </div>
      </div>
    )
  }
}
