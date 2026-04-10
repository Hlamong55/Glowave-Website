import { useEffect, useState } from "react"
import { ImArrowUp } from "react-icons/im"


function ScrollTopBtn() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)

  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-22 right-8 z-50 
        bg-blue-600 text-white text-xl font-extrabold p-4.5 rounded-full 
        shadow-lg hover:shadow-xl hover:scale-110
        transition duration-300"
      >
        <ImArrowUp />
      </button>
    )
  )
}

export default ScrollTopBtn