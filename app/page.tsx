"use client"
import Image from "next/image";
import {Link as ScrollLink, Element} from "react-scroll";
import Link from 'next/link';

export default function Home() {
  return (
    <div  className="overflow-clip inset-0 -z-10 h-screen w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
    
    <Element 
    name="top"
    className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex-items-center justify-between py-6 px-4 md:px-8 mx-6">

    <Link href={"/"}>
    <Image 
    src={'/logo/logo.webp'}
    alt="Logo"
    width={1000}
    height={1000}
    className="w-28"

    />
    </Link>
    <div className="absolute right-1/2 translate-x-1/2 transform">
    <div className="hidden md:flex gap-x-10  items-center text-gray-700 font-medium text-lg cursor-pointer ">

      <Link href={'/showcase'} 
      className="hover:text-blue-500">
        Showcase
      </Link>
      
      <ScrollLink to={'/services'}
      className="hover:text-blue-500">
        Services

      </ScrollLink>

      <ScrollLink to="process" smooth={true}
      className="hover:text-blue-500">
        Process
      </ScrollLink>

      <ScrollLink to="guarentess" smooth={true}
      className="hover:text-blue-500">
        Guarentees

      </ScrollLink>
    </div>
    </div>

    <div className="flex items-center gap-x-4">
    <a href="tel:+25414178292" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              (714)-178-292
            </button>
          </a>


    </div>








    </Element>
    
      

    </div>
   
  );
}
