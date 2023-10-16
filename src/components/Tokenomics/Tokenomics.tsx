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
        <div className="w-full grid grid-cols-1 lg:grid-cols-1 mt-4 md:mt-10">
          {/* ==> center */}
          <div className="w-full flex flex-col gap-1 justify-center items-center">
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
            <br />


            {/* token allocations */}
 {/* <div className="flex flex-col justify-center items-center h-[60vh] pt-1"> */}
 <div className="flex flex-col justify-center items-center">
 <p className="capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
            Token Allocation
          </p>
            <div className="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                <div className="relative flex flex-grow !flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[30px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                        </svg>
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-sm font-medium text-gray-600">CEX Listings</p>
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">5%</h4>
                    </div>
                </div>
                <div className="relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            className="h-6 w-6"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M298.39 248a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V236a12 12 0 0012 12z"></path>
                            <path d="M197 267a43.67 43.67 0 01-13-31v-92h-72a64.19 64.19 0 00-64 64v224a64 64 0 0064 64h144a64 64 0 0064-64V280h-92a43.61 43.61 0 01-31-13zm175-147h70.39a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V108a12 12 0 0012 12z"></path>
                            <path d="M372 152a44.34 44.34 0 01-44-44V16H220a60.07 60.07 0 00-60 60v36h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152z"></path>
                        </svg>
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-sm font-medium text-gray-600">Marketing</p>
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">5%</h4>
                    </div>
                </div>
                <div className="relative flex flex-grow !flex-row  items-center rounded-[10px]  border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="h-7 w-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                        </svg>
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-sm font-medium text-gray-600">FairLaunch (70% Liquidity)</p>
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">50%</h4>
                    </div>
                </div>
                <div className="relative flex flex-grow !flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                        </svg>
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-sm font-medium text-gray-600">LP Program (Yield Farm & Staking Pool)</p>
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">30%</h4>
                    </div>
                </div>
                <div className="relative flex flex-grow !flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                    <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                        <span className="flex items-center text-brand-500 dark:text-white bg-black-main ">
                        🔥 🔥
                        </span>
                    </div>
                    </div>
                    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                    <p className="font-dm text-sm font-medium text-gray-600">Burnt</p>
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">10%</h4>
                    </div>
                </div>
                </div> 
        </div>

           <br />

            {/* end token allocation */}

            <Fade direction="left" triggerOnce>
              <div className="w-full flex flex-col gap-4 md:gap-8 bg-black-main p-6 rounded-bl-[30px] rounded-tr-[30px] border-[2px] border-white-main text-white-main font-comfortaa text-[16px] md:text-[20px] font-normal">
                <p>3% tax on buy/sell</p>
                <p>
               
                  1% of the tax goes to liquidity while the other 2% goes to marketing which will also be
                  used for future marketing. Contract will be Renounced after launch.
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
