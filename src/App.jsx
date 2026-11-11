import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {

  const [currentPage, setCurrentPage] = useState(
    window.location.hash
  );

  useEffect(() => {

    if (!window.location.hash) {
      window.location.hash = "/";
    }

    const handleNavigation = () => {
      setCurrentPage(window.location.hash);
    };

    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener(
        "hashchange",
        handleNavigation
      );
    };

  }, []);

  if (currentPage === "#/" || currentPage === "") {
    return <Home />;
  }

  return <NotFound />;

}

export default App;