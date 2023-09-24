import React from "react";
import ComponentWrapper from "@/components/shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <ComponentWrapper style="py-8 ">
      <div
        id="about"
        className="w-full min-h-screen flex justify-center items-center overflow-x-hidden"
      >
        <div className="w-full h-full xl:w-[90%]  gap-10 grid grid-cols-1 xl:grid-cols-[1fr,1fr]">
          {/* ==> image */}
          <Fade
            direction="left"
            triggerOnce
            className="w-full flex justify-center items-center"
          >
            <div className="w-full max-w-[300px] md:max-w-[500px] h-[300px] md:h-[480px] relative">
              <Image src="/logo.png" alt="" fill />
            </div>
          </Fade>
          {/* ===> text */}
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <Fade direction="down" triggerOnce>
              <p className="capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
                about barbie cat
              </p>
            </Fade>
            <Fade direction="right" triggerOnce>
              <p className=" text-white-main xl:text-left text-center whitespace-normal font-comfortaa text-[16px] md:text-[26px] font-normal">
              In a quiet neighborhood, Barbie the curious cat saw a sad stray cat.
               He asked an old cat, why some cats suffer. 
               he said it's just how life is. 
               But Barbie gathered friends and helped strays with food and homes. 
              He couldn't fix everything, but he made their neighborhood better.
              </p>
            </Fade>
            <Fade direction="right" triggerOnce>
              <p className=" text-white-main xl:text-left text-center whitespace-normal font-comfortaa text-[16px] md:text-[26px] font-normal mt-4">
              Barbie Cat is a token made by the community. 
              Its goal is to help stray cats and give donation to animal shelters.
               The contract was launch on ethereum network with ownership renounced.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default About;
