import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/testlogo.png";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 px-4">
      <div className="max-w-7xl mx-auto  grid md:grid-cols-5 gap-12">
        {/* Logo + Description */}

        <div>
          <div className=" mb-5">
            <img src={logo} className="h-15 rounded-full" />
          </div>

          <p className="text-gray-400 text-sm mb-5">
            We build high-performance websites, SEO strategies and digital
            marketing solutions that help businesses grow faster.
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
          <h3 className="text-left md:text-center text-white font-semibold mb-4">Quick Links</h3>

          <ul className="text-left md:text-center space-y-3 text-sm">
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
          <h3 className="text-white font-semibold mb-4">Other Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms&service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/blog">Refund Policy</Link>
            </li>
            
          </ul>
        </div>



        {/* Newsletter */}

        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="text-sm text-gray-400 mb-6">
            Subscribe to get updates on new articles and growth strategies.
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
