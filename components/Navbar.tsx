// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { TbCategoryFilled } from "react-icons/tb";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  return (
    <nav className="fixed w-full z-10 bg-zinc-900 bg-opacity-85 text-white shadow-lg font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-slide-left flex items-center bounceIn">
            <Link href="/">
              <span className="text-2xl font-bold cursor-pointer">
                One Way - Blog
              </span>
            </Link>
          </div>
          <div className="flex flex-row justify-evenly gap-16 items-center">
            <div className="hidden md:flex space-x-4 animate-slide-top">
              <aside>
                <span className="hover:text-white text-[#c9c9c9] transition duration-150 px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                  <Sheet>
                    <SheetTrigger>Blog</SheetTrigger>
                    <SheetContent className="bg-black font-sans">
                      <SheetHeader>
                        <SheetTitle className="text-3xl text-white">
                          One Way - Blog
                        </SheetTitle>
                        <SheetDescription className="text-white text-opacity-90 text-base">
                          Here are some blog categories that could suit a
                          development-focused blog like yours:
                        </SheetDescription>
                        <br />
                        <ul className="flex flex-col space-y-1 ml-4">
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
              </aside>
              <div>
                <Link
                  href={"/Events"}
                  className="hover:text-white text-[#c9c9c9] transition duration-150 px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  Event
                </Link>
              </div>
            </div>

            <div className="space-x-4">
              <Button
                asChild
                variant={"default"}
                className="hover:opacity-50 duration-200 transition"
              >
                <Link href="/Login">Login</Link>
              </Button>

              <Link href={"/SignUp"} className="text-black">
                <Button variant={"outline"}>Signup</Button>
              </Link>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 py-2 px-5 bg-zinc-900 bg-opacity-85 w-full items-center text-xl">
            <span className="flex justify-between items-center">
              <h1 className="text-xl font-bold">One Way To Learn</h1>

              <button
                onClick={toggleRotation}
                className={`transition-transform duration-500  ${
                  isRotated
                    ? "-rotate-180 -translate-x-16"
                    : "text-white opacity-30 -translate-x-0"
                }`}
              >
                <TbCategoryFilled
                  size={24}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </button>
            </span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="" id="mobile-menu">
          <div className="px-2 pb-3 space-y-1 sm:px-3 fixed bg-zinc-900 bg-opacity-85 w-full bottom-10 pt-1">
            <Link href="/">
              <span className="hover:text-white mt-3 text-[#c9c9c9] transition duration-150 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Home
              </span>
            </Link>

            <Link href="/About">
              <span className="hover:text-white text-[#c9c9c9] transition duration-150 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                About
              </span>
            </Link>

            <Link href="/Contact">
              <span className="hover:text-white text-[#c9c9c9] transition duration-150 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Contact
              </span>
            </Link>

            <aside>
              <span className="hover:text-white md:hidden text-[#c9c9c9] transition duration-150 px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                <Sheet>
                  <SheetTrigger className="pb-2 md:hidden">Blog</SheetTrigger>
                  <SheetContent className="bg-black font-sans text-left">
                    <SheetHeader>
                      <SheetTitle className="text-3xl text-white text-left">
                        One Way - Blog
                      </SheetTitle>
                      <SheetDescription className="text-white text-opacity-90 text-base text-left">
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
            </aside>

            <Link href="/Events" className="md:hidden">
              <span className="hover:text-white text-[#c9c9c9] transition duration-150 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Events
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
