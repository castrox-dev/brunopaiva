import { motion } from 'framer-motion';
import { Play, Music, ChevronDown } from 'lucide-react';
import { siteData } from '../data/siteData';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={siteData.images.hero}
          alt={siteData.artist.name}
          className="w-full h-full object-cover object-center"
          style={{ transform: 'scale(1.05)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.7), rgba(10,10,10,0.5), #0A0A0A)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.6), transparent, rgba(10,10,10,0.4))' }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-3xl animate-glow-pulse" style={{ backgroundColor: 'rgba(212,175,55,0.05)' }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl animate-glow-pulse" style={{ backgroundColor: 'rgba(212,175,55,0.05)', animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4" style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-2 font-medium text-xs uppercase px-5 py-2.5 rounded-full glass-gold" style={{ color: '#D4AF37', letterSpacing: '0.25em', border: '1px solid rgba(212,175,55,0.3)' }}>
            <Music className="w-4 h-4" />
            {siteData.artist.profession}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading font-black leading-tight mb-8 text-center"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', color: '#FFFFFF' }}
        >
          {siteData.artist.headline.split(' ').map((word, i) => (
            <span key={i}>
              {word === 'Samba' || word === 'Festa' ? (
                <span className="text-gradient-gold">{word} </span>
              ) : (
                <>{word} </>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl mb-12 font-light leading-relaxed text-center"
          style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '42rem', margin: '0 auto' }}
        >
          {siteData.artist.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={`https://wa.me/${siteData.artist.whatsapp1}?text=${encodeURIComponent(siteData.whatsappMessages.geral)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary rounded-full font-bold flex items-center btn-premium shadow-gold"
            style={{ padding: 'clamp(14px, 3vw, 16px) clamp(28px, 5vw, 36px)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', gap: '10px', textDecoration: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }} className="fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Orçamento
          </motion.a>

          <motion.a
            href="#musica"
            className="glass text-white rounded-full font-semibold flex items-center transition-all duration-300"
            style={{ padding: 'clamp(14px, 3vw, 16px) clamp(28px, 5vw, 36px)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', gap: '10px', border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play style={{ width: '20px', height: '20px' }} />
            Ouça Meu Repertório
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm flex-wrap"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4" style={{ color: '#D4AF37' }} />
            <span>Samba & Pagode</span>
          </div>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(212,175,55,0.5)' }} />
          <span>Rio de Janeiro</span>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(212,175,55,0.5)' }} />
          <span>Shows Profissionais</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Scroll</span>
          <ChevronDown className="w-5 h-5" style={{ color: '#D4AF37' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
