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
          Open Source  <span className="text-blue-500"> and Community</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
          Explore the power of open-source projects and build your community.
          </p>
        </div>

        {/* Backend Development Topics */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Open Sources and Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Collaborating on Open Source
              </h3>
              <p>
              Discover how to get started with contributing to open-source projects.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Building a Community
              </h3>
              <p>
              Learn how to grow and sustain an active open-source community.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Contributing to Projects
              </h3>
              <p>
              Learn the best practices for contributing to open-source projects.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Finding Open Issues
              </h3>
              <p>
              Find and solve issues in open-source repositories to start contributing.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Mentoring in Open Source
              </h3>
              <p>
              Discover the rewards and challenges of mentoring in open-source communities.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Community Events
              </h3>
              <p>
              Attend and organize community events to foster collaboration and learning.
              </p>
            </div>

          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Start Your Collaborations.
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            New being is starts from here.
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
