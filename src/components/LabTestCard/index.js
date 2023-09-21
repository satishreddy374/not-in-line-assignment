import {AiFillStar} from 'react-icons/ai'

import './index.css'

const LabTestCard = props => {
  const {labTestDetails} = props
  const {
    test,
    ratingCount,
    reviewCount,
    testsCount,
    initialPrice,
    offerPrice,
  } = labTestDetails
  return (
    <li className="lab-test-card-container">
      <h1 className="card-heading">{test}</h1>
      <div className="rating-and-review-container">
        <div className="rating-container">
          <AiFillStar size={30} color="#edf70a" />
          <p className="rating-count-text">{ratingCount}</p>
        </div>
        <div className="review-container">
          <p className="review-count-text">({reviewCount} Reviews)</p>
        </div>
      </div>
      <p className="number-of-tests-count-text">
        Number of Tests:- {testsCount}{' '}
      </p>
      <p className="mrp-text">
        MRP: <span className="initial-price-text">${initialPrice}</span>{' '}
        <span className="offer-price-text">${offerPrice}</span>
      </p>
      <button type="button" className="book-now-button">
        Book Now
      </button>
    </li>
  )
}

export default LabTestCard
