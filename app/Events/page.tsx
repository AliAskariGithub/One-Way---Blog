// components/EventsSection.tsx
import React from "react";


import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";


const EventsSection = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Events Introduction */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 animate-slide-top">
            Welcome to <span className="text-blue-600">Our Events</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover a series of events that bring the tech community together, featuring expert speakers, hands-on workshops, and networking opportunities.
          </p>
          <Link href="/Events/Schedule">
            <Button
              variant={"default"}
              className="text-2xl p-6 animate-slide-right"
            >
              Join an Event
            </Button>
          </Link>
        </div>

        {/* Upcoming Events Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-40">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 animate-slide-top">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-right">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Frontend Development Workshop
              </h3>
              <p>Join us to explore advanced frontend techniques and frameworks, including React and Next.js.</p>
            </div>
            {/* Event 2 */}
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-bottom">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                AI [Artifical Intelligence]
              </h3>
              <p>Deep dive into the world of AI, from generative models to real-world applications in technology.</p>
            </div>
            {/* Event 3 */}
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-left">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                UI/UX Design Sprint
              </h3>
              <p>Learn about the latest design trends and strategies in user-centered design during this interactive event.</p>
            </div>
            {/* Event 4 */}
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-top">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">
                Discover strategies and insights on how to build brand awareness, engage audiences, and drive conversions in the digital landscape.
              </p>
            </div>
            
            {/* Event 5 */}
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-right">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Python</h3>
              <p className="text-gray-600 mb-4">
                Join this hands-on workshop to master Python, from basics to advanced concepts, and learn how it’s used in web, data science, and AI applications.
              </p>
            </div>

            {/* Event 6 */}
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-left">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Agentic AI</h3>
              <p className="text-gray-600 mb-4">
                Explore the future of AI and learn about agentic AI systems capable of independent decision-making and evolving over time.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-slide-top">
          Our Goal
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 text-center animate-slide-left">
          We aim to create an environment for learning, collaboration, and growth, uniting tech enthusiasts and professionals alike.
        </p>

        {/* Event Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Speaker Sessions */}
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-right">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Speaker Sessions
            </h3>
            <p className="text-gray-600">
              Experience knowledge-sharing sessions with industry experts, covering a wide range of topics.
            </p>
          </div>
          {/* Hands-On Workshops */}
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-left">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Hands-On Workshops
            </h3>
            <p className="text-gray-600">
              Get practical experience with hands-on workshops, designed to deepen your understanding of key technologies.
            </p>
          </div>
          {/* Networking Opportunities */}
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-right">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Networking Opportunities
            </h3>
            <p className="text-gray-600">
              Connect with other attendees, share ideas, and build relationships with like-minded professionals.
            </p>
          </div>
          {/* Exclusive Content */}
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-left">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Exclusive Content
            </h3>
            <p className="text-gray-600">
              Access exclusive content, including event recordings, resources, and post-event materials.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-40">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Join Us at Our Next Event
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Don’t miss out on the opportunity to learn, connect, and grow.
          </p>
          <Link href="/Events/Schedule">
            <Button variant={"default"} className="text-2xl p-6">
              View Upcoming Events
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventsSection;
