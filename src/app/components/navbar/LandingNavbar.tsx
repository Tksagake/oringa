// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';
import { BedDouble, User, Wine, WavesLadder, GalleryHorizontal, Contact2Icon } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-950 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-18 w-36 mr-2" />
        </Link>
        <div className="flex space-x-6">
          <Link href="/facilities" className="flex items-center hover:text-gray-300">
            <WavesLadder className="mr-2" /> Facilities
          </Link>
          <Link href="/rooms" className="flex items-center hover:text-gray-300">
            <BedDouble className="mr-2" /> Rooms
          </Link>
          <Link href="/gallery" className="flex items-center hover:text-gray-300">
            <GalleryHorizontal className="mr-2" /> Gallery
          </Link>
          <Link href="/contact" className="flex items-center hover:text-gray-300">
            <Contact2Icon className="mr-2" /> Contact Us
          </Link>
          <Link href="/login" className="flex items-center hover:text-gray-300">
            <User className="mr-2" /> Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
