// pages/MetaverseAndWeb3.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MetaverseAndWeb3Page = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center h-max flex flex-col justify-center items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">Metaverse and <span className="text-blue-500"> Web 3.0</span></h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            The Metaverse and Web 3.0 represent the next evolution of the internet, focusing on decentralized, immersive, and interactive digital experiences.
          </p>
        </div>

        {/* Key Components Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-56 pt-20">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 bounceIn">
            Key Components of the Metaverse and Web 3.0
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fadeIn">
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Decentralization
              </h3>
              <p>
                Web 3.0 utilizes blockchain technology to create decentralized platforms, enabling user ownership and control over data.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Virtual Reality (VR)
              </h3>
              <p>
                VR creates immersive experiences, allowing users to explore digital worlds in 3D, adding a new layer to digital interaction.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Digital Ownership
              </h3>
              <p>
                Through NFTs and digital assets, users can own and trade virtual items, from art to real estate within digital worlds.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Interoperability
              </h3>
              <p>
                Allows for seamless transitions and interactions between different virtual spaces, supporting the unified concept of a Metaverse.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Smart Contracts
              </h3>
              <p>
                These self-executing contracts automate agreements and transactions, playing a crucial role in decentralized applications (DApps).
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl hover:shadow-black hover:-translate-y-4 transition duration-150">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Creator Economy
              </h3>
              <p>
                Enables creators to monetize their content and digital products directly, giving rise to a self-sustained virtual economy.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Discover the Metaverse and Web 3.0
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-600 leading-relaxed">
            Learn how the Metaverse and Web 3.0 are reshaping digital experiences, offering new opportunities for creativity, ownership, and community.
          </p>
          <Link href={""}>
          <Button
            variant={"default"}
            className="text-2xl p-6 text-white"
          >
            Start Exploring
          </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MetaverseAndWeb3Page;
