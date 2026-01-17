import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Resume = () => {
    return (
        <div className="min-h-screen px-6 py-20 text-white">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary">Resume</h1>
                    <p className="text-gray-400 mt-2">A quick glance at my journey</p>
                </div>

                {/* Main Resume Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-card-dark border border-gray-800 rounded-xl p-8 space-y-8 shadow-glow-blue"
                >

                    {/* Top Section */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-2xl font-bold text-primary">Abdul Kalam</h2>
                            <p className="text-gray-400">AI & ML Engineering Student</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Passionate about building intelligent systems using Python, Machine Learning and modern technologies.
                                Actively seeking internships and entry-level opportunities.
                            </p>
                        </div>

                        <div className="bg-black/40 border border-gray-800 rounded-lg p-4 text-sm text-gray-400">
                            <span className="text-primary font-semibold">Professional Summary</span>
                            <p className="mt-2">
                                Motivated AI/ML student with hands-on experience in Python, ML models, and real-world projects
                                like CRM systems, sign language detection, and recommendation systems.
                            </p>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Education</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">

                            <li>
                                <strong className="text-white">
                                    Bachelor of Engineering (B.E) – Artificial Intelligence & Machine Learning
                                </strong>
                                <br />
                                Impact College of Engineering and Applied Sciences (2023 – 2027)
                                <br />
                                CGPA: <span className="text-primary">8.0</span>
                            </li>

                            <li>
                                <strong className="text-white">12th Board</strong> — Vijaya Composite PU College
                                <br />
                                Karnataka Board, 2023
                                <br />
                                Percentage: <span className="text-primary">80%</span>
                            </li>

                            <li>
                                <strong className="text-white">10th Board</strong> — Capitol Public School
                                <br />
                                CBSE Board, 2021
                                <br />
                                Percentage: <span className="text-primary">85%</span>
                            </li>

                        </ul>
                    </div>


                    {/* Projects */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Projects</h3>
                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                            <li>CRM Application using Python & MySQL</li>
                            <li>AI-based Sign Language Interpreter</li>
                            <li>Movie Recommendation System</li>
                        </ul>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Skills</h3>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {[
                                "Python",
                                "Machine Learning",
                                "MySQL",
                                "MongoDB",
                                "HTML",
                                "CSS",
                                "Git",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-black border border-gray-700 rounded-full text-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* PDF Preview */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Resume Preview</h3>

                        <div className="border border-gray-800 rounded-lg overflow-hidden h-[500px]">
                            <iframe
                                src="/resume.pdf"
                                title="Resume PDF"
                                className="w-full h-full bg-black"
                            />
                        </div>
                    </div>

                    {/* Download Button */}
                    <div>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-black font-semibold rounded-lg hover:opacity-90 transition"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;
