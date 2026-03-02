import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function WhatsAppFloat() {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const whatsappLink = generateWhatsAppLink('Hi, I\'m interested in your services. Can you help me?');
    window.open(whatsappLink, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-2xl flex items-center justify-center group hover:shadow-primary/50 transition-shadow duration-300"
      aria-label={t('whatsapp.float.label')}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-primary/20"
      />
      <MessageCircle size={28} className="relative z-10 text-black" strokeWidth={1.5} />
    </motion.button>
  );
}
