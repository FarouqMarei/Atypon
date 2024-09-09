import { useEffect, useState } from "react";
import ArrowUp from "@/assets/images/arrow-up.png"
// import { FaArrowUp } from "react-icons/fa"; // FontAwesome Arrow Up Icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down by 300 pixels
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white-500 text-white shadow-lg hover:bg-primary-900 focus:outline-none"
        >
            <img src={ArrowUp} alt="Atypon Logo" />
          {/* <FaArrowUp size={24} /> */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
