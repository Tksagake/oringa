'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LandingNavbar from '../components/navbar/LandingNavbar'; // Adjust the path as necessary

const roomsData = [
  {
    name: "Deluxe Room",
    description: "A spacious and luxurious room with a king-sized bed and a beautiful city view.",
    price: "$150/night",
    imageUrl: "/7.jpg",
  },
  {
    name: "Standard Room",
    description: "Comfortable and affordable with all the essential amenities for a pleasant stay.",
    price: "$100/night",
    imageUrl: "/5.png",
  },
  {
    name: "Suite",
    description: "A premium suite with a separate living area, perfect for longer stays or special occasions.",
    price: "$250/night",
    imageUrl: "/11.jpg",
  },
  {
    name: "Family Room",
    description: "Spacious room designed for families, featuring multiple beds and a cozy atmosphere.",
    price: "$200/night",
    imageUrl: "/8.jpg",
  },
  {
    name: "Honeymoon Suite",
    description: "An exquisite suite designed for couples, complete with romantic decor and stunning views.",
    price: "$300/night",
    imageUrl: "/9.jpg",
  },
  {
    name: "Executive Room",
    description: "A luxurious room with premium amenities, ideal for business travelers.",
    price: "$180/night",
    imageUrl: "/10.jpg",
  }
];

const RoomsPage: React.FC = () => {
  return (
    <div className="relative bg-blue-500 text-white min-h-screen">
      {/* Navbar Section */}
      <LandingNavbar />

      {/* Rooms Section */}
      <div className="py-16 px-4 bg-blue-900 text-white">
        <h1 className="text-5xl font-bold text-center mb-8">Welcome to Oringa Hotel Rooms</h1>
        <p className="text-xl text-center mb-12">Experience luxury and comfort in our beautifully designed rooms.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <div
              key={index}
              className="relative bg-white text-blue-950 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image src={room.imageUrl} alt={room.name} width={500} height={300} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-white bg-opacity-90">
                <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                <p className="text-lg mb-4 px-4 text-center">{room.description}</p>
                <p className="text-xl font-bold text-blue-500 mb-4">{room.price}</p>
                <Link href="/login" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

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

export default RoomsPage;
