import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { getPhoneLink, getEmailLink, getLocationLink } from '../../utils/whatsapp';
import { CONTACT_INFO } from '../../constants/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-12 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <div className="space-y-6">
          <Link to="/" onClick={handleLinkClick} className="flex items-start group">
            <div className="h-10 md:h-12 lg:h-14 w-auto overflow-hidden flex items-center">
              <img
                src="/logo.png"
                alt="Lamsat Al Qosoor Logo"
                className="h-20 md:h-24 lg:h-28 w-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-xs">
            Specialized in luxury interior and exterior decoration, delivering passion and craftsmanship to every project.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xs md:text-sm tracking-widest uppercase mb-6 md:mb-8 gold-text">Quick Links</h4>
          <ul className="space-y-3 md:space-y-4">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <Link
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xs md:text-sm tracking-widest uppercase mb-6 md:mb-8 gold-text">Services</h4>
          <ul className="space-y-3 md:space-y-4">
            <li>
              <Link
                to="/services#interior-works"
                onClick={handleLinkClick}
                className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider"
              >
                Interior Works
              </Link>
            </li>
            <li>
              <Link
                to="/services#exterior-facade-works"
                onClick={handleLinkClick}
                className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider"
              >
                Exterior & Facade Works
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xs md:text-sm tracking-widest uppercase mb-6 md:mb-8 gold-text">Contact Us</h4>
          <ul className="space-y-4 md:space-y-6">
            <li>
              <a
                href={getPhoneLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 md:space-x-4 group cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                <Phone className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} md="18" strokeWidth={1.5} />
                <span className="text-xs md:text-sm text-muted-foreground tracking-wider group-hover:text-primary transition-colors duration-300">{CONTACT_INFO.phone.display}</span>
              </a>
            </li>
            <li>
              <a
                href={getEmailLink()}
                className="flex items-start space-x-3 md:space-x-4 group cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                <Mail className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} md="18" strokeWidth={1.5} />
                <span className="text-xs md:text-sm text-muted-foreground tracking-wider underline underline-offset-4 decoration-primary/30 group-hover:text-primary transition-colors duration-300">{CONTACT_INFO.email}</span>
              </a>
            </li>
            <li>
              <a
                href={getLocationLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 md:space-x-4 group cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                <MapPin className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} md="18" strokeWidth={1.5} />
                <span className="text-xs md:text-sm text-muted-foreground tracking-wider group-hover:text-primary transition-colors duration-300">{CONTACT_INFO.location.display}</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lamsatalqsoor?igsh=NnRuaTh5aWFsYnp6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 md:space-x-4 group cursor-pointer hover:opacity-80 transition-opacity duration-300"
                aria-label="Instagram"
              >
                <Instagram className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} md="18" strokeWidth={1.5} />
                <span className="text-xs md:text-sm text-muted-foreground tracking-wider group-hover:text-primary transition-colors duration-300">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-[8px] md:text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 px-4 md:px-0">
        <p className="text-center md:text-left">© {currentYear} LAMSAT AL QOSOOR LUXURY DECOR. ALL RIGHTS RESERVED.</p>
        <p className="text-center md:text-right">WE CREATE BEAUTY AND LEAVE A LASTING SIGNATURE.</p>
      </div>
    </footer>
  );
}
