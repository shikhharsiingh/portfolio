import React, { useEffect, useRef } from 'react';
import { Code, Database, Server, Globe, Cpu, LineChart } from 'lucide-react';

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
        { name: "Python", level: 95 },
        { name: "Javascript/Typescript", level: 85 },
        { name: "C/C++", level: 75 },
        { name: "Dart", level: 60 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe size={24} />,
      skills: [
        { name: "FastAPI", level: 95 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 85 },
        // { name: "Vue.js", level: 65 }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Neo4J", level: 80 },
        { name: "Redis", level: 75 },
        { name: "InfluxDB", level: 80 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Server size={24} />,
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 80 },
        { name: "Github", level: 95 },
        { name: "GCP", level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Cpu size={24} />,
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 99 },
        { name: "Scikit-learn", level: 85 },
        { name: "Computer Vision", level: 95 },
        { name: "NLP", level: 90 }
      ]
    },
    {
      title: "Data Analysis",
      icon: <LineChart size={24} />,
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 85 },
        { name: "Data Visualization", level: 85 },
        // { name: "Statistical Analysis", level: 75 },
        // { name: "Big Data Tools", level: 70 }
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
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                      ></div>
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