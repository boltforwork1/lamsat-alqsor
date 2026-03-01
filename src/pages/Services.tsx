import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const IMAGES = {
  interior: "/images/services/interior.png",
  exterior: "/images/services/exterior.png",
  paint: "/images/services/paint.png"
};

export default function Services() {
  const serviceDetails = [
    {
      title: "Interior Works",
      subtitle: "Classic, Neo-classic, Victorian & Gypsum Masterpieces",
      description: [
        "Hand-carved gypsum ceiling domes and ornate cornices",
        "Intricate gypsum ceiling patterns and wall moldings",
        "Classic and Victorian wall panels with artistic designs",
        "Antique paint finishes and luxury furniture coordination",
        "Historical restoration of decorative interior details"
      ],
      image: IMAGES.interior
    },
    {
      title: "Exterior & Facade Works",
      subtitle: "Luxury facades and GRC fences",
      description: [
        "Classical facade architectural elements",
        "GRC ornate fences and gates",
        "Ornamental exterior stone details",
        "Grand palace entrance designs"
      ],
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
          <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">Excellence In Every Detail</span>
          <h1 className="text-5xl md:text-7xl gold-text mt-4">Our Services</h1>
          <div className="h-px w-32 bg-primary mx-auto mt-8" />
        </motion.div>
      </header>

      <section className="pb-32 container mx-auto px-6 md:px-12 lg:px-24">
        {serviceDetails.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-16 items-center py-20 border-b border-white/5 last:border-0 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl gold-text">{service.title}</h2>
                <p className="text-primary text-sm tracking-[0.2em] uppercase font-serif">{service.subtitle}</p>
                <div className="h-px w-16 bg-primary" />
              </div>
              
              <ul className="space-y-6">
                {service.description.map((item, i) => (
                  <li key={i} className="flex items-center space-x-4 text-muted-foreground tracking-widest text-sm md:text-base group cursor-default">
                    <span className="h-1 w-1 bg-primary group-hover:w-4 transition-all duration-300" />
                    <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn-gold group flex items-center space-x-2 mt-10">
                <span>Inquire About {service.title}</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>

            <div className="lg:w-1/2 relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden group"
              >
                <div className="absolute inset-0 border border-primary/20 z-10 pointer-events-none group-hover:border-primary/50 transition-colors duration-500" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-square md:aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>
      
      {/* Visual Showcase Section */}
      <section className="bg-zinc-950 py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl gold-text">Artistic Vision</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[IMAGES.interior, IMAGES.exterior, IMAGES.paint].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 overflow-hidden group border border-white/5"
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
