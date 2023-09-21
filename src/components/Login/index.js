import {Component} from 'react'

import {CgProfile} from 'react-icons/cg'
import {MdOutlineCall, MdLocationOn} from 'react-icons/md'

import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="login-app-container">
        <div className="left-side-section">
          <div className="login-form-container">
            <p className="login-text">Fill in the details to get call !!!</p>
            <div className="input-container">
              <CgProfile size={35} color="#6fb6d6" />
              <input
                type="text"
                className="input-element"
                placeholder="Full Name"
              />
            </div>
            <div className="input-container">
              <MdOutlineCall size={35} color="#6fb6d6" />
              <input
                type="text"
                className="input-element"
                placeholder="Phone Number"
              />
            </div>
            <div className="input-container">
              <MdLocationOn size={35} color="#6fb6d6" />
              <input
                type="text"
                className="input-element"
                placeholder="Location"
              />
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox"
                className="checkbox-element"
              />
              <label htmlFor="checkbox" className="terms-and-conditions-text">
                By continuing, you agree to our T&C and privacy policy{' '}
              </label>
            </div>
            <button type="button" className="proceed-button">
              Proceed
            </button>
          </div>
          <p className="offer-text">
            Get a Full Body Ckeckup Now at{' '}
            <span className="price-text">
              <span className="price-5999-text">$5,999</span> $999
            </span>{' '}
            <span className="special-offer">70% OFF</span>
          </p>
        </div>

        <div className="login-image-container">
          <h1 className="login-image-heading">
            <span className="special-text">Best in class</span> lab tests !!!
          </h1>
          <img
            src="https://i.ibb.co/fv6gyQr/lab-microscope.jpg"
            alt="lab"
            className="login-image"
          />
        </div>
      </div>
    )
  }
}

export default Login
