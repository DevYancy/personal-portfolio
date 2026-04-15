import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Procurement System',
      description: 'Built backend APIs for a procurement management platform with vendor management, purchase orders, and approval workflows.',
      technologies: ['Node.js', 'NestJS', 'Oracle', 'TypeScript'],
      link: '#'
    },
    {
      title: 'Email Marketing Platform',
      description: 'Developed campaign management system with lead generation, email automation, and third-party integrations.',
      technologies: ['Node.js', 'MongoDB', 'Python', 'Dagster'],
      link: '#'
    },
    {
      title: 'Data Pipeline Orchestration',
      description: 'Designed and implemented ETL pipelines for data processing, transformation, and analytics using Dagster.',
      technologies: ['Python', 'Dagster', 'SQL', 'Docker'],
      link: '#'
    },
    {
      title: 'Freelance Marketplace',
      description: 'Built and supported a platform connecting freelancers with clients, featuring project listings, bidding system, and secure payments.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'Stripe'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="project-tag">{tech}</span>
              ))}
            </div>
            {/* <a href={project.link} className="project-link">View Project →</a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
