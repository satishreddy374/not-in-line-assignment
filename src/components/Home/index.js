import {Component} from 'react'

import LabTestCard from '../LabTestCard'

import './index.css'

const checkupList = [
  {
    checkUpId: 1,
    test: 'Basic Full Body Checkup',
    ratingCount: 4.3,
    reviewCount: 73,
    testsCount: 53,
    initialPrice: 10000,
    offerPrice: 8490,
  },
  {
    checkUpId: 2,
    test: 'Advance Full Body Checkup',
    ratingCount: 4.7,
    reviewCount: 100,
    testsCount: 70,
    initialPrice: 12000,
    offerPrice: 10000,
  },
  {
    checkUpId: 3,
    test: 'Liver Function Test (LFT)',
    ratingCount: 4.3,
    reviewCount: 42,
    testsCount: 89,
    initialPrice: 13299,
    offerPrice: 11299,
  },
]

class Home extends Component {
  render() {
    return (
      <div className="home-page-container">
        <div className="certification-and-sample-collection-container">
          <div className="certification-container">
            <img
              src="https://i.ibb.co/dmYCHcY/NABL-lab-logo.jpg"
              className="nabl-logo"
            />
            <p className="nabl-text">NABL Accredited Labs</p>
          </div>
          <div className="sample-collection-container">
            <img
              src="https://i.ibb.co/6HPg29D/lab-samples.webp"
              className="lab-sample-image"
            />
            <p className="lab-samples-text">Free sample collection</p>
          </div>
        </div>
        <h1 className="keep-expanding-heading">
          We Keep <span className="special-expanding">expanding</span> !
        </h1>
        <div className="multiple-tabs-container">
          <div className="tab-container">
            <p className="tab-count-text">5+</p>
            <p className="tab-text">Labs</p>
          </div>
          <div className="tab-container">
            <p className="tab-count-text">100+</p>
            <p className="tab-text">Collection Centres </p>
          </div>
          <div className="tab-container">
            <p className="tab-count-text">1000+</p>
            <p className="tab-text">Monthly Tests</p>
          </div>
          <div className="tab-container">
            <p className="tab-count-text">2200</p>
            <p className="tab-text">Test Menu</p>
          </div>
          <div className="tab-container">
            <p className="tab-count-text">5+</p>
            <p className="tab-text">Cities Present in</p>
          </div>
        </div>
        <h1 className="top-packgages">
          Top <span className="special-package-text">packages</span>
        </h1>
        <p className="text">
          Explore our wide range of tests! We ensure that you dont miss out on
          any chance to keep yourself healthy.
        </p>
        <ul className="lab-tests-container">
          {checkupList.map(eachTest => (
            <LabTestCard labTestDetails={eachTest} key={eachTest.checkUpId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
