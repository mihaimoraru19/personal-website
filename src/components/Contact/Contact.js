import React, {Component} from 'react';
import './Contact.scss'

export default class Contact extends Component {
  render() {
    return (
      <div id="Contact" className="Wrapper-contact">
        <div className="Contact-container">
          <div className="Contact-title">
            HIT ME UP
          </div>
          <div className="Form">
            <form action="https://formspree.io/mihaimx19@gmail.com" method="POST">
              <input type="text" name="name" placeholder="Name"/>
              <input type="email" name="email"  placeholder="Your email"/>
              <input type="text" name="subject" placeholder="Subject"/>
              <textarea name="message"  cols="30" rows="10" placeholder="Your message"/>
              <button type="submit">Shoot</button>
            </form>
          </div>
          <div className="Connect">

          </div>
        </div>
      </div>
    )
  }
}
