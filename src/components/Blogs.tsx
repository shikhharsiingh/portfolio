import React, { useEffect, useRef } from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const Blogs: React.FC = () => {
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

    const blogs = [
        {
            title: "Setting Up GKE with Ingress & HTTPS for Microservices",
            author: "Shikhhar Siingh",
            date: "February 2025",
            excerpt: "A step-by-step guide to deploying microservices on Google Kubernetes Engine (GKE) with secure HTTPS communication using Ingress, ensuring scalability and reliability for your cloud applications.",
            link: "https://medium.com/p/11e4e5bbcba5"
        }

    ];

    return (
        <section
            id="blogs"
            ref={sectionRef}
            className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Latest <span className="gradient-text">Blogs</span>
                </h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover-card stagger-item"
                        >
                            <div className="flex items-start">
                                <div className="hidden sm:block mr-6">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <FileText size={24} />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-1">{blog.author}</p>
                                    <p className="text-blue-600 dark:text-blue-400 mb-3">
                                        {blog.date}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{blog.excerpt}</p>

                                    {blog.link ? (
                                        <a
                                            href={blog.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                                        >
                                            <span>Read More</span>
                                            <ExternalLink size={16} className="ml-1" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="btn btn-outline inline-flex items-center"
                    >
                        <FileText size={18} className="mr-2" />
                        <span>View All Blogs</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
