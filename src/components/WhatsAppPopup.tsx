import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function WhatsAppPopup() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('whatsapp_popup_shown');

    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('whatsapp_popup_shown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleStartChat = () => {
    const whatsappLink = generateWhatsAppLink('Hi, I\'d like to inquire about your services.');
    window.open(whatsappLink, '_blank');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-28 right-8 z-30 bg-black border border-primary/40 rounded-xl shadow-2xl max-w-xs p-6 space-y-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <p className="text-sm text-primary font-serif tracking-[0.2em] uppercase">{t('whatsapp.popup.chatWithUs')}</p>
              <p className="text-white text-sm leading-relaxed">{t('whatsapp.popup.message')}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClose}
              className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
              aria-label={t('whatsapp.popup.closeLabel')}
            >
              <X size={16} />
            </motion.button>
          </div>

          <motion.button
            onClick={handleStartChat}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-black text-sm font-serif tracking-widest uppercase font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded"
          >
            {t('whatsapp.popup.startChat')}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
