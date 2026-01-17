import { motion } from 'framer-motion';
import profile from "../assets/profile.jpg";

const About = () => {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-primary font-mono text-lg mb-2">My Story</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-glow-blue"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image Section */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="aspect-square rounded-2xl overflow-hidden bg-card-dark border border-gray-800 shadow-glow-blue/20 relative group"
                    >
                        <img
                            src={profile}
                            alt="Abdul Kalam"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-gray-300 text-lg leading-relaxed"
                    >
                        <p>
                            Hello! I'm <span className="text-primary font-semibold">Abdul Kalam</span>, an AI & ML engineering student passionate about building real-world applications using technology.
                        </p>

                        <p>
                            I have strong foundations in Python, Java, and web technologies, and I enjoy working on projects involving machine learning, databases, and software development. My work includes projects like a CRM system, an AI-based sign language detector, and a movie recommendation system.
                        </p>

                        <p>
                            I am continuously learning and exploring new technologies, and I’m actively seeking opportunities where I can apply my skills through internships and entry-level roles.
                        </p>

                        {/* Education */}
                        <div className="pt-4">
                            <h3 className="text-white font-bold mb-4">Education</h3>
                            <div className="border-l-2 border-primary pl-4 space-y-4">
                                <div>
                                    <h4 className="text-white font-medium">
                                        Bachelor of Engineering (B.E) in Artificial Intelligence & Machine Learning
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        Impact College of Engineering and Applied Sciences • 2023 – 2027 • CGPA: 8.0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
