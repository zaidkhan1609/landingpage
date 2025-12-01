import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface Item {
  title: string;
  content: string;
}

interface FaqProps {
  items: Item[];
}

const Faq: React.FC<FaqProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setActiveIndex((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <h3 className="text-4xl font-extrabold text-slate-900">FAQs</h3>
        <p className="text-lg text-slate-600 mt-2">
          Everything you need to know about RecriX.
        </p>
      </div>

      <div className="space-y-4">
        {items.map(({ title, content }, index) => {
          const isActive = activeIndex.includes(index);

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-800">
                  {title}
                </span>

                <ChevronDown
                  className={`w-6 h-6 text-teal-600 transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Animated content */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  isActive ? "max-h-[1000px] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-slate-700 leading-relaxed">{content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
