import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { FadeUp } from './Animations';
import { siteData } from '../data/siteData';

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === siteData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? siteData.testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="depoimentos" className="relative flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#D4AF37' }}>
              Depoimentos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              O Que Dizem{' '}
              <span className="text-gradient-gold">Sobre Mim</span>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative" style={{ width: '100%', maxWidth: '56rem', margin: '0 auto' }}>
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ display: 'flex' }}
              >
                {siteData.testimonials.map((testimonial) => (
                  <div key={testimonial.id} style={{ width: '100%', flexShrink: 0, padding: '0 16px' }}>
                    <div className="rounded-3xl p-8 md:p-12 text-center relative" style={{ background: 'rgba(26, 26, 26, 0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(212, 175, 55, 0.15)', boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)' }}>
                      <Quote className="absolute top-6 left-6 w-10 h-10" style={{ color: 'rgba(212, 175, 55, 0.15)' }} />

                      <div className="flex justify-center mb-6" style={{ gap: '4px' }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5" style={{ color: '#D4AF37', fill: '#D4AF37' }} />
                        ))}
                      </div>

                      <p className="text-lg md:text-xl italic leading-relaxed mb-8 relative z-10" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      <div>
                        <div className="w-12 h-12 mb-3 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)', margin: '0 auto' }}>
                          <span className="font-heading font-bold text-lg" style={{ color: '#0A0A0A' }}>
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div className="font-heading font-bold text-white text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm font-medium" style={{ color: '#D4AF37' }}>{testimonial.event}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows - Desktop */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute top-1/2 items-center justify-center rounded-full transition-all duration-300"
              style={{ left: '-24px', transform: 'translateY(-50%)', width: '48px', height: '48px', background: 'rgba(26, 26, 26, 0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#D4AF37', boxShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(26, 26, 26, 0.9)'; }}
            >
              <ChevronLeft style={{ width: '24px', height: '24px' }} />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:flex absolute top-1/2 items-center justify-center rounded-full transition-all duration-300"
              style={{ right: '-24px', transform: 'translateY(-50%)', width: '48px', height: '48px', background: 'rgba(26, 26, 26, 0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#D4AF37', boxShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(26, 26, 26, 0.9)'; }}
            >
              <ChevronRight style={{ width: '24px', height: '24px' }} />
            </button>

            {/* Dots */}
            <div className="flex justify-center" style={{ gap: '8px', marginTop: '32px' }}>
              {siteData.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: '8px',
                    borderRadius: '9999px',
                    width: index === currentIndex ? '32px' : '8px',
                    background: index === currentIndex ? '#D4AF37' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center md:hidden" style={{ gap: '16px', marginTop: '24px' }}>
              <button
                onClick={prevSlide}
                className="flex items-center justify-center rounded-full"
                style={{ width: '40px', height: '40px', background: 'rgba(26, 26, 26, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#D4AF37' }}
              >
                <ChevronLeft style={{ width: '20px', height: '20px' }} />
              </button>
              <button
                onClick={nextSlide}
                className="flex items-center justify-center rounded-full"
                style={{ width: '40px', height: '40px', background: 'rgba(26, 26, 26, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#D4AF37' }}
              >
                <ChevronRight style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Depoimentos;
