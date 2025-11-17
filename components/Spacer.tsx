
import React from 'react';
import { motion } from 'framer-motion';

const Spacer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.7 }}
      className="relative flex items-center justify-center py-16"
      aria-hidden="true"
    >
      <div className="h-px w-full max-w-lg bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
    </motion.div>
  );
};

export default Spacer;
