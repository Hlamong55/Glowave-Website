import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Project timelines depend on complexity. A standard business website usually takes between 2–4 weeks including design, development, and revisions."
  },
  {
    question: "Do you provide SEO with website development?",
    answer:
      "Yes. All websites we build include basic SEO optimization such as proper structure, performance optimization, and search engine indexing setup."
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We specialize in redesigning outdated websites and transforming them into modern, high-performance digital experiences."
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We provide ongoing maintenance, updates, and performance monitoring depending on the support plan you choose."
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with startups, SaaS companies, agencies, and growing businesses looking to improve their digital presence."
  }
]

function FAQ() {

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (

    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600">
            Everything you need to know about our services.
          </p>

        </div>

        {/* FAQ Items */}

        <div className="space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = activeIndex === index

            return (

              <motion.div
                key={index}
                layout
                className="bg-white border border-gray-200 rounded-2xl shadow-sm"
              >

                {/* Question */}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >

                  <span className="font-medium text-lg">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.div>

                </button>

                {/* Answer */}

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600"
                    >

                      {faq.answer}

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>

  )
}

export default FAQ