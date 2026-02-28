import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Palette, Home as HomeIcon, Layout, ChevronRight } from 'lucide-react';

const IMAGES = {
  hero: "https://v3b.fal.media/files/b/0a905007/3e8l9RO0-WlPLA3I-ED1d_81KwMRip.png",
  interior: "https://v3b.fal.media/files/b/0a905009/yhGF-1sUZpFMsmZP48bwr_PWD8aQQ8.png",
  gypsum: "https://v3b.fal.media/files/b/0a905009/30uGQDXzdv7LttjCok7rr_mrhRvQ3G.png",
  exterior: "https://v3b.fal.media/files/b/0a905009/e7UCcKp0i8ur1eIXgH1WL_om2AFanT.png",
  project1: "https://v3b.fal.media/files/b/0a905009/TJV5R-6mJFeWaEWi0bmG8_j3cDSB5A.png",
  project2: "https://v3b.fal.media/files/b/0a905009/E1m6dOAnR1vgKIUkTobXj_5annaQdg.png"
};

const MotionLink = motion.create(Link);

export default function Home() {
  const services = [
    {
      title: "Interior Works",
      description: "Classic, Neo-classic, and Victorian designs that redefine elegance.",
      icon: <HomeIcon className="text-primary" size={32} strokeWidth={1} />,
      image: IMAGES.interior
    },
    {
      title: "Exterior & Facade",
      description: "Grand entrances and luxury facades that command respect.",
      icon: <Layout className="text-primary" size={32} strokeWidth={1} />,
      image: IMAGES.exterior
    },
    {
      title: "Luxury Gypsum",
      description: "Handcrafted decorative details, domes, and cornices.",
      icon: <Palette className="text-primary" size={32} strokeWidth={1} />,
      image: IMAGES.gypsum
    }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={IMAGES.hero} 
            alt="Luxury Palace Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 luxury-overlay" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif gold-text tracking-[0.3em] font-bold">
              Luxury That Speaks <br className="hidden md:block" /> In Details
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground tracking-widest max-w-2xl mx-auto italic font-serif">
              We don’t create décor, we create feelings lived every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center"
          >
            <Link to="/projects" className="btn-gold group flex items-center space-x-2">
              <span>View Our Projects</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">Who We Are</span>
              <h2 className="text-4xl md:text-5xl gold-text">A Passion For Perfection</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg tracking-wider">
              In every project we deliver, we place a part of our passion into it. Specialized in luxury interior and exterior decoration, we are a leading name in palace-inspired design across the region.
            </p>
            <Link to="/about" className="btn-gold-outline inline-block">
              Read More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-primary/20" />
            <img 
              src={IMAGES.project1} 
              alt="Luxury Project" 
              className="w-full h-[600px] object-cover hover-lift grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-black">
        <div className="container mx-auto text-center space-y-20">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl gold-text">Our Specialities</h2>
            <div className="h-px w-24 bg-primary mx-auto" />
            <p className="text-muted-foreground tracking-widest text-sm uppercase">Palace-inspired execution in every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="luxury-card p-10 group space-y-8"
              >
                <div className="inline-block p-4 border border-primary/20 group-hover:border-primary transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl gold-text tracking-widest uppercase">{service.title}</h3>
                <p className="text-muted-foreground tracking-wider text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <Link to="/services" className="btn-gold-outline inline-block">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="section-padding bg-zinc-950">
        <div className="container mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">Portfolio</span>
              <h2 className="text-4xl md:text-5xl gold-text">Iconic Works</h2>
            </div>
            <Link to="/projects" className="text-primary hover:text-white transition-colors flex items-center space-x-2 tracking-widest text-xs uppercase font-serif pb-2">
              <span>View Full Gallery</span>
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[IMAGES.project1, IMAGES.project2, IMAGES.interior, IMAGES.exterior].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group h-[500px]"
              >
                <img 
                  src={img} 
                  alt={`Project ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                  <div className="border border-primary/30 w-full h-full flex flex-col items-center justify-center space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl gold-text uppercase tracking-widest">Royal Palace Project</h3>
                    <p className="text-xs text-white/70 uppercase tracking-[0.3em]">Classical Gypsum & Interior</p>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full" />
        </div>
        
        <div className="container relative z-10 mx-auto max-w-4xl space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl gold-text tracking-[0.1em]">Let’s Create Your Palace</h2>
            <p className="text-lg md:text-xl text-muted-foreground tracking-widest max-w-2xl mx-auto italic font-serif">
              Transforming grand visions into breathtaking realities.
            </p>
          </motion.div>
          
          <Link to="/contact" className="btn-gold inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
