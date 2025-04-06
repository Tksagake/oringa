// pages/index.tsx or any other page
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';// Adjust the path as necessary
import LandingNavbar from './components/navbar/LandingNavbar';

const HomePage: React.FC = () => {
  return (
    <div className="relative bg-blue-500 text-white">
      {/* Navbar Section */}
      <LandingNavbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative">
        <Image
          src="/main.png"
          alt="Hotel Image"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Oringa Hotel</h1>
          <p className="text-xl mb-8">Your comfort is our priority. Book your stay with us today!</p>
          <Link href="/rooms" className="bg-white text-blue-900 px-6 py-3 rounded-full text-xl hover:bg-gray-400">Explore Rooms</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 text-center bg-white text-blue-950">
        <h2 className="text-4xl font-bold mb-6">About Oringa Hotel</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Oringa Hotel offers a luxurious and relaxing stay in the heart of the Mara. With top-notch facilities and exceptional service, we guarantee an unforgettable experience. Book your stay and discover the comfort and elegance of our rooms.
        </p>
        <Link href="/facilities" className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl hover:bg-blue-700">Learn More</Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-950 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Oringa Hotel. All Rights Reserved.</p>
        </div>
         <div className="flex space-x-6">
                      <Link href="#" className="hover:text-blue-300 transition-colors duration-300">Privacy Policy</Link>
                      <Link href="#" className="hover:text-blue-300 transition-colors duration-300">Terms of Service</Link>
                      <Link href="#" className="hover:text-blue-300 transition-colors duration-300">Contact Us</Link>
                    </div>
      </footer>
    </div>
  );
};

export default HomePage;
