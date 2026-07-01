import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeUp, StaggerChildren, StaggerItem } from './Animations';
import { siteData } from '../data/siteData';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % siteData.gallery.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(siteData.gallery[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (selectedIndex - 1 + siteData.gallery.length) % siteData.gallery.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(siteData.gallery[prevIndex]);
  };

  return (
    <section id="galeria" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="absolute top-0 left-0 right-0 divider-subtle" />

      <div className="px-6 sm:px-8 lg:px-12" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block font-medium text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#D4AF37' }}>
              Galeria
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Momentos{' '}
              <span className="text-gradient-gold">Inesquecíveis</span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '42rem', margin: '0 auto' }}>
              Veja fotos dos shows e sinta a energia de cada apresentação.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren className="masonry-grid">
          {siteData.gallery.map((image, index) => (
            <StaggerItem key={image.id}>
              <div
                className="masonry-item relative group cursor-pointer overflow-hidden rounded-2xl card-premium"
                onClick={() => openImage(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end" style={{ padding: '24px', background: 'linear-gradient(to top, rgba(10,10,10,0.8), rgba(10,10,10,0), transparent)' }}>
                  <div className="w-full">
                    <p className="text-white font-medium text-sm mb-2">{image.alt}</p>
                    <div className="flex items-center justify-center rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{ width: '40px', height: '40px', backgroundColor: '#D4AF37' }}>
                      <ZoomIn style={{ width: '20px', height: '20px', color: '#0A0A0A' }} />
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)', padding: '16px' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
              style={{ maxWidth: '64rem', width: '100%', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-2xl"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute flex items-center justify-center rounded-full"
                style={{ top: '-16px', right: '-16px', width: '48px', height: '48px', background: 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 50%, #D4AF37 100%)', boxShadow: '0 4px 30px rgba(212,175,55,0.25)' }}
              >
                <X style={{ width: '24px', height: '24px', color: '#0A0A0A' }} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 flex items-center justify-center rounded-full"
                style={{ transform: 'translateY(-50%)', width: '48px', height: '48px', background: 'rgba(26, 26, 26, 0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF' }}
              >
                <ChevronLeft style={{ width: '24px', height: '24px' }} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 flex items-center justify-center rounded-full"
                style={{ transform: 'translateY(-50%)', width: '48px', height: '48px', background: 'rgba(26, 26, 26, 0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF' }}
              >
                <ChevronRight style={{ width: '24px', height: '24px' }} />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white inline-block rounded-xl text-sm font-medium" style={{ padding: '10px 20px', background: 'rgba(26, 26, 26, 0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galeria;
