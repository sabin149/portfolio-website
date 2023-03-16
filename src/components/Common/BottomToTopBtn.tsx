import { useState } from "react";

const BottomToTopBtn = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return showScroll ? (
    <div className="fixed bottom-5 right-5">
      <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-3 rounded-full"
        onClick={handleScrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  ) : null;
};

export default BottomToTopBtn;
