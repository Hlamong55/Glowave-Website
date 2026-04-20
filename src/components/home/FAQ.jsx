import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function FAQ() {

  const { t } = useTranslation();

  const faqs = [
    {
      q: t("faq.questions.0.q"),
      a: t("faq.questions.0.a"),
    },
    {
      q: t("faq.questions.1.q"),
      a: t("faq.questions.1.a"),
    },
    {
      q: t("faq.questions.2.q"),
      a: t("faq.questions.2.a"),
    },
    {
      q: t("faq.questions.3.q"),
      a: t("faq.questions.3.a"),
    },
    {
      q: t("faq.questions.4.q"),
      a: t("faq.questions.4.a"),
    },
    {
      q: t("faq.questions.5.q"),
      a: t("faq.questions.5.a"),
    },
  ];

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
            {t("faq.title")}
          </h2>

          <p className="text-gray-600">
            {t("faq.subtitle")}
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

                    <span className="text-lg font-semibold">
                      {faq.q}
                    </span>

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