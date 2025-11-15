"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container?: Container) => {};

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-white via-emerald-50 to-blue-50">
      {/* === Animated Particles Background === */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#10B981" },
            links: {
              color: "#60A5FA",
              distance: 120,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              outModes: "out",
            },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* === Hero Content === */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col gap-6 items-center justify-center py-20"
        >
          {/* === Main Headline === */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-400 drop-shadow-md">
            Hire Smarter. Interview Faster.
          </h1>

          {/* === Subtext === */}
          <p className="max-w-3xl text-lg md:text-2xl text-gray-600 leading-relaxed">
            Outsource interviews to verified professionals. <br />
            Recrix handles scheduling, video calls, anti-cheat, and
            AI-generated reports — all in one platform.
          </p>

          {/* === CTA Buttons === */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 z-50">
            <Link href="#demo">
              <button className="px-8 py-3 rounded-full text-lg font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-transform hover:scale-105 shadow-md">
                Book Demo
              </button>
            </Link>
            <Link href="#join">
              <button className="px-8 py-3 rounded-full text-lg font-semibold text-emerald-700 border border-emerald-300 bg-white hover:bg-emerald-50 transition-all">
                Join as Interviewer
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* === Animated Hero Images === */}
      <motion.div
        className="absolute bottom-0 left-0 mb-6 ml-10 opacity-90 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Image
          src="/hero_image1.png"
          alt="AI Interview Analytics"
          width={220}
          height={220}
          className="rounded-xl shadow-lg border border-emerald-100"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 mb-6 mr-10 opacity-90 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Image
          src="/hero_image2.png"
          alt="Candidate Matching Visualization"
          width={260}
          height={260}
          className="rounded-xl shadow-lg border border-blue-100"
        />
      </motion.div>
    </div>
  );
};
