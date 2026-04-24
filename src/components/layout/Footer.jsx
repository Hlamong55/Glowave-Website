import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/testlogo.png";
import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="bg-black text-gray-300 pt-16 px-4">
      <div className="max-w-7xl mx-auto  grid md:grid-cols-5 gap-12">
        {/* Logo + Description */}

        <div>
          <div className=" mb-5">
            <img src={logo} className="h-15 rounded-full" />
          </div>

          <p className="text-gray-400 text-sm mb-5">
            {t("footer.desc")}
          </p>

          {/* Social */}

          <div className="flex gap-5">
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>

            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-black transition">
              <FaXTwitter />
            </a>

            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>


        {/* Quick links */}

        <div>
          <h3 className="text-left md:text-center text-white font-semibold mb-4">{t("footer.quickLinks")}</h3>

          <ul className="text-left md:text-center space-y-3 text-sm">
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/">{t("navbar.home")}</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/about">{t("navbar.about")}</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/blog">{t("navbar.blog")}</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/contact">{t("navbar.contact")}</Link>
            </li>
          </ul>
        </div>

        {/* Services */}

        <div>
          <h3 className="text-white font-semibold mb-4">{t("footer.services")}</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/services">{t("services.web.title")}</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/services">{t("services.seo.title")}</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/services">{t("services.ads.title")}</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/services">{t("footer.growthStrategy")}</Link>
            </li>
          </ul>
        </div>

        {/* Links */}

        <div>
          <h3 className="text-white font-semibold mb-4">{t("footer.otherLinks")}</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/privacy-policy">{t("footer.privacy")}</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/terms&service">{t("footer.terms")}</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-blue-500 hover:font-semibold" to="/refund-policy">{t("footer.refund")}</Link>
            </li>
            
          </ul>
        </div>



        {/* Newsletter */}

        <div>
          <h3 className="text-white font-semibold mb-4">{t("footer.newsletter")}</h3>

          <p className=" text-gray-400 mb-6">
            {t("footer.newsletterDesc")}
          </p>

          <div className="flex border-b border-gray-500 pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white text-black py-2 rounded-lg outline-none text-sm pl-1.5"
            />

            <button className="text-blue-500 text-sm font-medium ml-2 hover:font-bold hover:text-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800 mt-12 py-5 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400 gap-3">
        <p>© {new Date().getFullYear()} Glowave. All rights reserved.</p>

        ||

        <p>
          This Website is made with
          <span className="text-red-500 mx-1">❤</span>
          by
          <span className="text-blue-500 ml-1 font-medium">Hlamong Marma</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
