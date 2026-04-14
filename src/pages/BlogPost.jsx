import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === slug);
        setBlog(found);
      });
  }, [slug]);

  if (!blog) {
    return <div className="pt-32 text-3xl font-bold text-blue-600 text-center">Loading...</div>;
  }

  return (
    <div className="relative pt-30 pb-20 overflow-hidden bg-linear-to-b from-blue-100 via-white to-blue-100">
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

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>

        {/* Author */}

        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://i.pravatar.cc/100"
            alt="author"
            className="w-15 h-15 border-2 border-green-500 rounded-full"
          />

          <div>
            <p className="font-bold text-lg">{blog.author}</p>
            <p className="text-sm text-gray-600">Published {blog.date}</p>
          </div>
        </div>

        {/* Image */}

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={blog.image}
          className="w-full rounded-xl mb-10"
        />

        {/* Excerpt */}

        <p className="text-gray-700 text-xl font-semibold mb-8">📌{blog.excerpt}</p>

        {/* Content */}

        {blog.content.map((para, i) => (
          <p key={i} className="mb-6 text-gray-700 leading-relaxed text-lg">
            {para}
          </p>
        ))}

        {/* Share Buttons */}

        <div className="mt-12">
          <h3 className="text-lg font-bold mb-3">Share this article</h3>

          <div className="flex gap-4">
            <button className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 text-white">
              <FaFacebookF />
            </button>

            <button className="w-11 h-11 flex items-center justify-center rounded-full bg-black text-white">
              <FaXTwitter />
            </button>

            <button className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-500 text-white">
              <FaLinkedinIn />
            </button>
          </div>
        </div>

        {/* Back button */}

        <Link
          to="/blog"
          className="inline-block mt-10 text-blue-600 font-medium hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
