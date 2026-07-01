import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { FadeUp } from './Animations';
import { siteData } from '../data/siteData';

const YouTubeSection = () => {
  return (
    <section id="youtube" className="relative flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden min-h-screen" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="absolute top-0 left-0 right-0 divider-subtle" />

      <div className="relative z-10 px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block font-medium text-xs uppercase mb-4" style={{ color: '#D4AF37', letterSpacing: '0.2em' }}>
              Vídeos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Canal no{' '}
              <span className="text-gradient-gold">YouTube</span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '42rem', margin: '0 auto' }}>
              Assista aos melhores momentos dos shows e fique por dentro de todos os lançamentos.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div style={{ width: '100%', maxWidth: '64rem', margin: '0 auto' }}>
            <div className="rounded-2xl" style={{ padding: '24px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-2xl" style={{ width: '56px', height: '56px', backgroundColor: '#DC2626', boxShadow: '0 4px 20px rgba(220, 38, 38, 0.3)' }}>
                    <FaYoutube style={{ width: '28px', height: '28px', color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      Bruno Paiva Real
                    </h3>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Inscreva-se e ative o sininho</p>
                  </div>
                </div>
                <motion.a
                  href={siteData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 text-sm font-bold rounded-full"
                  style={{ backgroundColor: '#DC2626', color: '#FFFFFF', padding: '10px 20px', textDecoration: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink style={{ width: '16px', height: '16px' }} />
                  Inscrever-se
                </motion.a>
              </div>

              <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/8hfFUOvsiOU"
                  title="Bruno Paiva - Vídeos"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-6 sm:hidden text-center">
                <motion.a
                  href={siteData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold rounded-full"
                  style={{ backgroundColor: '#DC2626', color: '#FFFFFF', padding: '12px 24px', textDecoration: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaYoutube style={{ width: '20px', height: '20px' }} />
                  Inscreva-se no Canal
                </motion.a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default YouTubeSection;
