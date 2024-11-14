// pages/Community.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { BsStars } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { GiPartyPopper } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const communityHighlights = [
    {
      image: "/images/community-events.png",
      title: "Community Events",
      description: "Participate in meetups, webinars, and hackathons organized exclusively for community members.",
    },
    {
      image: "/images/learning-resources.png",
      title: "Learning Resources",
      description: "Get access to curated articles, tutorials, and workshops to advance your skills.",
    },
    {
      image: "/images/project-collab.png",
      title: "Project Collaborations",
      description: "Join collaborative projects with other community members to build your portfolio and gain experience.",
    },
    {
      image: "/images/expert-talks.png",
      title: "Expert Talks",
      description: "Learn from industry experts through guest lectures, Q&A sessions, and insider tips.",
    },
    {
      image: "/images/career-support.png",
      title: "Career Support",
      description: "Receive guidance and mentorship from seasoned professionals in your journey to a successful career.",
    },
    {
      image: "/images/networking.png",
      title: "Networking",
      description: "Connect with like-minded individuals and expand your professional network within the industry.",
    },
  ];
  

const Community = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col items-center">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-8 text-gray-800 animate-slide-top">
            <span className="text-blue-500">One Way - Blog </span>Community
          </h1>
          <p className="text-lg md:text-xl mb-12 bounceIn">
            Join a community of passionate developers, learners, and innovators. Discover insights, share knowledge, and grow together.
          </p>
          
          {/* Community Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 fadeIn">
            {communityHighlights.map((highlight, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-black transition duration-150 animate-slide-up">
                <img src={highlight.image} alt={highlight.title} className="rounded-md mb-4 w-full h-48 object-cover" />
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="w-full bg-black text-white py-12 px-6 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join the Community?</h2>
            <ul className="text-lg space-y-4">
              <li className="flex flex-row justify-center items-center gap-2"><BsStars size={28} color="gold"/> Connect with like-minded One Way</li>
              <li className="flex flex-row justify-center items-center gap-2"><FaBook size={20} color="lightgreen"/> Access exclusive learning resources</li>
              <li className="flex flex-row justify-center items-center gap-2"><FaHandsHelping size={24} color="lightgray"/> Collaborate on projects and grow skills</li>
              <li className="flex flex-row justify-center items-center gap-2"><IoGlobeOutline size={28} color="lightblue"/> Stay updated on industry trends</li>
              <li className="flex flex-row justify-center items-start gap-2"><GiPartyPopper size={24} color="yellow"/> Participate in events, workshops, and meetups</li>
            </ul>
          </div>

          {/* Call-to-Action Section */}
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-6">Ready to Get Involved?</h2>
            <p className="text-lg mb-8">Sign up now and be part of an inspiring journey with fellow developers and creators!</p>
            <Link href={"/"}>
            <Button variant={"default"} className="text-xl p-6 rounded-lg font-semibold transition duration-200">
              Join the Community
            </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Community;
