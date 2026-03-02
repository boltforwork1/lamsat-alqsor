import { useLanguage } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' }
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = LANGUAGES.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 text-xs font-serif tracking-widest uppercase"
        aria-label="Toggle language menu"
        aria-expanded={isOpen}
      >
        <Globe size={16} className="text-primary" />
        <span>{currentLang?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 rounded-lg border border-primary/30 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md shadow-lg overflow-hidden z-50">
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-xs font-serif tracking-widest uppercase text-left transition-all duration-200 ${
                language === lang.code
                  ? 'bg-primary/20 text-primary border-l-2 border-primary'
                  : 'text-white/70 hover:text-primary hover:bg-primary/10'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
