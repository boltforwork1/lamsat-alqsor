import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/LanguageSelector';

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.services'), path: '/services' },
    { name: t('navigation.projects'), path: '/projects' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.contact'), path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
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
        <div className="hidden md:flex items-center space-x-8">
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
          <LanguageSelector />
          <Link to="/contact" onClick={handleNavClick} className="btn-gold !py-2 !px-6 !text-[10px]">
            {t('navigation.inquireNow')}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSelector />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="text-white hover:text-primary transition-colors z-50 relative" aria-label="Toggle menu">
              <Menu size={32} />
            </SheetTrigger>

          <SheetContent side="right" className="w-4/5 bg-gradient-to-b from-background via-background to-black/80 border-l border-primary/20 p-0 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-8 w-full px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleNavClick}
                  className="font-serif text-3xl tracking-widest uppercase text-white hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}

              <div className="h-px w-24 bg-primary/30" />

              <Link
                to="/contact"
                onClick={handleNavClick}
                className="btn-gold !py-3 !px-8 !text-xs"
              >
                {t('navigation.inquireNow')}
              </Link>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
