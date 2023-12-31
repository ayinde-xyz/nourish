import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" w-full text-center fixed inset-x-0 bottom-0 bg-white">
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
        <br />
        Made by <Link href={"https://twitter.com/ayinde_xyz"}>@ayinde_xyz</Link>
      </p>
    </footer>
  );
};

export default Footer;
