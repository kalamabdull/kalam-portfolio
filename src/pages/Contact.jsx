import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const response = await fetch("https://formspree.io/f/mykkkoar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setSuccess(true);
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            alert("Something went wrong.");
        }

        setLoading(false);
    };


    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-dark text-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-xl bg-card-dark border border-gray-800 rounded-2xl p-8 shadow-glow-blue space-y-6"
            >
                {/* Title */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">
                        Let’s Connect & Collaborate 🤝
                    </h1>
                    <p className="text-gray-400 mt-2 text-sm">
                        Whether it's a project, collaboration, or just saying hi — I’d love to hear from you.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-5">
                    {[Github, Linkedin, Mail, Instagram, Facebook].map((Icon, i) => (
                        <div
                            key={i}
                            className="p-3 bg-black rounded-full border border-gray-700 shadow-glow-blue hover:scale-110 transition cursor-pointer"
                        >
                            <Icon size={20} />
                        </div>
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={sendEmail} className="space-y-4">
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />

                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />

                    <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Your Message..."
                        required
                        className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white resize-none focus:outline-none focus:border-primary"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-gradient-to-r from-primary to-accent text-black font-semibold rounded-lg hover:opacity-90 transition"
                    >
                        {loading ? "Sending..." : "Send Message 🚀"}
                    </button>
                </form>

                {/* Success message */}
                {success && (
                    <p className="text-green-400 text-center text-sm">
                        ✅ Message sent successfully!
                    </p>
                )}
            </motion.div>
        </div>
    );
};

export default Contact;
