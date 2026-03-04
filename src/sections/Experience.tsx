import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Database, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('experience.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="md:text-right pr-0 md:pr-12 pt-2">
              <h3 className="text-2xl font-bold text-primary mb-1">{t('experience.security.role')}</h3>
              <p className="text-white/50 font-medium mb-4">2023 - Present</p>
            </div>
            
            <div className="absolute left-[-5px] md:left-1/2 top-4 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(0,210,255,1)]" />

            <div className="glass-card p-8 ml-4 md:ml-12">
              <div className="flex items-center space-x-3 mb-4">
                <ShieldCheck className="text-primary" size={24} />
                <h4 className="text-lg font-bold">Ciberseguridad & IT</h4>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                {t('experience.security.desc')}
              </p>
              <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                <p className="text-sm text-primary font-mono">
                  {t('experience.security.tools')}
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center space-x-2 text-sm text-white/50">
                  <Terminal size={14} className="text-primary" />
                  <span>Configuración de Fusion Inventory en 600+ equipos.</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-white/50">
                  <Database size={14} className="text-primary" />
                  <span>Administración y depuración de bases de datos institucionales.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
