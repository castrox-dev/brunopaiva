import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-gold text-primary hover:bg-gold-light gold-glow-subtle',
    secondary:
      'border-2 border-white text-white hover:bg-white hover:text-primary',
    ghost: 'border border-gold/30 text-gold hover:bg-gold/10',
    wine: 'bg-wine text-white hover:bg-wine-light wine-glow',
    dark: 'bg-secondary text-white border border-white/10 hover:border-gold/50',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
