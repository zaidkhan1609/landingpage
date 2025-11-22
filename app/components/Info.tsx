// app/components/BentoGridThirdDemo.tsx
"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconUsers,
  IconUserCheck,
  IconClockHour4,
  IconReportAnalytics,
  IconShieldCheck,
  IconCreditCard,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function BentoGridThirdDemo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Comparison:
          <span className="ml-2 text-teal-600">RecriX</span>
          <span className="mx-2 text-slate-400">vs</span>
          <span className="text-gray-700">Other Companies</span>
        </h2>

        <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
          Quick, side-by-side view of how RecriX elevates the interview experience —
          made for hiring teams and decision-makers.
        </p>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg ring-1 ring-slate-100 p-6"
      >

        {/* ================= MOBILE TABLE (REAL TABLE) ================= */}
        <div className="block md:hidden overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[600px] w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left py-3 px-4 text-slate-700 font-medium">Aspect</th>
                <th className="text-left py-3 px-4 text-slate-700 font-medium">RecriX</th>
                <th className="text-left py-3 px-4 text-slate-700 font-medium">Other Companies</th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.aspect}
                  className={cn(i % 2 === 0 ? "bg-white" : "bg-slate-50")}
                >
                  <td className="py-3 px-4 font-semibold text-slate-800">
                    {row.aspect}
                  </td>

                  <td className="py-3 px-4 text-slate-700">{row.recrix}</td>

                  <td className="py-3 px-4 text-slate-600">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left py-3 px-4 text-slate-700 font-medium">Aspect</th>
                <th className="text-left py-3 px-4 text-slate-700 font-medium">RecriX</th>
                <th className="text-left py-3 px-4 text-slate-700 font-medium">Other Companies</th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.aspect}
                  className={cn("align-top", i % 2 === 0 ? "bg-white" : "bg-slate-50")}
                >
                  <td className="py-4 px-4 w-1/4 font-semibold text-slate-800">
                    {row.aspect}
                  </td>

                  <td className="py-4 px-4 text-slate-700">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-3 w-3 rounded-full bg-teal-500 shadow-sm" />
                      <span>{row.recrix}</span>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-slate-600">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-3 w-3 rounded-full bg-slate-300" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-100" />

        {/* Feature grid */}
        <BentoGrid className="md:auto-rows-[17rem] gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              viewport={{ once: true }}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                className={cn(
                  "bg-[#E7F9F5] border border-teal-200 text-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200",
                  item.className
                )}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
}

/* ---------------- Comparison Table ---------------- */
const comparisonRows = [
  {
    aspect: "Speed",
    recrix: "Automated scheduling, instant shortlisting and on-demand interviewer matching.",
    traditional: "Manual coordination, calendar ping-pong, delayed interview cycles.",
  },
  {
    aspect: "Interviewer Quality",
    recrix: "Vetted specialists using standardized rubrics.",
    traditional: "Depends on internal availability, inconsistent expertise.",
  },
  {
    aspect: "Evaluation Accuracy",
    recrix: "Human + AI scoring with structured evidence.",
    traditional: "Notes-based, subjective, inconsistent.",
  },
  {
    aspect: "Authenticity Checks",
    recrix: "ID verification, anti-cheat and environment monitoring.",
    traditional: "Minimal or manual checks.",
  },
  {
    aspect: "Outcome Reliability",
    recrix: "Repeatable scoring with timestamped insights.",
    traditional: "Subjective judgments with higher variability.",
  },
];

/* ---------------- Skeletons ---------------- */
const SkeletonBase = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg overflow-hidden">{children}</div>
);

const SkeletonOne = () => (
  <SkeletonBase>
    <div className="flex flex-col w-full p-2 space-y-2">
      <div className="w-2/3 h-3 rounded-md bg-teal-100" />
      <div className="w-1/2 h-3 rounded-md bg-teal-100" />
    </div>
  </SkeletonBase>
);

const SkeletonTwo = () => (
  <SkeletonBase>
    <div className="flex flex-col w-full p-2 space-y-2">
      <div className="h-2 w-full rounded-full bg-teal-100" />
      <div className="h-2 w-4/5 rounded-full bg-teal-100" />
      <div className="h-2 w-3/5 rounded-full bg-teal-100" />
    </div>
  </SkeletonBase>
);

const SkeletonThree = () => (
  <SkeletonBase>
    <div className="w-full h-full rounded-md bg-gradient-to-r from-teal-200/40 to-transparent" />
  </SkeletonBase>
);

const SkeletonFour = () => (
  <SkeletonBase>
    <div className="flex flex-col w-full p-3 space-y-2">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 rounded-full bg-teal-300" />
        <div className="h-3 w-1/2 rounded-md bg-teal-100" />
      </div>
      <div className="h-3 w-3/4 rounded-md bg-teal-100" />
    </div>
  </SkeletonBase>
);

const SkeletonFive = () => (
  <SkeletonBase>
    <div className="flex flex-col w-full p-3 space-y-2">
      <div className="h-3 w-2/3 rounded-md bg-teal-100" />
      <div className="h-3 w-1/2 rounded-md bg-teal-100" />
    </div>
  </SkeletonBase>
);

const SkeletonSix = () => (
  <SkeletonBase>
    <div className="flex flex-col w-full p-3 space-y-2">
      <div className="h-3 w-3/4 rounded-md bg-teal-100" />
      <div className="h-3 w-2/3 rounded-md bg-teal-100" />
    </div>
  </SkeletonBase>
);

/* ---------------- Feature Cards ---------------- */
const items = [
  {
    title: <span className="text-teal-700 font-semibold">Speed Advantage</span>,
    description: (
      <span className="text-sm text-slate-700">
        Automation that reduces coordination overhead and accelerates time-to-interview.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClockHour4 className="h-5 w-5 text-teal-600" />,
  },

  {
    title: <span className="text-teal-700 font-semibold">Expert Interviewers</span>,
    description: (
      <span className="text-sm text-slate-700">
        Access vetted domain experts matched to role context and seniority.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconUsers className="h-5 w-5 text-teal-600" />,
  },

  {
    title: <span className="text-teal-700 font-semibold">High Accuracy Scoring</span>,
    description: (
      <span className="text-sm text-slate-700">
        Human-reviewed scoring augmented by AI for consistent evaluations.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconReportAnalytics className="h-5 w-5 text-teal-600" />,
  },

  {
    title: <span className="text-teal-700 font-semibold">Authenticity & Anti-Cheat</span>,
    description: (
      <span className="text-sm text-slate-700">
        Robust identity verification and integrity monitoring for every interview.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconShieldCheck className="h-5 w-5 text-teal-600" />,
  },

  {
    title: <span className="text-teal-700 font-semibold">Outcome Reliability</span>,
    description: (
      <span className="text-sm text-slate-700">
        Structured reports with timestamps to increase hiring confidence.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconUserCheck className="h-5 w-5 text-teal-600" />,
  },

  {
    title: <span className="text-teal-700 font-semibold">Faster Payouts</span>,
    description: (
      <span className="text-sm text-slate-700">
        Interviewers receive payouts quickly through automated, transparent settlement systems.
      </span>
    ),
    header: <SkeletonSix />,
    className: "md:col-span-1",
    icon: <IconCreditCard className="h-5 w-5 text-teal-600" />,
  },
];
