import React, { useState } from 'react';
import { MenuIcon, XIcon, SearchIcon } from '@heroicons/react/solid';

const Navbar = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    onSearch(searchInput);
  };
  return (
    <nav className="bg-gray-800 text-white p-4  ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a className="text-4xl font-extrabold text-white drop-shadow-lg ml-2 hover:text-gray-400 font-bold" href="#">
          CODECOLLAB
        </a>

        {/* Search Icon */}
        <div className="hidden lg:flex items-center mr-4">
          <SearchIcon className="h-6 w-6 mr-2" onClick={handleSearch} />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white p-2 rounded-md focus:outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center ${isMobileMenuOpen ? 'block' : 'hidden'
            }`}
        >
          <a href="/" className="block lg:inline-block hover:text-gray-400 lg:mt-0 mr-4 ">
            Home
          </a>
          <a href="/problems" className="block lg:inline-block hover:text-gray-400 lg:mt-0 mr-4">
            Problems
          </a>
          <a href="/realtimeIDE" className="block lg:inline-block hover:text-gray-400 lg:mt-0 mr-4">
            RealTimeEditor
          </a>
          <a href="/about" className="block lg:inline-block hover:text-gray-400 lg:mt-0 mr-2">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
