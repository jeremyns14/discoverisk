import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">Discoverisk</h1>

        {/* Hamburger Menu Button (mobile) */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/analysis" className="hover:text-blue-600">Analysis</Link>
          <Link to="/guidebook" className="hover:text-blue-600">Guidebook</Link>
          <Link to="/disclaimer" className="hover:text-blue-600">Disclaimer</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md mt-2">
          <Link 
            to="/" 
            className="block px-6 py-3 border-b text-gray-700 hover:bg-blue-50"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/analysis" 
            className="block px-6 py-3 border-b text-gray-700 hover:bg-blue-50"
            onClick={() => setOpen(false)}
          >
            Analysis
          </Link>
          <Link 
            to="/guidebook" 
            className="block px-6 py-3 border-b text-gray-700 hover:bg-blue-50"
            onClick={() => setOpen(false)}
          >
            Guidebook
          </Link>
          <Link 
            to="/disclaimer" 
            className="block px-6 py-3 text-gray-700 hover:bg-blue-50"
            onClick={() => setOpen(false)}
          >
            Disclaimer
          </Link>
        </div>
      )}
    </nav>
  );
}
