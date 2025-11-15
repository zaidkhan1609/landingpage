import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

const Services = () => {
  return (
    <section className="bg-black py-10 flex sm:flex-row flex-col gap-8 justify-center items-center">
      {/* Card 1 - Verified Interviewers */}
      <div
        className="border border-gray-700 rounded-2xl flex flex-col items-start sm:max-w-sm mx-auto p-4 relative h-[30rem] shadow-[0_0_20px_rgba(33,63,54,0.5)]"
        style={{ backgroundColor: "#213F36" }}
      >
        {/* Corner Icons */}
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

        <EvervaultCard text="Verified Interviewers" />

        <h2 className="text-white mt-4 text-lg font-semibold">
          Verified Interviewers
        </h2>
        <p className="text-slate-300 text-sm mt-2 leading-relaxed">
          15,000+ vetted experts ready to assess candidates live and on demand.
          Each interviewer is handpicked to ensure real-world evaluation
          standards.
        </p>
        <p className="text-xs border border-gray-600 rounded-full mt-4 text-white px-3 py-1">
          Expert-Led Assessments
        </p>
      </div>

      {/* Card 2 - AI + Human Intelligence */}
      <div
        className="border border-gray-700 rounded-2xl flex flex-col items-start sm:max-w-sm mx-auto p-4 relative h-[30rem] shadow-[0_0_20px_rgba(33,63,54,0.5)]"
        style={{ backgroundColor: "#213F36" }}
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

        <EvervaultCard text="AI + Human Intelligence" />

        <h2 className="text-white mt-4 text-lg font-semibold">
          AI + Human Intelligence
        </h2>
        <p className="text-slate-300 text-sm mt-2 leading-relaxed">
          Our AI ensures consistency, while human interviewers bring contextual
          understanding — the perfect blend of precision and empathy.
        </p>
        <p className="text-xs border border-gray-600 rounded-full mt-4 text-white px-3 py-1">
          Smart & Fair Evaluation
        </p>
      </div>

      {/* Card 3 - Instant Insights */}
      <div
        className="border border-gray-700 rounded-2xl flex flex-col items-start sm:max-w-sm mx-auto p-4 relative h-[30rem] shadow-[0_0_20px_rgba(33,63,54,0.5)]"
        style={{ backgroundColor: "#213F36" }}
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

        <EvervaultCard text="Instant Insights" />

        <h2 className="text-white mt-4 text-lg font-semibold">
          Instant Insights
        </h2>
        <p className="text-slate-300 text-sm mt-2 leading-relaxed">
          Get real-time analytics, automated summaries, and interview metrics to
          make faster, data-driven hiring decisions.
        </p>
        <p className="text-xs border border-gray-600 rounded-full mt-4 text-white px-3 py-1">
          Data-Driven Hiring
        </p>
      </div>
    </section>
  );
};

export default Services;
