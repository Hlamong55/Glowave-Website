// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaAward, FaGlobe, FaStar, FaTrophy } from "react-icons/fa";
import CountUp from "react-countup";
import Testimonials from "../components/home/Testimonials";

function About() {
  return (
    <div className="relative">

      {/* Animated Glow Background */}

      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-105 h-105 bg-blue-300 opacity-30 rounded-full blur-3xl -z-10"
      />

      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-30 -right-40 w-105 h-105 bg-purple-300 opacity-30 rounded-full blur-3xl -z-10"
      />

      <section className="pt-34 pb-12 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          About{" "}
          <span className="bg-linear-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
            Glowave
          </span>
        </h1>

        <p className="text-gray-700 text-lg">
          We help businesses grow through modern web development, data-driven
          marketing, advertising and powerful digital strategies.
        </p>
      </section>

      {/* Company vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Card 1 */}

          <motion.div
            whileHover={{ y: -8 }}
            className="relative p-10 rounded-3xl shadow-xl bg-linear-to-br from-blue-100 via-white to-purple-100"
          >
            <p className="text-gray-600 mb-2">Our mission</p>

            <h3 className="text-3xl font-bold mb-6">Design with intention</h3>

            <p className="text-gray-600 mb-6">
              We partner with teams to design websites that feel alive, clear
              and trusted.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Design for trust
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Clarify complex ideas
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Support lasting momentum
              </div>
            </div>

            {/* Floating Elements */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-6 right-10 text-4xl"
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Card 2 */}

          <motion.div
            whileHover={{ y: -8 }}
            className="relative p-10 rounded-3xl shadow-xl bg-linear-to-br from-purple-100 via-white to-blue-100"
          >
            <p className="text-gray-500 mb-2">Who we are</p>

            <h3 className="text-3xl font-bold mb-6">Small team, big care</h3>

            <p className="text-gray-600 mb-6">
              We’re a compact senior studio focused on calm, conversion-minded
              digital design.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Small senior team
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Flexible remote collaboration
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Honest clear feedback
              </div>
            </div>

            {/* Floating emoji */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-6 right-10 text-4xl"
            >
              🚀
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* client statistics */}
      <section className="py-24 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Achievements & Recognition
          </h2>

          {/* ===== Awards Cards ===== */}

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <FaTrophy />,
                title: "Top Digital Agency",
                desc: "Recognized for delivering high-performance digital solutions.",
              },
              {
                icon: <FaStar />,
                title: "5★ Client Rating",
                desc: "Consistently rated highly by clients worldwide.",
              },
              {
                icon: <FaGlobe />,
                title: "Global Clients",
                desc: "Projects delivered across multiple countries.",
              },
              {
                icon: <FaAward />,
                title: "Industry Awards",
                desc: "Recognized for innovation and modern design.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100"
              >
                <div className="text-blue-600 text-3xl mb-4">{item.icon}</div>

                <h3 className="font-semibold mb-2">{item.title}</h3>

                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ===== Animated Stats ===== */}

          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">
                <CountUp end={120} duration={3} />+
              </h3>
              <p className="text-gray-600 mt-2">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">
                <CountUp end={85} duration={3} />+
              </h3>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">
                <CountUp end={12} duration={3} />
              </h3>
              <p className="text-gray-600 mt-2">Countries Served</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">5★</h3>
              <p className="text-gray-600 mt-2">Average Rating</p>
            </div>
          </div>
        </div>
      </section>



      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <img
                src="/team1.jpg"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold">John Smith</h3>
              <p className="text-gray-500">Founder & Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials></Testimonials>
    </div>
  );
}

export default About;
