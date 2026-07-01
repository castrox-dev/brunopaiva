import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="inline-block text-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold ${
          light ? 'text-primary' : 'text-white'
        }`}
      >
        {title}
      </h2>
      <div className="mt-6 w-16 h-1 gradient-gold rounded-full" style={{ margin: '0 auto' }} />
    </motion.div>
  );
};
