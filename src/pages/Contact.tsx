import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Instagram } from 'lucide-react';
import { generateWhatsAppInquiryLink, getPhoneLink, getEmailLink, getLocationLink } from '../utils/whatsapp';
import { CONTACT_INFO } from '../constants/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappLink = generateWhatsAppInquiryLink(
      formData.name,
      formData.phone,
      formData.email,
      formData.message
    );
    window.open(whatsappLink, '_blank');
  };

  const contactInfo = [
    { icon: <Phone size={24} />, label: 'Phone', value: CONTACT_INFO.phone.display, href: getPhoneLink(), type: 'phone' },
    { icon: <Mail size={24} />, label: 'Email', value: CONTACT_INFO.email, href: getEmailLink(), type: 'email' },
    { icon: <MapPin size={24} />, label: 'Location', value: CONTACT_INFO.location.display, href: getLocationLink(), type: 'location' },
    { icon: <Instagram size={24} />, label: 'Instagram', value: '@lamsatalqsoor', href: 'https://www.instagram.com/lamsatalqsoor?igsh=NnRuaTh5aWFsYnp6', type: 'instagram' }
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
                <a
                  key={idx}
                  href={info.href}
                  target={info.type === 'email' ? undefined : '_blank'}
                  rel={info.type === 'email' ? undefined : 'noopener noreferrer'}
                  className="flex items-start space-x-6 group cursor-pointer hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="p-4 border border-primary/20 group-hover:border-primary group-hover:scale-110 transition-all duration-500">
                    <span className="text-primary">{info.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-primary uppercase tracking-[0.3em] font-serif">{info.label}</p>
                    <p className="text-lg text-white/80 group-hover:text-primary tracking-widest transition-colors duration-300">{info.value}</p>
                  </div>
                </a>
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
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors duration-500 tracking-widest"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] text-primary uppercase tracking-[0.3em] font-serif">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors duration-500 tracking-widest resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-gold w-full flex items-center justify-center space-x-3 group"
              >
                <span>Submit Inquiry</span>
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
