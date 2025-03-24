import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import WishHomePage from "./pages/WishHome/WishHomePage";
import WishResultPage from "./pages/WishResult/WishResultPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WishHomePage />} />
        <Route path="/results" element={<WishResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
