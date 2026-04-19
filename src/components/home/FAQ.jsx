import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most business websites take around 2–4 weeks depending on complexity, revisions, and integrations.",
  },
  {
    q: "Do you provide SEO with website development?",
    a: "Yes. We include technical SEO, performance optimization, and search engine indexing setup.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We specialize in redesigning outdated websites into modern high-performance platforms.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer maintenance plans including updates, performance monitoring, and security checks.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with startups, SaaS companies, agencies, and growing businesses globally.",
  },
  {
    q: "Do you build scalable SaaS platforms?",
    a: "Yes. Our team builds scalable SaaS platforms with modern technologies and performance optimization.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="relative py-20 bg-linear-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* floating glow background */}

      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Title */}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600">
            Everything you need to know about working with Glowave
          </p>
        </div>

        {/* FAQ Grid */}

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => {
            const open = active === i;

            return (
              <motion.div
                key={i}
                layout
                onClick={() => toggle(i)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group relative cursor-pointer"
              >
                {/* gradient border */}

                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-r 
  ${open ? "from-blue-500 to-indigo-500" : "from-gray-200 to-gray-200"}
  opacity-70 blur-sm group-hover:opacity-100 transition`}
                />

                {/* card */}

                <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-7 shadow-lg">
                  {/* question */}

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{faq.q}</span>

                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-gray-500"
                    >
                      <FaChevronDown />
                    </motion.div>
                  </div>

                  {/* answer */}

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="text-gray-600 mt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
