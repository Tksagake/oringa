'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LandingNavbar from '../components/navbar/LandingNavbar';

const facilitiesData = [
  { 
    name: "Swimming Pool", 
    description: "Our luxurious outdoor pool with stunning views and comfortable lounging areas.",
    imageUrl: "/1.jpg" 
  },
  { 
    name: "Fitness Center", 
    description: "State-of-the-art gym equipment with personal training services available.",
    imageUrl: "/2.jpg" 
  },
  { 
    name: "Restaurant", 
    description: "Gourmet dining experience with locally-sourced ingredients and international cuisine.",
    imageUrl: "/3.png" 
  },
  { 
    name: "Spa", 
    description: "Relaxing spa treatments and massages to rejuvenate your mind and body.",
    imageUrl: "/4.png" 
  },
  { 
    name: "Conference Room", 
    description: "Fully-equipped conference room for meetings and events with catering options.",
    imageUrl: "/5.png" 
  },
  { 
    name: "Bar Lounge", 
    description: "Chic bar lounge with a wide selection of cocktails and beverages.",
    imageUrl: "/6.jpg" 
  },
  { 
    name: "Garden View", 
    description: "Beautifully landscaped gardens for a serene and tranquil atmosphere.",
    imageUrl: "/7.jpg" 
  },
  { 
    name: "Beach Access", 
    description: "Direct access to the beach with sun loungers and beach service.",
    imageUrl: "/8.jpg" 
  },
];

const galleryImages = [
  { src: "/1.jpg", alt: "Swimming Pool" },
  { src: "/2.jpg", alt: "Fitness Center" },
  { src: "/3.png", alt: "Restaurant" },
  { src: "/4.png", alt: "Spa" },
  { src: "/5.png", alt: "Conference Room" },
  { src: "/6.jpg", alt: "Bar Lounge" },
  { src: "/7.jpg", alt: "Garden View" },
  { src: "/8.jpg", alt: "Beach Access" },
  { src: "/9.jpg", alt: "Hotel Lobby" },
  { src: "/10.jpg", alt: "Sunset View" },
  { src: "/11.jpg", alt: "Guest Room" },
  { src: "/12.jpg", alt: "Dining Area" },
];

const FacilitiesPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar Section */}
      <LandingNavbar />

      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image 
          src="/main.png" 
          alt="Hotel Facilities" 
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-700 opacity-60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Our World-Class Facilities</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Discover the exceptional amenities that make your stay at Oringa Hotel unforgettable
            </p>
            <p className="text-lg text-white mt-4">
              Experience luxury and comfort in every corner of our hotel, designed to cater to your every need.
            </p>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-16 px-4 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Premium Amenities</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Experience luxury at every turn with our carefully curated facilities designed for your comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilitiesData.map((facility, index) => (
              <div
                key={index}
                className="relative bg-white text-blue-950 shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <Image 
                    src={facility.imageUrl} 
                    alt={facility.name} 
                    width={500} 
                    height={300} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 p-4">
                    <h3 className="text-2xl font-semibold mb-2 text-center">{facility.name}</h3>
                    <p className="text-lg mb-4 px-4 text-center">{facility.description}</p>
                    <Link 
                      href="/login" 
                      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{facility.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 px-4 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-xl max-w-3xl mx-auto">
              A visual journey through our exquisite facilities and beautiful spaces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl shadow-lg h-64"
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={500} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience Luxury?</h2>
        <Link 
          href="/login" 
          className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors duration-300"
        >
          Book Your Stay Now
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Oringa Hotel. All Rights Reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-blue-300 transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors duration-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FacilitiesPage;