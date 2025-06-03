// src/components/layout/Navbar.tsx
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from 'react-router-dom';
import '../../index.css';
import logo from '../../assets/logo/mago.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '#contact'}
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If not on home page and clicking a section, navigate to home and scroll after navigation
    if ((href === '#hero' || href === '#about' || href === '#contact') && location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } });
      return;
    }
    if (href === '/products' && location.pathname === '/'){
      navigate('/products');
      return;
    }

    // For other cases, handle smooth scrolling
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64; // Height of the navbar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[var(--color-background-light)] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo always left */}
          <div className="flex-1 flex items-center min-w-0">
            <a 
              href={location.pathname === '/' ? '#hero' : '/'} 
              onClick={(e) => handleNavClick(e, '#hero')} 
              className="flex items-center min-w-0"
            >
              <img src={logo} alt="Mago Enterprises Logo" className="h-10 sm:h-12 w-auto max-w-[140px]" />
            </a>
          </div>
          {/* Desktop Navigation always right */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-underline-animate text-[var(--color-text-dark)] text-base lg:text-lg relative px-1"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile Navigation Button always right */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-primary)]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-background-light)] shadow-lg px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2 text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
