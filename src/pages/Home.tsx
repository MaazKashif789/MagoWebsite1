import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Products from '../components/sections/Products';
import Stats from '../components/sections/Stats';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import Team from '@/components/sections/Team';
const NAVBAR_HEIGHT = 64;

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const href = location.state.scrollTo;
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      // Optionally clear the state (if you want to prevent repeated scrolls)
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* <Navbar /> */}
      <main className="pt-16">
        <Hero />
        <About />
        <Products />
        <Team />
        <Stats />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home; 