// pages/Blog/CareerDevelopment.tsx

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const CareerDevelopment = () => {
  return (
    <>
    <Navbar />
      {/* Hero Section */}
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">
          Career <span className="text-blue-500"> Development</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
          Unlock your full potential with career-building tips and resources.
          </p>
        </div>

        {/* Backend Development Topics */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Building Your Resume
              </h3>
              <p>
              Master the art of resume writing to help you stand out to recruiters
              </p>
            </div>


            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Mastering Interviews
              </h3>
              <p>
              Tips and strategies to ace your next interview and land your dream job.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Networking Tips
              </h3>
              <p>
              Build meaningful relationships with professionals in your field.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Upskilling for Growth
              </h3>
              <p>
              Learn new skills that will enhance your career prospects and growth.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Personal Branding
              </h3>
              <p>
              Learn how to create and manage your personal brand for success.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              Job Search Strategies
              </h3>
              <p>
              Learn how to optimize your job search with effective strategies.
              </p>
            </div>

          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Start Your Career Development Journey
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Explore all Career Development.
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

export default CareerDevelopment;
