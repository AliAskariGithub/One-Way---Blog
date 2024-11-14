// components/ScheduleSection.tsx
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const ScheduleSection = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col items-center">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <div className="fadeIn">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 animate-slide-top">
              Explore Our{" "}
              <span className="text-blue-600">Exciting Schedule</span>
            </h1>
          </div>
          <div className="fadeIn">
            <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed">
              Discover the range of events, workshops, and activities that make
              our schedule engaging and informative for everyone!
            </p>
          </div>
        </div>

        {/* Schedule Details */}
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center h-max mb-56">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 animate-slide-top">
            Upcoming Events Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-black bg-white hover:shadow-lg hover:-translate-y-3 transition duration-150 animate-slide-right">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Day 1: Frontend Foundations
              </h3>
              <p className="text-gray-600 mb-4">
                Join us for a deep dive into frontend development, covering
                HTML, CSS, and JavaScript essentials.
              </p>
              <p className="text-gray-500">Date: May 01, 2025</p>
              <p className="text-gray-500">Time: 10:00 AM - 1:00 PM</p>
            </div>

            {/* Event 2 */}
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-black bg-white hover:shadow-lg hover:-translate-y-3 transition duration-150 animate-slide-bottom">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Day 2: Mastering Backend
              </h3>
              <p className="text-gray-600 mb-4">
                Learn the basics of server-side programming and database
                management with hands-on projects.
              </p>
              <p className="text-gray-500">Date: June 01, 2025</p>
              <p className="text-gray-500">Time: 10:00 AM - 1:00 PM</p>
            </div>

            {/* Event 3 */}
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-black bg-white hover:shadow-lg hover:-translate-y-3 transition duration-150 animate-slide-left">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Day 3: Full-Stack Project
              </h3>
              <p className="text-gray-600 mb-4">
                Put your skills to the test by working on a full-stack project,
                integrating both frontend and backend skills.
              </p>
              <p className="text-gray-500">Date: July 01, 2025</p>
              <p className="text-gray-500">Time: 10:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-24 pt-40">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 animate-slide-top">
            Get Involved and Make the Most of Every Moment
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Our events aren&apos;t just sessions to attend; they&apos;re experiences to be
            part of! Whether it&apos;s networking, brainstorming, or collaborating on
            projects, every moment is designed to help you grow.
          </p>
          <Link href="">
            <Button
              variant={"default"}
              className="text-2xl p-6 animate-slide-left"
            >
              Register Now
            </Button>
          </Link>
          <Link href="/Contact">
            <Button
              variant={"default"}
              className="text-2xl p-6 mt-4 animate-slide-right"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ScheduleSection;
