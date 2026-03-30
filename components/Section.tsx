
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-[60vh] sm:min-h-[80vh] py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col justify-center ${className}`}
    >
      <div className="mb-8 sm:mb-10 space-y-3 sm:space-y-4">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="flex items-end gap-3 sm:gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-content tracking-tighter leading-none"
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 flex-1 bg-gradient-to-r from-blue-600/50 to-transparent rounded-full mb-1 sm:mb-2 origin-left"
          ></motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
