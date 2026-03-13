import framer from "../assets/framer.png";
import figma from "../assets/figma.png";
import webflow from "../assets/webflow.avif";
import support from "../assets/support.avif";
function Section3(){
    return(
        <section className="bg-[#292929] lg:px-[85px] px-[20px] h-auto pb-10 ">
            <div className="flex lg:flex-row flex-col justify-between  max-w-350 mx-auto">
            <div>
                <h1 className="heading-hero lg:text-[5rem] text-[4rem] text-white uppercase pt-30">what i do</h1>
            </div>

            <div className="flex flex-col gap-5">


                <div className="p-[15px] lg:w-170 bg-[#353535] rounded-xl text-white  justify-center    lg:sticky lg:top-0   lg:pt-20">
                    <div className="bg-white w-15 h-15 flex items-center rounded-lg ">
<img src={figma} alt="" className="mx-auto flex w-[23px] items-center" />
</div>
<h1 className="tools lg:text-[1.75rem] text-[1.25rem] pt-2 font-bold">UX/UI Design</h1>
<p className="tools-des text-[1rem] lg:text-[1.125rem] pt-3 lg:pt-8 leading-[20px] ">User Experience Design and User Interface Design are some of the most important skill-sets that help make an app or web-app stand out from the crowd. I ensure your designs are intuitive, compelling, and memorable makes all the difference</p>
                </div>


                 <div className="p-[15px] lg:w-170 bg-[#353535] rounded-xl text-white  justify-center    lg:sticky lg:top-0   lg:pt-20">
                    <div className="bg-white w-15 h-15 flex items-center rounded-lg ">
<img src={webflow} alt="" className="mx-auto flex w-[23px] items-center" />
</div>
<h1 className="tools lg:text-[1.75rem] text-[1.25rem] pt-2 font-bold">
Website Development (WEBFLOW)</h1>
<p className="tools-des text-[1rem] lg:text-[1.125rem] pt-3 lg:pt-8 leading-[20px] ">I design and build fast, scalable, and conversion-focused websites using Webflow. From Figma to live site, I ensure clean structure, responsive design, and easy updates, so your website not only looks great but works for your business.</p>
                </div>


                 <div className="p-[15px] lg:w-170 bg-[#353535] rounded-xl text-white  justify-center    lg:sticky lg:top-0   lg:pt-20">
                    <div className="bg-white w-15 h-15 flex items-center rounded-lg ">
<img src={framer} alt="" className="mx-auto flex w-[200px] items-center object-cover" />
</div>
<h1 className="tools lg:text-[1.75rem] text-[1.25rem] pt-2 font-bold">Website Development (FRAMER)</h1>
<p className="tools-des text-[1rem] lg:text-[1.125rem] pt-3 lg:pt-8 leading-[20px] ">I create interactive, visually stunning websites with Framer, perfect for startups and brands that want bold design, smooth animations, and flexibility. With Framer, I bring ideas to life quickly, blending creativity with performance.</p>
                </div>


                 <div className="p-[15px] lg:w-170 bg-[#353535] rounded-xl text-white  justify-center    lg:sticky lg:top-0   lg:pt-20">
                    <div className="bg-white w-15 h-15 flex items-center rounded-lg ">
<img src={support} alt="" className="mx-auto flex w-[23px] items-center" />
</div>
<h1 className="tools lg:text-[1.75rem] text-[1.25rem] pt-2 font-bold">Ongoing Support</h1>
<p className="tools-des text-[1rem] lg:text-[1.125rem] pt-3 lg:pt-8 leading-[20px] ">Ongoing support for your web app, including regular updates, bug fixes, performance optimization, and ongoing improvements. Ensuring your app remains secure, scalable, and up-to-date with the latest features.</p>
                </div>


            </div>

            </div>
        </section>
    )
}
export default Section3