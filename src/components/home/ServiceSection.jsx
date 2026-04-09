// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

import brand from "../../assets/services/brand.png"
import seo from "../../assets/services/seo.png"
import dev from "../../assets/services/dev.png"

const services = [
  {
    title: "Web Development",
    image: dev,
    items: ["Modern UI", "Responsive Design", "High Performance", "Frontend Development"],
    color: "from-purple-100 to-purple-200"
  },
  {
    title: "SEO Optimization",
    image: seo,
    items: ["Keyword Strategy", "Technical SEO", "On-page Optimization", "Traffic Growth"],
    color: "from-blue-100 to-blue-200"
  },
  {
    title: "Online Advertising",
    image: brand,
    items: ["Google Ads", "Social Media Ads", "Campaign Strategy", "Conversion Tracking"],
    color: "from-orange-200 to-red-50"
  }
]

function ServicesSection() {

  return (
    <section className="py-24 bg-linear-to-b from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Core Services
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