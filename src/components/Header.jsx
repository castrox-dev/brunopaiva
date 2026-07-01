import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: isScrolled ? '12px 0' : '20px 0',
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        boxShadow: isScrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <div className="flex items-center justify-between">
          <motion.a href="#hero" className="flex items-center" style={{ gap: '12px', textDecoration: 'none' }} whileHover={{ scale: 1.02 }}>
            <img src={siteData.images.logo} alt="Logo" className="h-10 w-auto" />
            <span className="font-heading text-xl md:text-2xl font-bold tracking-tight hidden sm:block" style={{ background: 'linear-gradient(135deg, #D4AF37, #E8C94A, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Bruno Paiva
            </span>
          </motion.a>

          <nav className="hidden lg:flex items-center" style={{ gap: '4px' }}>
            {siteData.navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium rounded-full transition-all duration-300 relative group"
                style={{ color: 'rgba(255,255,255,0.6)', padding: '8px 16px' }}
                onMouseEnter={(e) => { e.target.style.color = '#FFFFFF'; e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.backgroundColor = 'transparent'; }}
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-6" style={{ backgroundColor: '#D4AF37' }} />
              </motion.a>
            ))}
            <motion.a
              href={`https://wa.me/${siteData.artist.whatsapp1}?text=${encodeURIComponent(siteData.whatsappMessages.geral)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold rounded-full btn-premium"
              style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)', color: '#0A0A0A', padding: '10px 24px', marginLeft: '16px', textDecoration: 'none' }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone style={{ width: '16px', height: '16px' }} />
              Contratar
            </motion.a>
          </nav>

          <button
            className="lg:hidden rounded-xl transition-colors"
            style={{ color: '#FFFFFF', padding: '8px', backgroundColor: 'transparent' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
          >
            <nav className="flex flex-col py-4 px-6" style={{ gap: '4px' }}>
              {siteData.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium rounded-xl transition-all"
                  style={{ color: 'rgba(255,255,255,0.6)', padding: '12px 16px' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => { e.target.style.color = '#FFFFFF'; e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.backgroundColor = 'transparent'; }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={`https://wa.me/${siteData.artist.whatsapp1}?text=${encodeURIComponent(siteData.whatsappMessages.geral)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-base font-bold rounded-full btn-premium"
                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)', color: '#0A0A0A', padding: '14px', marginTop: '12px', textDecoration: 'none' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Phone style={{ width: '20px', height: '20px' }} />
                Contratar Agora
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
