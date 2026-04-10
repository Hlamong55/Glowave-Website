import { FaWhatsapp } from "react-icons/fa"

function WhatsAppButton() {

  const phoneNumber = "+8801955506016" 

  const message = "Hello! I would like to know more about your services."

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-8 z-50
      bg-green-500 text-white p-2 rounded-full
      shadow-lg hover:shadow-xl hover:scale-110
      transition duration-300"
    >
      <FaWhatsapp size={38} />
    </a>
  )
}

export default WhatsAppButton