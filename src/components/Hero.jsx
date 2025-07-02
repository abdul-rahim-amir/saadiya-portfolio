import React from "react";
import avatar from "../assets/avatar.png"; // Replace with your actual image name

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-purple-950 to-purple-800 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
                <p className="text-sm tracking-widest text-pink-400 mb-2">WELCOME TO MY WORLD ✨</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Hi, I'm <span className="text-white">Saadiya Afzaal</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                    <span className="text-pink-400">UI </span> & <span className="text-blue-400"> UX</span> Designer
                </h2>
                <p className="mt-4 text-sm text-gray-300">
                    Passionate UI/UX designer. I create intuitive and visually appealing digital experiences.
                    I transform ideas into seamless designs that meet users' expectations.
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-white text-purple-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                        My Projects
                    </button>
                    <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-800 transition">
                        Download CV
                    </button>
                </div>
                <div className="flex gap-4 mt-6">
                    {['instagram', 'linkedin', 'github', 'facebook'].map((icon, idx) => (
                        <div key={idx} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-800 hover:bg-pink-400 transition">
                            <i className={`fab fa-${icon}`}></i>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                <div className="absolute w-full h-full bg-gradient-to-br from-purple-700 to-pink-500 rounded-[30px] rotate-6 z-0"></div>
                <img src={avatar} alt="Avatar" className="relative w-full h-full object-contain z-10" />
            </div>
        </section>
    );
};

export default Hero;