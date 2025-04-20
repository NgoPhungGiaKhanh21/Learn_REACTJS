import React, { useContext } from "react";
import { RootContext } from "../App";

const Header = () => {
  const { theme, user, setUser } = useContext(RootContext);

  return (
    <header
      className={`w-full p-4 flex items-center justify-between ${
        theme === "light" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">Header</h1>
        {user && <span className="text-sm">Welcome, {user}</span>}
      </div>
      <div className="space-x-2">
        <button
          onClick={() => setUser("Alice")}
          className="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors"
        >
          Alice
        </button>
        <button
          onClick={() => setUser("Bob")}
          className="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors"
        >
          Bob
        </button>
      </div>
    </header>
  );
};

export default Header;
