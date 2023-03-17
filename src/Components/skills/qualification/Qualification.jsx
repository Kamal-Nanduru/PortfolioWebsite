import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey
        </span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
              <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>

            <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
              <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">MERN Stack Development</h3>
                  <span className="qualification__subtitle">Jspiders - Hebbal,Bengaluru</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Sept2022 - Dec2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">BTech,CSE</h3>
                  <span className="qualification__subtitle">K L University-Guntur</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> July2018 - May2022
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Board of Indermediate Education, M.P.C</h3>
                  <span className="qualification__subtitle">T.J.K - Rajhmundry</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Jun2016 - May2022 
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Secondary School Certification</h3>
                  <span className="qualification__subtitle">K.P.S - Nuzvid</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> March2016
                  </div>
                </div>
              </div>
            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Technologies Trainer</h3>
                  <span className="qualification__subtitle">Jspiders - Bengaluru</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Dec2022 - Apr2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Development Intern</h3>
                  <span className="qualification__subtitle">Manbrosys - San Francisco</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Dec2021 - Apr2022
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">K L Surabhi Executive Core</h3>
                  <span className="qualification__subtitle">Jignasa - Vijayawada</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> Jul2019 - Sep2021 
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Telugu Translator</h3>
                  <span className="qualification__subtitle">Planet Hool - Kodaikanal </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> March2023 - Present 
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Qualification
