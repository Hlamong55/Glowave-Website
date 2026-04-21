// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

function CTASection() {

  const { t } = useTranslation();

  return (
    <section className="relative py-20 overflow-hidden bg-linear-to-t from-blue-100 to-blue-50
    ">

      {/* Soft glow */}
      <div className="absolute w-96 h-96 bg-blue-700 opacity-20 blur-3xl -top-32 -left-32"></div>
      <div className="absolute w-96 h-96 bg-blue-700 opacity-20 blur-3xl -bottom-32 -right-32"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {t("cta.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.2 }}
          className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg"
        >
           {t("cta.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity:0, scale:0.9 }}
          whileInView={{ opacity:1, scale:1 }}
          transition={{ delay:0.3 }}
          className="flex justify-center gap-4 flex-wrap"
        >

          <Link
            to="/contact"
            className="bg-white text-blue-600 font-semibold border px-8 py-4 rounded-xl hover:bg-blue-500 hover:text-white
            shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
             {t("cta.btn1")}
          </Link>

          <Link
            to="/services"
            className="border font-semibold bg-blue-500 text-white px-8 py-4 rounded-xl
            hover:bg-white hover:text-blue-600 hover:scale-105 transition"
          >
            {t("cta.btn2")}
          </Link>

        </motion.div>

      </div>

    </section>
  )
}

export default CTASection