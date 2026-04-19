// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FaRocket, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa"
import { useTranslation } from "react-i18next"

function WhyChooseUs() {

  const { t } = useTranslation()

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
          {t("why.title")} <span className="text-blue-700">Glowave</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          {t("why.subtitle")}
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
              {t("why.fast.title")}
            </h3>

            <p className="text-gray-600 text-sm">
              {t("why.fast.desc")}
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
              {t("why.secure.title")}
            </h3>

            <p className="text-gray-600 text-sm">
              {t("why.secure.desc")}
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
              {t("why.growth.title")}
            </h3>

            <p className="text-gray-600 text-sm">
              {t("why.growth.desc")}
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
              {t("why.team.title")}
            </h3>

            <p className="text-gray-600 text-sm">
              {t("why.team.desc")}
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs