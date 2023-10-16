import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

function Hero() {
  return (
    <ComponentWrapper style="py-8 lg:py-0">
      <div
        id="home"
        className="w-full min-h-[calc(100vh-150px)] flex justify-center items-center overflow-hidden"
      >
        <div className="w-full h-full xl:w-[90%] grid grid-cols-1 lg:grid-cols-[1fr,1fr] lg:gap-0 gap-4">
          {/* ===> left portion */}
          <div className="w-full flex flex-col gap-3 md:gap-6 justify-center items-start">
            <Fade
              direction="left"
              duration={1500}
              triggerOnce
              className="w-full lg:text-left text-center"
            >
              <p className="w-full capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
                barbie cat
              </p>
              <p className="text-white-main text-center lg:text-left font-comfortaa text-[20px] md:text-[26px] font-normal">
              Enter the enchanting universe of Barbie Cat
              in collaboration with MelegaSwap, You
              generate awesome rewards through yield farming & staking pool– it's a win-win!
              </p>
            </Fade>
            {/* ===> social links */}
            <Zoom triggerOnce>
              <div className="w-full flex flex-wrap justify-center lg:justify-start items-center gap-3">
                {SocialLinks.map((soc, index) => {
                  return (
                    <>
                      {index === 0 || index === 1 ? (
                        <Link
                          key={index}
                          href={soc.path}
                          className="w-[50px] md:w-[65px] h-[50px] md:h-[65px] rounded-full hover:scale-110 transition-transform duration-300 flex justify-center items-center bg-black-main"
                        >
                          {soc.icon}
                        </Link>
                      ) : (
                        <Link key={index} href={soc.path}>
                          <div className="w-[48px] md:w-[67px] h-[48px] md:h-[67px] relative">
                            <Image
                              src={`${soc.icon}`}
                              fill
                              className="object-contain hover:scale-110 transition-transform duration-300"
                              alt=""
                            ></Image>
                          </div>
                        </Link>
                      )}
                    </>
                  );
                })}
              </div>
            </Zoom>
          </div>
          {/* ==> right postion */}
          <Fade
            direction="right"
            duration={1500}
            triggerOnce
            className="w-full flex justify-center lg:justify-end items-center"
          >
            <div className="w-full flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-[300px] md:max-w-[430px] h-[300px] md:h-[420px] relative">
                <Image src="/logo.png" fill alt=""></Image>
              </div>
            </div>
          </Fade>
          {/* ====> buttons */}

          <div className="w-full col-span-1 lg:col-span-3 flex flex-wrap gap-4 justify-center lg:justify-start items-center">
            {/* 1 button */}
            <Fade direction="up" triggerOnce>
              <div className="w-[200px] h-[58px] flex justify-center hover:bg-white-main/20 items-center border-[2px] border-white-main rounded-[30px]">
                <button className="text-[22px] font-semibold text-white-main flex justify-center items-center gap-1">
          <Link href="https://gempad.app/presale/0x2cb155a7E8FD8960cA7C51F94eF7bEd3CfD8181F?chainId=56">
                Fair Launch Sale
                
          </Link>
                </button>
              </div>
              <span className="inline-flex items-center rounded-md bg-blue-300 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
               
                <Link href="https://github.com/freshcoins/Smart-Contract-Audits/blob/main/BarbieCat_0xc24B983a769Aed490D78708001790f7AC6D62b1F.pdf"> Audit </Link>
                </span>
            </Fade>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

const SocialLinks = [
  {
    path: "https://x.com/barbiecattoken",
    icon: (
      <AiOutlineTwitter className="text-[30px] md:text-[50px] text-white-main" />
    ),
  },
  {
    path: "https://t.me/BarbieCatOfficial",
    icon: (
      <FaTelegramPlane className="text-[30px] md:text-[50px] text-white-main" />
    ),
  },
  // {
  //   path: "",
  //   icon: "/assets/social/7.webp.png",
  // },
  // {
  //   path: "",
  //   icon: "/assets/social/5.webp.png",
  // },
  // {
  //   path: "",
  //   icon: "/assets/social/3.png",
  // },
  // {
  //   path: "",
  //   icon: "/assets/social/9.webp.png",
  // },
  // {
  //   path: "",
  //   icon: "/assets/social/6.webp.png",
  // },
];

export default Hero;
