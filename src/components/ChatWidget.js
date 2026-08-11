import React, { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

const portfolioData = {
  name: 'Yancy Canejo Almirañez',
  role: 'Backend & Data Engineer',
  experience: '4+ years as Backend Developer, 1+ year as Data Engineer',
  location: 'Pampanga, Central Luzon, Philippines',
  email: 'yancyalmiranez@gmail.com',
  phone: '0916-467-7881',
  gender: 'Female',
  Age: 29,
  Birthday: 'August 05, 1997',
  github: 'github.com/DevYancy',
  linkedin: 'linkedin.com/in/yancy-canejo',
  education: 'Bachelor of Science in Computer Science from Sta. Elena Institute of Science and Technology Inc. (2018-2022), specialized in Java Programming and Database Systems',
  skills: ['Node.js', 'NestJS', 'Python', 'Dagster', 'SQL', 'DBT','Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Express', 'TypeScript', 'DynamoDB'],
  summary: 'Backend Developer with 4+ years of experience and 1+ year as a Data Engineer, building scalable backend systems, RESTful APIs, and high-volume data pipelines across multiple industries. Proficient in Node.js, NestJS, Python, AWS, Docker, and SQL, with expertise in database optimization, data modeling, ETL processes, and cloud-based solutions.',
  currentCompany: 'Zeniark Philippines Consulting Corp (Feb 2024 - Present)',
  previousCompany: '24Task (Jul 2022 - Nov 2023)',
  projects: [
    'API Sentinel AI - AI-powered API monitoring and testing tool',
    'E-Procurement System - Backend APIs for procurement management',
    'Email Marketing Platform - Campaign management with lead generation',
    'Data Pipeline Orchestration - ETL pipelines using Dagster',
    'Freelance Marketplace - Platform connecting freelancers with clients'
  ]
};

const knowledgeBase = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'sup', 'yo'],
    response: `Hey there! 👋 I'm Yancy's portfolio assistant. I can tell you about her skills, experience, projects, awards, or how to get in touch. What would you like to know?`
  },
  {
    keywords: ['who', 'about', 'yourself', 'introduce', 'tell me about'],
    response: `I'm the portfolio assistant for **${portfolioData.name}**, a ${portfolioData.role} with ${portfolioData.experience}. She builds scalable backend systems, RESTful APIs, and high-volume data pipelines. Want to know more about his skills or experience?`
  },
  {
    keywords: ['skill', 'tech', 'stack', 'technology', 'tools', 'language', 'framework', 'proficient'],
    response: `Yancy's tech stack includes:\n\n• **Backend:** Node.js, NestJS, Express, TypeScript\n• **Data:** Python, Dagster, SQL, DBT, ETL/ELT pipelines\n• **Databases:** PostgreSQL, MongoDB, DynamoDB, Oracle\n• **Cloud/DevOps:** AWS, Docker, Serverless\n\nShe specializes in database optimization, data modeling, and cloud-based solutions.`
  },
  {
    keywords: ['experience', 'work', 'job', 'career', 'company', 'employ'],
    response: `Yancy has ${portfolioData.experience}:\n\n📌 **Current:** Back End Developer & Data Engineer at Zeniark Philippines (Feb 2024 - Present)\n— Working on Email Marketing systems, e-Procurement, and high-performance data pipelines.\n\n📌 **Previous:** Back End Developer at 24Task (Jul 2022 - Nov 2023)\n— Built APIs for task marketplace and influencer marketing platforms using AWS Serverless.`
  },
  {
    keywords: ['project', 'built', 'portfolio', 'made', 'create'],
    response: `Here are Yancy's notable projects:\n\n🚀 **API Sentinel AI** — AI-powered API monitoring tool\n🏢 **E-Procurement System** — Vendor management & approval workflows\n📧 **Email Marketing Platform** — Campaign automation & lead generation\n⚙️ **Data Pipeline Orchestration** — ETL pipelines with Dagster\n💼 **Freelance Marketplace** — Freelancer-client platform with payments`
  },
  {
    keywords: ['education', 'school', 'university', 'degree', 'study', 'college'],
    response: `Yancy holds a **Bachelor of Science in Computer Science** from Sta. Elena Institute of Science and Technology Inc. (2018-2022). She specialized in Java Programming and Database Systems.`
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'connect', 'phone', 'number'],
    response: `You can reach Yancy through:\n\n📧 Email: yancyalmiranez@gmail.com\n📱 Phone: 0916-467-7881\n💼 LinkedIn: linkedin.com/in/yancy-canejo\n💻 GitHub: github.com/DevYancy\n\nShe's always open to new opportunities and collaborations!`
  },
  {
    keywords: ['location', 'where', 'based', 'live', 'country', 'city'],
    response: `Yancy is based in **Pampanga, Central Luzon, Philippines**.`
  },
  {
    keywords: ['backend', 'api', 'rest', 'server'],
    response: `Yancy is a strong backend developer specializing in:\n\n• Building and optimizing RESTful APIs\n• Node.js & NestJS for scalable services\n• Database design & query optimization\n• Authentication, authorization & security\n• Background jobs, queues & schedulers\n\nShe's built APIs for marketing platforms, procurement systems, and marketplace apps.`
  },
  {
    keywords: ['data', 'pipeline', 'etl', 'dagster', 'engineer'],
    response: `As a Data Engineer, Yancy works with:\n\n• **Dagster** for pipeline orchestration\n• High-performance ETL processes handling millions of records\n• Data ingestion, transformation & processing\n• Structured and unstructured datasets\n• Improving data accuracy and processing efficiency\n\nShe's built pipelines that transform raw data into actionable insights.`
  },
  {
    keywords: ['aws', 'cloud', 'serverless', 'lambda', 'deploy'],
    response: `Yancy has experience with AWS cloud services including:\n\n• AWS Lambda & Serverless architecture\n• S3 for storage\n• RDS & DynamoDB for databases\n• Docker for containerization\n• Cloud-based scalable solutions`
  },
  {
    keywords: ['resume', 'cv', 'download'],
    response: `You can download Yancy's resume by clicking the **"Download Resume 📥"** button in the hero section at the top of the page!`
  },
  {
    keywords: ['available', 'hire', 'freelance', 'open', 'opportunity'],
    response: `Yancy is always open to discussing new opportunities, projects, or collaborations. Feel free to reach out via email at yancyalmiranez@gmail.com or connect on LinkedIn!`
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: `You're welcome! If you have any other questions about Yancy's work or want to get in touch, just let me know. 😊`
  },
  {
    keywords: ['award', 'recognition', 'achievement', 'employee of the year', 'accomplishment'],
    response: `Yancy has been recognized for her outstanding work:\n\n🏆 **Employee of the Year 2024** — Zeniark Philippines Consulting Corp\n🏆 **Employee of the Year 2025** — Zeniark Philippines Consulting Corp\n\nTwo consecutive years of recognition speaks to her dedication, impact, and consistent delivery of excellent work.`
  },
  {
    keywords: ['age', 'old', 'birthday', 'born', 'birth'],
    response: `Yancy was born on **August 5, 1997**. She is currently 28 years old.`
  },
  // {
  //  keywords: ['gender', 'she', 'he', 'pronouns'],
  //  response: `Yancy uses **she/her** pronouns.`
  // },
  {
    keywords: ['hobby', 'hobbies', 'interest', 'free time', 'fun', 'passion'],
    response: `Outside of work, Yancy is passionate about technology and continuous learning. She enjoys exploring new tools, building side projects with AI, and staying up-to-date with the latest in backend and data engineering.`
  },
  {
    keywords: ['strength', 'good at', 'best', 'strong'],
    response: `Yancy's key strengths include:\n\n💪 Building scalable, maintainable backend systems\n💪 High-performance data pipeline design\n💪 Database optimization & query tuning\n💪 Clean code practices & code reviews\n💪 Cross-team collaboration & communication\n\nShe's a 2x Employee of the Year — proof of her consistent excellence!`
  },
  {
    keywords: ['why', 'reason', 'motivation', 'what drives'],
    response: `Yancy is driven by a commitment to building secure, scalable, and maintainable software. She enjoys solving complex problems, optimizing systems for performance, and transforming raw data into actionable insights.`
  },
  {
    keywords: ['team', 'collaborate', 'work with', 'colleague'],
    response: `Yancy collaborates closely with frontend developers, QA engineers, and product teams. She conducts code reviews, enforces backend best practices, and values clear communication to deliver reliable systems together.`
  },
  {
    keywords: ['database', 'sql', 'query', 'postgres', 'mongo', 'oracle'],
    response: `Yancy has deep expertise in databases:\n\n• **PostgreSQL** — complex queries & optimization\n• **MongoDB** — document-based data modeling\n• **Oracle** — enterprise database solutions\n• **DynamoDB** — serverless NoSQL on AWS\n• **MySQL** — relational database management\n\nShe focuses on indexing strategies, query optimization, and scalable database design.`
  },
  {
    keywords: ['maycie', 'furniture'],
    response: `**Maycie Furniture & Fixture Trading** is a business website Yancy built, showcasing products, services, and company information for a furniture trading company. You can visit it at mayciefurnitureandfixturetrading.com`
  },
  {
    keywords: ['sentinel', 'ai project', 'llm'],
    response: `**API Sentinel AI** is Yancy's AI-powered project — a monitoring and testing tool built with LLM technology. It provides intelligent API endpoint analysis and automated testing capabilities. Check it out at api-sentinel-ai-w4s4.onrender.com`
  },
  {
    keywords: ['zeniark', 'current company', 'current job'],
    response: `Yancy currently works at **Zeniark Philippines Consulting Corp** (Feb 2024 - Present) as a Back End Developer & Data Engineer. She's been recognized as **Employee of the Year** in both 2024 and 2025!\n\nHer work includes Email Marketing systems, e-Procurement development, and building high-performance data pipelines.`
  },
  {
    keywords: ['24task', 'previous', 'past job', 'former'],
    response: `Before her current role, Yancy worked at **24Task** (Jul 2022 - Nov 2023) as a Back End Developer. She built and optimized APIs for Android, iOS, and web applications for their task marketplace and Influence Bird (influencer marketing platform), using AWS Serverless architecture.`
  }
];

const getResponse = (input) => {
  const lowerInput = input.toLowerCase().trim();

  if (!lowerInput) {
    return "Could you please type a question? I'm here to help!";
  }

  // Find best matching response
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lowerInput.includes(keyword)) {
        score += keyword.length; // Longer keyword matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.response;
  }

  // Fallback
  return `I'm not sure about that, but I can help you with:\n\n• Yancy's **skills** and tech stack\n• Her **work experience**\n• **Projects** she's built\n• **Education** background\n• **Awards** and achievements\n• How to **contact** her\n\nTry asking about any of these!`;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! 👋 I'm Yancy's portfolio assistant. Ask me about her skills, experience, projects, or anything else!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMessage = { type: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = getResponse(input);
    const typingDelay = Math.min(800 + response.length * 8, 2500);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
    }, typingDelay);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chat-avatar">🤖</span>
              <div>
                <p className="chat-header-name">Portfolio Assistant</p>
                <p className="chat-header-status">Online</p>
              </div>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.type}`}>
                <p dangerouslySetInnerHTML={{ 
                  __html: msg.text
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, '<br />')
                }} />
              </div>
            ))}
            {isTyping && (
              <div className="chat-bubble bot typing-bubble">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              placeholder="Ask about Yancy..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="chat-send" onClick={handleSend} aria-label="Send message">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
