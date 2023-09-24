import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function Tokenomics() {
  return (
    <ComponentWrapper style="py-8">
      <div
        id="tokenomics"
        className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden"
      >
        <Fade direction="down" triggerOnce>
          <p className="capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
            WHY BARBIE CAT
          </p>
        </Fade>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-4 md:mt-10">
          {/* ==> left */}
          <div className="w-full flex flex-col gap-8 justify-center items-center">
            <Fade direction="down" triggerOnce>
            <div className="w-full text-center text-[22px] md:text-[36px] leading-[44px] font-carter font-semibold text-white-main italic">
                Token Supply: 
                <p className="w-full text-center text font-comfortaa text-[16px] md:text-[22px]">500,000,000</p>
              </div>
              <div className="w-full text-center text-[22px] md:text-[36px] leading-[44px] font-carter font-semibold text-white-main italic">
                 Symbol
                 <p className="w-full text-center text font-comfortaa text-[16px] md:text-[22px]">$BGCAT</p>
              
              </div>
              <div className="w-full text-center text-[22px] md:text-[36px] leading-[44px] font-carter font-semibold text-white-main italic">
                Ownership: 
                <p className="w-full text-center text font-comfortaa text-[16px] md:text-[22px]">Renounced</p>
              
              </div>
              <div className="w-full text-center text-[22px] md:text-[36px] leading-[44px] font-carter font-semibold text-white-main italic">
                Liquidity:
                <p className="w-full text-center text font-comfortaa text-[16px] md:text-[22px]">Locked</p>
              
              </div>
            </Fade>
            <Fade direction="left" triggerOnce>
              <div className="w-full flex flex-col gap-4 md:gap-8 bg-black-main p-6 rounded-bl-[30px] rounded-tr-[30px] border-[2px] border-white-main text-white-main font-comfortaa text-[16px] md:text-[20px] font-normal">
                <p>3% tax on buy/sell</p>
                <p>
                60% of the tokens will be in liquidity pool and the smart contract is renounced. 
                  1% of the tax goes to liquidity while the other 2% goes to marketing which will also be
                  used for future centralized exchange listings.
                </p>
              </div>
            </Fade>
          </div>
          {/* ===> right */}
          <Fade direction="right" triggerOnce>
            <div className="w-full h-[300px] md:h-[470px] relative">
              <Image
                src="/assets/tokenomic.png"
                fill
                className="object-contain"
                alt=""
              />
            </div>
          </Fade>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Tokenomics;
