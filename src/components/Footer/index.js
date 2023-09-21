import {Component} from 'react'

import {MdOutlineCall} from 'react-icons/md'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer-page-container">
        <div className="left-side-section">
          <p className="left-section-text">
            Book doctor appoinments online and get your aliments treated in no
            time with our expet medical support systems. Get rid of all your
            medical problem with our expert panel of doctors who guide you
            towards a healthier life.
          </p>
          <div className="call-input-container">
            <p className="text-91">+91</p>
            <input
              type="text"
              placeholder="Mobile Number"
              className="input-number-ele"
            />
            <button type="button" className="call-button">
              <MdOutlineCall size={25} color="#ffffff" />{' '}
            </button>
          </div>
        </div>
        <div className="right-side-section">
          <div className="each-container">
            <h1 className="each-container-heading">Services</h1>
            <p className="each-container-text">Appoinments</p>
            <p className="each-container-text">Lab Tests</p>
            <p className="each-container-text">A-Z Machines</p>
            <p className="each-container-text">Doctor Support</p>
          </div>
          <div className="each-container">
            <h1 className="each-container-heading">General Info</h1>
            <p className="each-container-text">Privacy Policy</p>
            <p className="each-container-text">Trems Of services</p>
            <p className="each-container-text">Consultation</p>
            <p className="each-container-text">How it works</p>
          </div>
          <div className="each-container">
            <h1 className="each-container-heading">Talk to us</h1>
            <p className="each-container-text">support@notinline.com</p>
            <p className="each-container-text">appoinment@notinline.com</p>
            <p className="each-container-text">+91 12345 67899</p>
            <p className="each-container-text">+91 97642 09752</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
