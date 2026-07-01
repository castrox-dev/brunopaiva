import { MapPin } from 'lucide-react';
import { FadeUp } from './Animations';
import { siteData } from '../data/siteData';

const Mapa = () => {
  return (
    <section id="mapa" className="relative flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden min-h-screen" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="absolute top-0 left-0 right-0 divider-subtle" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center mb-12">
            <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#D4AF37' }}>
              Localização
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Área de{' '}
              <span className="text-gradient-gold">Atuação</span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {siteData.artist.region} • {siteData.artist.city} e Região Metropolitana
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="rounded-3xl overflow-hidden" style={{ background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="relative w-full" style={{ paddingBottom: 'clamp(60%, 50vw, 50%)', minHeight: '300px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117726.63024805568!2d-43.2755!3d-22.8833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd616de5e9e85%3A0x29b6e5a7e7c5c1a0!2sMaric%C3%A1%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1719436800000!5m2!1spt-BR!2sbr"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - Maricá, RJ"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center text-sm" style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', gap: '24px', color: 'rgba(255,255,255,0.6)' }}>
              {[
                'Maricá, RJ',
                'Itaipuaçu, RJ',
                'Rio de Janeiro, RJ',
                'Niterói, RJ',
                'São Gonçalo, RJ',
              ].map((location) => (
                <div key={location} className="flex items-center gap-2">
                  <MapPin style={{ width: '16px', height: '16px', color: '#D4AF37' }} />
                  <span>{location}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Mapa;
