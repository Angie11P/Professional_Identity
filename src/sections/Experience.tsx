import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Database, Terminal, HelpCircle, Shield, Settings, FileText, Video, Bug, BookOpen, Users, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      icon: HelpCircle,
      title: 'Mesa de Ayuda GLPI',
      desc: t('experience.security.desc'),
      tools: t('experience.security.tools'),
      items: [
        { icon: Settings, text: 'Implementacion y configuración de Fusion Inventory en 800+ equipos.' },
        { icon: FileText, text: 'Desarrollo y publicación de manuales de usuario final y técnico de GLPI.' },
        { icon: BarChart3, text: 'Generación de reportes técnicos: inventarios, cuentas por justificar, análisis GLPI, historial de tickets.' },

      ]
    },
    {
      icon: Shield,
      title: 'Seguridad de la información',
      desc: t('experience.cybersecurity.desc'),
      tools: t('experience.cybersecurity.tools'),
      items: [
        { icon: Bug, text: 'Manejo de herramientas de ciberseguridad open source' },
        { icon: BookOpen, text: 'Elaboración y publicación del Manual de Gestión de Vulnerabilidades.' },
      ]
    },
    {
      icon: Users,
      title: 'Depuración de usuarios',
      desc: t('experience.userdebug.desc'),
      tools: t('experience.userdebug.tools'),
      items: [
        { icon: Users, text: 'Depuración de cuentas en Active Directory y plataformas institucionales' },
        { icon: BarChart3, text: t('experience.userdebug.extra') },
      ]
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <IconComponent className="text-primary" size={20} />
                  <h3 className="text-lg font-bold">{exp.title}</h3>
                </div>
                
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {exp.desc}
                </p>
                
                <div className="bg-background/50 p-3 rounded-lg border border-white/5 mb-4">
                  <p className="text-xs text-primary font-mono">{exp.tools}</p>
                </div>
                
                <ul className="space-y-2">
                  {exp.items.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={i} className="flex items-start space-x-2 text-xs text-white/60">
                        <ItemIcon size={12} className="text-primary mt-1 flex-shrink-0" />
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
