import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="mx-auto w-full text-center py-2 fixed bottom-0 bg-white">
      <p className="py-3">
        We are just starting our journey, but <br /> we promise that it will be
        cool!
      </p>
      <div className="flex flex-row justify-center">
        <div className="px-2">
          <a className="" href="#">
            <Instagram />
          </a>
        </div>
        <div className="px-2">
          <a href="#">
            {" "}
            <Linkedin />
          </a>
        </div>
        {/* <div className="px-2">
          <a href="#">
           
          </a>
        </div> */}
        <div className="px-2">
          <a href="#">
            <Twitter />
          </a>
        </div>
        <div className="px-2">
          <a href="#">
            <Facebook />
          </a>
        </div>
      </div>
      <p className="py-3 text-[#878887]">
        © All Rights Reserved. {date.getFullYear()} Nourish team
      </p>
    </footer>
  );
};

export default Footer;
