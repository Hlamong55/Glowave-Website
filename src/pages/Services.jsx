// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaCode,
  FaSearch,
  FaBullhorn,
  FaBolt,
  FaDollarSign,
  FaBalanceScale,
  FaStar,
  FaHeadset,
  FaRandom,
  FaChartLine,
} from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Modern, scalable and high-performance websites tailored for your business.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      desc: "Improve search engine rankings and grow organic traffic effectively.",
    },
    {
      icon: <FaBullhorn />,
      title: "Online Advertising",
      desc: "Data-driven advertising campaigns across Google and social media.",
    },
  ];

  const pricing = [
    {
      title: "Starter",
      price: "$499",
      color: "from-blue-100 to-blue-50",
      features: [
        "Landing page website",
        "Responsive design",
        "Basic SEO",
        "2 revisions",
      ],
    },
    {
      title: "Premium",
      price: "$1,999",
      color: "from-purple-100 to-pink-50",
      features: [
        "Custom web platform",
        "Complete marketing setup",
        "Advanced analytics",
        "Dedicated support",
      ],
    },
    {
      title: "Growth",
      price: "$999",
      color: "from-indigo-100 to-blue-50",
      features: [
        "Full business website",
        "Advanced SEO",
        "Marketing strategy",
        "Priority support",
      ],
    }
  ];

  return (
    <div className="pt-20 relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-blue-50">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-size-[40px_40px]"></div>

      {/* Animated Glow Background */}

      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-105 h-105 bg-blue-300 opacity-30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-40 -right-40 w-105 h-105 bg-purple-300 opacity-30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-1/3 w-75 h-75 bg-blue-200 opacity-40 rounded-full blur-3xl"
      />

      {/* ===== Hero Intro ===== */}

      <section className="max-w-4xl mx-auto text-center px-6 py-18 relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Growth Solutions for
          <span className="bg-linear-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
            {" "}
            Modern Businesses
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 text-lg"
        >
          We help companies grow with powerful websites, advanced SEO strategies
          and high-converting marketing campaigns.
        </motion.p>
      </section>

      {/* ===== Services Section ===== */}

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-gray-300 text-center"
            >
              <div className="text-blue-600 text-4xl mb-4 flex items-center justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why choose Us */}
      <section className="py-24 bg-linear-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="max-w-3xl mx-auto text-4xl font-bold text-center mb-12">
            Here are a few things we do that others really just don’t.
          </h2>

          {/* grid */}

          <div className="grid lg:grid-cols-5 gap-6">
            {/* big card */}

            <motion.div
              whileHover={{ y: -6 }}
              className="lg:col-span-2 rounded-2xl p-8 shadow-lg border border-gray-300 bg-linear-to-br from-pink-50 via-white to-pink-100"
            >
              <FaBolt className="text-yellow-400 text-3xl mb-8" />

              <h3 className="text-xl font-semibold mb-3">Speed</h3>

              <p className="text-gray-600">
                Get quicker turnarounds on design projects without sacrificing
                quality at a way better price on your wallet.
              </p>
            </motion.div>

            {/* card */}

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-5 shadow border border-gray-200"
            >
              <FaDollarSign className="text-gray-500 text-3xl mb-8" />

              <h3 className="font-semibold mb-3">Affordability</h3>

              <p className="text-gray-600 text-sm">
                Access high-quality design services at a fraction of traditional
                costs.
              </p>
            </motion.div>

            {/* card */}

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-5 shadow border border-gray-200"
            >
              <FaBalanceScale className="text-gray-500 text-3xl mb-8" />

              <h3 className="font-semibold mb-3">Consistency</h3>

              <p className="text-gray-600 text-sm">
                Ensure a consistent brand identity with regular design output.
              </p>
            </motion.div>

            {/* card */}

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-5 shadow border border-gray-200"
            >
              <FaChartLine className="text-gray-500 text-3xl mb-8" />

              <h3 className="font-semibold mb-2">Scalability</h3>

              <p className="text-gray-600 text-sm">
                Access high-quality design services at a fraction of traditional
                costs.
              </p>
            </motion.div>

            {/* card */}

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-5 shadow border border-gray-200"
            >
              <FaRandom className="text-gray-500 text-3xl mb-8" />

              <h3 className="font-semibold mb-3">Flexibility</h3>

              <p className="text-gray-600 text-sm">
                Adapt the service to cover a wide range of design tasks as
                needed.
              </p>
            </motion.div>

            {/* card */}

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-5 shadow border border-gray-200"
            >
              <FaHeadset className="text-gray-500 text-3xl mb-8" />

              <h3 className="font-semibold mb-3">Support</h3>

              <p className="text-gray-600 text-sm">
                Enjoy dedicated customer service and revisions to perfect your
                designs.
              </p>
            </motion.div>

            {/* card */}

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-5 shadow border border-gray-200"
            >
              <FaCheckCircle className="text-gray-500 text-3xl mb-8" />

              <h3 className="font-semibold mb-2">Convenience</h3>

              <p className="text-gray-600 text-sm">
                Streamline the design process with a simple workflow and
                process.
              </p>
            </motion.div>

            {/* big card */}

            <motion.div
              whileHover={{ y: -6 }}
              className="lg:col-span-2 rounded-2xl p-8 shadow-lg border border-gray-300 bg-linear-to-br from-pink-100 via-white to-pink-50"
            >
              <FaStar className="text-pink-500 text-3xl mb-8" />

              <h3 className="text-xl font-semibold mb-3">Diversity</h3>

              <p className="text-gray-600">
                Access to a variety of styles and expertise from a pool of
                creative professionals and people.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Pricing Section ===== */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 flex items-center justify-center">
            Unlock Your{" "}
            <span className="flex text-blue-600 ml-2.5">
              Growth <MdOutlineAutoGraph />{" "}
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group relative p-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400"
              >
                {/* Most Popular Badge */}

                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Card Body */}

                <div
                  className={`p-10 rounded-3xl bg-linear-to-br ${plan.color} shadow-lg transition duration-300 group-hover:shadow-[0_25px_60px_rgba(59,130,246,0.25)]`}
                >
                  {/* Title */}

                  <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>

                  {/* Price */}

                  <div className="text-5xl font-bold mb-8">{plan.price}</div>

                  {/* Button */}

                  <button className="w-full py-3 mb-8 rounded-3xl bg-white font-medium shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
                    Book a call
                  </button>

                  {/* Features */}

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <FaCheckCircle className="text-blue-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}

      <section className="relative py-14 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-300 via-blue-100 to-blue-300"></div>

        {/* Floating Blur Effects */}
        <div className="absolute -top-24 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6 text-white">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-600"
          >
            Ready to Accelerate Your
            <span className="block text-blue-600 bg-clip-text ">
              Digital Growth?
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Join businesses that trust Glowave to build powerful websites, boost
            search rankings and run high-converting marketing campaigns.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col md:flex-row justify-center gap-6"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition hover:bg-blue-600 hover:text-white"
            >
              Start Your Project
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 border border-white rounded-xl font-semibold shadow-lg hover:shadow-xl bg-blue-600 hover:bg-white hover:text-blue-700 hover:scale-105 transition"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-gray-700"
          >
            🚀 Trusted by startups, agencies and growing businesses worldwide
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default Services;
