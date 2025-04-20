import React, { useContext } from "react";
import { RootContext } from "../App";

const Footer = () => {
  const { theme, setTheme } = useContext(RootContext);

  return (
    <footer className="w-full p-4 flex gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`px-4 py-2 rounded-md ${
          theme === "light"
            ? "bg-gray-900 text-white"
            : "bg-gray-200 text-black"
        } hover:bg-opacity-80 transition-colors`}
      >
        Light Mode
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`px-4 py-2 rounded-md ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
        } hover:bg-opacity-80 transition-colors`}
      >
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
