
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
      className={`min-h-[56vh] sm:min-h-[72vh] py-10 sm:py-14 md:py-20 w-[90%] max-w-[1400px] mx-auto flex flex-col justify-center ${className}`}
    >
      <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-full glass-badge px-4 py-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]"
          >
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            {subtitle}
          </motion.p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-content tracking-tighter leading-none"
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2.5 flex-1 glass-line rounded-full mb-1 sm:mb-2 origin-left"
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
