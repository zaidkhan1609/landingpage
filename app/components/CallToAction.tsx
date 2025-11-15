// components/CallToAction.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const CallToAction: React.FC = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row items-center justify-between px-8 pb-40 md:p-16 bg-white ">
      <div className="text-center md:text-left md:ml-40 max-w-lg">
        <h2 className="md:text-6xl text-3xl font-bold text-black mb-4">
          Transform Your Ideas into Reality
        </h2>
        <p className="text-xl text-gray-700 md:mt-10">
          Let&apos;s create something unique together. Book a call with us today!
        </p>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 md:mr-52">
        <Link legacyBehavior href="https://calendly.com/exoticuiux/requirements-discussion">
          <a
            className="relative flex items-center justify-center w-34 h-34 rounded-full border-4 border-white text-gray-800 text-lg font-semibold bg-gray-700 hover:bg-gray-600  hover:text-white  transition-all duration-300"
            style={{ animation: "rotateText 10s linear infinite" }}
          >
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white transform rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div> */}
            {/* <span className="absolute inset-0 flex items-center justify-center">
              Book a Call
            </span> */}
            <Image 
            src="/try_now_button.png"
            alt="Try Now Button"
            width={150}
            height={150}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
