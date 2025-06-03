import { useNavigate, useLocation } from 'react-router-dom';
//import { useState } from 'react';
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //const [isOpen, setIsOpen] = useState(false);

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
    // setIsOpen(false);
  };

  return (
    <footer className="bg-[var(--color-footer)] text-[var(--color-text-light)] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mago International</h3>
            <p className="text-sm">
              Your trusted partner in international trade and logistics, providing quality chemical products worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)} 
                    className="text-sm hover:text-[var(--color-primary)] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>CEO: Kashif Maqbool</li>
              <li>Email: magoon33@hotmail.com</li>
              <li>Phone: 03008402932</li>
              <li>Address: 43 Timber Market Ravi Road Lahore</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mago International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
