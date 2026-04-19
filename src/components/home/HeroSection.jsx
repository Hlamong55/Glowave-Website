// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import heroImg from "../../assets/hero-dashboard.png"

const HeroSection = () => {

  const { t } = useTranslation()

  return (

    <section className="pt-24 pb-8 bg-linear-to-b from-white via-blue-50 to-blue-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >

            {t("hero.title")}

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-600 text-lg"
          >

            {t("hero.subtitle")}

          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4"
          >

            <Link
              to="/services"
              className="bg-blue-600 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-white hover:text-black border border-gray-500 transition transform hover:scale-105 shadow-lg"
            >
              {t("hero.primaryBtn")}
            </Link>

            <Link
              to="/contact"
              className="border border-gray-400 px-7 py-3.5 rounded-lg font-medium bg-white hover:bg-blue-600 hover:text-white transform hover:scale-105 transition shadow-sm"
            >
              {t("hero.secondaryBtn")}
            </Link>

          </motion.div>

        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* Glow background */}
          <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

          {/* Floating circle */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"
          />

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-40"
          />

          {/* Dashboard Image */}
          <motion.img
            src={heroImg}
            alt="Digital Growth Dashboard"
            className="relative w-full max-w-lg rounded-xl shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

        </motion.div>

      </div>

    </section>

  )
}

export default HeroSection