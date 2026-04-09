import { motion } from "framer-motion"
import { FaCode, FaSearch, FaBullhorn } from "react-icons/fa"

function ServicesSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Our Core Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          We provide powerful digital solutions that help businesses grow,
          attract more customers and increase revenue.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Service 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-8 rounded-2xl shadow-lg border hover:shadow-xl transition"
          >

            <div className="text-blue-600 text-4xl mb-6 flex justify-center">
              <FaCode />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Web Development
            </h3>

            <p className="text-gray-600">
              We build fast, scalable and responsive websites designed
              to deliver great user experiences and drive results.
            </p>

          </motion.div>


          {/* Service 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-8 rounded-2xl shadow-lg border hover:shadow-xl transition"
          >

            <div className="text-blue-600 text-4xl mb-6 flex justify-center">
              <FaSearch />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              SEO Optimization
            </h3>

            <p className="text-gray-600">
              Improve your search engine rankings and attract organic
              traffic with powerful SEO strategies and technical optimization.
            </p>

          </motion.div>


          {/* Service 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-8 rounded-2xl shadow-lg border hover:shadow-xl transition"
          >

            <div className="text-blue-600 text-4xl mb-6 flex justify-center">
              <FaBullhorn />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Online Advertising
            </h3>

            <p className="text-gray-600">
              Run high-performing advertising campaigns across Google,
              Facebook and other platforms to maximize ROI.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default ServicesSection