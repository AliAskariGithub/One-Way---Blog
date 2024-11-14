import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Footer from "@/components/Footer";

const AboutSection = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-gray-200 py-20 px-4 md:px-8 lg:px-16 text-gray-800 flex flex-col items-center">
        {/* Introduction Section */}
        <div className="w-full mx-auto text-center flex flex-col items-center mb-32 pt-40">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 animate-slide-top">
            About <span className="text-blue-600">One Way - Blog</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed fadeIn">
            One Way To Learn is your go-to platform for web development, design,
            and technology insights. From frontend basics to advanced concepts,
            we cover a wide range of topics to keep you informed, skilled, and
            inspired.
          </p>
        </div>

        {/* Mission Section */}
        <div className="w-full mx-auto text-center flex flex-col items-center mb-16 pt-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 animate-slide-top">
            Our Mission
          </h2>
          <p className="text-md md:text-lg mb-8 text-gray-600 leading-relaxed animate-slide-left">
            At One Way - Blog, we’re passionate about making web development
            accessible, engaging, and empowering for everyone. Technology should
            be a tool for opportunity, not a barrier, and we aim to break down
            even the most complex concepts into easy-to-understand tutorials,
            detailed guides, and inspiring articles. Our mission is to support
            beginners and seasoned developers alike by offering content that
            covers everything from foundational web development concepts to
            advanced programming techniques.
          </p>
          <p className="text-md md:text-lg mb-8 text-gray-600 leading-relaxed animate-slide-right">
            We believe in nurturing curiosity and creativity through hands-on
            learning. Our platform isn’t just about coding knowledge; it’s about
            helping you build real skills that can translate to meaningful work
            and innovation in the tech industry. By following our step-by-step
            tutorials, exploring in-depth analyses, and staying up-to-date with
            industry trends, we empower you to confidently navigate the
            ever-evolving world of technology.
          </p>
          <p className="text-md md:text-lg mb-8 text-gray-600 leading-relaxed animate-slide-left">
            At the heart of One Way - Blog is the belief that learning is a
            lifelong journey. We are committed to helping our readers not only
            stay informed but also continuously improve and grow in their
            careers. Whether you’re exploring the basics of HTML and CSS,
            delving into JavaScript frameworks, or studying the latest in AI and
            the metaverse, our content is crafted to give you the tools you need
            to succeed at every stage.
          </p>
          <p className="text-md md:text-lg mb-8 text-gray-600 leading-relaxed animate-slide-right">
            Our mission also includes building a vibrant, supportive community
            where knowledge is shared and collaboration is celebrated. We
            recognize the value of diverse perspectives and aim to foster an
            inclusive space where everyone, regardless of background or
            experience, feels welcome and empowered to participate. Our
            community is about learning together, supporting each other’s
            growth, and forging connections that last beyond the screen.
          </p>
          <p className="text-md md:text-lg mb-8 text-gray-600 leading-relaxed animate-slide-left">
            In the rapidly changing world of tech, staying relevant means
            continually evolving. We’re here to provide you not just with static
            information but with actionable insights that adapt to current
            trends and technologies. Our goal is to bridge the gap between
            theory and real-world application, equipping you with knowledge you
            can use right away. Together, let’s explore, learn, and build a
            brighter future, one line of code at a time.
          </p>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center h-max mb-24 pt-40">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 fadeIn">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bounceIn">
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150">
              <h1 className="text-blue-600 font-semibold text-xl">
                Ali Askari
              </h1>
              <p className="text-md pt-3">
                &quot; Full-Stack Developer, UI/UX Designer, & AI
                Specialist!&quot;
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150">
              <p className="text-blue-600 font-semibold text-xl">Ana Zaidi</p>
              <p className="text-md pt-3">&quot;Digital Marketing&quot;</p>
            </div>
          </div>
        </div>

        {/* Community Engagement Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center mb-16 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Join Our Community
          </h2>
          <p className="text-md md:text-lg mb-8 text-gray-600 leading-relaxed">
            One Way - Blog isn&apos;t just about content &mdash; it&apos;s about
            connection. Join us on social media, participate in discussions, and
            consider becoming a contributor. Together, we make web development
            accessible for everyone.
          </p>
          <Link href="/Community">
          <Button
          variant={"default"}
            className="flex text-white font-semibold p-6 rounded-lg shadow-lg text-2xl transition duration-300"
          >
            Connect with Us
          </Button>
          </Link>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center mb-32 pt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="text-md md:text-lg mb-8 text-gray-600 leading-relaxed">
            Explore our latest posts, find a topic you&apos;re passionate about,
            and begin your journey with One Way - Blog today. We&apos;re here to
            support you every step of the way.
          </p>
                <span className="bg-black text-white hover:bg-black hover:bg-opacity-70 px-6 py-3 rounded-md text-xl font-semibold cursor-pointer">
                  <Sheet>
                    <SheetTrigger>Browser our Blog</SheetTrigger>
                    <SheetContent className="bg-black font-sans">
                      <SheetHeader>
                        <SheetTitle className="text-3xl text-left text-white">
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutSection;
