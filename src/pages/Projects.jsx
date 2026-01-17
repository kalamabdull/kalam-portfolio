import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import crm from "../assets/projects/crm.png";
import sign from "../assets/projects/signlanguage.png";
import recommender from "../assets/projects/recommendation.png";

const projects = [
    {
        title: "CRM Application",
        description:
            "A CRM system built using Python and MySQL with full CRUD operations for managing customer data efficiently.",
        image: crm,
        tech: ["Python", "MySQL"],
        code: "#",
        live: "#",
    },
    {
        title: "AI-Based Sign Language Interpreter",
        description:
            "Real-time hand gesture recognition system using TensorFlow and MediaPipe to convert sign language into text.",
        image: sign,
        tech: ["Python", "TensorFlow", "MediaPipe"],
        code: "#",
        live: "#",
    },
    {
        title: "Movie Recommendation System",
        description:
            "Machine learning based recommendation engine that suggests personalized movies using user preferences.",
        image: recommender,
        tech: ["Python", "Machine Learning"],
        code: "#",
        live: "#",
    },
];

const Projects = () => {
    return (
        <div className="min-h-screen px-6 py-20 text-white">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary">Projects</h1>
                    <p className="text-gray-400 mt-2">
                        Some things I’ve built with love, logic, and lots of coffee ☕
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="bg-card-dark border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-glow-blue transition"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-48 w-full object-cover"
                            />

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs bg-black border border-gray-700 rounded-full text-gray-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 pt-2">
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        <Github size={16} /> Code
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        <ExternalLink size={16} /> Live
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
