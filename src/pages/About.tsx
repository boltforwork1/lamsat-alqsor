import { motion } from 'framer-motion';
import { Award, Briefcase, CheckCircle, Heart, Globe, Users } from 'lucide-react';

const IMAGES = {
  aboutHero: "/images/about/hero.png",
  signature: "/images/about/signature.png"
};

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '280+', icon: <CheckCircle size={20} /> },
    { label: 'Years Experience', value: '15+', icon: <Award size={20} /> },
    { label: 'Craftsmen', value: '50+', icon: <Users size={20} /> },
    { label: 'Global Design Standards', value: '100%', icon: <Globe size={20} /> }
  ];

  return (
    <div className="bg-black pt-32 min-h-screen">
      <header className="section-padding text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">A Legacy Of Luxury</span>
          <h1 className="text-5xl md:text-7xl gold-text">About Us</h1>
          <div className="h-px w-32 bg-primary mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="/profile.pdf"
            download="Lamsat_Al_Qosoor_Profile.pdf"
            className="btn-gold inline-block"
          >
            Download Our Profile
          </a>
        </motion.div>
      </header>

      {/* Main About Section */}
      <section className="section-padding container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl gold-text tracking-widest uppercase">The Essence of Lamsat Al Qosoor</h2>
              <div className="h-px w-16 bg-primary" />
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed tracking-wider">
              We are a specialized interior and exterior decoration company with experience across more than 280 projects. Our journey began with a simple vision: to bring the grandeur of palaces into modern living spaces.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed tracking-wider">
              True luxury lies in the details. From the first sketch to the final gold-leaf application, our team of expert designers and craftsmen work in harmony to deliver spaces that are not just beautiful, but soulful.
            </p>
            <div className="flex items-center space-x-6">
              <div className="p-4 border border-primary/20 rounded-full">
                <Heart className="text-primary" size={24} strokeWidth={1.5} />
              </div>
              <p className="text-sm tracking-[0.2em] text-white uppercase font-serif italic">Created with passion, built for eternity.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
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
      <section className="bg-zinc-950 py-32 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-primary flex justify-center">{stat.icon}</div>
              <h3 className="text-4xl font-serif gold-text">{stat.value}</h3>
              <p className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-12 border border-white/5 bg-zinc-900/50 space-y-8 group hover:border-primary/20 transition-all duration-500"
          >
            <div className="space-y-4">
              <h2 className="text-3xl gold-text uppercase tracking-widest">Our Vision</h2>
              <div className="h-px w-12 bg-primary group-hover:w-24 transition-all duration-500" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed tracking-widest italic font-serif">
              "To become the leading name in luxury décor execution worldwide, setting new benchmarks for craftsmanship, elegance, and timeless design."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-12 border border-white/5 bg-zinc-900/50 space-y-8 group hover:border-primary/20 transition-all duration-500"
          >
            <div className="space-y-4">
              <h2 className="text-3xl gold-text uppercase tracking-widest">Our Mission</h2>
              <div className="h-px w-12 bg-primary group-hover:w-24 transition-all duration-500" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed tracking-widest italic font-serif">
              "To transform architectural spaces into living masterpieces through unparalleled dedication to detail, quality, and the classical pursuit of beauty."
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-20">
          <h2 className="text-4xl gold-text tracking-widest">Why Clients Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Precision Craftsmanship", text: "Every detail is executed with mathematical precision and artistic flair." },
              { title: "Luxury Standards", text: "We use only the finest materials and centuries-old techniques refined for today." },
              { title: "Personal Passion", text: "We treat every project as if it were our own personal signature on history." }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg gold-text uppercase tracking-widest font-serif">{item.title}</h3>
                <p className="text-muted-foreground text-sm tracking-widest">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
