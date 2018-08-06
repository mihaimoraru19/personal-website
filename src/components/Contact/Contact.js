import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      nameError: false,
      emailError: false,
      subjectError: false,
      messageError: false
    }
  }

  setName = (e) => {
    this.setState({name: e.target.value});
  };
  setEmail = (e) => {
    this.setState({email: e.target.value});
  };
  setSubject = (e) => {
    this.setState({subject: e.target.value});
  };
  setMessage = (e) => {
    this.setState({message: e.target.value});
  };

  validate = () => {
    const { name, email, subject, message } = this.state;
    return name.trim() === "" ||
      email.trim() === "" ||
      !this.validEmail(email) ||
      subject.trim() === "" ||
      message.trim() === "";
  };

  validEmail = (email) => {
    let regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
  };

  onClick = (e) => {
    e.preventDefault();
    if(!this.validate()) test.submit();
    const { name, email, subject, message } = this.state;
    if(name.trim() === '') this.setState({nameError: true});
    else this.setState({nameError: false});
    if(!this.validEmail(email)) this.setState({emailError: true});
    else this.setState({emailError: false});
    if(subject.trim() === '') this.setState({subjectError: true});
    else this.setState({subjectError: false});
    if(message.trim() === '') this.setState({messageError: true});
    else this.setState({messageError: false});
  };

  render() {
    const { name, email, subject, message, nameError, emailError, subjectError, messageError } = this.state;
    return (
      <div id="Contact" className="Wrapper-contact">
        <div className="Contact-container">
          <div className="Contact-title">
            HIT ME UP
          </div>
          <div className="Contact-content">
            <form
              id="test"
              className="Form"
              action="https://formspree.io/mihaimx19@gmail.com"
              method="POST"
            >
              <div className="Form-group">
                <label>NAME</label>
                <input
                  className="Form-field"
                  style={{borderColor: !!nameError ? 'red' : 'rgb(169, 169, 169)'}}
                  name="Name"
                  placeholder="Your Name"
                  value={name}
                  onChange={this.setName}
                />
              </div>
              <div className="Form-group">
                <label>EMAIL</label>
                <input
                  style={{borderColor: !!emailError ? 'red' : 'rgb(169, 169, 169)'}}
                  className="Form-field"
                  name="_replyto"
                  placeholder="Your Email"
                  value={email}
                  onChange={this.setEmail}
                />
              </div>
              <div className="Form-group">
                <label>SUBJECT</label>
                <input
                  style={{borderColor: !!subjectError ? 'red' : 'rgb(169, 169, 169)'}}
                  className="Form-field"
                  name="Subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={this.setSubject}
                />
              </div>
              <div className="Form-group">
                <label>MESSAGE</label>
                <textarea
                  style={{borderColor: !!messageError ? 'red' : 'rgb(169, 169, 169)'}}
                  className="Form-textarea"
                  name="Message"
                  placeholder="Your Message..."
                  rows="7"
                  value={message}
                  onChange={this.setMessage}
                />
              </div>
              <input type="hidden" name="_next" value="/"/>
                <button
                  className="Contact-button"
                  onClick={this.onClick}
                >
                  SEND
                </button>
            </form>
            <div className="Connect">
              <span style={{padding: '5%'}}>Also, don't forget to connect with me!</span>
              <a className="Connect-in" href="https://www.linkedin.com/in/mihaimoraru19/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
