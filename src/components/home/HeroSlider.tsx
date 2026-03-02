import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SlideContent {
  id: number;
  backgroundImage: string;
  buttonLink: string;
}

const slideConfig = [
  { backgroundImage: "/images/home/hero.png", buttonLink: "/about" },
  { backgroundImage: "/images/services/interior.png", buttonLink: "/services" },
  { backgroundImage: "/images/about/signature.png", buttonLink: "/contact" }
];

const MotionLink = motion.create(Link);

export default function HeroSlider() {
  const { t } = useTranslation();

  const slides: SlideContent[] = slideConfig.map((config, idx) => ({
    id: idx + 1,
    ...config
  }));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 8000);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 8000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slide.backgroundImage}
                  alt={slide.headline}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 luxury-overlay" />
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="container relative mx-auto px-4 md:px-6 text-center space-y-4 md:space-y-6">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) => (
              currentSlide === index && (
                <motion.div
                  key={`text-${slide.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-3 md:space-y-4"
                >
                  <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif gold-text tracking-[0.2em] md:tracking-[0.3em] font-bold leading-tight">
                    {t(`hero.slides.${index}.headline`).split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </h1>
                  <p className="text-xs md:text-base lg:text-lg text-muted-foreground tracking-widest max-w-2xl mx-auto italic font-serif leading-relaxed">
                    {t(`hero.slides.${index}.description`)}
                  </p>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {slides.map((slide, index) => (
              currentSlide === index && (
                <motion.div
                  key={`button-${slide.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex justify-center"
                >
                  <MotionLink
                    to={slide.buttonLink}
                    onClick={() => window.scrollTo(0, 0)}
                    className="btn-gold group flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t(`hero.slides.${index}.buttonText`)}</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </MotionLink>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={previousSlide}
        className="absolute left-3 md:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary transition-colors duration-300 p-1 md:p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="md:w-8 md:h-8" strokeWidth={1.5} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary transition-colors duration-300 p-1 md:p-2"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="md:w-8 md:h-8" strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              currentSlide === index
                ? 'bg-primary h-2 w-8'
                : 'bg-white/30 h-1.5 w-1.5 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
