import { motion } from 'framer-motion';
import { Linkedin, Mail, Instagram, Facebook, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import profile from "../assets/profile.jpg";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

            <div className="max-w-5xl w-full text-center space-y-10 z-10">

                {/* Profile */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block"
                >
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-2 border-2 border-dashed border-primary/50 relative">
                        <div className="w-full h-full rounded-full overflow-hidden bg-card-dark shadow-glow-blue">
                            <img src={profile} alt="Abdul Kalam" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-2 border-t-primary border-b-primary border-r-transparent border-l-transparent animate-spin-slow" />
                    </div>
                </motion.div>

                {/* Intro */}
                <div className="space-y-4">
                    <h2 className="text-2xl text-gray-300">Hi, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        Abdul Kalam
                    </h1>
                    <p className="text-primary font-mono text-xl">
                        AI & ML Engineering Student | Python Developer
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Passionate about building intelligent solutions using Python, Machine Learning and modern technologies. Actively seeking internship opportunities.
                    </p>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap justify-center gap-3">
                    {["Python", "Machine Learning", "MySQL", "MongoDB", "HTML", "CSS", "Git"].map(skill => (
                        <span key={skill} className="px-4 py-2 rounded-full border border-gray-800 bg-card-dark text-gray-300 hover:border-primary hover:text-primary transition">
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-card-dark border border-gray-800 p-6 rounded-xl text-center space-y-2 hover:shadow-glow-blue transition">
                        <MapPin className="mx-auto text-primary" />
                        <h3 className="text-white font-semibold">Location</h3>
                        <p className="text-gray-400 text-sm">Bangalore, Karnataka, India</p>
                    </div>

                    <div className="bg-card-dark border border-gray-800 p-6 rounded-xl text-center space-y-2 hover:shadow-glow-blue transition">
                        <Briefcase className="mx-auto text-primary" />
                        <h3 className="text-white font-semibold">Expertise</h3>
                        <p className="text-gray-400 text-sm">AI/ML, Problem Solving</p>
                    </div>

                    <div className="bg-card-dark border border-gray-800 p-6 rounded-xl text-center space-y-2 hover:shadow-glow-blue transition">
                        <Mail className="mx-auto text-primary" />
                        <h3 className="text-white font-semibold">Contact</h3>
                        <p className="text-gray-400 text-sm">kalamabdulas2014@gmail.com</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 pt-6">
                    <Link to="/projects" className="px-8 py-3 bg-primary text-black font-bold rounded-lg hover:shadow-glow-blue transition">
                        View Projects
                    </Link>
                    <Link to="/contact" className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition">
                        Contact Me
                    </Link>
                </div>

                {/* Connect With Me */}
                <div className="pt-10 space-y-4">
                    <h2 className="text-xl text-white font-semibold">Connect with me</h2>

                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/abdulkalam7880"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-black rounded-full hover:scale-110 transition"
                        >
                            <Linkedin />
                        </a>

                        <a
                            href="mailto:kalamabdulas2014@gmail.com"
                            className="p-4 bg-black rounded-full hover:scale-110 transition"
                        >
                            <Mail />
                        </a>

                        <a
                            href="https://www.instagram.com/abdulkalam7880"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-black rounded-full hover:scale-110 transition"
                        >
                            <Instagram />
                        </a>

                        <a
                            href="https://www.facebook.com/share/1TtEzwCNC3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-black rounded-full hover:scale-110 transition"
                        >
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
