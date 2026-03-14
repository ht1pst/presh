import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";
import SplitText from "../SplitText";
import { motion } from "framer-motion";
function Section4(){
    return(
     <section className=" lg:px-[85px] px-[20px] md:px-[30px]  bg-[#292929] auto pb-10 pt-10">
    <div className="max-w-350 mx-auto" >

<SplitText
  text="helped 20+ companies design, ship, and raise."
  className="uppercase text-white heading-hero lg:text-[5rem] text-[4rem] lg:leading-0 leading-[80px] "
  delay={40}
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
    )
}
export default Section4