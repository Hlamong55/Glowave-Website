import { Link } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import logo from "../../assets/testlogo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Glowave Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link to="/" className="hover:text-blue-600 hover:underline transition">
            Home
          </Link>

          <Link to="/services" className="hover:text-blue-600 hover:underline transition">
            Services
          </Link>

          <Link to="/about" className="hover:text-blue-600 hover:underline transition">
            About
          </Link>

          <Link to="/blog" className="hover:text-blue-600 hover:underline transition">
            Blog
          </Link>

          <Link to="/contact" className="hover:text-blue-600 hover:underline transition">
            Contact
          </Link>

        </div>

        {/* Mobile Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
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

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </motion.div>
      )}
    </nav>
  )
}

export default Navbar