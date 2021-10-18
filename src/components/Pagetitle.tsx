import React from "react";
import { useLocation } from "react-router-dom";

export const Pagetitle: React.FC = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <header className="border-gray-900 border-solid border-t-2 border-r-2 border-l-2">
      {currentPage === "/" ? "Media Search" : " Media Details"}
    </header>
  );
};
