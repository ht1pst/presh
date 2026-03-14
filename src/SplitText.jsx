import { useEffect, useRef } from "react";
import gsap from "gsap";

function SplitText({
  text,
  className,
  delay = 50,
  duration = 1,
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 }
}) {
  const textRef = useRef();

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      from,
      {
        ...to,
        duration,
        stagger: delay / 1000
      }
    );
  }, []);

  return (
    <h1 ref={textRef} className={className}>
      {text.split("").map((char, index) => (
        <span key={index} style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

export default SplitText;