import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
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
              }, index * 150);
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

  const experiences = [
    {
      title: "Graduate Researcher",
      company: "CORAL Lab, ASU School of Computing and Augmented Intelligence",
      period: "01/2025 - Present",
      description: "Working as a graduate researcher with Dr. Vivek Gupta, focusing on reserach involving prompt engineering on Vision Language models, and developing novel models for multimodal tasks. \nSubmitted first author paper to ACL'2025.",
      technologies: ["HPC", "Python", "Gemini", "GPT", "Qwen"]
    },
    {
      title: "Graduate Researcher",
      company: "JLiang Lab, ASU College of Health Solutions",
      period: "01/2024 - 08/2024",
      description: "Worked as a graduate researcher under Dr. Jianming Liang, focusing on studying, training, and evaluating novel and state-of-the-art convolutional and transformer-based models on benchmark Chest X-Ray and Fundus datasets. \nContributed to research culminating in pending co-authorship on an upcoming Nature paper.",
      technologies: ["HPC", "PyTorch", "Timm", "Swin", "ConvNext", "Python"]
    },
    {
      title: "Machine Learning Intern",
      company: "Datahive Labs(now Famdo), Bangalore, India",
      period: "01/2022 - 06/2022",
      description: "Led machine learning initiatives during an internship to develop innovative medical applications for Indian society, achieving rapid adoption with 5,000 users and 100 daily active users within two months. Managed end-to-end development, including full-stack responsibilities, CI/CD implementation, integration with government APIs, utility tools, and web scrapers for seamless and scalable deployment.",
      technologies: ["Python", "Flask", "AWS Lambda", "AWS DynamoDB", "Flutter", "Javascript", "FHIR"]
    },
    {
      title: "Software Development Intern",
      company: "LilySys Solutions, New Delhi, India",
      period: "07/2021 - 01/2022",
      description: "Worked as an intern in the software development team, focusing on developing multiple softwares for clients.",
      technologies: ["Python", "Flask", "Javascript", "React"]
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll fade-in">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-700 transform md:translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-on-scroll ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 dark:border-blue-400 transform -translate-x-1/2 flex items-center justify-center">
                  <Briefcase size={14} className="text-blue-500 dark:text-blue-400" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
                  <div className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover-card ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;