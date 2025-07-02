import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-900 to-purple-700 text-white shadow-md">
            <div className="text-2xl font-bold tracking-wider">🌐</div>
            <ul className="hidden md:flex gap-8 text-sm font-medium">
                <li className="hover:text-pink-300 cursor-pointer">Home</li>
                <li className="hover:text-pink-300 cursor-pointer">Services</li>
                <li className="hover:text-pink-300 cursor-pointer">My Projects</li>
                <li className="hover:text-pink-300 cursor-pointer">Reviews</li>
                <li className="hover:text-pink-300 cursor-pointer">Contact</li>
            </ul>
            <button className="bg-pink-500 px-4 py-2 rounded-full hover:bg-pink-600 transition">Contact</button>
        </nav>
    );
};

export default Navbar;