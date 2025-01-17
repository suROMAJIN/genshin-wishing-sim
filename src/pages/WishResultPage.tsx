import React from "react";
import { useHistory } from "react-router-dom";

const WishResultPage: React.FC = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center font-optimized-global">
      <h1 className="text-4xl mb-4">Wish Result HERE temporary muna</h1>
      {/* Display the wish result here */}
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
