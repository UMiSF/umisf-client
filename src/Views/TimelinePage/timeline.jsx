import React from 'react';
import './timeline.css';
import HeaderPage from "../HeaderPage/HeaderPage";
import AGE from '../../assests/images/timeline/Age.jpeg';
import University from '../../assests/images/timeline/university.jpeg';
import Footer from '../HomePage/Footer/footer';

const TimelineData = [
  {
    title: 'All Island Age Group',
    description: 'The All Island Age Group Badminton Championship was a thrilling event last year with over 1,000 participants competing across four age categories; Under 9, 11, 13, and 15. It showcased young talent making it one of the most exciting and competitive school level badminton tournaments.',
    imageSrc: AGE,
    imageAlt: 'All Island Age Group Event',
  },
  {
    title: 'University Badminton Championship',
    description: 'The University Badminton Championship 2025 is set to bring together some of the brightest badminton talent from universities and institutions across the country. Exclusively for full-time undergraduate students, this tournament features both team and individual events. The event promises high-energy competition, showcasing passion, sportsmanship, and the determination of university athletes striving to make their mark in the sport.',
    imageSrc: University,
    imageAlt: 'University Badminton Championship',
  },
];

const CompanyTimeline = () => {
  return (
    <div>
    <HeaderPage />
    <div className="timeline-container">

      <h2 className="timeline-heading">Events</h2>

      <div className="timeline">
        <div className="timeline-line"></div>

        {TimelineData.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-card text">
                {item.year && <span className="timeline-year">{item.year}</span>}
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-card image">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </div >
  );
};

export default CompanyTimeline;
