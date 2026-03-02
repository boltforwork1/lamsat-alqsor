import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Palette, Home as HomeIcon, Layout, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroSlider from '../components/home/HeroSlider';

const IMAGES = {
  interior: "/images/home/interior.png",
  exterior: "/images/home/exterior.png",
  project1: "/images/home/project1.png",
  project2: "/images/home/project2.png"
};

const MotionLink = motion.create(Link);

export default function Home() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('home.services.interiorWorks.title'),
      description: t('home.services.interiorWorks.description'),
      icon: <HomeIcon className="text-primary" size={32} strokeWidth={1} />,
      image: IMAGES.interior
    },
    {
      title: t('home.services.exteriorWorks.title'),
      description: t('home.services.exteriorWorks.description'),
      icon: <Layout className="text-primary" size={32} strokeWidth={1} />,
      image: IMAGES.exterior
    }
  ];

  return (
    <div className="bg-black">
      <HeroSlider />

      {/* About Section */}
      <section className="section-padding bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-2">
              <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">{t('home.about.label')}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl gold-text">{t('home.about.title')}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg tracking-wider">
              {t('home.about.description')}
            </p>
            <Link to="/about" className="btn-gold-outline inline-block">
              {t('home.about.readMore')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-2 md:-inset-4 border border-primary/20" />
            <img
              src={IMAGES.project1}
              alt="Luxury Project"
              className="w-full h-64 md:h-96 lg:h-[600px] object-cover hover-lift transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-black">
        <div className="container mx-auto text-center space-y-12 md:space-y-20">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl gold-text">{t('home.services.title')}</h2>
            <div className="h-px w-24 bg-primary mx-auto" />
            <p className="text-muted-foreground tracking-widest text-xs md:text-sm uppercase">{t('home.services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="luxury-card p-6 md:p-10 group space-y-6 md:space-y-8"
              >
                <div className="inline-block p-4 border border-primary/20 group-hover:border-primary transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl gold-text tracking-widest uppercase">{service.title}</h3>
                <p className="text-muted-foreground tracking-wider text-xs md:text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <Link to="/services" className="btn-gold-outline inline-block">
            {t('home.services.exploreAll')}
          </Link>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="section-padding bg-zinc-950">
        <div className="container mx-auto space-y-12 md:space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
            <div className="space-y-4">
              <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">{t('home.portfolio.label')}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl gold-text">{t('home.portfolio.title')}</h2>
            </div>
            <Link to="/projects" className="text-primary hover:text-white transition-colors flex items-center space-x-2 tracking-widest text-xs uppercase font-serif pb-2">
              <span>{t('home.portfolio.viewFullGallery')}</span>
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {[IMAGES.project1, IMAGES.project2].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group h-64 md:h-80 lg:h-[500px]"
              >
                <img
                  src={img}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 md:p-8">
                  <div className="border border-primary/30 w-full h-full flex flex-col items-center justify-center space-y-3 md:space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg md:text-2xl gold-text uppercase tracking-widest">{t('home.portfolio.projectTitle')}</h3>
                    <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-[0.3em]">{t('home.portfolio.projectSubtitle')}</p>
                    <div className="w-12 h-px bg-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-black text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/20 blur-[100px] md:blur-[150px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl gold-text tracking-[0.1em]">{t('home.cta.title')}</h2>
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground tracking-widest max-w-2xl mx-auto italic font-serif leading-relaxed">
              {t('home.cta.subtitle')}
            </p>
          </motion.div>

          <Link to="/contact" className="btn-gold inline-block">
            {t('home.cta.contactButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}
