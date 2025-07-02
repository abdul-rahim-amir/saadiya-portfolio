import React from "react";

const About = () => {
    return (
        <section className="bg-purple-900 text-white px-6 md:px-20 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
            <p className="max-w-3xl mx-auto text-center text-gray-300 text-sm md:text-base">
                I'm a dedicated UI/UX designer with a strong focus on creating meaningful and user-centric digital experiences. Over the years,
                I've worked with startups, agencies, and individuals to bring their ideas to life through clean, functional, and modern design.
                My design process revolves around understanding user behavior, solving problems creatively, and delivering intuitive interfaces.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="text-pink-400 text-xl font-semibold">5+ Years</h3>
                    <p className="text-gray-300">Experience</p>
                </div>
                <div>
                    <h3 className="text-blue-400 text-xl font-semibold">30+ Projects</h3>
                    <p className="text-gray-300">Completed</p>
                </div>
                <div>
                    <h3 className="text-pink-400 text-xl font-semibold">100% Focus</h3>
                    <p className="text-gray-300">Client Satisfaction</p>
                </div>
            </div>
        </section>
    );
};

export default About;
