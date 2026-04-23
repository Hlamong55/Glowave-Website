// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {

  const { t } = useTranslation();

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
        {t("contact.title")}
        </h1>

        {/* Contact Info */}

        <div className="grid lg:grid-cols-2 gap-18 items-center">
          {/* LEFT SIDE */}

          <div>
            <p className="text-sm font-semibold text-blue-600 tracking-widest mb-4">
              {t("contact.title")}
            </p>

            <h2 className="text-4xl font-bold mb-4">{t("contact.subtitle")}</h2>

            <p className="text-gray-600 mb-8">
              {t("contact.desc")}
            </p>

            {/* Email Card */}

            <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 mb-4">
              <div className="w-11 h-11 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                <FaEnvelope size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">{t("contact.info.email")}</p>
                <p className="font-medium">contact@glowave.com</p>
              </div>
            </div>

            {/* Phone Card */}

            <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                <FaPhoneAlt size={22}/>
              </div>

              <div>
                <p className="text-sm text-gray-500">{t("contact.info.phone")}</p>
                <p className="font-medium">(+880) 1818470577</p>
              </div>
            </div>

            {/* Social Icons */}

            <div className="flex items-center gap-4">
              <p className="text-gray-700 mr-2">{t("contact.info.reach")}:</p>

              <div className="flex gap-3">
                <a className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition">
                  <FaFacebookF size={20}/>
                </a>

                <a className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-200 hover:bg-black hover:text-white transition">
                  <FaXTwitter size={20}/>
                </a>

                <a className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white transition">
                  <FaLinkedinIn size={20}/>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}

          <div className="bg-gray-50 border-2 border-gray-300 shadow-xl rounded-2xl p-8">
            <form className="grid gap-5">
              <input
                type="text"
                placeholder={t("contact.form.name")}
                className="bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder={t("contact.form.email")}
                className="bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder={t("contact.form.company")}
                className="bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows="4"
                placeholder={t("contact.form.message")}
                className="bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
              />

            

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition font-medium"
              >
                {t("contact.form.button")}
              </button>
            </form>
          </div>
        </div>

        {/* Map */}

        <div className="mt-20">
          <p className="text-2xl font-semibold text-blue-600 tracking-widest mb-5">
              📍{t("contact.info.location")}
            </p>
          <iframe
            title="map"
            className="w-full h-110 rounded-xl"
            src="https://www.google.com/maps?q=Chattogram,Bangladesh&output=embed"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
