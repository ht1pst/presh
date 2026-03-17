import but from "../assets/greenbut.avif";
import menu from "../assets/menu.png";
import proj1 from "../assets/project1 (1).png";
import proj2 from "../assets/project1 (2).png";
import proj3 from "../assets/project1 (3).png";
import proj4 from "../assets/project1 (4).png";
import proj5 from "../assets/project1 (5).png";
import proj6 from "../assets/project1 (6).png";
import proj7 from "../assets/project1 (7).png";
import proj8 from "../assets/project1 (8).png";
import proj9 from "../assets/project1 (9).png";
import proj10 from "../assets/project1 (10).png";
import proj11 from "../assets/project1 (11).png";
import arrow2 from "../assets/arrow2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import SplitText from "../SplitText";
import call from "../assets/call.webp";
import right from "../assets/right.avif";
import left from "../assets/left.avif";
function Projects(){

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <section 
        className="bg-[#292929] h-auto pb-10 lg:px-[90px]  md:px-[30px] ">

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
    className={`absolute lg:top-20 top-10 left-1/2 -translate-x-1/2 mt-4 w-full h-280   bg-[#292929] lg:rounded-xl rounded-3xl  flex flex-col gap-4 p-5 text-white z-50
    transition-all duration-300 ease-in-out
    ${menuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-6 invisible"}
  `}
  >
  
    <div className="heading-hero h-auto p-5 lg:leading-[160px] leading-[100px] absolute rounded-2xl left-1/2 -translate-x-1/2 lg:text-[7.5rem] text-[5rem] bg-[#353535] text-white lg:w-[80%] w-[90%] px-[30px] ">
      <div> <Link to="/">HOME</Link></div>
  
     <div className="border  border-l-0 border-r-0 border-[#5b595999] #5b595999"></div>
  
  
      <div><Link to="/about">ABOUT ME</Link></div>
  
     <div className="border  border-l-0 border-r-0 border-[#5b595999] #5b595999"></div>
  
      <div> <Link to="/about">TESTIMONIAL</Link></div>
  
      <div className="border  border-l-0 border-r-0 border-[#5b595999] #5b595999"></div>
  
      
      <div><Link to="/contact">CONTACT</Link></div>
      
      <div className="border  border-l-0 border-r-0 border-[#5b595999] #5b595999"></div>
  
    </div>
  
  
  
  </div>
  </header>


<div className="lg:mt-10 px-[20px]">

 <SplitText
  text="Dive into my work."
  className=" heading-hero  lg:text-[11rem]  text-[5rem] text-white uppercase"
  delay={40}
  duration={0.2}
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>

<p className="tools-des text-[1rem] text-white max-w-[60rem]">This is where ideas turn into real, working products.
Every project here was built with purpose not just to look good, but to perform, engage, and deliver results.
I focus on clean design, smooth interactions, and experiences that actually make an impact.
If you want to understand the thinking behind the work or you’re ready to create something great let’s connect.</p>

</div>

<div className="mt-10 lg:mt-10 flex flex-col gap-5 px-[20px]">
           <a href="http://goatfundedtrader.com/">
             <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
             initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
             >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Goat Funded</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Framer Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Cryptocurrency</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">AI</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">An AI‑powered trading platform. Designed in Figma, I developed the site in Webflow with smooth animations and structure to match the product’s innovation.</p>

<a href="http://goatfundedtrader.com/" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj1} alt="" className=" rounded-xl lg:w-220 lg:h-70" />
                </div>

            </motion.div>
           </a>


<a href="https://goatfundedfutures.com/
">
               <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
               initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               >
                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Goat Funded Futures</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Figma</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Swiper Js</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A webflow site for a blockchain security and advisory company. I led the end-to-end design and development in Webflow, creating a responsive, modern experience optimized for clarity, performance, and trust.</p>

<a href="https://goatfundedfutures.com/" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj2} alt="" className="rounded-xl lg:w-290 lg:h-70 rounded-xl" />
                </div>

            </motion.div>
</a>

<a href="https://www.aquafunded.com/
">
               <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
               initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Aqua Funded</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Figma design</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Interaction</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A clean and professional fintech website built in Webflow from a Figma design, focused on clarity, responsiveness, and smooth interactions.</p>

<a href="https://www.aquafunded.com/
" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj3} alt="" className="rounded-xl lg:w-190 lg:h-70" />
                </div>

            </motion.div>
</a>    

<a href="https://fundedhero.com/">
               <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
               initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Funded Hero</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Memberstack</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Membership</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A platform connecting Christian singles across Africa. I built the entire site in Webflow, turning their Figma design into a responsive experience with Memberstack integration.</p>

<a href="https://fundedhero.com/" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                <img src={proj4} alt="" className="rounded-xl lg:w-240 lg:h-70" />
                </div>

            </motion.div>
</a>


<a href="http://kudofunded.com/">
               <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
               initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Kudo Fuded</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Animation</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">3d designs</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A clean, minimal, and immersive webflow site for Studio by Render, showcasing their bold product concepts and photorealistic 3D renders. Built to reflect their craft: simple, stunning, and intentional.</p>

<a href="http://kudofunded.com/" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj5} alt="" className="rounded-xl lg:w-270 lg:h-70" />
                </div>

            </motion.div>
</a>


<a href="https://quantumxfutures.com/home/">
               <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
               initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Quantum Futures</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Figma
</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Reponsive deisgn</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A community for postpartum parents. I took the content, designed the site in Figma, and developed it in Webflow.</p>

<a href="https://quantumxfutures.com/home/" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj6} alt="" className="rounded-xl lg:w-150 lg:h-70" />
                </div>

            </motion.div>
</a>


<a href="https://atsfunded.com/home">
               <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
               initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Ats Funded</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Figma design</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">GSAP</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A stylish and modern stay experience for travelers. Built entirely in Webflow based on a Figma design, I focused on seamless mobile responsiveness and subtle transitions that enhance the brand’s calming and premium feel.</p>

<a href="https://atsfunded.com/home" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj7} alt="" className="rounded-xl lg:w-290 lg:h-70" />
                </div>

            </motion.div>
</a>




<a href="https://www.phunk.co.uk/">
                <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
                initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Phunk</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Figma design</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">GSAP</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A stylish and modern stay experience for travelers. Built entirely in Webflow based on a Figma design, I focused on seamless mobile responsiveness and subtle transitions that enhance the brand’s calming and premium feel.</p>

<a href="https://www.phunk.co.uk/
" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj8} alt="" className="rounded-xl lg:w-290 lg:h-70" />
                </div>

            </motion.div>
</a>

<a href="http://tradetechsolutions.io/">
                <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
                initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Trade Tech Solutions</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Figma design</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">GSAP</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A stylish and modern stay experience for travelers. Built entirely in Webflow based on a Figma design, I focused on seamless mobile responsiveness and subtle transitions that enhance the brand’s calming and premium feel.</p>

<a href="http://tradetechsolutions.io/
" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj9} alt="" className="rounded-xl lg:w-290 lg:h-70" />
                </div>

            </motion.div>
</a>


<a href="http://lumio-branding.webflow.io/">
                <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
                initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Lumio - Branding</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Figma design</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">GSAP</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A stylish and modern stay experience for travelers. Built entirely in Webflow based on a Figma design, I focused on seamless mobile responsiveness and subtle transitions that enhance the brand’s calming and premium feel.</p>

<a href="http://lumio-branding.webflow.io/
" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj10} alt="" className="rounded-xl lg:w-290 lg:h-70" />
                </div>

            </motion.div>
</a>

<a href="https://wagerfunding.com/">
                <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl"
                initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >

                <div className="">
<h1 className="text-[1.75rem] proj-title text-white">Wager Funding</h1>

<div className="proj-tools flex flex-wrap gap-2 mt-3">
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Webflow Build</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">Figma design</p>
    <p className="border border-white w-auto px-5 h-7 flex justify-center items-center text-white text-[.75rem] font-bold rounded-full">GSAP</p>
</div>

<p className="proj-det lg:text-[1.125rem] text-[1rem] text-white font-bold lg:w-[75%] leading-[23px] mt-10">A stylish and modern stay experience for travelers. Built entirely in Webflow based on a Figma design, I focused on seamless mobile responsiveness and subtle transitions that enhance the brand’s calming and premium feel.</p>

<a href="https://wagerfunding.com/" >
        <button className="flex border w-45 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white mt-10">View Project <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
                </div>

                <div>
                    <img src={proj11} alt="" className="rounded-xl lg:w-290 lg:h-70" />
                </div>

            </motion.div>
</a>
</div>


     <section className="lg:px-[85px] px-[20px] md:px-[30px] bg-[#292929] h-auto pb-10 pt-5 mt-10">
            <motion.div className="relative h-auto pb-5 pt-3 rounded-xl bg-white px-[20px] max-w-350 mx-auto"
             initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >

<div className="absolute left-0 bottom-0"><img src={left} alt="" className="lg:w-117 w-90  h-auto object-cover" /></div>
<div className="absolute lg:right-0 md:right-0 md:bottom-0 bottom-0 hidden md:block lg:block"><img src={right} alt="" className="lg:w-115 w-18 md:w-70 h-auto object-cover" /></div>

           <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center relative">
            <h1 className="tools-des text-[1.5rem]">Udeh Precious</h1>
            <p className="tools-des text-[1.0rem]">Available to take on new projects!</p>
            </div> 

            <div className="leading-[200px] mt-10 relative hidden lg:block md:block">
                <h1 className="heading-hero lg:text-[13.625rem] text-[6.25rem] md:text-[13.625rem] uppercase text-center">ready to level up </h1>
                <h1 className="heading-hero lg:text-[13.625rem] text-[6.25rem] md:text-[13.625rem] uppercase text-center">your website?</h1>
            </div>

            <div className="leading-[100px] lg:hidden block pt-6 z-20 relative md:hidden">

<SplitText
  text="ready to level"
  className="heading-hero lg:text-[13.625rem] text-[6.25rem] uppercase text-center"
  delay={40}
  duration={0.2}
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>



<SplitText
  text="up your"
 className="heading-hero lg:text-[13.625rem] text-[6.25rem] uppercase text-center"
  delay={100}
  duration={0.2}
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>



<SplitText
  text="website"
 className="heading-hero lg:text-[13.625rem] text-[6.25rem] uppercase text-center"
  delay={140}
  duration={0.2}
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>


            </div>

            <div className="flex justify-center md:mt-10">
                    <a href="#">
                    <button className="flex border w-53 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem]">Book a Strategy call <span className="rounded-full bg-black inline-flex items-center justify-center w-7 h-7    "><img src={call} alt="call icon" className="w-[15px]" /></span></button>
                </a>
                </div>

                <div className="tools-des relative flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between lg:mt-25 mt-7 md:mt-11">
                    <div className="flex justify-center">
                        <p className="lg:text-[1rem] md:text-[1rem] text-[0.8rem] text-gray-500">Development by: Obadua Oluwafunmito</p>
                    </div>

                    <div className="flex gap-3 items-center justify-center">

                          <div>
                    <a href="#">
                    <button className="flex border lg:px-4 px-3  h-7 justify-center rounded-full items-center gap-2 lg:text-[1rem] md:text-[1rem] text-[0.7rem]">X(TWITTER)</button>
                </a>
                </div>

                    <div>
                    <a href="#">
                    <button className="flex border lg:px-4 px-3  h-7 justify-center rounded-full items-center gap-2 lg:text-[1rem] md:text-[1rem] text-[0.7rem]">LINKEDIN</button>
                </a>
                </div>

                    <div>
                    <a href="#">
                    <button className="flex border lg:px-4 px-3  h-7 justify-center rounded-full items-center gap-2 lg:text-[1rem] md:text-[1rem] text-[0.7rem]">INSTAGRAM</button>
                </a>
                </div>

                </div>
                     
        <div className="flex justify-center">
            <p className="lg:text-[1rem] md:text-[1rem] text-[0.8rem] text-gray-500 ">©2025 - All Rights Reserved</p>
        </div>
                     
                </div>
</motion.div>

        </section>

        </section>
    )
}
export default Projects