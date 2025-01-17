import React, { Component } from 'react';
import logo from '../Home/logo.png'
import CustomerForm from '../../components/CustomerForm/CustomerForm.js';
import '../Home/style.css'


class Contacts extends Component {
  state = {
    hover: false
  };
  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  };
  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = { backgroundColor: ' #2da1e9', cursor: 'pointer' }
    } else {
      linkStyle = { backgroundColor: '#1d71b6' }
    }

    return (
      <div className='Contacts'>
        <div id='header'>
          <div id='number' className='col'>
            <p>Phone: 980-267-7483</p>
          </div>
          <div id='logo' className='col'>
            <h2>Contact Us</h2>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
          <div id='email' className='col'>
            <p>E-Mail: krystalklearaquariums@gmail.com</p>
          </div>
        </div>
        <div className='row'>
          <div className="card">
            <div className="card-header">
              Contact Form
            </div>
            <div className="card-body" style={linkStyle} onMouseEnter={this.toggleHover}>              
                <CustomerForm onSubmit={this.handleSubmit} />
            </div>
            <div class="card-footer">
            </div>
          </div>
        </div>
      </div>
    )
      }
    }
    
    export default Contacts;
