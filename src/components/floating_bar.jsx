import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+97335037269"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      aria-label="Chat with me on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingWhatsAppButton;