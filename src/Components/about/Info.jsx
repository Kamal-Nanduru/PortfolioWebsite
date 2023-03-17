import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
              <div className="about__box about__icon">
              <i class='bx bx-book-open'></i>
            <h3 className="about__title">Education Qualification</h3>
            <span className="about__subtitle">C S Graduate</span>
        </div>
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">0.6year Internship</span>
        </div>
        <div className="about__box">
        <i class='bx bx-certification about__icon'></i>
            <h3 className="about__title">Certified</h3>
            <span className="about__subtitle">MERN Stack Development</span>
        </div>
    </div>
  )
}

export default Info
