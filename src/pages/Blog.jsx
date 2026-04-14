import { useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Blog() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {

    fetch("/blogs.json", { cache: "force-cache" })
      .then(res => res.json())
      .then(data => {

        // optimize image size automatically
        const optimized = data.map(blog => ({
          ...blog,
          image: blog.image.includes("?")
            ? blog.image
            : `${blog.image}?w=800&q=80`
        }))

        setBlogs(optimized)

      })

  }, [])

  return (

    <div className="relative pt-32 pb-20 bg-linear-to-b from-blue-50 via-white to-blue-50 overflow-hidden">

      {/* Floating Glow Bubbles */}

      <motion.div
        animate={{ x:[0,60,0], y:[0,-40,0] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute -top-40 -left-40 w-105 h-105 bg-blue-300 opacity-30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x:[0,-60,0], y:[0,50,0] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute top-40 -right-40 w-105 h-105 bg-purple-300 opacity-30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y:[0,-50,0] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute bottom-0 left-1/3 w-75 h-75 bg-blue-200 opacity-40 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}

        <h1 className="text-5xl font-bold text-center mb-16 text-blue-600">
          Latest Articles
        </h1>

        {/* Blog Grid */}

        <div className="grid md:grid-cols-3 gap-10">

          {blogs.map((blog) => (

            <motion.div
              key={blog.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-300 will-change-transform"
            >

              {/* Image */}

              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="w-full h-54 object-cover hover:scale-105 transition duration-300"
              />

              {/* Content */}

              <div className="p-6 flex flex-col grow">

                <h3 className="text-xl font-semibold mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-3.5">
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-blue-600 font-medium hover:underline mt-auto"
                >
                  Read More →
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  )

}

export default Blog