// src/components/sections/Products.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import containersImage from '../../assets/containers.jpg';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  subCategories?: {
    id: string;
    name: string;
    description: string;
    tdsLink?: string;
  }[];
  tdsLink?: string;
}

const Products = () => {
  const navigate = useNavigate();
  const products: Product[] = [
    // Add your products here
  ];

  return (
    <section id="products" className="py-10 bg-[var(--color-background-light)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="ml-5 space-y-4 order-1 text-center md:text-left flex flex-col items-center md:items-start" data-aos="fade-left">
            <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-2 inline-block">
              Our Products
            </h1>
            <div className="space-y-3 w-full">
              <p className="text-sm md:text-base text-[var(--color-text-dark)] leading-relaxed">
                As an international importer, distributor and supplier of various commodity and specialty chemicals, 
                mago Chemical Group has a strong ability to service manufacturers and distributors with products across 
                dozens of industries. With decades of experience in sourcing reliable chemical supply chains, mago 
                consistently finds steady and competitively priced sources for hundreds of commercial chemicals used.
              </p>
              <p className="text-sm md:text-base text-[var(--color-text-dark)] leading-relaxed">
                Our list of products is constantly growing and diversifying as we seek to provide our customers with 
                value in as many avenues as possible. Our strong worldwide network establishes mago as a premier 
                supplier for chemical products around the world.
              </p>
              <p className="text-sm md:text-base text-[var(--color-text-dark)] leading-relaxed">
                Mago's products include but are not limited to: acids, acrylates, alcohols, amines, glycols, oils, 
                pigments, polymers, solvents, surfactants and other additives. mago always ensures our supply of 
                products meet the highest standards in production, quality, safety and service.
              </p>
            </div>
            <Button 
              className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 w-full md:w-auto mx-auto md:mx-0"
              onClick={() => navigate('/products')}
            >
              View All Products
            </Button>
          </div>
          {/* Image Section */}
          <div 
            className="relative h-56 md:h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 order-2 mb-6 md:mb-0"
            data-aos="fade-right"
          >
            <img
              src={containersImage}
              alt="Mago Chemical Containers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;