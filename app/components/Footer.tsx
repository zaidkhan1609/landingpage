"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Aperture, Dribbble } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto gap-6 lg:justify-between">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"#about"}>About</Link></li>
            <li><Link href={"#contact"}>Contact Us</Link></li>
            {/* <li><Link href={"/terms"}>Terms & Condition</Link></li> */}
          </ul>
        </div>
        <div className="flex justify-center space-x-4 lg:mt-0">
          <Link href={"https://www.instagram.com/exoticui/"}>
            <Instagram />
          </Link>
          <Link href={"https://dribbble.com/exoticui"}>
            <Dribbble />
          </Link>
          <Link href={"https://twitter.com/exoticui"}>
            <Twitter />
          </Link>
        </div>
      </div>
      <div className="pb-10">
        <p className="text-center">
          <Link href="https://www.exoticui.com">@2024 Developed by ExoticUI</Link>
        </p>
      </div>
    </footer>
  )
}

