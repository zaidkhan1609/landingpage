import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

interface Item {
  title: string
  content: string
}

interface FaqProps {
  items: Item[]
}

const Faq: React.FC<FaqProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number[]>([])

  const toggleFaq = (index: number) => {
    setActiveIndex((prevActiveIndex) => {
      const indexExists = prevActiveIndex.includes(index)

      if (indexExists) {
        return prevActiveIndex.filter((activeIdx) => activeIdx !== index)
      }

      return [...prevActiveIndex, index]
    })
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-6">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold mb-2">F.A.Q</h3>
        <p className="text-lg text-gray-600 font-semibold">
          Questions on your mind? We&apos;ve got the answers you need.
        </p>
      </div>
      {items.map(({ title, content }, index) => (
        <div key={index} className="border border-gray-300 mb-3 rounded-2xl p-4 hover:bg-slate-50">
          <button
            onClick={() => toggleFaq(index)}
            className="flex justify-between w-full items-center focus:outline-none">
            <h4 className="flex-1 text-lg text-left font-semibold">{title}</h4>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${
                activeIndex.includes(index) ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {activeIndex.includes(index) && (
            <div className="mt-3">
              <p className="text-base">{content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default Faq