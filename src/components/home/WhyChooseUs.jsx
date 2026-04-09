// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FaRocket, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa"

function WhyChooseUs() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-blue-50">
      

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Why Choose <span className="text-blue-700 ">Glowave</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          We combine innovation, strategy and technology to help businesses
          succeed in the digital world.
        </motion.p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Benefit 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-2 border-gray-300"
          >
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              <FaRocket />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Fast Performance
            </h3>

            <p className="text-gray-600 text-sm">
              Our solutions are optimized for speed and performance.
            </p>
          </motion.div>


          {/* Benefit 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-2 border-gray-300"
          >
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              <FaShieldAlt />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Secure Solutions
            </h3>

            <p className="text-gray-600 text-sm">
              We build reliable and secure digital platforms.
            </p>
          </motion.div>


          {/* Benefit 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-2 border-gray-300"
          >
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              <FaChartLine />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Proven Growth
            </h3>

            <p className="text-gray-600 text-sm">
              Our strategies are focused on measurable results.
            </p>
          </motion.div>


          {/* Benefit 4 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-2 border-gray-300"
          >
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              <FaUsers />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Expert Team
            </h3>

            <p className="text-gray-600 text-sm">
              Work with experienced professionals dedicated to your success.
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs