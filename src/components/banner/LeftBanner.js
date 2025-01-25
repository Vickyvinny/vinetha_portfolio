import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "FrontEnd Developer",
        "React.js Developer",
        "React Native Developer"
      ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Vinay Mathangi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Passionate and skilled React.js & React Native Developer with 2 years
          of experience in designing, developing, and maintaining high-quality
          web & mobile applications. Proficient in JavaScript, TypeScript, and
          Redux, with a strong understanding of RESTful APIs, asynchronous
          programming, and performance optimization. Adept at creating
          user-friendly and responsive interfaces to enhance user experience.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner