import './About.css';
import dasgterIcon from '../assets/dagster-reversed-vertical.jpg';
const About = () => {
const technologies = [
  {
    name: 'Node.js',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    experience: 90
  },
  {
    name: 'NestJS',
    icon: "https://nestjs.com/img/logo-small.svg",
    experience: 85
  },
  {
    name: 'Python',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    experience: 80
  },
  {
    name: 'Dagster',
    icon: dasgterIcon,
    experience: 75
  },
  {
    name: 'SQL',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    experience: 85
  },
  {
    name: 'Docker',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
    experience: 70
  },
  {
    name: 'AWS',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    experience: 65
  },
  {
    name: 'PostgreSQL',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    experience: 80
  },
  {
    name: 'MongoDB',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    experience: 75
  },
  {
    name: 'Express',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    experience: 85
  },
  {
    name: 'TypeScript',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    experience: 80
  },
  {
    name: 'DynamoDB',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg",
    experience: 70
  }
];

  return (
    <section id="about" className="about">
      <h2>About</h2>
      <div className="about-content">
        <p>
          I'm a Backend & Data Engineer with experience building scalable APIs and production-grade data pipelines. I work 
          primarily with Node.js and NestJS for backend development, and Python with Dagster for orchestrating reliable data 
          workflows.
        </p>
        <p>
          I enjoy working on complex database logic, optimizing queries, and designing systems that transform raw data into clean, 
          structured, and actionable information.
        </p>
        <p>
          My focus is on writing maintainable code, building efficient architectures, and delivering solutions that are reliable, 
          scalable, and easy to extend.
        </p>
        
        <button className="tech-stack-btn">Technology Stack</button>
        
<div className="tech-grid">
  {technologies.map((tech, index) => (
    <div key={index} className="tech-item" title={`${tech.experience}% Proficiency`}>
      
      <span className="tech-icon">
        <img src={tech.icon} alt={tech.name} />
      </span>

      <span className="tech-name">{tech.name}</span>

      <div className="experience-bar">
        <div 
          className="experience-fill" 
          style={{ width: `${tech.experience}%` }}
        ></div>
      </div>

      <span className="experience-level">{tech.experience}%</span>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default About;
