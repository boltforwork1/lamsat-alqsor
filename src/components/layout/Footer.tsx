import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" onClick={handleLinkClick} className="flex items-start group">
            <div className="h-12 md:h-14 w-auto overflow-hidden flex items-center">
              <img
                src="/logo.png"
                alt="Lamsat Al Qosoor Logo"
                className="h-24 md:h-28 w-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Specialized in luxury interior and exterior decoration, delivering passion and craftsmanship to every project.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm tracking-widest uppercase mb-8 gold-text">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <Link
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm tracking-widest uppercase mb-8 gold-text">Services</h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/services#interior-works"
                onClick={handleLinkClick}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider"
              >
                Interior Works
              </Link>
            </li>
            <li>
              <Link
                to="/services#exterior-facade-works"
                onClick={handleLinkClick}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider"
              >
                Exterior & Facade Works
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm tracking-widest uppercase mb-8 gold-text">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <Phone className="text-primary shrink-0" size={18} strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground tracking-wider">+971 52 750 9052</span>
            </li>
            <li className="flex items-start space-x-4">
              <Mail className="text-primary shrink-0" size={18} strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground tracking-wider underline underline-offset-4 decoration-primary/30">info@lamsatalqosoor.com</span>
            </li>
            <li className="flex items-start space-x-4">
              <MapPin className="text-primary shrink-0" size={18} strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground tracking-wider">Luxury Business District, Dubai, UAE</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
        <p>© {currentYear} LAMSAT AL QOSOOR LUXURY DECOR. ALL RIGHTS RESERVED.</p>
        <p>WE CREATE BEAUTY AND LEAVE A LASTING SIGNATURE.</p>
      </div>
    </footer>
  );
}
