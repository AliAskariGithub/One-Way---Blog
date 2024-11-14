// pages/LatestPosts.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import React from "react";


const LatestPosts = () => {
  // Expanded data for the posts
  const posts = [
    {
      image: "/images/webdev.png",
      title: "Web Development",
      year: 1990,
      description: "Comprehensive web development, from HTML basics to complex full-stack applications.",
    },
    {
      image: "/images/frontend.png",
      title: "Frontend Development",
      year: 1995,
      description: "Focus on creating interactive and visually appealing user interfaces using HTML, CSS, and JavaScript.",
    },
    {
      image: "/images/backend.png",
      title: "Backend Development",
      year: 2000,
      description: "Explore server-side programming, databases, and APIs that power applications.",
    },
    {
      image: "/images/jsframeworks.png",
      title: "JavaScript Frameworks",
      year: 2010,
      description: "Master popular JavaScript frameworks like React, Angular, and Vue for building dynamic applications.",
    },
    {
      image: "/images/typescript.png",
      title: "TypeScript",
      year: 2012,
      description: "Learn TypeScript, a statically typed superset of JavaScript, for building safer and scalable applications.",
    },
    {
      image: "/images/generativeai.png",
      title: "Generative AI",
      year: 2014,
      description: "Dive into AI that creates content, from image generation to natural language processing.",
    },
    {
      image: "/images/metaverse.png",
      title: "Metaverse and Web 3.0",
      year: 2021,
      description: "Explore the decentralized web, virtual spaces, and the next evolution of internet technologies.",
    },
    {
      image: "/images/uiux.png",
      title: "UI/UX Design",
      year: 2005,
      description: "Understand design principles to create user-friendly and visually appealing interfaces.",
    },
    {
      image: "/images/tools.png",
      title: "Tools and Productivity",
      year: 2018,
      description: "Enhance productivity with the latest tools, tips, and practices for developers.",
    },
    {
      image: "/images/showcases.png",
      title: "Project Showcases",
      year: 2023,
      description: "Explore real-world projects and gain inspiration from completed web development showcases.",
    },
    {
      image: "/images/tutorials.png",
      title: "Tutorials and How-To Guides",
      year: 2023,
      description: "Step-by-step tutorials covering everything from basics to advanced development techniques.",
    },
    {
      image: "/images/career.png",
      title: "Career Development",
      year: 2017,
      description: "Advice on advancing your development career, from portfolio building to interview preparation.",
    },
    {
      image: "/images/opensource.png",
      title: "Open Source and Community",
      year: 2008,
      description: "Learn about open-source contributions, community building, and collaborative development.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col items-center">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-8 text-gray-800 animate-slide-top">
            Latest <span className="text-blue-500">Posts</span>
          </h1>
          <p className="text-lg md:text-xl mb-12 animate-slide-left">
            Explore our latest posts on various programming language and tech topics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fadeIn">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                image={post.image}
                title={post.title}
                year={post.year}
                description={post.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LatestPosts;
