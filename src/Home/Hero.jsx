import but from "../assets/greenbut.avif";
import menu from "../assets/menu.png";
import img from "../assets/img2.jpeg";
import img2 from "../assets/whiteimg.avif";
import call from "../assets/call.webp";
import arrow from "../assets/arrow.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
function Hero(){
const [menuOpen, setMenuOpen] = useState(false);

    return(
        <section className=" bg-[#292929] h-auto pb-10">
             <div className="lg:hidden block mx-auto  w-70 pt-3 ">
    <a href="#" className="flex items-center h-8 rounded-lg justify-center  text-[0.6rem] bg-[#353535] text-white available">
     
      Available to take on new Webflow projects! Let’s talk
    </a>
  </div>
       <header className="flex  justify-between lg:px-[95px] px-[20px] items-center lg:h-20 h-13 relative max-w-380 mx-auto">


<div className="" >
  <div className="">
    <a href="#" className="flex items-start lg:text-[1.5rem] text-[1.1rem] text-white name">
    Udeh Precious <span className="text-[0.5rem]">TM</span>
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
  <div className="flex flex-col lg:flex-row justify-center lg:gap-15 gap-5 lg:pt-10 pt-7  mx-auto px-[20px]">


<div className=" leading-[55px] block lg:hidden">
 <h1 className=" heading-hero lg:text-[11rem]  text-[4.5rem]  text-white uppercase">Your Webflow Design &</h1>
<h1 className=" heading-hero lg:text-[11rem]  text-[4.5rem]   text-white mt-3 uppercase">Development Partner</h1>
</div>
                <div>
                    <img src={img} alt="" className="w-150 h-100 lg:h-168 rounded-xl object-cover"   />
                </div>

                <div className="">
                    <h1 className=" heading-hero leading-[150px] lg:text-[11rem]  text-[5rem] lg:block hidden text-white uppercase">Your Webflow Design &</h1>
<h1 className=" heading-hero leading-[150px] lg:text-[11rem]  text-[5rem]  lg:block hidden text-white mt-3 uppercase">Development Partner</h1>
                    <div className="bg-white lg:w-170 h-auto pb-5 rounded-2xl  p-[15px] mt-5">
                        <p className="lg:text-[1.25rem] text-[1.1rem] leading-[18px]  heading-p">A trusted B2B Webflow partner for professional services firms and SaaS companies ready to turn their websites into revenue-driving assets. Trusted by Reanest, Stayvera, Bech32, and Xio to deliver strategic B2B Websites.</p>

                        <img src={img2} alt="" className="w-100" />

<div className="flex flex-col lg:flex-row gap-5">

    <div>
        <a href="#">
        <button className="flex border lg:w-53 w-full justify-center rounded-full h-13 items-center gap-2 lg:text-[1.1rem] text-[0.9rem]">Book a Strategy call <span className="rounded-full bg-black inline-flex items-center justify-center w-7 h-7    "><img src={call} alt="call icon" className="w-[15px]" /></span></button>
    </a>
    </div>


    <div>
        <a href="#">
        <button className="flex border lg:w-58  w-full justify-center rounded-full h-13 items-center gap-2 lg:text-[1.1rem] text-[0.9rem]">What Our Clients Say <span className="rounded-full bg-black inline-flex items-center justify-center w-7 h-7    "><img src={arrow} alt="call icon" className="w-[15px]" /></span></button>
    </a>
    </div>
</div>

                    </div>
                </div>


            </div>

        </section>
    )
}
export default Hero