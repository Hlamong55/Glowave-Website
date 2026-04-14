import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className="relative pt-32 pb-24 bg-linear-to-b from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* floating blobs */}

      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-105 h-105 bg-blue-300 opacity-30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute top-20 -right-40 w-105 h-105 bg-purple-300 opacity-30 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}

        <h1 className="text-5xl font-bold text-center mb-16 text-blue-600">
          Contact Us
        </h1>

        {/* Contact Info */}

        <div className="grid lg:grid-cols-2 gap-18 items-center">
          {/* LEFT SIDE */}

          <div>
            <p className="text-sm font-semibold text-blue-600 tracking-widest mb-2">
              CONTACT US
            </p>

            <h2 className="text-4xl font-bold mb-4">Get in touch today</h2>

            <p className="text-gray-600 mb-8">
              Have questions about our services? We'd love to hear from you.
              Send us a message and our team will respond as soon as possible.
            </p>

            {/* Email Card */}

            <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">contact@glowave.com</p>
              </div>
            </div>

            {/* Phone Card */}

            <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">(123) 123-323-23</p>
              </div>
            </div>

            {/* Social Icons */}

            <div className="flex items-center gap-4">
              <p className="text-gray-600 mr-2">Reach out to us:</p>

              <div className="flex gap-3">
                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition">
                  <FaFacebookF />
                </a>

                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition">
                  <FaXTwitter />
                </a>

                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}

          <div className="bg-gray-50 border-2 border-gray-300 shadow-xl rounded-2xl p-8">
            <form className="grid gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Company (optional)"
                className="bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Leave us a message"
                className="bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
              />

              {/* Fake captcha placeholder */}

              <div className="border border-gray-300 rounded-lg p-3 flex items-center gap-3">
                <input type="checkbox" />
                <span className="text-sm text-gray-600">I'm not a robot</span>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}

        <div className="mt-20">
          <iframe
            title="map"
            className="w-full h-110 rounded-xl"
            src="https://www.google.com/maps?q=New%20York&output=embed"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
