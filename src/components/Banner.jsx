import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { siteData } from '../data/siteData';

const Banner = () => {
  return (
    <section className="relative flex items-center py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={siteData.images.banner}
          alt="Bruno Paiva"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0A0A0A, rgba(10,10,10,0.9), rgba(10,10,10,0.7))' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.5), transparent)' }} />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: '#D4AF37' }}>
              <Calendar style={{ width: '16px', height: '16px' }} />
              Próximo Show
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Samba no Alto
            </h3>
            <p className="mt-2 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
              12 de Julho • Maricá, RJ
            </p>
          </motion.div>

          <motion.a
            href="#agenda"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 font-bold text-lg"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)',
              color: '#0A0A0A',
              padding: '16px 32px',
              borderRadius: '9999px',
              boxShadow: '0 4px 30px rgba(212,175,55,0.25)',
              textDecoration: 'none',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(212, 175, 55, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar style={{ width: '20px', height: '20px' }} />
            Ver Agenda Completa
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
