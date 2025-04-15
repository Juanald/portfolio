"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-4">
        {/* Logo or Name */}
        <div className="text-2xl font-semibold text-gray-800 tracking-wider">
          GD | Portfolio
        </div>
      </div>

      <div className="flex gap-6 text-lg font-medium text-gray-800">
        <a
          href="#about"
          className="hover:text-blue-600 font-semibold transition duration-300 ease-in-out"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-blue-600 font-semibold transition duration-300 ease-in-out"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-blue-600 font-semibold transition duration-300 ease-in-out"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
