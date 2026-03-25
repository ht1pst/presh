import but from "../assets/greenbut.avif";
import menu from "../assets/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrow2 from "../assets/arrow2.png";
import video from "../assets/video.mp4";
import call from "../assets/call.webp";
import right from "../assets/right.avif";
import left from "../assets/left.avif";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SplitText from "../SplitText";
import { motion } from "framer-motion";

function AboutSec1(){
      const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });


    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <section className=" bg-[#292929] h-auto pb-10">
       <div className="lg:hidden block mx-auto  w-70 md:w-130 pt-3 ">
       <a href="#" className="flex items-center h-8 md:h-10 rounded-lg justify-center  text-[0.6rem] md:text-[1rem] bg-[#353535] text-white available">
        
         Available to take on new Webflow projects! Let’s talk
       </a>
     </div>
            <header className="flex  justify-between lg:px-[95px] px-[20px] md:px-[30px] items-center lg:h-20 h-13 relative max-w-380 mx-auto">
          
          
          <div className="" >
            <div className="">
              <a href="#" className="flex items-start lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] text-white name">
              Precious Triumph<span className="text-[0.5rem]">TM</span>
              </a>
            </div>
            </div>
          
            <div className="w-105 lg:block hidden">
              <a href="#" className="flex items-center h-10 rounded-lg justify-center gap-5 text-[1rem] bg-[#353535] text-white available">
                <span>
                  <img src={but} alt="" className="w-[21px]" />
                </span>
                Available to take on new projects! Let’s chat
              </a>
            </div>
          
            {/* Menu Button */}
            <div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center text-white gap-2 menu"
              >
                Menu
                <img src={menu} alt="" className="w-[28px]" />
              </button>
            </div>
          
            {/* Dropdown */}
          
          
           <div
            className={`absolute lg:top-20 top-10 left-1/2 -translate-x-1/2 mt-4 w-full h-280    bg-[#292929] lg:rounded-xl rounded-3xl  flex flex-col gap-4 p-5 text-white z-50
            transition-all duration-300 ease-in-out
            ${menuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-6 invisible"}
          `}
          >
          
            <div className="heading-hero h-auto p-5 lg:leading-[160px] leading-[100px] absolute rounded-2xl left-1/2 -translate-x-1/2 lg:text-[7.5rem] text-[5rem] bg-[#353535] text-white lg:w-[80%] w-[90%] px-[30px] ">
              <div> <Link to="/">HOME</Link></div>
          
             <div className="border  border-l-0 border-r-0 border-[#5b595999] #5b595999"></div>
          
          
           
          
              <div><Link to="/about">ABOUT ME</Link></div>
          
             <div className="border  border-l-0 border-r-0 border-[#5b595999] #5b595999"></div>
          
              <div> <Link to="/projects">PORTFOLIO</Link></div>
          
              <div className="border  border-l-0 border-r-0 border-[#5b595999] #5b595999"></div>
          
              
              <div><a href="https://calendly.com/triumphbusiness08/30min">CONTACT</a></div>
              
              <div className="border  border-l-0 border-r-0 border-[#5b595999] #5b595999"></div>
          
            </div>
          
          
          
          </div>
          </header>

<div className="lg:px-[95px] px-[20px] max-w-390 mx-auto pt-10">
    <motion.h1 className="heading-hero text-white leading-[75px] text-[5rem] uppercase" 
       initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >Hey! I'm Udeh Precious Triumph</motion.h1>

    <motion.p className="tools-des text-[1rem] text-white max-w-[60rem] mt-5"
    initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >I'm a web and app developer building high-performance, custom digital solutions for B2B companies and businesses across the world. I help brands turn complex ideas into fast, responsive, and conversion-focused websites and applications — tailored specifically to them, built to make them stand out.</motion.p>


<motion.p className="tools-des text-[1rem] text-white max-w-[60rem] mt-7"
initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>Some of the clients I've worked with include prop firms, SaaS companies, consulting agencies, credit repair consultants, and healthcare specialists — delivering digital experiences that combine functionality, usability, and real results. From landing pages to full-scale web apps, my focus is always on building something that drives growth.


 <p className="tools-des text-[1rem] text-white max-w-[60rem] mt-7">Outside of development, I play the piano and I'm a dedicated gym enthusiast — discipline at the keys, discipline in the gym, discipline in the code. For me, it's not just about building websites and apps. It's about showing up consistently, solving real problems, and keeping a human touch in every project.</p>
</motion.p>

</div>

 
    



      


        </section>


        
    )
}
export default AboutSec1