import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

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
              <li>
                <button 
                  onClick={() => navigate('/')}
                  className="text-sm hover:text-[var(--color-primary)] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/products')}
                  className="text-sm hover:text-[var(--color-primary)] transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/#about')}
                  className="text-sm hover:text-[var(--color-primary)] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/#contact')}
                  className="text-sm hover:text-[var(--color-primary)] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@magointl.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business Street, Suite 100, City, Country</li>
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
