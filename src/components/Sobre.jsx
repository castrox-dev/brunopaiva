import { Music, Mic, Star, Award } from 'lucide-react';
import { FadeLeft, FadeRight, StaggerChildren, StaggerItem } from './Animations';
import { siteData } from '../data/siteData';

const Sobre = () => {
  const stats = [
    { icon: Music, value: '10+', label: 'Anos de Carreira' },
    { icon: Mic, value: '500+', label: 'Shows Realizados' },
    { icon: Star, value: '100%', label: 'Satisfação' },
    { icon: Award, value: '50+', label: 'Eventos Este Ano' },
  ];

  return (
    <section id="sobre" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 100%)' }}>
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeLeft>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={siteData.images.sobre}
                  alt={siteData.artist.name}
                  className="w-full rounded-2xl"
                  style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 rounded-2xl hidden sm:block" style={{ borderColor: 'rgba(212,175,55,0.2)' }} />
              <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full blur-3xl hidden sm:block" style={{ backgroundColor: 'rgba(212,175,55,0.1)' }} />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl hidden sm:block" style={{ backgroundColor: 'rgba(114,47,55,0.2)' }} />
            </div>
          </FadeLeft>

          {/* Content */}
          <FadeRight delay={0.2}>
            <div>
              <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#D4AF37' }}>
                Sobre Mim
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Quem é{' '}
                <span className="text-gradient-gold">Bruno Paiva</span>
              </h2>

              <div className="text-lg leading-relaxed mb-12" style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'rgba(255,255,255,0.6)' }}>
                <p>{siteData.artist.bio}</p>
                <p>
                  Minha missão é simples:{' '}
                  <span className="text-white font-medium">
                    fazer você e seus convidados se sentirem parte da música
                  </span>
                  , criando uma conexão real que vai do primeiro acorde ao último aplauso.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '16px' }}>
                {stats.map((stat, index) => (
                  <StaggerChildren key={stat.label}>
                    <StaggerItem>
                      <div className="text-center rounded-xl card-premium" style={{ padding: 'clamp(12px, 2vw, 16px)', background: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="flex items-center justify-center" style={{ width: 'clamp(36px, 7vw, 48px)', height: 'clamp(36px, 7vw, 48px)', borderRadius: '12px', background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)', margin: '0 auto 12px' }}>
                          <stat.icon style={{ width: 'clamp(18px, 3.5vw, 24px)', height: 'clamp(18px, 3.5vw, 24px)', color: '#0A0A0A' }} />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold font-heading" style={{ background: 'linear-gradient(135deg, #D4AF37, #E8C94A, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                          {stat.value}
                        </div>
                        <div className="text-xs mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
                      </div>
                    </StaggerItem>
                  </StaggerChildren>
                ))}
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
