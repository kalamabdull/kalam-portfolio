const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 text-gray-400 py-8 mt-20">
            <div className="max-w-6xl mx-auto px-4 text-center space-y-3">

                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Abdul Kalam. All rights reserved.
                </p>

                <p className="text-xs text-gray-600">
                    Designed & Built with <span className="text-red-500">♥</span> by Abdul Kalam
                </p>

            </div>
        </footer>
    );
};

export default Footer;
