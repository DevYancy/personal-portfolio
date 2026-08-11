import './About.css';

const About = () => {
  const techCategories = [
    {
      category: 'Backend',
      techs: ['Node.js', 'NestJS', 'Express', 'TypeScript']
    },
    {
      category: 'Data Engineering',
      techs: ['Python', 'Dagster', 'DBT', 'SQL']
    },
    {
      category: 'Databases',
      techs: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Oracle']
    },
    {
      category: 'Cloud & DevOps',
      techs: ['AWS', 'Docker', 'Serverless']
    }
  ];

  return (
    <section id="about" className="about">
      <h2>About</h2>
      <div className="about-content">
        <p>
          Backend Developer with 4+ years of experience and 1+ year as a Data Engineer, building scalable 
          backend systems, RESTful APIs, and high-volume data pipelines across multiple industries. Proficient in 
          Node.js, NestJS, Python, AWS, Docker, and SQL, with expertise in database optimization, data modeling, 
          ETL processes, and cloud-based solutions. Committed to building secure, scalable, and maintainable 
          software through clean code and collaborative development practices.
        </p>
        
        <button className="tech-stack-btn">Technology Stack</button>

        <div className="tech-categories">
          {techCategories.map((cat, catIndex) => (
            <div key={catIndex} className="tech-category-card">
              <h3 className="tech-category-title">{cat.category}</h3>
              <ul className="tech-list">
                {cat.techs.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
