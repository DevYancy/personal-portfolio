import React from 'react';
import './Projects.css';
import apiSentinelImg from '../assets/api_sentinel_ai.png';
import dataEngImg from '../assets/data_eng.png';

const Projects = () => {
  const projects = [
    {
      title: 'API Sentinel AI',
      description: 'An AI-powered API monitoring and testing tool built with LLM technology. Provides intelligent API endpoint analysis and automated testing capabilities.',
      technologies: ['AI/LLM', 'Node.js', 'Python', 'REST API'],
      link: 'https://api-sentinel-ai-w4s4.onrender.com/',
      image: apiSentinelImg
    },
    {
      title: 'E-Procurement System',
      description: 'Built backend APIs for a procurement management platform with vendor management, purchase orders, and approval workflows.',
      technologies: ['Node.js', 'NestJS', 'Oracle', 'TypeScript'],
      link: '#',
      image: null
    },
    {
      title: 'Email Marketing Platform',
      description: 'Developed campaign management system with lead generation, email automation, and third-party integrations.',
      technologies: ['Node.js', 'MongoDB', 'Python', 'Dagster'],
      link: '#',
      image: null
    },
    {
      title: 'Data Pipeline Orchestration',
      description: 'Designed and implemented ETL pipelines for data processing, transformation, and analytics using Dagster.',
      technologies: ['Python', 'Dagster', 'SQL', 'Docker'],
      link: '#',
      image: dataEngImg
    },
    {
      title: 'Freelance Marketplace',
      description: 'Built and supported a platform connecting freelancers with clients, featuring project listings, bidding system, and secure payments.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'Stripe'],
      link: '#',
      image: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="project-tag">{tech}</span>
                ))}
              </div>
              {project.link !== '#' && (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
