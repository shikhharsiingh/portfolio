import React, { useEffect, useRef } from 'react';
import { Code, Database, Server, Globe, Cpu, LineChart } from 'lucide-react';
import { color } from 'framer-motion';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { description: "→ My primary programming language is <span class='highlight'>Python</span>. I have made most of my projects in Python.", level: 95 },
        { description: "→ However, I also have experience with <span class='highlight'>Javascript</span>. Adhering to better programming practices, I, now, write all my javascript codes in <span class='highlight'>Typescript</span>.", level: 85 },
        { description: "→ <span class='highlight'>C and C++</span> are the languages with which I started my coding journey. I learnt all the basics of programming, pointers, memory management, data structures, and algorithms with these languages.", level: 75 },
        { description: "→ During my internship at Datahive Labs, I learnt Flutter and developed the backend of the webapp using <span class='highlight'>Dart</span>.", level: 60 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe size={24} />,
      skills: [
        { description: "→ <span class='highlight'>FastAPI</span> is my go-to for any RESTful API backend.", level: 95 },
        { description: "→ <span class='highlight'>React</span> in some form is the go-to for almost everybody for their frontend.", level: 80 },
        { description: "→ Before I seriously dove into the development realm, I had some experience with creating backends and then, <span class='highlight'>Node.js</span> was my go-to and actually the first framework I learnt to create API backends.", level: 80 },
        { description: "→ Without <span class='highlight'>HTML & CSS</span>, no web app can exist and I have quite some experience in this as I designed my department's website at <strong>National Institute of Technology Kurukshetra</strong> as a side project.", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { description: "→ <span class='highlight'>PostgreSQL</span>", level: 85 },
        { description: "→ <span class='highlight'>MongoDB</span>", level: 80 },
        { description: "→ For my <strong>Grocery Tracker</strong> project, the obvious choice of database is <span class='highlight'>Neo4J</span> as Neo4J is the perfect choice for a graph type association between items.", level: 80 },
        { description: "→ I have good experience using <span class='highlight'>Redis</span> now, mostly as a cache but also as a database for the high throughtput order-matching system.", level: 75 },
        { description: "→ The Price tracker needs a timeseries database and <span class='highlight'>InfluxDB</span> is the perfect choice.", level: 80 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Server size={24} />,
      skills: [
        { description: "→ During my internship at Datahive Labs, I worked on creating the production backend using <span class='highlight'>AWS</span> Lambda", level: 75 },
        { description: "→ <span class='highlight'>Docker</span> is my staple development tool. If I develop anything, I will be using Docker.", level: 95 },
        { description: "→ For production ready applications with containerized microservice architectures, <span class='highlight'>Kubernetes</span> is the absolute perfect choice.", level: 80 },
        { description: "→ Apart from training machine learnnig models, every development cycle of mine needs the skill of <span class='highlight'>Git</span>", level: 95 },
        { description: "→ I have been using <span class='highlight'>GCP</span> a lot, lately, for deploying my backend services and GCP's services.", level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Cpu size={24} />,
      skills: [
        { description: "→ I have had quite some experience with <span class='highlight'>TensorFlow</span>. During my starting years of learning machine learning, I learnt it using Tensorflow.", level: 80 },
        { description: "→ <span class='highlight'>PyTorch</span> is my go to for all things ML.", level: 99 },
        { description: "→ When I want to use pre-configured simple and ensemble models, <span class='highlight'>Scikit-learn</span> is my choice.", level: 85 },
        { description: "→ <span class='highlight'>Computer Vision</span> is one of my two favourite ML researh topics. After learning the basic ML, I had huge interest in CV and I have had exprience with training the latest CV models like <strong>Swin, ConvNext, InternImage</strong>, etc.", level: 95 },
        { description: "→ <span class='highlight'>NLP</span> is the other favorite ML research topic of mine. I have exprience finetuning <strong>GPT-2</strong> for a specific translation task. I also have research experience in prompt engineering with the latest LLM models like <strong>ChatGPT</strong> and <strong>Gemini</strong>.", level: 90 }
      ]
    },
    {
      title: "Data Analysis",
      icon: <LineChart size={24} />,
      skills: [
        { description: "→ For reading datasets, <span class='highlight'>Pandas</span> is my staple module. DataFrames make everything easy.", level: 95 },
        { description: "→ When I want to do efficient math operations involving arrays and tensors, I go for <span class='highlight'>NumPy</span>.", level: 85 },
        { description: "→ Aprt from taking a class in my masters about <span class='highlight'>Data Visualization</span>, I have very good experience in visualising data.", level: 85 }
      ]
    }

  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll fade-in">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover-card animate-on-scroll scale-in"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: skill.description }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
