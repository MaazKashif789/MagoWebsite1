import { Button } from "@/components/ui/button";
import aboutImage from '../../assets/Aboutoffice.jpg';

const About = () => {
  return (
    <section id="about" className="py-6 bg-[var(--color-background-light)]">
      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-4 order-1 md:order-2 md:ml-8" data-aos="fade-left">
            <h1 className="text-3xl font-bold text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-2 inline-block text-center">
              About Us
            </h1>
            <div className="space-y-3">
              <p className="text-base text-[var(--color-text-dark)] leading-relaxed">
                Mago international—a family owned and operated company—is a global supplier, importer, and distributor of chemicals, and raw materials.
              </p>
              <p className="text-base text-[var(--color-text-dark)] leading-relaxed">
                Mago offers a variety of chemical products with diverse applications and uses, servicing a wide range of industries. We continuously diversify our product portfolio to meet the needs of the ever-evolving industries we serve. Since inception in 1992 our philosophy has been founded on the sourcing and development of competitive chemical supply originating from the Pacific Rim, with a strong emphasis on China, Taiwan, Korea, Japan, and Indonesia.
              </p>
            </div>
            <Button 
              className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Learn More
            </Button>
          </div>
          {/* Image Section */}
          <div 
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 order-2 md:order-1"
            data-aos="fade-right"
          >
            <img
              src={aboutImage}
              alt="Mago International Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
