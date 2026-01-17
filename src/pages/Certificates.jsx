import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";

const certificates = [
    {
        title: "AI Specialist Certification",
        file: "/certificates/ai.pdf",
    },
    {
        title: "Cynux Era Ethical Hacking Certification",
        file: "/certificates/cynux.pdf",
    },
    {
        title: "TCM Ethical Hacking Certification",
        file: "/certificates/tcm-ethical.pdf",
    },
    {
        title: "TCM Soft Skills Certification",
        file: "/certificates/tcm-softskills.pdf",
    },
];

const Certificates = () => {
    return (
        <div className="min-h-screen px-6 py-20 text-white">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold text-primary">Certificates</h1>
                    <p className="text-gray-400">
                        Some professional certifications I’ve earned through continuous learning.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="bg-card-dark border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-glow-blue transition"
                        >
                            <h2 className="text-lg font-semibold text-white mb-4">
                                {cert.title}
                            </h2>

                            {/* Buttons */}
                            <div className="flex gap-6">
                                {/* View PDF */}
                                <a
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                    <ExternalLink size={16} />
                                    View
                                </a>

                                {/* Download PDF */}
                                <a
                                    href={cert.file}
                                    download
                                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                    <Download size={16} />
                                    Download
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
