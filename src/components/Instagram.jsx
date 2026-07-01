import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { FadeUp } from './Animations';
import { siteData } from '../data/siteData';

const InstagramFeed = () => {
  return (
    <section id="instagram" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#D4AF37' }}>
              Instagram
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Siga no{' '}
              <span className="text-gradient-gold">Instagram</span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '42rem', margin: '0 auto' }}>
              Acompanhe bastidores, novos trabalhos e a rotina de quem vive o samba todos os dias.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="rounded-2xl" style={{ padding: '24px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', width: '100%', maxWidth: '64rem', margin: '0 auto' }}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-2xl" style={{ width: '56px', height: '56px', background: 'linear-gradient(to bottom right, #a855f7, #ec4899, #f97316)', boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)' }}>
                  <FaInstagram style={{ width: '28px', height: '28px', color: '#FFFFFF' }} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    @brunopaivareal
                  </h3>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Siga para conteúdos exclusivos</p>
                </div>
              </div>
              <motion.a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 text-sm font-bold rounded-full"
                style={{ background: 'linear-gradient(to right, #a855f7, #ec4899, #f97316)', color: '#FFFFFF', padding: '10px 20px', textDecoration: 'none' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink style={{ width: '16px', height: '16px' }} />
                Seguir
              </motion.a>
            </div>

            <div className="relative w-full rounded-xl overflow-hidden" style={{ backgroundColor: '#1A1A1A', minHeight: '500px' }}>
              <iframe
                src="https://www.instagram.com/brunopaivareal/embed/"
                className="absolute inset-0 w-full h-full border-0"
                title="Instagram Feed"
                loading="lazy"
              />
            </div>

            <div className="mt-6 sm:hidden text-center">
              <motion.a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold rounded-full"
                style={{ background: 'linear-gradient(to right, #a855f7, #ec4899, #f97316)', color: '#FFFFFF', padding: '12px 24px', textDecoration: 'none' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram style={{ width: '20px', height: '20px' }} />
                Seguir @brunopaivareal
              </motion.a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default InstagramFeed;
