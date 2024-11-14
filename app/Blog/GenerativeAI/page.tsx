// pages/GenerativeAI.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const GenerativeAIPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">Generative <span className="text-blue-500"> AI</span></h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            Generative AI refers to algorithms and models capable of creating new content, such as text, images, and audio, based on training data.
          </p>
        </div>

        {/* Key Applications Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Key Applications of Generative AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Content Creation
              </h3>
              <p>
                Generative AI assists in creating blogs, articles, and marketing content, making it easier to automate writing tasks.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Image Generation
              </h3>
              <p>
                Used for creating unique images, artwork, and designs in digital media and entertainment.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Virtual Assistants
              </h3>
              <p>
                AI-driven chatbots and virtual assistants generate natural language responses, enhancing customer interaction.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Audio Synthesis
              </h3>
              <p>
                Enables the creation of voice, music, and sound effects for gaming, film, and other audio-visual content.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Code Generation
              </h3>
              <p>
                AI models generate code snippets and entire applications, accelerating software development processes.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Data Augmentation
              </h3>
              <p>
                Generates synthetic data to expand datasets, improving the performance of machine learning models.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Explore Generative AI
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Discover how Generative AI is transforming industries and explore the potential of creating your own AI-driven applications.
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

export default GenerativeAIPage;
