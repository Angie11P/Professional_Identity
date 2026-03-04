import React from 'react';
import { motion } from 'motion/react';
import { Download, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t('hero.greeting')}
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
            Angie <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent glow-text">Puerres</span> Caicedo
          </h1>
          <h2 className="text-xl md:text-3xl font-medium text-white/80 mb-4">
            {t('hero.role')} | <span className="text-primary">{t('hero.specialization')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-bold rounded-full flex items-center justify-center space-x-2 hover:bg-accent transition-colors shadow-lg shadow-primary/20"
            >
              <span>{t('hero.cta')}</span>
              <ChevronRight size={20} />
            </motion.a>
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <Download size={20} />
              <span>{t('hero.cv')}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-10 hidden lg:block animate-float">
        <div className="glass-card p-4 rotate-12">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">JS</div>
        </div>
      </div>
      <div className="absolute bottom-20 right-20 hidden lg:block animate-float delay-1000">
        <div className="glass-card p-4 -rotate-12">
          <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold">SQL</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
