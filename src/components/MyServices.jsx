// --- src/components/MyServices.jsx ---
import React from "react";
import { FaPaintBrush, FaMobileAlt, FaFigma } from "react-icons/fa";

const MyServices = () => {
    const services = [
        {
            icon: <FaPaintBrush className="text-pink-400 text-4xl mb-4" />,
            title: "UI Design",
            description:
                "Beautiful, modern user interfaces that bring digital products to life with clarity and visual appeal.",
        },
        {
            icon: <FaMobileAlt className="text-blue-400 text-4xl mb-4" />,
            title: "UX Research",
            description:
                "User-focused research and testing to ensure seamless and enjoyable experiences across all platforms.",
        },
        {
            icon: <FaFigma className="text-pink-400 text-4xl mb-4" />,
            title: "Prototyping",
            description:
                "Interactive wireframes and prototypes to visualize design flows before final implementation.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-purple-950 to-purple-900 text-white py-16 px-6 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-purple-800 p-8 rounded-2xl shadow-lg hover:shadow-pink-400/40 transition"
                    >
                        {service.icon}
                        <h3 className="text-xl font-semibold text-pink-300 mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyServices;
