import { useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"

function Testimonials() {

  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch("/testimonials.json")
      .then(res => res.json())
      .then(data => setTestimonials(data))
  }, [])

  return (
    <section className="py-24 bg-linear-to-b from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          What Clients Say!!
        </h2>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">

          {testimonials.map((item) => (

            <motion.div
              key={item.id}
              whileHover={{ y: -8, scale: 1.02 }}
              className="break-inside-avoid mb-8 p-7 rounded-2xl
              bg-linear-to-br from-white to-blue-50
              border border-blue-100
              shadow-lg hover:shadow-2xl
              transition duration-300"
            >

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.text}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">

                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full border border-blue-200"
                />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials