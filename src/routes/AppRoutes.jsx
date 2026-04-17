import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Services from "../pages/Services"
import About from "../pages/About"
import Blog from "../pages/Blog"
import BlogPost from "../pages/BlogPost"
import Contact from "../pages/Contact"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import Terms from "../pages/TermsOfService"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms&service" element={<Terms />} />
    </Routes>
  )
}

export default AppRoutes