// pages/UIUXDesign.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
const UIUXDesignPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">UI/UX <span className="text-blue-500"> Design</span></h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            Crafting seamless, intuitive, and visually appealing digital experiences that prioritize user satisfaction.
          </p>
        </div>

        {/* Core Principles Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Core Principles of UI/UX Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                User-Centered Design
              </h3>
              <p>
                Focuses on creating experiences that meet user needs, preferences, and expectations, enhancing usability and satisfaction.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Consistency
              </h3>
              <p>
                Consistent design elements across the interface create familiarity, improving user navigation and engagement.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Accessibility
              </h3>
              <p>
                Ensures that all users, including those with disabilities, can easily access and interact with the product.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Visual Hierarchy
              </h3>
              <p>
                Guides users’ attention to key areas by organizing elements in a way that reflects their importance.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Feedback and Response
              </h3>
              <p>
                Provides users with immediate feedback on actions, improving confidence and guiding interactions.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Simplicity
              </h3>
              <p>
                Emphasizes clean, straightforward design that makes interfaces easy to use, without overwhelming users.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Start Designing Exceptional Experiences
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Dive into the world of UI/UX design to learn how to create digital products that are functional, beautiful, and user-friendly.
          </p>
          <Link href={""}>
          <Button
            variant={"default"}
            className="text-2xl p-6 text-white"
          >
            Learn More
          </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UIUXDesignPage;
