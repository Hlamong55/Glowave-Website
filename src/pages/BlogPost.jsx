import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogPost() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((item) => item.slug === slug);
        setBlog(foundBlog);
      });
  }, [slug]);

  if (!blog) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

        <img src={blog.image} className="w-full rounded-xl mb-6" />

        <p className="text-gray-600 text-lg">{blog.excerpt}</p>
      </div>
    </div>
  );
}

export default BlogPost;
