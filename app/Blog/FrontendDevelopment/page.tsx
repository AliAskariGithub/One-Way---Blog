// pages/FrontendDevelopment.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";


const FrontendDevelopment = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">
            Frontend <span className="text-blue-500"> Development</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            Master the art of building beautiful, interactive, and responsive user interfaces. Explore essential frontend skills and tools that drive modern web experiences.
          </p>
        </div>

        {/* Frontend Development Topics */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Core Frontend Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                HTML & CSS
              </h3>
              <p>
                Learn the basics of HTML for structure and CSS for styling to create visually appealing websites.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                JavaScript Basics
              </h3>
              <p>
                Understand JavaScript fundamentals to add interactivity and logic to web pages.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                React & Next.js
              </h3>
              <p>
                Dive into popular frameworks to build dynamic, fast, and efficient frontend applications.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Responsive Design
              </h3>
              <p>
                Learn techniques to create websites that look great on any device, from desktops to smartphones.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                CSS Frameworks
              </h3>
              <p>
                Explore frameworks like Tailwind CSS and Bootstrap for faster and more flexible styling.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Version Control
              </h3>
              <p>
                Master version control with Git to track changes and collaborate efficiently on projects.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Ready to Build Your Skills?
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Start creating stunning and interactive web interfaces by mastering
            essential frontend tools and frameworks. 
          </p>
          <Button
            variant={"default"}
            className="text-2xl p-6 text-white"
          >
            Start Learning
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FrontendDevelopment;
