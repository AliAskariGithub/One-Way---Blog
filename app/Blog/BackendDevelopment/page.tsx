// pages/BackendDevelopment.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const BackendDevelopment = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">
            Backend <span className="text-blue-500"> Development</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            Dive into the world of server-side programming and database
            management to power web applications. Learn essential backend
            concepts and tools.
          </p>
        </div>

        {/* Backend Development Topics */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Core Backend Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Node.js & Express
              </h3>
              <p>
                Learn the basics of server-side JavaScript with Node.js and
                Express to build efficient, scalable web servers.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Databases & SQL
              </h3>
              <p>
                Understand how databases work and learn SQL to manage and query
                relational databases like MySQL and PostgreSQL.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                NoSQL Databases
              </h3>
              <p>
                Explore NoSQL databases such as MongoDB, which allow for
                flexible data structures and scaling options.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                API Development
              </h3>
              <p>
                Create and manage RESTful and GraphQL APIs to connect frontend
                applications with backend servers.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Authentication & Authorization
              </h3>
              <p>
                Implement secure user authentication and authorization systems
                for controlling access to resources.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Cloud & Deployment
              </h3>
              <p>
                Learn about cloud providers like AWS, Azure, and deployment
                practices to make your applications accessible online.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Start Your Backend Journey
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Explore essential backend tools and techniques to build reliable,
            scalable server-side applications.
          </p>
          <Link href={""}>
            <Button variant={"default"} className="text-2xl p-6 text-white">
              Start Learning
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BackendDevelopment;
