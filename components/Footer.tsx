// Footer.tsx
import Link from "next/link";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { FaFacebookF } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";
  import { FaTwitter } from "react-icons/fa";
  import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">One Way - Blog</h2>
          <p className="text-white opacity-50 hover:opacity-100 duration-150 transition">
            A place to share insights, knowledge, and inspiration. Join our
            community of tech enthusiasts and explore the latest trends in web
            development, AI, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-white">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-white opacity-50 duration-200 transition hover:opacity-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-white opacity-50 duration-200 transition hover:opacity-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-white opacity-50 duration-200 transition hover:opacity-100"
              >
                Contact
              </Link>
            </li>
            <li>
                <span className="hover:text-white -ml-3 text-[#c9c9c9] transition duration-150 px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                  <Sheet>
                    <SheetTrigger className="text-white opacity-50 duration-200 transition hover:opacity-100">Blog</SheetTrigger>
                    <SheetContent className="bg-black font-sans">
                      <SheetHeader>
                        <SheetTitle className="text-3xl text-white">
                          One Way To Learn
                        </SheetTitle>
                        <SheetDescription className="text-white text-opacity-90 text-base">
                          Here are some blog categories that could suit a
                          development-focused blog like yours:
                        </SheetDescription>
                        <br />
                        <ul className="flex flex-col space-y-1 ml-4 text-left">
                          <Link
                            href={"/Blog/WebDevelopment"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Web Development
                          </Link>
                          <Link
                            href={"/Blog/FrontendDevelopment"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Frontend Development
                          </Link>
                          <Link
                            href={"/Blog/BackendDevelopment"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Backend Development
                          </Link>
                          <Link
                            href={"/Blog/JavaScriptFrameworks"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            JavaScript Frameworks
                          </Link>
                          <Link
                            href={"/Blog/TypeScript"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            TypeScript
                          </Link>
                          <Link
                            href={"/Blog/GenerativeAI"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Generative AI
                          </Link>
                          <Link
                            href={"/Blog/MetaverseAndWeb3.0"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Metaverse and Web 3.0
                          </Link>
                          <Link
                            href={"/Blog/UIUXDesign"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            UI/UX Design
                          </Link>
                          <Link
                            href={"/Blog/ToolsAndProductivity"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Tools and Productivity
                          </Link>

                          <Link
                            href={"/Blog/ProjectShowcases"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Project Showcases
                          </Link>
                          <Link
                            href={"/Blog/TutorialsAndHow-To-Guides"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Tutorials and How-To Guides
                          </Link>
                          <Link
                            href={"/Blog/CareerDevelopment"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Career Development
                          </Link>
                          <Link
                            href={"/Blog/OpenSourceAndCommunity"}
                            className="text-base font-medium hover:bg-opacity-40 rounded-md hover:bg-white text-white text-opacity-60 hover:text-white px-4 py-2 transition duration-150"
                          >
                            Open Source and Community
                          </Link>
                        </ul>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </span>
            </li>
            <li>
              <Link
                href="/Events"
                className="text-white opacity-50 duration-200 transition hover:opacity-100"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us / Social Links</h3>
          <p className="text-white opacity-50 duration-200 transition hover:opacity-100">
            Email:{" "}
            <Link
              href="mailto:syedaliaskarizaidi1@gmail.com"
              className="text-white opacity-50 duration-200 transition hover:opacity-100"
            >
              onewaytolearn@gmail.com
            </Link>
          </p>
          <p className="text-white opacity-50 duration-200 transition hover:opacity-100">
            Phone:{" "}
            <Link
              href="tel:+923192046516"
              className="text-white opacity-50 duration-200 transition hover:opacity-100"
            >
              +92 (319) 2046516
            </Link>
          </p>
          <div className="mt-4 flex space-x-4">
            <Link href={"https://www.facebook.com/profile.php?id=61564881342854"} className="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-1 transition duration-200"> <FaFacebookF size={20}/> </Link>
            <Link href={"https://github.com/AliAskariGithub"} className="text-white bg-zinc-600 hover:bg-zinc-800 rounded-full p-1 transition duration-200"> <FaGithub size={20}/> </Link>
            <Link href={"https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"} className="text-white bg-sky-400 hover:bg-sky-500 rounded-full p-1 transition duration-200"> <FaTwitter size={20}/> </Link>
            <Link href={"https://www.linkedin.com/in/ali-askari-355257308/"} className="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-1 transition duration-200"> <FaLinkedinIn size={20}/> </Link>
          </div>
        </div>
      </div>

      <hr className="my-6 border-white opacity-50" />

      <div className="text-center text-white opacity-60">
        &copy; {new Date().getFullYear()} One Way - Blog | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
