import { useState } from "react";

const banners = [
  { id: 1, image: "src/assets/banners/wanderlust-invocation-2.webp" },
  { id: 2, image: "src/assets/banners/epitome-invocation-1.webp" },
];

function App() {
  //* Banner ID #1 is weapon banner, banner #2 is character banner
  //* in useState use index numbering so banner #1 is accessed in useState(0)
  const [currentBanner, setBanner] = useState(0);

  const toggleBanner = () => {
    setBanner((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden font-optimized-global">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="src/assets/backgrounds/wish-background-animated.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        {/* Header with Banner Preview Buttons */}
        <header className="relative z-10 flex justify-center mt-4">
          <button
            onClick={() => setBanner(0)}
            className={`mx-2 py-1 px-0.5 rounded ${
              currentBanner === 0 ? "bg-blue-700 text-white" : "bg-gray-300"
            }`}
          >
            Standard Banner
          </button>

          <button
            onClick={() => setBanner(1)}
            className={`mx-2 py-1 px-0.5 rounded ${
              currentBanner === 1 ? "bg-blue-700 text-white" : "bg-gray-300"
            }`}
          >
            Weapon Banner
          </button>
        </header>

        {/* Banner Preview Section with Sliding Effect */}
        <main className="relative z-10 flex flex-col items-center justify-center mt-4">
          <div className="relative w-full max-w-md">
            <img
              src={banners[currentBanner].image}
              alt={`Banner ${currentBanner + 1}`}
              className="w-full"
            />
          </div>
        </main>

        <footer className="relative z-10 flex justify-end mt-4 p-4">
          <div className="flex flex-row items-end">
            <button className="my-1 mx-1 py-1 px-1 bg-gray-400 text-white rounded">
              Wish 1x
            </button>
            <button className="my-1 mx-1 py-1 px-1 bg-gray-400 text-white rounded">
              Wish 10x
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
