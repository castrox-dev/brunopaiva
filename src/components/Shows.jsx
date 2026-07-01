import { ArrowRight } from 'lucide-react';
import { FadeUp, StaggerChildren, StaggerItem } from './Animations';
import { siteData } from '../data/siteData';

const Shows = () => {
  return (
    <section id="shows" className="relative flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden min-h-screen" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="absolute top-0 left-0 right-0 divider-subtle" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase" style={{ color: '#D4AF37', marginBottom: '16px' }}>
              Shows
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ marginBottom: '24px' }}>
              Estilo e{' '}
              <span className="text-gradient-gold">Repertório</span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '42rem', margin: '0 auto' }}>
              Apresentações marcadas por energia contagiante, repertório versátil e uma interação incomparável com o público.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
          {siteData.shows.map((show) => (
            <StaggerItem key={show.id}>
              <div className="rounded-2xl overflow-hidden group cursor-pointer card-premium h-full" style={{ background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="relative overflow-hidden" style={{ height: 'clamp(200px, 40vw, 280px)' }}>
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0A0A0A, rgba(10,10,10,0.2), transparent)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block text-xs font-semibold rounded-full" style={{ color: '#D4AF37', padding: '6px 12px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                      {show.title}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '28px' }}>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {show.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                    {show.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: '#D4AF37', gap: '8px' }}>
                    <span>Saiba mais</span>
                    <ArrowRight style={{ width: '16px', height: '16px' }} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default Shows;
