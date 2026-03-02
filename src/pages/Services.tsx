import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

const IMAGES = {
  interior: "/images/services/interior.png",
  exterior: "/images/services/exterior.png",
  paint: "/images/services/paint.png"
};

export default function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleInquire = () => {
    navigate({ to: '/contact' });
  };

  const serviceDetails = [
    {
      key: 'interiorWorks',
      image: IMAGES.interior
    },
    {
      key: 'exteriorWorks',
      image: IMAGES.exterior
    }
  ];

  return (
    <div className="bg-black pt-32">
      <header className="section-padding text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">{t('services.header.label')}</span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl gold-text mt-4">{t('services.header.title')}</h1>
          <div className="h-px w-32 bg-primary mx-auto mt-6 md:mt-8" />
        </motion.div>
      </header>

      <section className="pb-16 md:pb-32 container mx-auto px-4 md:px-6 lg:px-12">
        {serviceDetails.map((service, idx) => (
          <motion.div
            key={service.key}
            id={service.key === "interiorWorks" ? "interior-works" : "exterior-facade-works"}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-8 md:gap-16 items-start lg:items-center py-12 md:py-20 border-b border-white/5 last:border-0 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="lg:w-1/2 space-y-6 md:space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl gold-text">{t(`services.${service.key}.title`)}</h2>
                <p className="text-primary text-xs md:text-sm tracking-[0.2em] uppercase font-serif">{t(`services.${service.key}.subtitle`)}</p>
                <div className="h-px w-16 bg-primary" />
              </div>

              <ul className="space-y-4 md:space-y-6">
                {t(`services.${service.key}.items`, { returnObjects: true }).map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 md:space-x-4 text-muted-foreground tracking-widest text-xs md:text-sm lg:text-base group cursor-default">
                    <span className="h-1 w-1 bg-primary group-hover:w-4 transition-all duration-300 shrink-0 mt-1.5 md:mt-2" />
                    <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>

              <button onClick={handleInquire} className="btn-gold group flex items-center space-x-2 mt-8 md:mt-10">
                <span>{t(`services.${service.key}.inquireButton`)}</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>

            <div className="lg:w-1/2 relative w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden group"
              >
                <div className="absolute inset-0 border border-primary/20 z-10 pointer-events-none group-hover:border-primary/50 transition-colors duration-500" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 md:h-80 lg:h-auto aspect-square md:aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>
      
      {/* Visual Showcase Section */}
      <section className="bg-zinc-950 py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-4xl gold-text">{t('services.artisticVision.title')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {[IMAGES.interior, IMAGES.exterior, IMAGES.paint].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative h-40 md:h-64 overflow-hidden group border border-white/5"
              >
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Detail" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
