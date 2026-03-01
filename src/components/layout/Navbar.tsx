import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" onClick={handleNavClick} className="flex items-center group">
          <div className="h-12 md:h-14 w-auto overflow-hidden flex items-center">
            <img
              src="/logo.png"
              alt="Lamsat Al Qosoor Logo"
              className="h-24 md:h-32 w-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleNavClick}
              activeProps={{ className: "text-primary border-b border-primary/50" }}
              className="font-serif text-xs tracking-widest uppercase hover:text-primary transition-colors duration-300 pb-1"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={handleNavClick} className="btn-gold !py-2 !px-6 !text-[10px]">
            Inquire Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40 top-0"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 pt-24 z-40 flex flex-col items-center justify-start overflow-y-auto transition-all duration-500 pointer-events-none ${isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible'}`}>
        <div className="glass-morphism w-full h-full flex flex-col items-center justify-start pt-12 pb-12 px-6 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleNavClick}
              className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase hover:text-primary transition-colors w-full text-center py-4"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px w-16 bg-primary/30 my-4" />
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="btn-gold w-40 text-center"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
