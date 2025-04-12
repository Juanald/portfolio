// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow-md sticky top-0 bg-white z-50">
      <div className="text-xl font-bold">Gavin</div>
      <div className="flex gap-4">
        <a href="#about" className="hover:text-blue-500">
          About
        </a>
        <a href="#work" className="hover:text-blue-500">
          Work
        </a>
        <a href="#contact" className="hover:text-blue-500">
          Contact
        </a>
      </div>
    </nav>
  );
}
