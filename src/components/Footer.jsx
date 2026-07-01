import { motion } from 'framer-motion';
import { Phone, Mail, ArrowUp, MapPin, MessageCircle } from 'lucide-react';
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';
import { siteData } from '../data/siteData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #050505 100%)' }}>
      {/* Top Gold Line */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.05) 10%, rgba(212, 175, 55, 0.5) 50%, rgba(212, 175, 55, 0.05) 90%, transparent 100%)' }} />

      {/* Main Content */}
      <div className="px-6 sm:px-8 lg:px-12 py-8 md:py-10" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        {/* Top Section: Brand + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between" style={{ gap: '20px', marginBottom: '32px' }}>
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center" style={{ gap: '16px', marginBottom: '20px' }}>
              <img src={siteData.images.logo} alt="Logo" style={{ height: '40px', width: 'auto' }} />
              <span className="font-heading text-2xl font-bold" style={{ background: 'linear-gradient(135deg, #D4AF37, #E8C94A, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Bruno Paiva
              </span>
            </div>
            <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.7 }}>
              {siteData.artist.bioShort}
            </p>
          </div>

          {/* CTA WhatsApp */}
          <motion.a
            href={`https://wa.me/${siteData.artist.whatsapp1}?text=${encodeURIComponent(siteData.whatsappMessages.geral)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-full btn-premium"
            style={{
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)',
              color: '#0A0A0A',
              fontWeight: 700,
              fontSize: '14px',
              gap: '12px',
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(212, 175, 55, 0.25)',
              flexShrink: 0,
            }}
            whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(212, 175, 55, 0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle style={{ width: '22px', height: '22px' }} />
            Contratar Agora
          </motion.a>
        </div>

        {/* Middle Section: Links + Contact */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(24px, 4vw, 40px)' }}>
          {/* Navegação */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4" style={{ fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Navegação
            </h4>
            <div className="grid grid-cols-2" style={{ gap: '8px 16px' }}>
              {siteData.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-all duration-300"
                  style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.target.style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4" style={{ fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Contato
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a
                  href={`tel:${siteData.artist.phone1}`}
                  className="flex items-center transition-all duration-300"
                  style={{ color: 'rgba(255,255,255,0.4)', gap: '12px', textDecoration: 'none', fontSize: '14px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone style={{ width: '12px', height: '12px', color: '#D4AF37' }} />
                  </div>
                  <span>{siteData.artist.phone1Display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteData.artist.phone2}`}
                  className="flex items-center transition-all duration-300"
                  style={{ color: 'rgba(255,255,255,0.4)', gap: '10px', textDecoration: 'none', fontSize: '13px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone style={{ width: '12px', height: '12px', color: '#D4AF37' }} />
                  </div>
                  <span>{siteData.artist.phone2Display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.artist.email}`}
                  className="flex items-center transition-all duration-300"
                  style={{ color: 'rgba(255,255,255,0.4)', gap: '10px', textDecoration: 'none', fontSize: '13px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail style={{ width: '12px', height: '12px', color: '#D4AF37' }} />
                  </div>
                  <span>{siteData.artist.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4" style={{ fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Localização
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="flex items-start" style={{ gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin style={{ width: '12px', height: '12px', color: '#D4AF37' }} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: 1.6 }}>
                  <div>{siteData.artist.region}</div>
                  <div>{siteData.artist.city}, {siteData.artist.state}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4" style={{ fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Redes Sociais
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <motion.a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-xl transition-all duration-300"
                style={{ padding: '10px 14px', background: 'rgba(20, 20, 20, 0.6)', border: '1px solid rgba(255,255,255,0.06)', gap: '10px', textDecoration: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(225, 48, 108, 0.1)', borderColor: 'rgba(225, 48, 108, 0.2)' }}
              >
                <FaInstagram style={{ width: '16px', height: '16px', color: '#E1306C' }} />
                Instagram
              </motion.a>
              <motion.a
                href={siteData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-xl transition-all duration-300"
                style={{ padding: '10px 14px', background: 'rgba(20, 20, 20, 0.6)', border: '1px solid rgba(255,255,255,0.06)', gap: '10px', textDecoration: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 0, 0, 0.1)', borderColor: 'rgba(255, 0, 0, 0.2)' }}
              >
                <FaYoutube style={{ width: '16px', height: '16px', color: '#FF0000' }} />
                YouTube
              </motion.a>
              <motion.a
                href={siteData.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-xl transition-all duration-300"
                style={{ padding: '10px 14px', background: 'rgba(20, 20, 20, 0.6)', border: '1px solid rgba(255,255,255,0.06)', gap: '10px', textDecoration: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(29, 185, 84, 0.1)', borderColor: 'rgba(29, 185, 84, 0.2)' }}
              >
                <FaSpotify style={{ width: '18px', height: '18px', color: '#1DB954' }} />
                Spotify
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between" style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', gap: '8px' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
            &copy; {new Date().getFullYear()} Bruno Paiva. Todos os direitos reservados.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
            Feito com <span style={{ color: '#D4AF37' }}>&#9829;</span> para o samba
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed flex items-center justify-center rounded-full z-40 transition-all duration-300"
        style={{
          bottom: '112px',
          right: '24px',
          width: '48px',
          height: '48px',
          background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)',
          color: '#0A0A0A',
          boxShadow: '0 4px 24px rgba(212, 175, 55, 0.3)',
        }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ArrowUp style={{ width: '20px', height: '20px' }} />
      </motion.button>
    </footer>
  );
};

export default Footer;
