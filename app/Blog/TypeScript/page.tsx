// pages/TypeScript.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const TypeScriptPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">Type<span className="text-blue-500">Script</span></h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            TypeScript is a powerful, typed superset of JavaScript that enhances developer productivity and helps catch errors early.
          </p>
        </div>

        {/* Benefits of TypeScript */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Key Benefits of TypeScript
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Static Typing
              </h3>
              <p>
                Allows developers to catch errors at compile-time rather than runtime, improving code reliability.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                IDE Support
              </h3>
              <p>
                TypeScript provides excellent support for IDEs, offering autocompletion, refactoring, and inline documentation.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Enhanced Readability
              </h3>
              <p>
                With TypeScript&apos;s type annotations, code becomes more readable, making it easier to understand and maintain.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Improved Collaboration
              </h3>
              <p>
                Strong typing makes it easier for teams to collaborate by providing a clear understanding of data structures.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Interoperability
              </h3>
              <p>
                TypeScript works seamlessly with JavaScript, allowing developers to integrate it gradually into existing projects.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Future-Proofing
              </h3>
              <p>
                As JavaScript evolves, TypeScript stays aligned, providing modern features and tooling for scalable applications.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Start Using TypeScript
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Transform your JavaScript development with TypeScript&apos;s powerful, scalable tools.
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

export default TypeScriptPage;
