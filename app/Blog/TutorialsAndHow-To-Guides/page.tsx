// pages/TutorialsandHowToGuides.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const TutorialsAndHowToGuidesPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">
            Tutorials and <span className="text-blue-500"> How-To Guides</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            Learn with step-by-step tutorials and guides on various topics like
            web development, AI, UI/UX design, and more!
          </p>
        </div>

        {/* Tutorials Grid Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Featured Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            {/* Tutorial 1 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Building a Portfolio Website
              </h3>
              <p>
                A step-by-step guide to create your own portfolio website using
                HTML, CSS, and JavaScript. Perfect for developers.
              </p>
              <Link href={"https://www.youtube.com/watch?v=_xkSvufmjEs"}>
                <Button
                  variant="outline"
                  className="mt-4 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Read Tutorial
                </Button>
              </Link>
            </div>

            {/* Tutorial 2 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Mastering React Basics
              </h3>
              <p>
                Dive into React with this beginner-friendly guide, covering all
                the essential concepts to help you get started.
              </p>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLVwbZ9sSg3wNRf4BLhnFUi0fn8KVorM-T"
                }
              >
                <Button
                  variant="outline"
                  className="mt-4 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Read Tutorial
                </Button>
              </Link>
            </div>

            {/* Tutorial 3 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Introduction to Python for AI
              </h3>
              <p>
                Learn Python from scratch and build your first AI project. A
                comprehensive guide for beginners in the AI field.
              </p>
              <Link href={"https://www.youtube.com/watch?v=XIrOM9oP3pA"}>
                <Button
                  variant="outline"
                  className="mt-4 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Read Tutorial
                </Button>
              </Link>
            </div>

            {/* Tutorial 4 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Designing a UI/UX for Web Apps
              </h3>
              <p>
                Learn how to design user-friendly interfaces with this guide on
                UI/UX principles for modern web applications.
              </p>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLdvOfoe7PXT0ouChAnR1nHlT8BJIo5hP_"
                }
              >
                <Button
                  variant="outline"
                  className="mt-4 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Read Tutorial
                </Button>
              </Link>
            </div>

            {/* Tutorial 5 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Creating an AI Chatbot with Node.js
              </h3>
              <p>
                Follow this tutorial to build a basic AI chatbot using Node.js
                and integrate machine learning APIs.
              </p>
              <Link
                href={
                  "https://youtube.com/playlist?list=PLdvOfoe7PXT0ouChAnR1nHlT8BJIo5hP_"
                }
              >
                <Button
                  variant="outline"
                  className="mt-4 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Read Tutorial
                </Button>
              </Link>
            </div>

            {/* Tutorial 6 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Responsive Web Design Principles
              </h3>
              <p>
                This tutorial covers responsive web design techniques to ensure
                your website looks great on any device.
              </p>
              <Link href={"https://www.youtube.com/watch?v=HG10yrq1pbk"}>
                <Button
                  variant="outline"
                  className="mt-4 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Read Tutorial
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Contribute Your Tutorial
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Do you have a great tutorial or guide to share with the community?
            Submit your tutorial and help others learn!
          </p>
          <Link href={""}>
          <Button
            variant={"default"}
            className="text-2xl p-6 text-white"
          >
            Start Your Tutorial
          </Button></Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TutorialsAndHowToGuidesPage;
