// src/components/sections/Hero.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hero1 from '../../assets/Hero/containers.jpg';
import hero2 from '../../assets/Hero/Hero Image 2.jpg';
import hero3 from '../../assets/Hero/Hero Image 1.jpg';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-[70vh] overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Mago International
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Your trusted partner in international trade and logistics
          </p>
          <Button 
            onClick={() => navigate('/products')}
            className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-secondary)] transition-colors"
          >
            Explore Our Products
          </Button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex
                ? 'bg-[var(--color-primary)]'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;