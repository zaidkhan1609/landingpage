// components/Hero.tsx
"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

// ⬅️ Added FloatingNav import (correct path)
import { FloatingNav } from "./ui/floating-navbar";

export const Hero: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);

  const [openModal, setOpenModal] = useState(false); // Waitlist modal
  const [openInterviewerModal, setOpenInterviewerModal] = useState(false); // Interviewer modal

  // form states
  const [waitlistForm, setWaitlistForm] = useState({
    name: "",
    email: "",
  });

  const [interviewerForm, setInterviewerForm] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    linkedin: "",
    notes: "",
    cv: null as File | null,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container?: Container) => {};

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(waitlistForm),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      alert("You're added to the waitlist! 🎉");
      setOpenModal(false);
      setWaitlistForm({ name: "", email: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleInterviewerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", interviewerForm.name);
      formData.append("email", interviewerForm.email);
      formData.append("skills", interviewerForm.skills);
      formData.append("experience", interviewerForm.experience);
      formData.append("linkedin", interviewerForm.linkedin || "");
      formData.append("notes", interviewerForm.notes || "");
      if (interviewerForm.cv) formData.append("cv", interviewerForm.cv);

      const res = await fetch("/api/interviewers", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Network response was not ok");
      alert("Application submitted — thank you! We'll be in touch.");
      setOpenInterviewerModal(false);
      setInterviewerForm({
        name: "",
        email: "",
        skills: "",
        experience: "",
        linkedin: "",
        notes: "",
        cv: null,
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <>
      

      {/* ================= HERO SECTION ================= */}
      <section
        ref={ref}
        className="relative overflow-hidden min-h-screen bg-gradient-to-b from-white via-emerald-50 to-emerald-100"
      >
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
                color: "#10B981",
                distance: 120,
                enable: true,
                opacity: 0.12,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.1,
                direction: "none",
                outModes: "out",
              },
              number: { density: { enable: true, area: 800 }, value: 48 },
              opacity: { value: 0.45 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />

        {/* ================= HERO CONTENT ================= */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 items-center justify-center py-20"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 drop-shadow-md">
              Hire Smarter. Interview Faster.
            </h1>

            <p className="max-w-3xl text-lg md:text-2xl text-gray-700 leading-relaxed">
              Outsource interviews to verified professionals.
              <br />
              RecriX handles scheduling, secure video interviews, anti-cheat, and AI-generated reports — all in one platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 z-50">
              <button
                onClick={() => setOpenModal(true)}
                className="px-8 py-3 rounded-full text-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transform-gpu hover:scale-105 transition duration-200 shadow-lg"
              >
                Join Waitlist
              </button>

              <button
                onClick={() => setOpenInterviewerModal(true)}
                className="px-8 py-3 rounded-full text-lg font-semibold text-emerald-700 border border-emerald-300 bg-white hover:bg-emerald-50 transition-all"
              >
                Join as Interviewer
              </button>
            </div>
          </motion.div>
        </div>

        {/* Animated images */}
        <motion.div
          className="absolute bottom-0 left-0 mb-6 ml-8 opacity-90 hidden md:block"
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
          className="absolute bottom-0 right-0 mb-6 mr-8 opacity-90 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            src="/hero_image2.png"
            alt="Candidate Matching Visualization"
            width={260}
            height={260}
            className="rounded-xl shadow-lg border border-teal-50"
          />
        </motion.div>
      </section>

      {/* ================= WAITLIST MODAL ================= */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18 }}
            className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full border border-emerald-100"
          >
            <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center">
              Join the RecriX Waitlist
            </h2>

            <form onSubmit={handleWaitlistSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200"
                required
                value={waitlistForm.name}
                onChange={(e) => setWaitlistForm({ ...waitlistForm, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Work Email"
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200"
                required
                value={waitlistForm.email}
                onChange={(e) => setWaitlistForm({ ...waitlistForm, email: e.target.value })}
              />

              <button
                type="submit"
                className="w-full py-3 mt-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
              >
                Join Waitlist
              </button>
            </form>

            <button
              onClick={() => setOpenModal(false)}
              className="mt-4 text-center w-full text-gray-600 hover:text-gray-800 text-sm"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}

      {/* ================= INTERVIEWER MODAL ================= */}
      {openInterviewerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18 }}
            className="bg-white rounded-2xl p-8 shadow-xl max-w-lg w-full border border-emerald-100"
          >
            <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center">
              Become a RecriX Interviewer
            </h2>

            <form onSubmit={handleInterviewerSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 border border-gray-200 rounded-lg"
                required
                value={interviewerForm.name}
                onChange={(e) => setInterviewerForm({ ...interviewerForm, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Work Email"
                className="px-4 py-3 border border-gray-200 rounded-lg"
                required
                value={interviewerForm.email}
                onChange={(e) => setInterviewerForm({ ...interviewerForm, email: e.target.value })}
              />

              <input
                type="text"
                placeholder="Primary Skills (e.g. Frontend, Data Science, HR)"
                className="px-4 py-3 border border-gray-200 rounded-lg"
                required
                value={interviewerForm.skills}
                onChange={(e) => setInterviewerForm({ ...interviewerForm, skills: e.target.value })}
              />

              <input
                type="number"
                placeholder="Years of Experience"
                className="px-4 py-3 border border-gray-200 rounded-lg"
                required
                value={interviewerForm.experience}
                onChange={(e) =>
                  setInterviewerForm({ ...interviewerForm, experience: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="LinkedIn Profile (optional)"
                className="px-4 py-3 border border-gray-200 rounded-lg"
                value={interviewerForm.linkedin}
                onChange={(e) =>
                  setInterviewerForm({ ...interviewerForm, linkedin: e.target.value })
                }
              />

              <textarea
                placeholder="Additional Notes (optional)"
                className="px-4 py-3 border border-gray-200 rounded-lg"
                rows={3}
                value={interviewerForm.notes}
                onChange={(e) => setInterviewerForm({ ...interviewerForm, notes: e.target.value })}
              />

              <div>
                <label className="text-sm text-gray-700">Upload CV (PDF/Doc)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-2 px-4 py-2 border rounded-lg w-full"
                  onChange={(e) =>
                    setInterviewerForm({
                      ...interviewerForm,
                      cv: e.target.files && e.target.files[0] ? e.target.files[0] : null,
                    })
                  }
                />
              </div>

              <button type="submit" className="w-full py-3 mt-2 rounded-lg bg-emerald-600 text-white font-semibold">
                Submit Application
              </button>
            </form>

            <button
              onClick={() => setOpenInterviewerModal(false)}
              className="mt-4 text-center w-full text-gray-600 hover:text-gray-800 text-sm"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Hero;
