import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-card">
        <div className="education-logo">🎓</div>
        <div className="education-info">
          <h3 className="degree">Bachelor of Science in Computer Science</h3>
          <p className="school">Sta. Elena Institute of Science and Technology Inc.</p>
          <p className="year">2018 - 2022</p>
          <p className="specialization">Specialized in Java Programming and Database Systems</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
