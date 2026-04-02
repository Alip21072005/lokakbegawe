export default function Navbar() {
  return (
    <div>
      <nav className="w-full h-16 flex items-center justify-between px-4">
        <div className="text-lg font-bold">Lokak Begawe</div>
        <div className="space-x-4">
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
