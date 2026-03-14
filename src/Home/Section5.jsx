import arrow2 from "../assets/arrow2.png";
import { useState } from "react";
import SplitText from "../SplitText";
import { motion } from "framer-motion";
function Section5() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you do Web Design or Development only?",
      answer:
        "Yes, I do both. I usually work on projects from design to webflow and framer development, however if you only require web design or development, I'm available for both.",
    },
    {
      question: "Will I get a responsive website?",
      answer: "Yes, the website will be responsive across all devices.",
    },
    {
      question: "How much does a website design and development cost?",
      answer:
        "It is determined by the complexity of the project as well as other requirements, such as animations, CMS collections, custom code, and so on.",
    },
    {
      question: "Do I need a Webflow/Framer Account?",
      answer:
        "Yes! But you don't need to purchase an account plan. I will develop the site on my account then transfer the project over to you.",
    },
    {
      question: "Are you available 24/7?",
      answer: "Yes, I am open for work.",
    },
  ];

  return (
    <section className="bg-[#292929] lg:px-[85px] px-[20px] md:px-[30px] h-auto pb-10">

      {/* Header */}
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">

 <SplitText
  text="YOUR QUESTIONS, ANSWERED"
  className="lg:text-[5rem] md:text-[5rem] text-[4rem] heading-hero text-white uppercase"
  delay={40}
  duration={0.2}
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>

        <a href="#" className="hidden lg:block">
          <button className="flex border w-[230px] justify-center rounded-full h-[52px] items-center gap-2 text-[1.1rem] text-white">
            Book a strategy call
            <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7">
              <img src={arrow2} alt="arrow icon" className="w-[15px]" />
            </span>
          </button>
        </a>
      </div>

      {/* FAQ Section */}
      <motion.div className="lg:pt-10  max-w-[1000px] mx-auto"
        initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >

        

        <div className="space-y-4 lg:pt-16 pt-7">

          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="border  border-white bg-transparent rounded-2xl overflow-hidden transition-all duration-300 w-full"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5"
                >
                  <span className="font-medium  tools-des text-white text-sm lg:text-[1.6rem] text-[1.2rem] text-left">
                    {faq.question}
                  </span>

                  <span className="text-2xl font-bold text-white">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isActive ? "max-h-40 lg:py-3 py-4" : "max-h-0"
                  }`}
                >
                  <p className="px-6 tools-des lg:text-[1.2rem] text-[1rem] text-white">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </motion.div>
  <a href="#" className="lg:hidden block mt-5">
          <button className="flex border mx-auto w-[230px] justify-center rounded-full h-[52px] items-center gap-2 text-[1.1rem] text-white">
            Book a strategy call
            <span className="rounded-full bg-white inline-flex items-center justify-center w-7 h-7">
              <img src={arrow2} alt="arrow icon" className="w-[15px]" />
            </span>
          </button>
        </a>

    </section>
  );
}

export default Section5;