import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const MainSection = () => {
  return (
    <div className="mx-5 overscroll-x-contain w-full min-h-screen pb-12 overflow-x-hidden">
      <div className="">
        <div className="">
          <h1 className="text-[36px] md:text-[62px] text-[#193924] font-bold pt-8 pb-0 leading-normal lg:leading-[90px] md:leading-[50px]">
            Cultivate a Symphony of Nourishment!
          </h1>
          <p className="py-2 mb- md:py-4 text-[#878887] text-xs md/lg:text-2xl lg:leading-[40px]">
            Join our waitlist and be the pioneer in savouring a harvest of{" "}
            <br className="hidden lg:flex" /> wellness. Immerse yourself in a
            world where every moment <br className="hidden lg:flex" /> fuels
            your journey to a healthier, more vibrant you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0  h-4 md:space-x-4 ">
          <Input
            type="email"
            id="emailInput"
            placeholder="Enter your Email"
            className="rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm w-full mr-3"
          />
          <Button className="rounded-md bg-[#995D23] text-white " id="myButton">
            Join Waitlist
          </Button>
        </div>
      </div>
      <div className=" -z-10">
        <Image
          className=""
          src={"/laptop.png"}
          alt="Laptop picture"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default MainSection;
