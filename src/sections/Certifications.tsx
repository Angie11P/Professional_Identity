import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Lightbulb, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Certifications = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: 'ISO 27001:2022',
      org: 'Seguridad de la Información',
      icon: <Award className="text-primary" size={32} />,
      year: '2024'
    },
    {
      title: 'CLUSTER TIC Nariño',
      org: 'Participación Activa',
      icon: <Users className="text-primary" size={32} />,
      year: '2023'
    },
    {
      title: 'CEIA-I 2023',
      org: 'Congreso de Inteligencia Artificial',
      icon: <Lightbulb className="text-primary" size={32} />,
      year: '2023'
    },
    {
      title: 'ImpActo Maker 2026',
      org: 'Innovación Tecnológica',
      icon: <Rocket className="text-primary" size={32} />,
      year: '2026'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('certs.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 text-center flex flex-col items-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors shadow-[0_0_20px_rgba(0,210,255,0.1)]">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm mb-4">{item.org}</p>
              <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
