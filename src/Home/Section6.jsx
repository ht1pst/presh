import call from "../assets/call.webp";
import right from "../assets/right.avif";
import left from "../assets/left.avif";
function Section6(){
    return(
        <section className="lg:px-[85px] px-[20px] md:px-[30px] bg-[#292929] h-auto pb-10 pt-5">
            <div className="relative h-auto pb-5 pt-3 rounded-xl bg-white px-[20px] max-w-350 mx-auto">

<div className="absolute left-0 bottom-0"><img src={left} alt="" className="lg:w-117 w-90  h-auto object-cover" /></div>
<div className="absolute lg:right-0 md:right-0 md:bottom-0 bottom-0 hidden md:block lg:block"><img src={right} alt="" className="lg:w-115 w-18 md:w-70 h-auto object-cover" /></div>

           <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center relative">
            <h1 className="tools-des text-[1.5rem]">Ajide Victor</h1>
            <p className="tools-des text-[1.0rem]">Available to take on new projects!</p>
            </div> 

            <div className="leading-[200px] mt-10 relative hidden lg:block md:block">
                <h1 className="heading-hero lg:text-[13.625rem] text-[6.25rem] md:text-[13.625rem] uppercase text-center">ready to level up </h1>
                <h1 className="heading-hero lg:text-[13.625rem] text-[6.25rem] md:text-[13.625rem] uppercase text-center">your website?</h1>
            </div>

            <div className="leading-[100px] lg:hidden block pt-6 z-20 relative md:hidden">
               <h1 className="heading-hero lg:text-[13.625rem] text-[6.25rem] uppercase text-center">ready to level</h1> 
               <h1 className="heading-hero lg:text-[13.625rem] text-[6.25rem] uppercase text-center"> up your </h1>
               <h1 className="heading-hero lg:text-[13.625rem] text-[6.25rem] uppercase text-center">website </h1>
            </div>

            <div className="flex justify-center md:mt-10">
                    <a href="#">
                    <button className="flex border w-53 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem]">Book a Strategy call <span className="rounded-full bg-black inline-flex items-center justify-center w-7 h-7    "><img src={call} alt="call icon" className="w-[15px]" /></span></button>
                </a>
                </div>

                <div className="tools-des relative flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between lg:mt-25 mt-7 md:mt-11">
                    <div className="flex justify-center">
                        <p className="lg:text-[1rem] md:text-[1rem] text-[0.8rem] text-gray-500">Development by: Ajide Victor</p>
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
</div>

        </section>
    )
}
export default Section6