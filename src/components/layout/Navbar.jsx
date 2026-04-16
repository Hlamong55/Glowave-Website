import { NavLink, Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import logo from "../../assets/testlogo.png"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" }
]

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { i18n } = useTranslation()

  const ref = useRef()

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  useEffect(() => {

    const handleClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        setLangOpen(false)
      }
    }

    window.addEventListener("click", handleClick)

    return () => window.removeEventListener("click", handleClick)

  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLangOpen(false)
  }

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0]

  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/50 backdrop-blur-md shadow-md"
          : "bg-white border-b border-gray-200"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Glowave Logo" className="h-11 w-auto rounded-3xl" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative group ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`
            }
          >
            <span>
              Home
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `relative group ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`
            }
          >
            <span>
              Services
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative group ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`
            }
          >
            <span>
              About
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `relative group ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`
            }
          >
            <span>
              Blog
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative group ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`
            }
          >
            <span>
              Contact
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 relative" ref={ref}>

          {/* Language Button */}
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 border rounded-lg px-3 py-1 hover:bg-gray-100"
          >
            <FaGlobe />
            <span className="hidden md:block">{currentLang.name}</span>
          </button>

          {/* Language Dropdown */}
          {langOpen && (

            <div className="absolute right-24 top-12 bg-white rounded-xl shadow-xl p-4 grid grid-cols-2 gap-3 w-72">

              {languages.map((lang) => (

                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100
                  ${
                    i18n.language === lang.code
                      ? "text-blue-600 font-medium"
                      : ""
                  }`}
                >
                  <span>{lang.flag}</span>
                  {lang.name}
                </button>

              ))}

            </div>

          )}

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-xl
            hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Try for Free
          </Link>

          {/* Mobile Hamburger */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center gap-6 pb-6 bg-white shadow"
        >

          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

        </motion.div>
      )}

    </nav>

  )
}

export default Navbar