import proj1 from "../assets/project1 (1).png";
import proj2 from "../assets/project1 (2).png";
import proj3 from "../assets/project1 (3).png";
import arrow2 from "../assets/arrow2.png";
import SplitText from "../SplitText";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Section2(){

 

    return(
       <section className="bg-[#292929] h-auto pb-10 lg:px-[90px] px-[20px] md:px-[30px] pt-10">
        <div className="flex items-center justify-between mx-auto max-w-350">

<SplitText
  text="Completed Projects"
 className="lg:text-[5rem] text-[4rem] heading-hero text-white uppercase"
  delay={100}
  duration={0.2}
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>

          


 <a href="#" className="hidden lg:block">
        <button className="flex border w-58 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white">What Our Clients Say <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </a>
        </div>

        <div className="mt-7 flex flex-col ">

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
               <motion.div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 rounded border max-w-350 mx-auto border-[#616161] p-5 rounded-2xl mt-8"
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




<div className="flex justify-center mt-5">
<Link to="/projects">
        <button className="flex border w-35 lg:w-50 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem] text-white">View All<span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7    "><img src={arrow2} alt="call icon" className="w-[15px]" /></span></button>
    </Link>
</div>



               
        </div>

       </section>
    )
}
export default Section2