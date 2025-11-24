import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Discoverisk</h1>

      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/analysis" className="hover:text-blue-600">Analysis</Link>
        <Link to="/guidebook" className="hover:text-blue-600">Guidebook</Link>
        <Link to="/disclaimer" className="hover:text-blue-600">Disclaimer</Link>
      </div>
    </nav>
  );
}
