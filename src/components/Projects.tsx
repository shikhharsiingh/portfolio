import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.stagger-item');
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

  const projects = [
    {
      title: "Grocery Price Tracker",
      description: "A web app developed on a robust microservices-based <strong>ETL</strong> pipeline to dynamically monitor, extract, and update grocery item prices across the <strong>50 US states</strong> from major US grocery chains Deployed the site using <strong>Google Kubernetes Engine</strong> and <strong>Netlify</strong>.",
      image: "prices_tracker.png",
      technologies: ["Python", "FastAPI", "Docker", "RabbitMQ", "Neo4J", "InfluxDB", "Kubernetes", "ReactJS", "Google Cloud Platform"],
      liveLink: "https://grocery-dynamic-pricing.netlify.app/",
      // githubLink: "https://github.com/example/content-analyzer"
    },
    {
      title: "OrderBook Simulation",
      description: "A scalable, fault-tolerant microservices-based orderbook simulation system with optimized <strong>real-time order matching</strong> with <strong>RESTful APIs</strong> to enable seamless order <strong>placement, modification, deletion</strong>, and <strong>real-time trade updates</strong>.",
      image: "orderapi.png",
      technologies: ["Python", "FastAPI", "Redis", "Docker", "HTML-CSS"],
      // liveLink: "https://example.com/task-manager",
      githubLink: "https://github.com/shikhharsiingh/order-api"
    },
    {
      title: "LexiAid",
      description: `A webapp with an optimized <strong>GPT</strong> model fine-tuned with <strong>prompt crafting</strong> and <strong>patching techniques</strong>, achieving a <strong>20% improvement</strong> in accuracy and relevance for generating textbook-aligned illustrative images.<br /><br />
      <strong>Received the NITKAA 2nd Best Innovation Project Award (2019 Batch)</strong>.`,
      image: "nitkkr.png",
      technologies: ["Python", "GPT-2", "DALL-E", "React"],
    },
    {
      title: "AI-Snake",
      description: "The <strong>original snake game</strong> with the snake agent trained using a <strong>Deep Q-Network (DQN)</strong> algorithm to achieve a high score. The game is built using <strong>Pygame</strong> and the agent is trained using <strong>PyTorch</strong>.",
      image: "aisnake.png",
      technologies: ["Python", "Pygame", "PyTorch", "DQN"],
      // liveLink: "https://example.com/secure-share",
      githubLink: "https://github.com/shikhharsiingh/AI-snake.git"
    },
    {
      title: "DCGAN-PyTorch",
      description: "A <strong>Deep Convolutional Generative Adversarial Network (DCGAN)</strong> model trained on the <strong>MNIST handwritten dataset</strong> to generate fake handwritten digits from noise.",
      image: "dcgan.png",
      technologies: ["Python", "PyTorch", "MNIST"],
      // liveLink: "https://example.com/ar-learning",
      githubLink: "https://github.com/shikhharsiingh/DCGAN-PyTorch.git"
    },
    {
      title: "Ball Balancer",
      description: "A <strong>ball balancing robot</strong> simulation that uses a <strong>proportional-integral-derivative (PID) controller</strong> to balance the ball on the platform. The robot uses image processing to detect the ball's position and adjust the platform's angle. <br /><br /> Stood in <strong>top 30</strong> teams as a team of 4 among <strong>600 teams</strong> in a <strong>national competition</strong> involving use of Image Processing and Robotics, <strong>E-Yantra 2020</strong>.",
      image: "eyrc.png",
      technologies: ["Python", "OpenCV", "PID Controller"],
      // liveLink: "https://example.com/supply-chain",
      githubLink: "https://github.com/thedevyansh/eYRC-Tasks"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover-card stagger-item"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: project.description }}></p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  {project.liveLink ? <><a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a></> : <></>}

                  {project.githubLink ? <><a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a></> : <></>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/shikhharsiingh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            <span>View More Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;