import { motion } from 'framer-motion';

const Section = ({ id, children, className = '', dark = true, noPadding = false }) => {
  return (
    <section
      id={id}
      className={`relative ${dark ? 'bg-primary' : 'bg-secondary'} ${
        !noPadding ? 'py-16 md:py-24 lg:py-32' : ''
      } ${className}`}
    >
      <div className="px-4 sm:px-6 lg:px-8" style={{ width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  );
};

export default Section;
