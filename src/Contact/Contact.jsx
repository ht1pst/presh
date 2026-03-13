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
function Contact(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
       <section className="bg-[#292929]">

  <header className="flex justify-between px-[95px] items-center h-20 relative max-w-380 mx-auto">

  <div className="">
    <a href="#" className="flex items-start text-[1.5rem] text-white name">
      Ajide Victor <span className="text-[0.5rem]">TM</span>
    </a>
  </div>

  <div className="w-105">
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
  className={`absolute top-20 left-1/2 -translate-x-1/2 mt-4 w-full h-screen   bg-[#292929] rounded-xl  flex flex-col gap-4 p-5 text-white z-50
  transition-all duration-300 ease-in-out
  ${menuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-6 invisible"}
`}
>

  <div className="heading-hero h-auto pb-5 leading-[160px] absolute rounded-2xl left-1/2 -translate-x-1/2 text-[7.5rem] bg-[#353535] text-white w-[80%] px-[30px] ">
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

 <div className="px-[90px] pt-15">
<h2 className="heading-hero text-white text-[7rem] flex justify-center uppercase " >Get in touch</h2>
<p className="tools-des text-[1rem] text-white flex justify-center max-w-[35rem] text-center mx-auto   font-500 relative  ">I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.</p>


<div className="mt-5">
    <div className="flex gap-4 justify-center">
        <input type="text" name="" id="" placeholder="Full Name" className="border-zinc-200  border h-13 w-70 px-3 rounded-xl bg-[#f2f2f2]" />
        <input type="text" placeholder="Email Address" className="border-zinc-200  border h-13 w-70 px-3 rounded-xl bg-[#f2f2f2]" />
    </div>


<div className="flex gap-4 justify-center">
    <textarea name="" id="" placeholder="Write your Message" className="border-zinc-200  border w-144 p-4 h-40 rounded-xl bg-[#f2f2f2] mt-4"></textarea>
    </div>
</div>


<div
  className="relative h-[50px] rounded-full w-144 rounded-xl overflow-hidden  mx-auto mt-5 bg-black"
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


   <section className=" px-[85px] bg-[#292929] auto pb-10 pt-10">
       
        
        <div className="max-w-350 mx-0 2xl:mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-9">
        
        <div className="bg-[#353535] px-[20px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl">
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
        
        <p className="text-white text-[1.125rem] tools-des leading-[23px] mt-18 ">“It was our first time taking a B2B website from Figma to Webflow, and Victor nailed our project. His communication was clear and consistent throughout the entire process, and the final result exceeded expectations.”</p>
        </div>
        
        <div className="bg-[#353535] px-[20px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl">
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
        
        <p className="text-white text-[1.125rem] tools-des leading-[26px] mt-15 ">"I had an excellent experience working with Victor for the Stayvera website! The communication was outstanding, he always kept me informed every step of the way. The final result was beyond my expectations.</p>
        </div>
        
        <div className="bg-[#353535] px-[20px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl">
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
        
        <p className="text-white text-[1.125rem] tools-des leading-[26px] mt-10 ">Working with Victor has been such a seamless experience. He revamped my blog page on Webflow beautifully, handled all the updates with care, and even took the time to train my team so we could manage things confidently on our own.</p>
        </div>
        
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-9">
        
        <div className="bg-[#353535] px-[20px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl">
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
        
        <p className="text-white text-[1.125rem] tools-des leading-[23px] mt-10 ">Ajide Victor did a great job. He was communicative and able to make all the webflow edits necessary in a timely fashion. If you’re looking for a Webflow developer who is talented, reliable, and a pleasure to work with, Victor is your guy.</p>
        </div>
        
        <div className="bg-[#353535] px-[20px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl">
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
        
        <p className="text-white text-[1.125rem] tools-des leading-[26px] mt-10 ">Ajide Victor was very eager to support the requests and delivered the in short time. What truly impressed me was his attention to every detail and his willingness to keep working until even the smallest imperfection was resolved. I was very pleased and will hire.</p>
        </div>
        
        <div className="bg-[#353535] px-[20px] w-full max-w-[510px] h-auto py-[15px] rounded-2xl">
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
        
        <p className="text-white text-[1.125rem] tools-des leading-[26px] mt-10 ">"Working with Ajide on this project was an extremely positive experience. From the start, he demonstrated great technical expertise and a clear understanding of how to implement Memberstack into our Webflow platform.</p>
        </div>
        
        </div>
        </div>
        
                </section>
  
  
     <section className="px-[85px] bg-[#292929] h-auto pb-10 pt-15">
              <div className="relative h-auto pb-5 pt-3 rounded-xl bg-white px-[20px] max-w-350 mx-auto">
  
  <div className="absolute left-0 bottom-0"><img src={left} alt="" className="w-117 h-auto object-cover" /></div>
  <div className="absolute right-0 bottom-0"><img src={right} alt="" className="w-115 h-auto object-cover" /></div>
  
             <div className="flex justify-between items-center relative">
              <h1 className="tools-des text-[1.5rem]">Ajide Victor</h1>
              <p className="tools-des text-[1.0rem]">Available to take on new projects!</p>
              </div> 
  
              <div className="leading-[200px] mt-10 relative">
                  <h1 className="heading-hero text-[13.625rem] uppercase text-center">ready to level up </h1>
                  <h1 className="heading-hero text-[13.625rem] uppercase text-center">your website?</h1>
              </div>
  
              <div className="flex justify-center">
                      <a href="#">
                      <button className="flex border w-53 justify-center rounded-full h-13 items-center gap-2 text-[1.1rem]">Book a Strategy call <span className="rounded-full bg-black inline-flex items-center justify-center w-7 h-7    "><img src={call} alt="call icon" className="w-[15px]" /></span></button>
                  </a>
                  </div>
  
                  <div className="tools-des relative flex justify-between mt-25">
                      <div>
                          <p className="text-[1rem]">Development by: Ajide Victor</p>
                      </div>
  
                      <div className="flex gap-3 items-center">
  
                            <div>
                      <a href="#">
                      <button className="flex border px-4  h-7 justify-center rounded-full items-center gap-2 text-[1rem]">X(TWITTER)</button>
                  </a>
                  </div>
  
                      <div>
                      <a href="#">
                      <button className="flex border px-4  h-7 justify-center rounded-full items-center gap-2 text-[1rem]">LINKEDIN</button>
                  </a>
                  </div>
  
                      <div>
                      <a href="#">
                      <button className="flex border px-4  h-7 justify-center rounded-full items-center gap-2 text-[1rem]">INSTAGRAM</button>
                  </a>
                  </div>
  
                  </div>
                       
          <div>
              <p>©2025 - All Rights Reserved</p>
          </div>
                       
                  </div>
  </div>
  
          </section>

       </section>
    )
}
export default Contact