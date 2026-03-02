import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Briefcase, CheckCircle, Heart, Globe, Users } from 'lucide-react';

const IMAGES = {
  aboutHero: "/images/about/hero.png",
  signature: "/images/about/signature.png"
};

export default function About() {
  const { t } = useTranslation();

  const statItems = t('about.stats', { returnObjects: true }) as Array<{ label: string; value: string }>;
  const stats = statItems.map((stat, idx) => {
    const icons = [<CheckCircle size={20} />, <Award size={20} />, <Users size={20} />, <Globe size={20} />];
    return { ...stat, icon: icons[idx] };
  });

  return (
    <div className="bg-black pt-32 min-h-screen">
      <header className="section-padding text-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">{t('about.header.label')}</span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl gold-text">{t('about.header.title')}</h1>
          <div className="h-px w-32 bg-primary mx-auto mt-6 md:mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://drive.google.com/file/d/1D2F53z6t49v69A0roeeZnZKkG43UVqAf/view?usp=sharing"
            download="https://drive.google.com/file/d/1D2F53z6t49v69A0roeeZnZKkG43UVqAf/view?usp=sharing"
            className="btn-gold inline-block"
          >
            {t('about.header.downloadProfile')}
          </a>
        </motion.div>
      </header>

      {/* Main About Section */}
      <section className="section-padding container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl gold-text tracking-widest uppercase">{t('about.essence.title')}</h2>
              <div className="h-px w-16 bg-primary" />
            </div>
            {(t('about.essence.paragraphs', { returnObjects: true }) as string[]).map((para, idx) => (
              <p key={idx} className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed tracking-wider">
                {para}
              </p>
            ))}
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="p-4 border border-primary/20 rounded-full shrink-0">
                <Heart className="text-primary" size={20} md="24" strokeWidth={1.5} />
              </div>
              <p className="text-xs md:text-sm tracking-[0.2em] text-white uppercase font-serif italic">{t('about.essence.motto')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 lg:h-[600px]"
          >
            <div className="absolute inset-0 border border-primary/20 z-0" />
            <img
              src={IMAGES.signature}
              alt="About Us"
              className="w-full h-full object-cover relative z-10 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-950 py-16 md:py-32 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2 md:space-y-4"
            >
              <div className="text-primary flex justify-center text-sm md:text-base">{stat.icon}</div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif gold-text">{stat.value}</h3>
              <p className="text-muted-foreground text-[8px] md:text-[10px] tracking-[0.3em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 md:p-12 border border-white/5 bg-zinc-900/50 space-y-6 md:space-y-8 group hover:border-primary/20 transition-all duration-500"
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl gold-text uppercase tracking-widest">{t('about.vision.title')}</h2>
              <div className="h-px w-12 bg-primary group-hover:w-24 transition-all duration-500" />
            </div>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed tracking-widest italic font-serif">
              "{t('about.vision.text')}"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 md:p-12 border border-white/5 bg-zinc-900/50 space-y-6 md:space-y-8 group hover:border-primary/20 transition-all duration-500"
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl gold-text uppercase tracking-widest">{t('about.mission.title')}</h2>
              <div className="h-px w-12 bg-primary group-hover:w-24 transition-all duration-500" />
            </div>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed tracking-widest italic font-serif">
              "{t('about.mission.text')}"
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-12 md:space-y-20">
          <h2 className="text-3xl md:text-4xl gold-text tracking-widest">{t('about.whyChooseUs.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {(t('about.whyChooseUs.items', { returnObjects: true }) as Array<{ title: string; text: string }>).map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-base md:text-lg gold-text uppercase tracking-widest font-serif">{item.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm tracking-widest">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
