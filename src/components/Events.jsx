import { Heart, Cake, Building2, PartyPopper, ArrowRight } from 'lucide-react';
import { FadeUp, StaggerChildren, StaggerItem } from './Animations';
import { siteData } from '../data/siteData';

const iconMap = {
  Heart,
  Cake,
  Building2,
  PartyPopper,
};

const colorStyles = {
  rose: { bg: 'rgba(244, 63, 94, 0.1)', text: '#FB7185', border: 'rgba(244, 63, 94, 0.2)' },
  purple: { bg: 'rgba(168, 85, 247, 0.1)', text: '#C084FC', border: 'rgba(168, 85, 247, 0.2)' },
  blue: { bg: 'rgba(59, 130, 246, 0.1)', text: '#60A5FA', border: 'rgba(59, 130, 246, 0.2)' },
  amber: { bg: 'rgba(245, 158, 11, 0.1)', text: '#FBBF24', border: 'rgba(245, 158, 11, 0.2)' },
};

const Events = () => {
  return (
    <section id="eventos" className="relative flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase" style={{ color: '#D4AF37', marginBottom: '16px' }}>
              Eventos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ marginBottom: '24px' }}>
              Para Cada{' '}
              <span className="text-gradient-gold">Momento</span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '42rem', margin: '0 auto' }}>
              Seja qual for a sua necessidade, ofereço um show personalizado que se adapta ao seu evento.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren className="grid md:grid-cols-2" style={{ gap: '32px' }}>
          {siteData.services.map((service) => {
            const Icon = iconMap[service.icon] || Heart;
            const colors = colorStyles[service.color] || colorStyles.rose;

            return (
              <StaggerItem key={service.id}>
                <div className="rounded-2xl group cursor-pointer card-premium h-full" style={{ padding: 'clamp(20px, 4vw, 32px)', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-start" style={{ gap: 'clamp(16px, 3vw, 24px)' }}>
                    <div className="flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ width: 'clamp(52px, 10vw, 72px)', height: 'clamp(52px, 10vw, 72px)', borderRadius: '16px', background: colors.bg, border: `1px solid ${colors.border}` }}>
                      <Icon style={{ width: 'clamp(24px, 5vw, 36px)', height: 'clamp(24px, 5vw, 36px)', color: colors.text }} />
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: '#D4AF37', gap: '8px' }}>
                        <span>Solicitar orçamento</span>
                        <ArrowRight style={{ width: '16px', height: '16px' }} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <FadeUp delay={0.4}>
          <div className="text-center" style={{ marginTop: '64px' }}>
            <div className="inline-block rounded-2xl" style={{ padding: '24px 32px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Não encontrou o tipo de evento que procura?{' '}
                <a
                  href="#contato"
                  className="font-semibold transition-colors underline underline-offset-4"
                  style={{ color: '#D4AF37', textDecorationColor: 'rgba(212, 175, 55, 0.3)' }}
                >
                  Entre em contato
                </a>{' '}
                e conversamos.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Events;
