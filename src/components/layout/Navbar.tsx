import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Lamsat Al Qosoor Logo"
            className="h-40 md:h-40 w-auto group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              activeProps={{ className: "text-primary border-b border-primary/50" }}
              className="font-serif text-xs tracking-widest uppercase hover:text-primary transition-colors duration-300 pb-1"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-gold !py-2 !px-6 !text-[10px]">
            Inquire Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 glass-morphism z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl tracking-[0.2em] uppercase hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          to="/contact" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="btn-gold"
        >
          Inquire Now
        </Link>
      </div>
    </nav>
  );
}
