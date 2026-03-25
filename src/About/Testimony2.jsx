import { Link } from "react-router-dom";
import arrow2 from "../assets/arrow2.png";
import video from "../assets/video.mp4";
function Testimony2(){
    return(
        <section className="w-full h-auto pb-10  bg-[#292929] px-[20px] text-white" id="testimony2">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

       
        <div className="rounded-2xl overflow-hidden border-[#616161] border">
          <video
            src={video}
            controls
            className="w-full lg:h-150 h-100 object-cover"
          />
        </div>

        
        <div>
          <p className="lg:text-[1rem] text-[1.1rem] md:text-[1.25rem] leading-[18px] md:leading-[25px]  heading-p text-gray-300">Client Testimonial</p>

          <h2 className="text-3xl leading-[80px]  heading-hero lg:text-[7rem] uppercase text-[4.8rem] mt-3">
            Real results. Real feedback.
          </h2>

          <p className="lg:text-[1.1rem] text-[1.0rem] md:text-[1.25rem] leading-[18px] md:leading-[25px]  heading-p text-white">
            I don’t just build websites I help brands create experiences that
            convert. Here’s what one of my clients had to say after working with me.
          </p>

        
        </div>

      </div>
    </section>
    )
}
export default Testimony2