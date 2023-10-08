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
              Barbie Cat lives in a perfect world. 
              But when she got to the real world, 
              She discover that there are lots of sad stray cat. 
              So Barbie gathered friends and helped strays with food and homes. 
              He couldn't fix everything, but he made their neighborhood better.
              </p>
            </Fade>
            <Fade direction="right" triggerOnce>
              <p className=" text-white-main xl:text-left text-center whitespace-normal font-comfortaa text-[16px] md:text-[26px] font-normal mt-4">
              Barbie Cat is a token made by the community. 
              Its goal is to help stray cats and give donation to animal shelters.
               The contract was deployed on bsc network with ownership renounced after launch.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default About;
