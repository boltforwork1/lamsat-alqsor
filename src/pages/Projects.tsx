import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  const PROJECT_IMAGES = t('projects.items', { returnObjects: true }) as Array<{ title: string; category: string; image: string; id?: number }>;
  const projects = PROJECT_IMAGES.map((item, idx) => ({
    ...item,
    id: idx + 1,
    image: `/images/projects/project-${idx + 1}.png`
  }));

  const categories = [
    t('projects.filters.all'),
    t('projects.filters.interior'),
    t('projects.filters.exterior')
  ];

  const filteredProjects = filter === t('projects.filters.all')
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-black pt-32 min-h-screen">
      <header className="section-padding text-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">{t('projects.header.label')}</span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl gold-text">{t('projects.header.title')}</h1>
          <div className="h-px w-32 bg-primary mx-auto mt-6 md:mt-8" />
          <p className="text-muted-foreground tracking-widest max-w-2xl mx-auto uppercase text-[9px] md:text-xs">{t('projects.header.subtitle')}</p>
        </motion.div>
      </header>

      {/* Filter Buttons */}
      <section className="container mx-auto px-4 md:px-6 mb-10 md:mb-16">
        <div className="flex flex-wrap justify-center gap-3 md:gap-12 border-b border-white/5 pb-6 md:pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-serif text-xs tracking-[0.3em] uppercase transition-all duration-300 relative pb-2 ${filter === cat ? 'text-primary' : 'text-muted-foreground hover:text-white'}`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 md:px-6 lg:px-12 pb-20 md:pb-32">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative h-48 md:h-64 lg:h-[450px] overflow-hidden bg-zinc-900 border border-white/5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 md:p-8 border border-primary/0 group-hover:border-primary/20 m-2 md:m-4">
                  <div className="text-center space-y-2 md:space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-serif">{project.category}</span>
                    <h3 className="text-base md:text-xl gold-text uppercase tracking-widest font-bold">{project.title}</h3>
                    <div className="h-px w-12 bg-primary mx-auto" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      
      {/* Portfolio Quote Section */}
      <section className="bg-zinc-950 py-16 md:py-32 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-12">
          <div className="inline-block p-4 border-y border-primary/30">
            <p className="text-lg md:text-2xl lg:text-3xl italic font-serif text-muted-foreground tracking-widest leading-relaxed">
              "{t('projects.portfolio.quote')}"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
