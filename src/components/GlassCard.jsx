import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, onClick }) => {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${className}`}
      whileHover={
        hover
          ? {
              y: -5,
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)',
              borderColor: 'rgba(212, 175, 55, 0.5)',
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
