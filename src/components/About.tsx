import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100 dark:bg-purple-900/20 rounded-tr-full -z-10 opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-2/5 animate-on-scroll slide-in-left">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="me.jpg"
                  alt="Shikhhar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 dark:bg-blue-600 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 dark:bg-purple-600 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll fade-in">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="animate-on-scroll fade-in">
                I am a Computer Science Graduate with a passion for developing innovative solutions and conducting cutting-edge research. I am experienced in full-stack development, CI/CD pipelines, and state-of-the-art computer vision and prompt engineering techniques.
              </p>

              <p className="animate-on-scroll fade-in">
                Throughout my academic and professional journey, I've worked on various projects ranging from web applications to finetuning Large Language Models. I am always eager to learn new technologies and apply them to solve real-world problems.
              </p>

              <p className="animate-on-scroll fade-in">
                When I'm not coding, you can find me playing keyboard, cooking, or reading books. I am also a fitness enthusiast and love to workout daily. I am currently pursuing my Master's in Computer Science from Arizona State University.
              </p>

              <div className="pt-4 animate-on-scroll fade-in">
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-3"></div>
                    <div>
                      <p className="font-medium">M.S. in Computer Science</p>
                      <p className="text-gray-600 dark:text-gray-400">Arizona State University, 2023-2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-3"></div>
                    <div>
                      <p className="font-medium">B.Tech in Information Technology</p>
                      <p className="text-gray-600 dark:text-gray-400">National Institute of Technology Kurukshetra, 2019-2023</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;