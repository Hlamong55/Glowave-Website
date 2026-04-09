// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

import google from "../../assets/clients/google.png"
import shopify from "../../assets/clients/shopi.png"
import slack from "../../assets/clients/slack_Logo.png"
import amazon from "../../assets/clients/amazon.png"
import casio from "../../assets/clients/casio.png"
import randstad from "../../assets/clients/randstad.png"
import star from "../../assets/clients/star.png"

function Clients() {

  const logos = [google, shopify, slack, amazon, casio, randstad, star]

  return (
    <section className="py-20 bg-linear-to-b from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">
          Trusted by Leading Companies
        </h2>

        <p className="text-gray-600 mb-16">
          Businesses around the world trust Glowave to grow their digital presence.
        </p>

        {/* Logos */}
        <div className="overflow-hidden">

          <motion.div
            className="flex gap-20 justify-center items-center"
            animate={{ x: ["0%", "-60%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >

            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="client logo"
                className="h-10 opacity-70 hover:opacity-100 transition"
              />
            ))}

            {/* Duplicate for smooth scroll */}
            {logos.map((logo, index) => (
              <img
                key={"dup" + index}
                src={logo}
                alt="client logo"
                className="h-10 opacity-70 hover:opacity-100 transition"
              />
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Clients