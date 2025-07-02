// --- src/components/Footer.jsx ---
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-purple-950 text-gray-300 py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">Saadiya Afzaal</h3>
                    <p className="text-sm text-gray-400">UI/UX Designer crafting digital experiences.</p>
                </div>

                <div className="flex gap-4 text-white">
                    <a href="#" className="hover:text-pink-400 transition">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="hover:text-pink-400 transition">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="#" className="hover:text-pink-400 transition">
                        <FaGithub size={20} />
                    </a>
                    <a href="#" className="hover:text-pink-400 transition">
                        <FaFacebookF size={20} />
                    </a>
                </div>
            </div>

            <div className="mt-6 border-t border-purple-800 pt-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Saadiya Afzaal. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
