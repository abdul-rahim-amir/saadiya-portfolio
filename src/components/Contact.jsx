// --- src/components/Contact.jsx ---
import React from "react";

const Contact = () => {
  return (
    <section className="bg-purple-900 text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Me</h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        I'm always open to discussing product design work or partnership opportunities. Feel free to reach out using the form below.
      </p>
      <form className="max-w-2xl mx-auto bg-purple-800 p-8 rounded-xl shadow-md grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-purple-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-purple-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="p-3 rounded-lg bg-purple-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded-lg bg-purple-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
