import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const MainSection = () => {
  return (
    <div className="mx-auto px-2 md:mx-4  max-w-full min-h-screen pb-48 ">
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
          className="object-cover"
          src={"/laptop.png"}
          alt="Laptop picture"
          width={500}
          height={500}
        />
      </div>
      <div className=" flex-row py-8 text-xs text-[#878887] flex md:hidden px-[20px] md/lg:pl-[100px]">
        <div className="border-r-2 border-solid border-black px-2">
          <p>
            Be the first to access our exclusive range of wellness products.
          </p>
        </div>
        <div className="border-r-2 border-solid border-black px-2">
          <p>Stay updated on our latest product launches and wellness tips.</p>
        </div>
        <div className="px-2">
          <p>Receive early-bird discounts and special promotions.</p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
