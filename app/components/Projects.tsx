"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProblemSolutionUnified() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 w-full rounded-3xl bg-gradient-to-br from-white via-emerald-50 to-blue-50 overflow-hidden shadow-xl">
      {/* Animated soft grid overlay */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle light pulse for depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-emerald-200/20 via-transparent to-blue-200/20 mix-blend-overlay"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT — Problem */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-400 leading-tight">
            You’re losing top talent to slow hiring.
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            40% of team time goes to interviews, yet feedback remains inconsistent, biased, and untracked.
          </p>
          <motion.p
            className="mt-6 italic text-gray-600"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Recrix fixes what traditional hiring broke — speed, fairness, and data-driven decisions.
          </motion.p>
        </motion.div>

        {/* RIGHT — Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8"
        >
          {[
            {
              title: "Post. Match. Interview. Hire — Recrix automates hiring.",
              desc: "Post a job, upload CVs, and our AI instantly matches you with the best verified interviewer — so you focus only on what matters.",
            },
            {
              title: "Structured, secure AI-powered interviews.",
              desc: "Recrix’s AI video platform ensures fair, structured assessments with live code tests, anti-cheat, and instant feedback — all in one place.",
            },
            {
              title: "From interview to insight — instantly.",
              desc: "Get instant summaries, credibility scores, and detailed candidate reports automatically. Recrix turns every interview into actionable intelligence.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 30px rgba(96,165,250,0.25)",
              }}
              className="group bg-white backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle gradient hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 relative z-10">
                {item.title}
              </h3>
              <p className="mt-3 text-base text-gray-600 relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
