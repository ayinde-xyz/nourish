import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const MainSection = () => {
  return (
    <div className="mx-10">
      <div className="">
        <div className="">
          <h1 className="text-[40px] md:text-[62px] text-[#193924] font-bold pt-8 pb-0 leading-normal lg:leading-[90px] md:leading-[50px]">
            Cultivate a Symphony of Nourishment!
          </h1>
          <p className="py-2 mb- md:py-4 text-[#878887] text-xs md/lg:text-2xl lg:leading-[40px]">
            Join our waitlist and be the pioneer in savouring a harvest of{" "}
            <br className="hidden lg:flex" /> wellness. Immerse yourself in a
            world where every moment <br className="hidden lg:flex" /> fuels
            your journey to a healthier, more vibrant you.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-4  h-4 lg:space-x-4 mx-4 ">
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
    </div>
  );
};

export default MainSection;
