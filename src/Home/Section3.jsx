import framer from "../assets/framer.png";
import figma from "../assets/figma.png";
import webflow from "../assets/webflow.avif";
import support from "../assets/support.avif";
import code from "../assets/code.png";
import email from "../assets/email.png";
import app from "../assets/app.png";
import SplitText from "../SplitText";
import { motion } from "framer-motion";
function Section3(){
    return(
        <section className="bg-[#292929] lg:px-[85px] px-[20px] md:px-[30px] h-auto pb-10 ">
            <div className="flex lg:flex-row flex-col justify-between  max-w-350 mx-auto">
            <div>

 <SplitText
  text="what i do"
  className="heading-hero lg:text-[5rem] text-[4rem] text-white uppercase lg:pt-30"
  delay={40}
  duration={0.2}
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>

            </div>

            <motion.div className="flex flex-col gap-5"
              initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >


                <div className="p-[15px] lg:w-170 bg-[#353535] rounded-xl text-white  justify-center    lg:sticky lg:top-0   lg:pt-20">
                    <div className="bg-white w-15 h-15 flex items-center rounded-lg ">
<img src={code} alt="" className="mx-auto flex w-[28px] items-center" />
</div>
<h1 className="tools lg:text-[1.75rem] text-[1.25rem] pt-2 font-bold">Website Development</h1>
<p className="tools-des text-[1rem] lg:text-[1.125rem] md:text-[1.125rem] pt-3 lg:pt-8 md:pt-10 leading-[20px] ">I build fast, scalable, and conversion-focused websites — from scratch using clean, custom code or through platforms like WordPress and Webflow when it makes managing content easier for the client. Either way, you get responsive design, solid structure, and a site that works for your business.</p>
                </div>


                 <div className="p-[15px] lg:w-170 bg-[#353535] rounded-xl text-white  justify-center    lg:sticky lg:top-0   lg:pt-20">
                    <div className="bg-white w-15 h-15 flex items-center rounded-lg ">
<img src={app} alt="" className="mx-auto flex w-[28px] items-center" />
</div>
<h1 className="tools lg:text-[1.75rem] text-[1.25rem] pt-2 font-bold">
App Development</h1>
<p className="tools-des text-[1rem] lg:text-[1.125rem] md:text-[1.125rem] pt-3 lg:pt-8 md:pt-10 leading-[20px] ">I build functional, user-friendly web and mobile applications tailored to your business needs. From idea to deployment, every app is built with performance, scalability, and real users in mind.</p>
                </div>


                 <div className="p-[15px] lg:w-170 bg-[#353535] rounded-xl text-white  justify-center    lg:sticky lg:top-0   lg:pt-20">
                    <div className="bg-white w-15 h-15 flex items-center rounded-lg ">
<img src={email} alt="" className="mx-auto flex w-[28px] items-center object-cover" />
</div>
<h1 className="tools lg:text-[1.75rem] text-[1.25rem] pt-2 font-bold">Email Automation</h1>
<p className="tools-des text-[1rem] lg:text-[1.125rem] md:text-[1.125rem] pt-3 lg:pt-8 md:pt-10 leading-[20px] ">I set up smart email workflows that engage your audience and drive action — from welcome sequences to abandoned cart flows — so your business keeps running even when you're not.</p>
                </div>


                 <div className="p-[15px] lg:w-170 bg-[#353535] rounded-xl text-white  justify-center    lg:sticky lg:top-0   lg:pt-20">
                    <div className="bg-white w-15 h-15 flex items-center rounded-lg ">
<img src={support} alt="" className="mx-auto flex w-[23px] items-center" />
</div>
<h1 className="tools lg:text-[1.75rem] text-[1.25rem] pt-2 font-bold">Ongoing Support</h1>
<p className="tools-des text-[1rem] lg:text-[1.125rem] md:text-[1.125rem] pt-3 lg:pt-8 md:pt-10 leading-[20px] ">Websites and apps need care after launch. I offer reliable maintenance, updates, and technical support so you can focus on your business without worrying about what's happening under the hood.</p>
                </div>


            </motion.div>

            </div>
        </section>
    )
}
export default Section3