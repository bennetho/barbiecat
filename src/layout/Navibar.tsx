import React, { useState } from "react";
import ComponentWrapper from "@/components/shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
import { Link } from "react-scroll";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross2 } from "react-icons/rx";

function Navibar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-2xl">
      <ComponentWrapper style="">
        <div className="w-full h-[90px] md:h-[150px] flex justify-between items-center">
          {/* ==> logo */}
          <div className="w-[120px] md:w-[140px] h-[80px]  md:h-[130px] relative">
            <Image
              src="/logo.png"
              fill
              alt="logo-image"
              className="object-contain"
            ></Image>
          </div>

          {/* ===> links */}
          <div className="hidden lg:flex justify-center items-center gap-8 xl:gap-14">
            {navibar.map((navi, index) => {
              return (
                <Link
                  key={index}
                  to={navi.path}
                  smooth={true}
                  duration={1100}
                  className={`text-[22px] cursor-pointer hover:opacity-70 text-white-main font-comfortaa font-semibold`}
                >
                  {navi.name}
                </Link>
              );
            })}
          </div>

          {/* ==> button */}

          <a href="https://gempad.app/presale/0x9B3c0E1A012F81ea6AB68Ee5E2b3F8dFffB3eF5D?chainId=1">
          <div className="w-[160px] h-[53px] hidden lg:flex justify-center hover:bg-white-main/20 items-center border-[2px] border-white-main rounded-[30px]">
            <button className="text-[22px] font-semibold text-white-main">
            Presale Live
            </button>
          </div>
          </a>

          {/* ==========> Humburger */}
          <div className="lg:hidden w-full flex justify-end items-center ">
            <Hamburger
              color="white"
              rounded
              size={34}
              toggled={isOpen}
              toggle={setIsOpen}
            />
            <Drawer
              open={isOpen}
              onClose={() => setIsOpen(false)}
              direction="right"
              className="drawer"
            >
              <div className="flex flex-col p-6 justify-center items-center ">
                {/* =========>top bar */}
                <div className="w-full flex justify-end items-center">
                  <RxCross2
                    onClick={() => setIsOpen(false)}
                    className="text-[40px] text-white-main "
                  />
                </div>
                {/* ===> links */}
                <div className="flex flex-col justify-center items-center gap-6 mt-10">
                  {navibar.map((navi, index) => {
                    return (
                      <Link
                        key={index}
                        onClick={() => setIsOpen(false)}
                        to={navi.path}
                        href="#"
                        className="text-[22px] hover:opacity-70 text-white-main font-comfortaa font-semibold"
                      >
                        {navi.name}
                      </Link>
                    );
                  })}
                </div>
                {/* ==> button */}

                  <a href="https://gempad.app/presale/0x9B3c0E1A012F81ea6AB68Ee5E2b3F8dFffB3eF5D?chainId=1">
                <div className="w-[220px] h-[55px] flex justify-center hover:bg-white-main/20 items-center border-[2px] border-white-main rounded-[30px] mt-10">
                  <button className="text-[22px] font-semibold text-white-main">
                Presale Live
                
                  </button>
                </div>
                  </a>
              </div>
            </Drawer>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
}

const navibar = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  
  {
    name: "Roadmap",
    path: "roadmap",
  },
  {
    name: "Why Barbie",
    path: "tokenomics",
  },
  {
    name: "Barbie Club",
    path: "team",
  },
];

export default Navibar;
