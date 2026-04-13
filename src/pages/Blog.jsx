import { useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Blog() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {

    fetch("/blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data))

  }, [])

  return (

    <div className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

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
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-300"
            >

              {/* Image */}

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-54 object-cover"
              />

              {/* Content */}

              <div className="p-6 flex flex-col grow">

                <h3 className="text-xl font-semibold mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-3.5">
                  {blog.excerpt}
                </p>

                {/* Read More Button */}

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