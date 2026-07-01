import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FadeUp, StaggerChildren, StaggerItem } from './Animations';
import { siteData } from '../data/siteData';

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? 'rgba(30, 30, 30, 0.9)' : 'rgba(20, 20, 20, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: isOpen ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isOpen ? '0 4px 30px rgba(212, 175, 55, 0.15)' : '0 2px 12px rgba(0, 0, 0, 0.2)',
      }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left transition-colors duration-300"
        style={{ padding: '20px 24px' }}
      >
        <span className="font-heading font-semibold text-white pr-4 text-base md:text-lg">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown
            style={{ width: '20px', height: '20px', color: isOpen ? '#D4AF37' : 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ padding: '0 24px 20px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="relative flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden min-h-screen" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="absolute top-0 left-0 right-0 divider-subtle" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#D4AF37' }}>
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Perguntas{' '}
              <span className="text-gradient-gold">Frequentes</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{ width: '100%', maxWidth: '48rem', margin: '0 auto' }}>
          <StaggerChildren className="space-y-4">
            {siteData.faq.map((item) => (
              <StaggerItem key={item.id}>
                <FAQItem
                  item={item}
                  isOpen={openId === item.id}
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
