// components/HomeSection.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { Button } from "./ui/button";

const HomeSection = () => {
  return (
    <>
      <Navbar />
      <section className="bg-zinc-300 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Introduction */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <div className="fadeIn">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 animate-slide-top">
              Welcome to <span className="text-blue-600">One Way-Blog</span>
            </h1>
          </div>
          <div className="fadeIn">
            <p className="text-lg md:text-xl mb-6">
              Discover expert insights, hands-on tutorials, and the latest
              trends in web development, design, and cutting-edge technology.
            </p>
            <p className="text-md md:text-lg mb-8 text-gray-600 leading-relaxed">
              Whether you&apos;re just starting out or looking to sharpen your
              skills, One Way offers content that spans from beginner basics to
              advanced development concepts. Join us on a journey through the
              ever-evolving world of coding, creativity, and innovation.
            </p>
          </div>
          <Link href={"/"}>
            <Button
              variant={"default"}
              className="text-2xl p-6 animate-slide-right mb-2"
            >
              Join Us
            </Button>
          </Link>
          <Link href={"/"}>
            <Button
              variant={"default"}
              className="text-2xl p-6 animate-slide-left"
            >
              Start Learning
            </Button>
          </Link>
        </div>

        {/* Featured Categories */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-40">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 animate-slide-top">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-right">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Frontend Development
              </h3>
              <p>
                Explore UI design principles, responsive layouts, and JavaScript
                frameworks like React and Next.js.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-bottom">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Generative AI
              </h3>
              <p>
                Learn about generative AI, and how these technologies shape the
                future of development.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-left">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                UI/UX Design
              </h3>
              <p>
                Delve into user-centered design principles, color theory, and
                tips for creating beautiful, intuitive interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-slide-top">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 text-center animate-slide-left">
          Our mission is to empower and inspire our readers with valuable
          insights, up-to-date information, and practical guides in the
          ever-evolving world of technology and digital culture. We believe in
          the power of knowledge-sharing and aim to create a platform where
          learning, collaboration, and growth are always at the forefront.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Community Engagement */}
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-right">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Community Engagement
            </h3>
            <p className="text-gray-600">
              We strive to build a community that fosters connection and
              engagement among tech enthusiasts, creators, and thought leaders.
              Through our blog, we aim to open up conversations, encourage
              questions, and provide a space where ideas can flow freely and
              everyone feels empowered to contribute.
            </p>
          </div>

          {/* Quality Content */}
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-left">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Quality Content
            </h3>
            <p className="text-gray-600">
              We are dedicated to maintaining a high standard of content by
              producing well-researched, insightful articles and guides that add
              genuine value to our readers&apos; lives. Our team is committed to a
              deep level of research and analysis, bringing you trustworthy and
              relevant information.
            </p>
          </div>

          {/* Bridging the Knowledge Gap */}
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-right">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Bridging the Knowledge Gap
            </h3>
            <p className="text-gray-600">
              We understand that technology can be overwhelming and complex,
              which is why we aim to simplify complex topics, making them
              accessible to all levels of learners. Whether you&apos;re a
              beginner or an advanced user, our goal is to help bridge the
              knowledge gap and bring the latest trends, tools, and practices to
              everyone.
            </p>
          </div>

          {/* Inspiring Innovation */}
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-left">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Inspiring Innovation
            </h3>
            <p className="text-gray-600">
              Our mission goes beyond just sharing information; we want to
              inspire innovation and creativity. By sharing cutting-edge
              insights, emerging trends, and inspiring success stories, we hope
              to spark new ideas and motivate our readers to pursue their own
              creative projects.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-24 pt-40">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 animate-slide-top">
            What Our Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-right">
              <p className="text-md mb-4">
                &quot;One Way has helped me stay updated on the latest trends
                and refine my skills in frontend development. A must-read for
                developers!&quot;
              </p>
              <p className="text-blue-600 font-semibold">&ndash; Asharib Ali</p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-bottom">
              <p className="text-md mb-4">
                &quot;The tutorials are easy to follow, even for beginners.
                I&apos;ve learned so much about UI/UX design!&quot;
              </p>
              <p className="text-blue-600 font-semibold">
                &ndash; Fizza Fatima
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-left">
              <p className="text-md mb-4">
                &quot;As a backend developer, I appreciate the insights into AI
                and web 3.0. This blog offers a unique blend of content!&quot;
              </p>
              <p className="text-blue-600 font-semibold">&ndash; Hamzah Syed</p>
            </div>
          </div>
        </div>

        {/* Additional Information and Call to Action */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-40">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 bounceIn">
            Learn, Create, Grow
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed animate-slide-left">
            One Way - Blog is more than a resource; it&apos;s a community. By
            exploring our articles, participating in discussions, and sharing
            your own journey, you&apos;ll not only learn but also inspire
            others. Every article, every tutorial, every insight is crafted to
            empower you, the developer, to reach new heights.
          </p>
          <p className="text-md md:text-lg mb-8 text-gray-600 leading-relaxed animate-slide-right">
            Curious to explore more? Ready to dive into the details? Click below
            to see our latest posts and find the perfect guide for your next
            project.
          </p>
          <Link href="/LatestPost">
            <Button variant={"default"} className="text-2xl p-6 fadeIn">
              Explore Our Latest Posts
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeSection;
