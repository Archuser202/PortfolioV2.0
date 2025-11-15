import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut', delay: 1.0 }}
      className="fixed top-0 left-0 right-0 z-20"
    >
      <div className="mx-auto mt-4 max-w-4xl rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 backdrop-blur-lg">
        <nav className="flex items-center justify-between">
          <a href="#" className="font-mono text-xl font-bold tracking-wider text-gray-200" data-cursor-hover>
            Arch
          </a>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#projects" className="text-gray-400 transition-colors hover:text-white" data-cursor-hover>
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;