import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/testlogo.png";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}

        <div>
          <div className="gap-3 mb-4">
            <img src={logo} className="h-15 rounded-full" />
          </div>

          <p className="text-gray-400 text-sm mb-6">
            We build high-performance websites, SEO strategies and digital
            marketing solutions that help businesses grow faster.
          </p>

          {/* Social */}

          <div className="flex gap-4">
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>

            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition">
              <FaXTwitter />
            </a>

            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Services */}

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/services">Web Development</Link>
            </li>
            <li>
              <Link to="/services">SEO Optimization</Link>
            </li>
            <li>
              <Link to="/services">Online Advertising</Link>
            </li>
            <li>
              <Link to="/services">Growth Strategy</Link>
            </li>
          </ul>
        </div>

        {/* Links */}

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}

        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get updates on new articles and growth strategies.
          </p>

          <div className="flex border-b border-gray-600 pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none flex-1 text-sm"
            />

            <button className="text-blue-500 text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="bg-gray-900 border-t border-gray-800 mt-10 p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Glowave. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
