import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { FadeUp, StaggerChildren, StaggerItem } from './Animations';
import { siteData } from '../data/siteData';

const formatDate = (dateStr) => {
  const date = new Date(dateStr + 'T12:00:00');
  return {
    day: date.toLocaleDateString('pt-BR', { day: '2-digit' }),
    month: date.toLocaleDateString('pt-BR', { month: 'short' }),
    weekday: date.toLocaleDateString('pt-BR', { weekday: 'long' }),
  };
};

const Agenda = () => {
  return (
    <section id="agenda" className="relative flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden min-h-screen" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="absolute top-0 left-0 right-0 divider-subtle" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase" style={{ color: '#D4AF37', marginBottom: '16px' }}>
              Agenda
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ marginBottom: '24px' }}>
              Próximas{' '}
              <span className="text-gradient-gold">Apresentações</span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '42rem', margin: '0 auto' }}>
              Confira minhas próximas apresentações públicas. Para eventos privados, entre em contato.
            </p>
          </div>
        </FadeUp>

        <div style={{ width: '100%', maxWidth: '56rem', margin: '0 auto' }}>
          <StaggerChildren className="space-y-6">
            {siteData.agenda.map((event, index) => {
              const dateInfo = formatDate(event.date);
              const isSoldOut = event.status === 'sold_out';

              return (
                <StaggerItem key={event.id}>
                  <div className="rounded-2xl flex flex-col sm:flex-row items-start sm:items-center card-premium" style={{ padding: '24px', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', gap: '20px', opacity: isSoldOut ? 0.6 : 1 }}>
                    {/* Date Badge */}
                    <div className="flex-shrink-0 text-center">
                      <div className="rounded-xl" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)', padding: '12px 16px', minWidth: '90px' }}>
                        <div className="text-3xl font-bold font-heading leading-none" style={{ color: '#0A0A0A' }}>
                          {dateInfo.day}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(10,10,10,0.7)' }}>
                          {dateInfo.month}
                        </div>
                      </div>
                      <div className="text-xs mt-2 capitalize font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        {dateInfo.weekday}
                      </div>
                    </div>

                    {/* Event Info */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between" style={{ gap: '12px' }}>
                        <div>
                          <h4 className="font-heading text-lg font-bold text-white">
                            {event.title}
                          </h4>
                          <div className="flex flex-wrap items-center text-sm" style={{ color: 'rgba(255,255,255,0.4)', gap: '16px', marginTop: '8px' }}>
                            <span className="flex items-center gap-1.5">
                              <MapPin style={{ width: '16px', height: '16px', color: '#D4AF37' }} />
                              {event.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock style={{ width: '16px', height: '16px', color: '#D4AF37' }} />
                              {event.type}
                            </span>
                          </div>
                        </div>

                        <div className="flex-shrink-0">
                          {isSoldOut ? (
                            <span className="inline-flex items-center rounded-full text-xs font-bold" style={{ padding: '8px 16px', background: 'rgba(239, 68, 68, 0.1)', color: '#F87171', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                              Lotado
                            </span>
                          ) : (
                            <motion.a
                              href={`https://wa.me/${siteData.artist.whatsapp1}?text=${encodeURIComponent(`Olá, Bruno! Tenho interesse no show "${event.title}" em ${dateInfo.day}/${dateInfo.month}. Há disponibilidade?`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-bold text-sm rounded-full btn-premium"
                              style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)', color: '#0A0A0A', padding: '10px 20px', textDecoration: 'none' }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Calendar style={{ width: '16px', height: '16px' }} />
                              Reservar
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>

        <FadeUp delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Para eventos privados,{' '}
              <a
                href="#contato"
                className="transition-colors font-medium underline underline-offset-4"
                style={{ color: '#D4AF37', textDecorationColor: 'rgba(212, 175, 55, 0.3)' }}
              >
                entre em contato
              </a>{' '}
              para verificar disponibilidade.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Agenda;
