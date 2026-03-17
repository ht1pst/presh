import but from "../assets/greenbut.avif";
import bg from "../assets/doodle.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";
import call from "../assets/call.webp";
import right from "../assets/right.avif";
import left from "../assets/left.avif";
import SplitText from "../SplitText";
import { motion } from "framer-motion";
function Contact(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
       <section className="bg-[#292929]">
    <div className="lg:hidden block mx-auto  w-70 pt-3 ">
    <a href="#" className="flex items-center h-8 rounded-lg justify-center  text-[0.6rem] bg-[#353535] text-white available">
     
      Available to take on new Webflow projects! Let’s talk
    </a>
  </div>
       <header className="flex  justify-between lg:px-[95px] px-[20px] items-center lg:h-20 h-13 relative max-w-380 mx-auto">


<div className="" >
  <div className="">
    <a href="#" className="flex items-start lg:text-[1.5rem] text-[1.1rem] text-white name">
      Precious Triumph <span className="text-[0.5rem]">TM</span>
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


 <div className="lg:px-[90px]  px-[20px] lg:pt-15">
<h2 className="heading-hero text-white lg:text-[7rem] text-[6rem] flex lg:justify-center uppercase " >Get in touch</h2>
<p className="tools-des text-[1rem] text-white flex justify-center max-w-[35rem] lg:text-center mx-auto   font-500 relative  ">I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.</p>


<div className="mt-5">
    <div className="flex flex-col lg:flex-row gap-4 justify-center">
        <input type="text" name="" id="" placeholder="Full Name" className="border-zinc-200  border h-13 lg:w-70 px-3 rounded-xl bg-[#f2f2f2]" />
        <input type="text" placeholder="Email Address" className="border-zinc-200  border h-13 lg:w-70 px-3 rounded-xl bg-[#f2f2f2]" />
    </div>

    


<div className="flex gap-4 justify-center">
    <textarea name="" id="" placeholder="Write your Message" className="border-zinc-200  border lg:w-144 w-full p-4 h-40 rounded-xl bg-[#f2f2f2] mt-4"></textarea>
    </div>
</div>


<div
  className="relative h-[50px] rounded-full lg:w-144 rounded-xl overflow-hidden  mx-auto mt-5 bg-black"
  id="home"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

  {/* Dark Overlay */}
 <div className="absolute inset-0 bg-black/90"></div>

  {/* Content */}
  <div className="relative z-10 flex justify-center items-center h-full">
    <button className="text-white  rounded-lg ">
      Send Message
    </button>
  </div>

</div>

             </div>


   <section className=" lg:px-[85px] px-[20px] md:px-[30px]  bg-[#292929] auto pb-10 pt-10">
    <div className="max-w-350 mx-auto" >

<SplitText
  text="helped 20+ companies design, ship, and raise."
  className="uppercase text-white heading-hero lg:text-[5rem] text-[4rem] lg:leading-0 leading-[80px] "
  delay={120}
  duration={0.2}
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>

        <p className="text-[1.25rem] text-white tools-des mt-4 lg:mt-10">Hear it from founders who've raised, and shipped with us.</p>
    </div>
    
    <div className="max-w-350 mx-0 2xl:mx-auto">
    
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-9">
    
    <motion.div className="bg-[#353535] lg:px-[20px] px-[10px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl"
    initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
    <div className="flex items-center gap-3">
        <div>
            <img src={person1} alt="" className="rounded-full w-15" />
        </div>
        <div>
            <h1 className="text-[1.25rem] tools-des text-white font-bold">David Bradley</h1>
            <p className="text-[0.875rem] text-[#ececec99] tools-des">Chief Technologist SubRx</p>
        </div>
    </div>
    
    <div className="border mt-6 border-l-0 border-r-0 border-[#ececec99]"></div>
    
    <p className="text-white lg:text-[1.125rem] md:text-[1.125rem] text-[1rem] tools-des leading-[23px] lg:mt-15 mt-5 ">“It was our first time taking a B2B website from Figma to Webflow, and Victor nailed our project. His communication was clear and consistent throughout the entire process, and the final result exceeded expectations.”</p>
    </motion.div>
    
    <motion.div className="bg-[#353535] lg:px-[20px] px-[10px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl"
    initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
    <div className="flex items-center gap-3">
        <div>
            <img src={person2} alt="" className="rounded-full w-15" />
        </div>
        <div>
            <h1 className="text-[1.25rem] tools-des text-white font-bold">Nicolas Villa</h1>
            <p className="text-[0.875rem] text-[#ececec99] tools-des">Founder & CEO at Stayvera Inc.</p>
        </div>
    </div>
    
    <div className="border border-1 mt-6 border-l-0 border-r-0 border-[#ececec99]"></div>
    
    <p className="text-white lg:text-[1.125rem] md:text-[1.125rem] text-[1rem] tools-des lg:leading-[26px] leading-[20px] lg:mt-15 mt-5 ">"I had an excellent experience working with Victor for the Stayvera website! The communication was outstanding, he always kept me informed every step of the way. The final result was beyond my expectations.</p>
    </motion.div>
    
    <motion.div className="bg-[#353535] lg:px-[20px] px-[10px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl"
    initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
    >
    <div className="flex items-center gap-3">
        <div>
            <img src={person3} alt="" className="rounded-full w-15" />
        </div>
        <div>
            <h1 className="text-[1.25rem] tools-des text-white font-bold">Tai Owoka</h1>
            <p className="text-[0.875rem] text-[#ececec99] tools-des">Founder ZenMomTribe.</p>
        </div>
    </div>
    
    <div className="border mt-6 border-l-0 border-r-0 border-[#ececec99]"></div>
    
    <p className="text-white lg:text-[1.125rem] md:text-[1.125rem] text-[1rem] tools-des lg:leading-[26px] leading-[20px] lg:mt-10 mt-5 ">Working with Victor has been such a seamless experience. He revamped my blog page on Webflow beautifully, handled all the updates with care, and even took the time to train my team so we could manage things confidently on our own.</p>
    </motion.div>
    
  <motion.div className="bg-[#353535] lg:px-[20px] px-[10px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
  >
    <div className="flex items-center gap-3">
        <div>
            <img src={person4} alt="" className="rounded-full w-15" />
        </div>
        <div>
            <h1 className="text-[1.25rem] tools-des text-white font-bold">Josh Kaplan</h1>
            <p className="text-[0.875rem] text-[#ececec99] tools-des">Smooth Media CEO</p>
        </div>
    </div>
    
    <div className="border mt-6 border-l-0 border-r-0 border-[#ececec99]"></div>
    
    <p className="text-white lg:text-[1.125rem] md:text-[1.125rem] text-[1rem] tools-des leading-[23px] lg:mt-10 mt-5 ">Ajide Victor did a great job. He was communicative and able to make all the webflow edits necessary in a timely fashion. If you’re looking for a Webflow developer who is talented, reliable, and a pleasure to work with, Victor is your guy.</p>
    </motion.div>
    
    <motion.div className="bg-[#353535] lg:px-[20px] px-[10px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl"
    initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
    >
    <div className="flex items-center gap-3">
        <div>
            <img src={person5} alt="" className="rounded-full w-15" />
        </div>
        <div>
            <h1 className="text-[1.25rem] tools-des text-white font-bold">Shelley Kemmerer</h1>
            <p className="text-[0.875rem] text-[#ececec99] tools-des">RTM Founder</p>
        </div>
    </div>
    
    <div className="border border-1 mt-6 border-l-0 border-r-0 border-[#ececec99]"></div>
    
    <p className="text-white lg:text-[1.125rem] md:text-[1.125rem] text-[1rem] tools-des lg:leading-[26px] leading-[20px] lg:mt-10 mt-5 ">Ajide Victor was very eager to support the requests and delivered the in short time. What truly impressed me was his attention to every detail and his willingness to keep working until even the smallest imperfection was resolved. I was very pleased and will hire.</p>
    </motion.div>
    
    <motion.div className="bg-[#353535] lg:px-[20px] px-[10px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl"
    initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
    >
    <div className="flex items-center gap-3">
        <div>
            <img src={person6} alt="" className="rounded-full w-15" />
        </div>
        <div>
            <h1 className="text-[1.25rem] tools-des text-white font-bold">Daniel Delgado</h1>
            <p className="text-[0.875rem] text-[#ececec99] tools-des">TradeSpace Founder</p>
        </div>
    </div>
    
    <div className="border mt-6 border-l-0 border-r-0 border-[#ececec99]"></div>
    
    <p className="text-white lg:text-[1.125rem] md:text-[1.125rem] text-[1rem] tools-des lg:leading-[26px] leading-[20px] lg:mt-10 mt-5 ">"Working with Ajide on this project was an extremely positive experience. From the start, he demonstrated great technical expertise and a clear understanding of how to implement Memberstack into our Webflow platform.</p>
    </motion.div>

    </div>
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-9">
    
  
    
    </div>
    </div>
    
            </section>
    



      <section className="lg:px-[85px] px-[20px] md:px-[30px] bg-[#292929] h-auto pb-10 pt-5">
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
export default Contact