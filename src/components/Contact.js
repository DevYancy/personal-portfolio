import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'yancyalmiranez@gmail.com',
      link: 'mailto:yancyalmiranez@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/yancy-canejo',
      link: 'https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bfj5b17CURSGxDmrTCA2V1Q%3D%3D'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/yancycanejo',
      link: 'https://github.com/DevYancy'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '0916-467-7881',
      link: 'tel:0916-467-7881'
    }
  ];

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        I'm always open to discussing new opportunities, projects, or collaborations.
        Feel free to reach out!
      </p>
      <div className="contact-grid">
        {contactInfo.map((contact, index) => (
          <a 
            key={index} 
            href={contact.link}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">{contact.icon}</span>
            <div className="contact-details">
              <p className="contact-label">{contact.label}</p>
              <p className="contact-value">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
