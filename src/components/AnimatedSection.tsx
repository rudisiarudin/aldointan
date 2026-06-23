import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  onClick?: () => void;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  onClick
}) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ 
        duration: 1.2, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Elegant custom easing (easeOutExpo-like)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
