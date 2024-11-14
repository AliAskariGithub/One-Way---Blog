// pages/WebDevelopment.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";


const WebDevelopment = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">
            Web <span className="text-blue-500"> Development</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            Explore the foundational skills, tools, and latest trends in web
            development. Dive into topics covering frontend, backend, frameworks,
            and best practices to elevate your projects and skills.
          </p>
        </div>

        {/* Web Development Topics */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Web Development Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-4 hover:shadow-black bg-white hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Frontend Development
              </h3>
              <p>
                Learn about HTML, CSS, JavaScript, and modern frameworks like
                React and Next.js to create beautiful, responsive user
                interfaces.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-4 hover:shadow-black bg-white hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Backend Development
              </h3>
              <p>
                Understand server-side programming, databases, and APIs to build
                robust, scalable applications.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-4 hover:shadow-black bg-white hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                JavaScript Frameworks
              </h3>
              <p>
                Explore popular frameworks like Vue, Angular, and Svelte to
                expand your skills and choose the right tools for your projects.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-4 hover:shadow-black bg-white hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                UI/UX Design
              </h3>
              <p>
                Discover best practices in UI/UX design to create user-friendly
                and visually appealing websites.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-4 hover:shadow-black bg-white hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Tools and Productivity
              </h3>
              <p>
                Improve your workflow with tools like Git, Webpack, and task
                automation to speed up your development process.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Ready to Level Up?
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Whether you&apos;re building your first project or advancing your
            career, this is the place to learn and grow. Dive into resources,
            tutorials, and projects designed for web developers.
          </p>
          <Link href={""}></Link>
          <Button
            variant={"default"}
            className="text-2xl p-6 "
          >
            Start Learning
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WebDevelopment;
