import React from "react";
import ComponentWrapper from "@/components/shared/ComponentWrapper/ComponentWrapper";

function Footer() {
  return (
    <div className="w-full mt-14 footerShadow">


    <div className="bg-white  py-5 sm:py-20">
      <div className="mx-auto  max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white-main">
          Trusted Partnership
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://i.postimg.cc/MZDrD6dL/Melega-Swap-Badge.png"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://i.postimg.cc/ZYpdNHxY/Melega-logo-trans.png"
            alt="Reform"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  




      <ComponentWrapper style="">
        <div className="w-full  h-[90px] md:h-[150px] flex justify-center items-center">
          <p className="text-[12px] md:text-[18px] text-white-main">
            Email us: Barbiecat50@gmail.com <br/>
        <div>&copy; <span id='date'>{new Date().getFullYear()}</span> Barbie Cat. All
        rights reserved</div>  
          </p>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default Footer;
