'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LandingNavbar from '../components/navbar/LandingNavbar';

const galleryImages = [
  { src: "/1.jpg", alt: "Infinity Pool at Sunset", category: "Pool" },
  { src: "/2.jpg", alt: "State-of-the-Art Fitness Center", category: "Fitness" },
  { src: "/3.png", alt: "Gourmet Restaurant Interior", category: "Dining" },
  { src: "/4.png", alt: "Luxury Spa Treatment Room", category: "Spa" },
  { src: "/5.png", alt: "Executive Conference Room", category: "Business" },
  { src: "/6.jpg", alt: "Champagne Bar Lounge", category: "Bar" },
  { src: "/7.jpg", alt: "Tropical Garden Oasis", category: "Garden" },
  { src: "/8.jpg", alt: "Private Beach Access", category: "Beach" },
  { src: "/9.jpg", alt: "Grand Hotel Lobby", category: "Lobby" },
  { src: "/10.jpg", alt: "Oceanview Sunset", category: "View" },
  { src: "/11.jpg", alt: "Luxury Suite Bedroom", category: "Rooms" },
  { src: "/12.jpg", alt: "Fine Dining Experience", category: "Dining" },
  { src: "/13.jpg", alt: "Poolside Cabana", category: "Pool" },
  { src: "/14.jpg", alt: "Yoga Pavilion", category: "Wellness" },
  { src: "/15.jpg", alt: "Wine Cellar", category: "Dining" },
  { src: "/16.jpg", alt: "Rooftop Terrace", category: "View" },
];

const categories = [
  "All",
  "Pool",
  "Fitness",
  "Dining",
  "Spa",
  "Business",
  "Bar",
  "Garden",
  "Beach",
  "Rooms",
  "Wellness"
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="relative min-h-screen">
      {/* Navbar Section */}
      <LandingNavbar />

      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image 
          src="/main.png" 
          alt="Hotel Gallery" 
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Oringa Hotel Gallery</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Immerse yourself in the visual splendor of our luxury resort
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Filter */}
      <div className="py-12 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Explore Our Spaces</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Discover every corner of our beautiful property through these stunning images
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-blue-900 font-semibold'
                    : 'bg-blue-800 text-white hover:bg-blue-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl shadow-lg h-64 transition-all duration-300 hover:scale-[1.02]"
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={500} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <span className="text-white text-lg font-medium block">{image.alt}</span>
                    <span className="text-blue-200 text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 bg-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">See It For Yourself</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          These photos capture just a glimpse of the Oringa experience. 
          Come create your own memories with us.
        </p>
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

export default GalleryPage;