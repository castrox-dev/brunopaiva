import { motion } from 'framer-motion';
import { Headphones, Play, ExternalLink } from 'lucide-react';
import { FadeLeft, FadeRight, FadeUp } from './Animations';
import { siteData } from '../data/siteData';

const Spotify = () => {
  return (
    <section id="musica" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="absolute inset-0">
        <img
          src={siteData.images.ep}
          alt="EP Sou da Madrugada"
          className="w-full h-full object-cover"
          style={{ opacity: 0.15 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0A0A0A, rgba(10,10,10,0.95), #0A0A0A)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block font-medium text-xs uppercase mb-4" style={{ color: '#D4AF37', letterSpacing: '0.2em' }}>
              EP
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Sou da{' '}
              <span className="text-gradient-gold">Madrugada</span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '42rem', margin: '0 auto' }}>
              {siteData.ep.description}
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 'clamp(32px, 5vw, 48px)' }}>
          <FadeLeft>
            <div className="relative flex justify-center">
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={siteData.images.ep}
                  alt="EP Sou da Madrugada"
                  className="w-full rounded-2xl"
                  style={{ maxWidth: '24rem', boxShadow: '0 8px 40px rgba(212, 175, 55, 0.3)' }}
                />
              </motion.div>
              <div className="absolute inset-0 blur-3xl rounded-full scale-75" style={{ backgroundColor: 'rgba(212,175,55,0.1)' }} />
            </div>
          </FadeLeft>

          <FadeRight delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Spotify */}
              <div className="rounded-2xl" style={{ padding: '24px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center" style={{ gap: '12px' }}>
                    <div className="flex items-center justify-center rounded-xl" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(29,185,84,0.1)' }}>
                      <Headphones style={{ width: '20px', height: '20px', color: '#1DB954' }} />
                    </div>
                    <span className="font-heading font-semibold text-white">Spotify</span>
                  </div>
                  <a
                    href={siteData.social.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                  >
                    <ExternalLink style={{ width: '16px', height: '16px' }} />
                  </a>
                </div>
                <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/artist/0CZ1Wh8XdeZcjSNwnLXG0U?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              {/* YouTube Video */}
              <div className="rounded-2xl" style={{ padding: '24px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center" style={{ gap: '12px' }}>
                    <div className="flex items-center justify-center rounded-xl" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(239,68,68,0.1)' }}>
                      <Play style={{ width: '20px', height: '20px', color: '#EF4444' }} />
                    </div>
                    <span className="font-heading font-semibold text-white">YouTube</span>
                  </div>
                  <a
                    href={siteData.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                  >
                    <ExternalLink style={{ width: '16px', height: '16px' }} />
                  </a>
                </div>
                <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/oVZrGZzXZFk"
                    title="Bruno Paiva - Sou da Madrugada"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default Spotify;
