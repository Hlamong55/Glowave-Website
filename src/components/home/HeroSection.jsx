// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import heroImg from "../../assets/hero-dashboard.png"

const HeroSection = () => {
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
            Accelerate Your
            <span className="bg-linear-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
              {" "}Digital Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-600 text-lg"
          >
            We build high-performance websites, powerful SEO strategies,
            and data-driven advertising campaigns that help your business grow.
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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
            >
              Our Services
            </Link>

            <Link
              to="/contact"
              className="border border-gray-400 px-6 py-3 rounded-lg font-medium bg-white hover:bg-gray-100 transform hover:scale-105 shadow-sm"
            >
              Contact Us
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
    );
};

export default HeroSection;