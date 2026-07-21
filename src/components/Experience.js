import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Zeniark Philippines Consulting Corp',
      logo: '🔷',
      position: 'Back End Developer & Data Engineer',
      period: 'Feb 2024 - Present',
      location: 'Pampanga, Central Luzon, Philippines',
      responsibilities: [
        'Contributed in backend development of an Email Marketing System, including campaign creation, scheduling, tracking, and analytics.',
        'Developed new features for an e-Procurement system.',
        'Built and maintained RESTful APIs and backend services.',
        'Optimized and refactored APIs for performance and scalability.',
        'Created a lead generation and campaign sending system.',
        'Integrated third-party APIs (e.g., email).',
        'Worked as a Data Engineer, building and optimizing high-performance data pipelines to ingest, transform, and process millions of records from diverse data sources.',
        'Designed and implemented ETL processes for structured and unstructured datasets, improving data accuracy, processing efficiency, and scalability.',
        'Improved database design, optimized queries, and implemented indexing strategies.',
        'Ensured system security through proper authentication, authorization, and input validation.',
        'Automated background processes using job queues and schedulers.',
        'Conducted code reviews and enforced backend best practices.',
        'Troubleshooted and maintained production systems.',
        'Collaborated closely with frontend developers, QA engineers, and product teams.'
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
