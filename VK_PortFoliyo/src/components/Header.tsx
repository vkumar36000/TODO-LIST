import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 shadow-blue-50  drop-shadow-lg animate-pulse ">VIJAY</a>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none gap-4 p-4 md:p-0`}>
          <li><a href="#home" className="block py-2 text-gray-600 hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="block py-2 text-gray-600 hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="block py-2 text-gray-600 hover:text-blue-500">Skills</a></li>
          <li><a href="#work" className="block py-2 text-gray-600 hover:text-blue-500">Work</a></li>
          <li><a href="#contact" className="block py-2 text-gray-600 hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}