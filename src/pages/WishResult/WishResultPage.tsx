import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WishResultPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Start fade-in effect when component mounts
    setTimeout(() => {
      setShowPage(true);
    }, 100); // Small delay to trigger animation

    setTimeout(() => {
      setShowImage(true);
    }, 1000); // Small delay to trigger animation

  }, []);

  const goBack = () => {
    setShowPage(false);
    setTimeout(() => {
      navigate("/"); 
      // always match this to duration of backdrop in this page
    }, 1000); 
  };

  return (
    // Backdrop, the fade in out transition of the page
    <div    
      className={`relative h-screen flex flex-col items-center justify-center font-optimized-global transition-opacity duration-1000 ${
        showPage ? "opacity-100" : "opacity-0"
      } bg-[url('src/assets/backgrounds/after-wish-background.webp')] bg-cover bg-center bg-no-repeat`}
    >
    
      {/* displaying the wish result here */}
      <img
        src="src/assets/banners/gacha-splash.webp"
        alt="temp"
        className={`h-4/5 object-contain transition duration-500 ${
          showImage ? "filter-none translate-x-5" : "brightness-0 translate-x-0"
        }`}
      />

      <button
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        onClick={goBack}
      >
        Back to Wishing
      </button>
    </div>
  );
};

export default WishResultPage;
