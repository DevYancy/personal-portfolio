import React, { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

const portfolioData = {
  name: 'Yancy Canejo Almirañez',
  role: 'Backend & Data Engineer',
  experience: '4+ years as Backend Developer, 1+ year as Data Engineer',
  location: 'Pampanga, Central Luzon, Philippines',
  email: 'yancyalmiranez@gmail.com',
  phone: '0916-467-7881',
  github: 'github.com/DevYancy',
  linkedin: 'linkedin.com/in/yancy-canejo',
  education: 'Bachelor of Science in Computer Science from Sta. Elena Institute of Science and Technology Inc. (2018-2022), specialized in Java Programming and Database Systems',
  skills: ['Node.js', 'NestJS', 'Python', 'Dagster', 'SQL', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Express', 'TypeScript', 'DynamoDB'],
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
    response: `Hey there! 👋 I'm Yancy's portfolio assistant. I can tell you about his skills, experience, projects, or how to get in touch. What would you like to know?`
  },
  {
    keywords: ['who', 'about', 'yourself', 'introduce', 'tell me about'],
    response: `I'm the portfolio assistant for **${portfolioData.name}**, a ${portfolioData.role} with ${portfolioData.experience}. He builds scalable backend systems, RESTful APIs, and high-volume data pipelines. Want to know more about his skills or experience?`
  },
  {
    keywords: ['skill', 'tech', 'stack', 'technology', 'tools', 'language', 'framework', 'proficient'],
    response: `Yancy's tech stack includes:\n\n• **Backend:** Node.js, NestJS, Express, TypeScript\n• **Data:** Python, Dagster, SQL, ETL pipelines\n• **Databases:** PostgreSQL, MongoDB, DynamoDB, Oracle\n• **Cloud/DevOps:** AWS, Docker, Serverless\n\nHe specializes in database optimization, data modeling, and cloud-based solutions.`
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
    response: `Yancy holds a **Bachelor of Science in Computer Science** from Sta. Elena Institute of Science and Technology Inc. (2018-2022). He specialized in Java Programming and Database Systems.`
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'connect', 'phone', 'number'],
    response: `You can reach Yancy through:\n\n📧 Email: yancyalmiranez@gmail.com\n📱 Phone: 0916-467-7881\n💼 LinkedIn: linkedin.com/in/yancy-canejo\n💻 GitHub: github.com/DevYancy\n\nHe's always open to new opportunities and collaborations!`
  },
  {
    keywords: ['location', 'where', 'based', 'live', 'country', 'city'],
    response: `Yancy is based in **Pampanga, Central Luzon, Philippines**.`
  },
  {
    keywords: ['backend', 'api', 'rest', 'server'],
    response: `Yancy is a strong backend developer specializing in:\n\n• Building and optimizing RESTful APIs\n• Node.js & NestJS for scalable services\n• Database design & query optimization\n• Authentication, authorization & security\n• Background jobs, queues & schedulers\n\nHe's built APIs for marketing platforms, procurement systems, and marketplace apps.`
  },
  {
    keywords: ['data', 'pipeline', 'etl', 'dagster', 'engineer'],
    response: `As a Data Engineer, Yancy works with:\n\n• **Dagster** for pipeline orchestration\n• High-performance ETL processes handling millions of records\n• Data ingestion, transformation & processing\n• Structured and unstructured datasets\n• Improving data accuracy and processing efficiency\n\nHe's built pipelines that transform raw data into actionable insights.`
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
  return `I'm not sure about that, but I can help you with:\n\n• Yancy's **skills** and tech stack\n• His **work experience**\n• **Projects** he's built\n• **Education** background\n• How to **contact** him\n\nTry asking about any of these!`;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! 👋 I'm Yancy's portfolio assistant. Ask me about his skills, experience, projects, or anything else!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

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
