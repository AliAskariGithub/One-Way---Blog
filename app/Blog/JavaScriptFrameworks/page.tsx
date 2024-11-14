// pages/JavaScriptFrameworks.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const JavaScriptFrameworks = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">
            JavaScript <span className="text-blue-500"> Frameworks</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            Discover the most popular JavaScript frameworks used in web development to create dynamic, interactive user interfaces.
          </p>
        </div>

        {/* JavaScript Framework Topics */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Popular JavaScript Frameworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg bg-white  hover:-translate-y-4 hover:shadow-black hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                React.js
              </h3>
              <p>
                A declarative, efficient, and flexible JavaScript library for building user interfaces, developed by Facebook.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white  hover:-translate-y-4 hover:shadow-black hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Vue.js
              </h3>
              <p>
                A progressive framework for building user interfaces, allowing for easy integration with other libraries.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white  hover:-translate-y-4 hover:shadow-black hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Angular
              </h3>
              <p>
                A robust framework by Google for building enterprise-scale applications with a comprehensive structure.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white  hover:-translate-y-4 hover:shadow-black hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Svelte
              </h3>
              <p>
                A framework that shifts much of the work to compile-time, leading to smaller and faster applications.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white  hover:-translate-y-4 hover:shadow-black hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Next.js
              </h3>
              <p>
                A React-based framework that enables server-side rendering and static site generation, making it ideal for SEO.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white  hover:-translate-y-4 hover:shadow-black hover:shadow-xl transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                Ember.js
              </h3>
              <p>
                A convention-over-configuration framework that promotes strong architecture and productivity.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Start Exploring JavaScript Frameworks
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Choose the right framework to build powerful, scalable applications that enhance user experience.
          </p>
          <Link href={""}>
          <Button
            variant={"default"}
            className="text-2xl p-6 text-white"
          >
            Explore Frameworks
          </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JavaScriptFrameworks;
