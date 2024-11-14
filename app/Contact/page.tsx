// pages/contact.tsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { MdMailOutline } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ContactPage = () => {

  return (
    <>
    <Navbar />

    <main className="bg-gray-200 py-16 px-4 md:px-8 lg:px-16 text-gray-800">
      
      {/* Header Section */}
      <section className="max-w-4xl mx-auto text-center mb-20 mt-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 bounceIn">Contact Us <span className='text-blue-600'>One Way - Blog</span></h1>
        <p className="text-lg md:text-xl text-gray-600 fadeIn">
          Got a question, suggestion, or just want to say hello? We’d love to hear from you! Fill out the form below or use any of the other methods to reach out.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg fadeIn mb-40">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Send Us a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-600">Name</label>
              <input type="text" className="w-full border border-zinc-500 rounded-lg p-3 focus:outline-none focus:border-blue-500" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-600">Email</label>
              <input type="email" className="w-full border border-zinc-500 rounded-lg p-3 focus:outline-none focus:border-blue-500" placeholder="Your Email" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-600">Subject</label>
            <input type="text" className="w-full border border-zinc-500 rounded-lg p-3 focus:outline-none focus:border-blue-500" placeholder="Subject" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-600">Message</label>
            <textarea className="w-full border border-zinc-500 rounded-lg p-3 focus:outline-none focus:border-blue-500" placeholder="Write your message here..." rows={6} required></textarea>
          </div>
          <Button variant={"default"} type="submit" className="w-full text-xl flex justify-center items-center font-semibold py-5 rounded-lg shadow-lg">
          Send Message
          </Button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="w-full h-full mx-auto text-center mb-40">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Other Ways to Reach Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Prefer reaching out via social media or need our direct contact details? Here&apos;s where you can find us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-left">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Email</h3>
            <Link href={"mailto:syedaliaskarizaidi1@gmail.com"} className="text-gray-600 hover:text-black duration-150 flex justify-center items-center gap-2"> <MdMailOutline size={30}/> onewaytolearn@gmail.com</Link>
          </div>
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 bounceIn">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Phone</h3>
            <Link href={"tel:+923192046516"} className="text-gray-600 hover:text-black duration-150 flex justify-center items-center gap-2"><FaPhoneAlt size={20}/>+92 (319) 2046516</Link>
          </div>
          <div className="p-6 border rounded-lg shadow-lg hover:-translate-y-3 hover:shadow-black bg-white hover:shadow-lg transition duration-150 animate-slide-right">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Social Media</h3>
            <p className="text-gray-600 mb-2">Follow us on Facbook, Twitter,and LinkedIn</p>
            <p className='flex flex-row gap-6 justify-center items-center'>
              <Link href={"https://www.facebook.com/profile.php?id=61564881342854"}><FaFacebookF size={28} className='text-white bg-blue-500 hover:bg-blue-600 rounded-full p-[3px] transition duration-200'/> </Link>
              <Link href={"https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"}><FaTwitter size={28} className='text-white bg-sky-400 hover:bg-sky-500 rounded-full p-[3px] transition duration-200'/></Link>
              <Link href={"https://www.linkedin.com/in/ali-askari-355257308/"}><FaLinkedinIn size={28} className='text-white bg-blue-500 hover:bg-blue-600 rounded-full p-1 transition duration-200'/></Link>
             </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 bounceIn">Our Location</h2>
      <p className="text-lg text-gray-600 mb-8 animate-slide-bottom">
        My Current Location is Pakistan, Sindh, Karachi
      </p>

      <div className="max-w-6xl h-[400px] bg-gray-200 rounded-lg flex items-center justify-center fadeIn">
       <Image 
       src={"/location.png"}
       alt='My Current Location'
      width={1000}
      height={1000}
      className='w-full md:h-full'></Image>
      </div>
    </section>
    </main>
    <Footer />
    </>
  );
};

export default ContactPage;
