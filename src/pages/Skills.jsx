import { motion } from "framer-motion";
import {
    SiPython,
    SiMysql,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiGit,
    SiJavascript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Java", icon: FaJava, color: "#007396" },
];

const Skills = () => {
    return (
        <div className="min-h-screen px-6 py-20 text-white">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary">My Skills</h1>
                    <p className="text-gray-400 mt-2">
                        Technical expertise blended with creativity — explore my core competencies below.
                    </p>
                </div>

                {/* Floating Icons */}
                <div className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 rounded-2xl p-10 flex flex-wrap justify-center gap-8">

                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                }}
                                whileHover={{ scale: 1.15 }}
                                className="w-24 h-24 rounded-full bg-black border border-primary/30 flex flex-col items-center justify-center shadow-glow-blue"
                            >
                                <Icon size={32} color={skill.color} />
                                <span className="text-xs text-gray-300 mt-1">{skill.name}</span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Skill Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Programming Languages */}
                    <div className="bg-card-dark border border-gray-800 p-6 rounded-xl">
                        <h2 className="text-primary font-semibold mb-3">Programming Languages</h2>
                        <ul className="text-gray-400 space-y-1">
                            <li>• Python</li>
                            <li>• Java</li>
                            <li>• JavaScript</li>
                        </ul>
                    </div>

                    {/* Web Technologies */}
                    <div className="bg-card-dark border border-gray-800 p-6 rounded-xl">
                        <h2 className="text-primary font-semibold mb-3">Web Technologies</h2>
                        <ul className="text-gray-400 space-y-1">
                            <li>• HTML</li>
                            <li>• CSS</li>
                        </ul>
                    </div>

                    {/* Databases & Tools */}
                    <div className="bg-card-dark border border-gray-800 p-6 rounded-xl">
                        <h2 className="text-primary font-semibold mb-3">Databases & Tools</h2>
                        <ul className="text-gray-400 space-y-1">
                            <li>• MySQL</li>
                            <li>• MongoDB</li>
                            <li>• Git</li>
                        </ul>
                    </div>

                    {/* Core Concepts */}
                    <div className="bg-card-dark border border-gray-800 p-6 rounded-xl">
                        <h2 className="text-primary font-semibold mb-3">Core Concepts</h2>
                        <ul className="text-gray-400 space-y-1">
                            <li>• Data Structures & Algorithms</li>
                            <li>• Machine Learning</li>
                            <li>• Deep Learning</li>
                        </ul>
                    </div>

                    {/* Soft Skills */}
                    <div className="bg-card-dark border border-gray-800 p-6 rounded-xl">
                        <h2 className="text-primary font-semibold mb-3">Soft Skills</h2>
                        <ul className="text-gray-400 space-y-1">
                            <li>• Teamwork</li>
                            <li>• Problem Solving</li>
                            <li>• Creativity</li>
                            <li>• Adaptability</li>
                            <li>• Communication</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
