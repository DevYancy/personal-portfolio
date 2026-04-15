import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Zeniark Philippines Consulting Corp',
      logo: '🔷',
      position: 'Back End Developer | Data Engineer',
      period: 'Feb 2024 - Present',
      location: 'Pampanga, Central Luzon, Philippines',
      responsibilities: [
        'Contributed to backend development of Email Marketing and e-Procurement systems.',
        'Built, optimized, and maintained RESTful APIs and backend services.',
        'Implemented campaign, lead generation, and third-party integrations.',
        'Designed and executed large-scale ETL pipelines and data processing workflows.',
        'Improved database performance, indexing, and system scalability.',
        'Implemented security, background jobs, and production maintenance.',
        'Collaborated with cross-functional teams to deliver reliable systems.'
      ],
      technologies: ['Node.js', 'MongoDB', 'TypeScript', 'Nestjs', 'Python', 'Docker', 'Dagster', 'SQL', 'Oracle', 'Git']
    },
    {
      company: '24Task',
      logo: '⚫',
      position: 'Back End Developer',
      period: 'Jul 2022 - Nov 2023',
      location: 'Camarines Norte, Bicol Region, Philippines',
      responsibilities: [
        'Developed and optimized APIs for Android, iOS, and web applications for 24TASK (task & service marketplace platform) and Influence Bird (influencer marketing platform).',
        'Built scalable backend solutions using Node.js and JavaScript.',
        'Integrated backend services with frontend features for seamless performance.',
        'Collaborated with cross-functional teams to deliver end-to-end solutions.',
        'Applied best practices in modular architecture, testing, and version control.',
        'Troubleshoot backend issues and improved system reliability.',
        'Optimized performance using AWS Serverless (Lambda, S3, RDS, DynamoDB).'
      ],
      technologies: ['Node.js', 'Express.js', 'S3', 'DynamoDB', 'Python', 'Serverless', 'AWS', 'SQL', 'RDS', 'GitHub']
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="card-header">
              <div className="company-logo">{exp.logo}</div>
              <div className="company-info">
                <h3 className="position">{exp.position}</h3>
                <p className="company-name">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="location">{exp.location}</p>
              </div>
            </div>
            <ul className="responsibilities">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
            <div className="tech-tags">
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
