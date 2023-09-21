import './index.css'

const whyChooseUsList = [
  {
    id: 1,
    heading: 'NABL Accredited Labs',
    text: 'Get accurate and safe results from our NABL-certified lab partners',
    imageUrl: 'https://i.ibb.co/dmYCHcY/NABL-lab-logo.jpg',
  },
  {
    id: 2,
    heading: 'Value Experience',
    text:
      'Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier lifestyle.',
    imageUrl: 'https://i.ibb.co/5jKSfSv/men-doctor.jpg',
  },
  {
    id: 3,
    heading: 'Timely collections',
    text:
      'We collect seamless timely to prevent treatment delays and ensured your continued well-being.',
    imageUrl: 'https://i.ibb.co/SQ4Qh2L/lady-doctor-image.jpg',
  },
  {
    id: 4,
    heading: 'Transparency',
    text:
      'Enjoy hassle free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.',
    imageUrl: 'https://i.ibb.co/5jKSfSv/men-doctor.jpg',
  },
]

const WhyChooseUs = () => (
  <div className="why-choose-us-page-container">
    <h1 className="why-choose-us-heading">
      Why <span className="choose-heading">choose</span> us ?
    </h1>
    <p className="why-choose-us-text">
      We want you and your to be healthy so you can live a happy life!
    </p>
    <div className="why-choose-us-container">
      <ul className="why-choose-us-card-container-list">
        {whyChooseUsList.map(eachChoose => (
          <li key={eachChoose.id} className="choose-card-container">
            <img
              src={eachChoose.imageUrl}
              alt="logo"
              className="why-choose-card-image"
            />
            <h1 className="choose-card-heading">{eachChoose.heading}</h1>
            <p className="choose-card-text">{eachChoose.text}</p>
          </li>
        ))}
      </ul>
      <div className="doctor-image-container">
        <img
          src="https://i.ibb.co/KhRCqm6/doctor-image.jpg"
          alt="doctor"
          className="doctor-imge"
        />
      </div>
    </div>
  </div>
)

export default WhyChooseUs

