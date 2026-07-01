import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';
import { siteData } from '../data/siteData';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 flex flex-col items-end" style={{ bottom: '24px', right: '24px', gap: '12px' }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <motion.a
              href={`https://wa.me/${siteData.artist.whatsapp1}?text=${encodeURIComponent(siteData.whatsappMessages.geral)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full"
              style={{ width: '56px', height: '56px', backgroundColor: '#22C55E', color: '#FFFFFF', boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <MessageCircle style={{ width: '24px', height: '24px' }} />
            </motion.a>

            <motion.a
              href={siteData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full"
              style={{ width: '56px', height: '56px', background: 'linear-gradient(to bottom right, #a855f7, #ec4899, #f97316)', color: '#FFFFFF', boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaInstagram style={{ width: '24px', height: '24px' }} />
            </motion.a>

            <motion.a
              href={siteData.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full"
              style={{ width: '56px', height: '56px', backgroundColor: '#DC2626', color: '#FFFFFF', boxShadow: '0 4px 20px rgba(220, 38, 38, 0.4)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaYoutube style={{ width: '24px', height: '24px' }} />
            </motion.a>

            <motion.a
              href={siteData.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full"
              style={{ width: '56px', height: '56px', backgroundColor: '#1DB954', color: '#FFFFFF', boxShadow: '0 4px 20px rgba(29, 185, 84, 0.4)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaSpotify style={{ width: '24px', height: '24px' }} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-full"
        style={{
          width: '64px',
          height: '64px',
          background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)',
          color: '#0A0A0A',
          boxShadow: '0 8px 40px rgba(212,175,55,0.3)',
          animation: 'pulse-gold 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <X style={{ width: '28px', height: '28px' }} />
        ) : (
          <MessageCircle style={{ width: '28px', height: '28px' }} />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingButtons;
