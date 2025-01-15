import React from "react";

interface BannerPreviewProps {
  currentBanner: number;
  banners: { id: number; image: string }[];
}

const Body: React.FC<BannerPreviewProps> = ({ currentBanner, banners }) => {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center flex-grow">
      <div className="relative w-full h-full max-w-2xl m-10">
        <img
          src={banners[currentBanner].image}
          alt={`Banner ${currentBanner + 1}`}
          className="h-full object-contain rounded"
        />
      </div>
    </main>
  );
};

export default Body;
