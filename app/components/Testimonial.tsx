import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Meteors } from "./ui/meteors";
import { Tilt } from 'react-tilt';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            30,     // max tilt rotation (degrees)
	perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          100,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const testimonials = [
  {
    id: 1,
    name: "Olivia M.",
    designation: "HR Director",
    comment:
      "Recrix helped us scale interviews 3x faster. ⭐️⭐️⭐️⭐️⭐️",
  },
  {
    id: 2,
    name: "Liam T.",
    designation: "Recruiter",
    comment:
      "The AI-powered reports are a game changer.⭐️⭐️⭐️⭐️⭐️",
  },
  {
    id: 3,
    name: "Sophia R.",
    designation: "Founder",
    comment:
      "We hired better talent and saved time.⭐️⭐️⭐️⭐️⭐️",
  },
];

const people = [
  {
    id: 1,
    name: "Elena Martinez",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Kai Nguyen",
    designation: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Anis Abed",
    designation: "Creative Lead",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Bubble Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Emily Frenandes",
    designation: "Executive Manager",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full relative max-w-xs mx-auto">
              <Tilt options={defaultOptions}>
                {/* Removed green glow background */}
                <div className="absolute inset-0 h-full w-full bg-neutral-800 transform scale-[0.80] rounded-full blur-3xl opacity-40" />

                {/* Main dark box using your #213F36 */}
                <div
                  className="relative shadow-[0_0_20px_rgba(33,63,54,0.5)] border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start"
                  style={{ backgroundColor: "#213F36" }}
                >

                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  {testimonial.name}
                </h1>
                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  {testimonial.comment}
                </p>
                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  {testimonial.designation}
                </button>
                {/* Meteor effect */}
                <Meteors number={20} />
              </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
