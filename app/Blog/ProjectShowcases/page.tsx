// pages/ProjectShowcases.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProjectShowcasesPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">Project <span className="text-blue-500"> Showcases</span></h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            Explore various projects built using cutting-edge technologies. Get inspired and start building your own!
          </p>
        </div>

        {/* Project Grid Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            {/* Project 1 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <img
                src="/images/e-commerce.png"
                alt="Project 1"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">E-Commerce Web App</h3>
              <p>
                A full-fledged e-commerce platform that includes features like product display, shopping cart, and payment gateway.
              </p>
            </div>

            {/* Project 2 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <img
                src="/images/socailmediadashboard.png"
                alt="Project 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Social Media Dashboard</h3>
              <p>
                A dynamic social media dashboard that tracks user engagement across platforms, complete with analytics and reports.
              </p>
            </div>

            {/* Project 3 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <img
                src="/images/portfolio.png"
                alt="Project 3"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Portfolio Website</h3>
              <p>
                A modern and responsive portfolio website showcasing personal projects, skills, and a contact form.
              </p>
            </div>

            {/* Project 4 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <img
                src="/images/task.png"
                alt="Project 4"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Task Management App</h3>
              <p>
                A task management tool that allows users to create, assign, and track tasks efficiently with real-time updates.
              </p>
            </div>

            {/* Project 5 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <img
                src="/images/travel.png"
                alt="Project 5"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Travel Booking System</h3>
              <p>
                A travel booking website that allows users to book flights, hotels, and car rentals, with an integrated payment system.
              </p>
            </div>

            {/* Project 6 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <img
                src="/images/weather.png"
                alt="Project 6"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Weather Forecast App</h3>
              <p>
                A weather app that displays real-time weather forecasts using data from various global weather APIs.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Showcase Your Project
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Ready to share your own projects? Join our community of creators and get your project featured!
          </p>
          <Link href={""}>
          <Button
            variant={"default"}
            className="text-2xl p-6 text-white"
          >
            Submit Your Project
          </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectShowcasesPage;
