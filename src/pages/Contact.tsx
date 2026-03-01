import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your inquiry has been sent successfully. We will contact you soon.', {
        style: {
          background: '#000',
          color: '#C9A24D',
          border: '1px solid #C9A24D',
          borderRadius: '0',
          fontFamily: 'Cinzel, serif',
          textTransform: 'uppercase',
          fontSize: '12px',
          letterSpacing: '0.1em'
        }
      });
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  const contactInfo = [
    { icon: <Phone size={24} />, label: 'Phone', value: '+971 52 750 9052' },
    { icon: <Mail size={24} />, label: 'Email', value: 'info@lamsatalqosoor.com' },
    { icon: <MapPin size={24} />, label: 'Location', value: 'Luxury Business District, Dubai, UAE' }
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
          <span className="text-primary text-xs tracking-[0.4em] uppercase font-serif">Let’s Create Your Palace</span>
          <h1 className="text-5xl md:text-7xl gold-text">Contact Us</h1>
          <div className="h-px w-32 bg-primary mx-auto mt-8" />
        </motion.div>
      </header>

      <section className="section-padding container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl gold-text uppercase tracking-widest font-serif font-bold">Inquire About Your Project</h2>
              <p className="text-muted-foreground text-lg tracking-widest leading-relaxed">
                We are ready to transform your architectural space into a timeless masterpiece. Reach out to our expert team for a bespoke consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start space-x-6 group">
                  <div className="p-4 border border-primary/20 group-hover:border-primary transition-colors duration-500">
                    <span className="text-primary">{info.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-primary uppercase tracking-[0.3em] font-serif">{info.label}</p>
                    <p className="text-lg text-white/80 tracking-widest">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950 p-10 md:p-16 border border-white/5 relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-primary/20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-primary/20" />
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-8">
                <div className="space-y-2 group">
                  <label className="text-[10px] text-primary uppercase tracking-[0.3em] font-serif">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors duration-500 tracking-widest" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 group">
                    <label className="text-[10px] text-primary uppercase tracking-[0.3em] font-serif">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="Enter email"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors duration-500 tracking-widest" 
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] text-primary uppercase tracking-[0.3em] font-serif">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="Enter phone"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors duration-500 tracking-widest" 
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] text-primary uppercase tracking-[0.3em] font-serif">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors duration-500 tracking-widest resize-none" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-gold w-full flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span>{isSubmitting ? 'Sending inquiry...' : 'Submit Inquiry'}</span>
                {!isSubmitting && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Luxury Closing Quote */}
      <section className="section-padding bg-black text-center mt-20 border-t border-white/5 relative overflow-hidden">
        <div className="container relative z-10 mx-auto max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl gold-text tracking-widest uppercase">Lamsat Al Qosoor Luxury Decor</h2>
            <div className="h-px w-24 bg-primary mx-auto" />
            <p className="text-2xl italic font-serif text-muted-foreground tracking-[0.2em] leading-relaxed">
              “We create beauty and leave a lasting signature.”
            </p>
          </motion.div>
        </div>
        
        {/* Subtle background gold glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      </section>
    </div>
  );
}
