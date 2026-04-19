// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import brand from "../../assets/services/brand.png"
import seo from "../../assets/services/seo.png"
import dev from "../../assets/services/dev.png"

function ServicesSection() {

  const { t } = useTranslation()

  const services = [
    {
      title: t("services.web.title"),
      image: dev,
      items: [
        t("services.web.items.0"),
        t("services.web.items.1"),
        t("services.web.items.2"),
        t("services.web.items.3")
      ],
      color: "from-purple-100 to-purple-200"
    },
    {
      title: t("services.seo.title"),
      image: seo,
      items: [
        t("services.seo.items.0"),
        t("services.seo.items.1"),
        t("services.seo.items.2"),
        t("services.seo.items.3")
      ],
      color: "from-blue-100 to-blue-200"
    },
    {
      title: t("services.ads.title"),
      image: brand,
      items: [
        t("services.ads.items.0"),
        t("services.ads.items.1"),
        t("services.ads.items.2"),
        t("services.ads.items.3")
      ],
      color: "from-orange-200 to-red-50"
    }
  ]

  return (
    <section className="py-24 bg-linear-to-b from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          {t("services.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative p-8 rounded-3xl shadow-lg hover:shadow-2xl transition 
              bg-linear-to-br ${service.color}`}
            >

              {/* Icon Image */}
              <div className="absolute right-6 top-6 w-26 opacity-90">
                <img src={service.image} alt={service.title} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-6">
                {service.title}
              </h3>

              {/* List */}
              <ul className="space-y-3 text-gray-700">

                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-600">✔</span>
                    {item}
                  </li>
                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default ServicesSection