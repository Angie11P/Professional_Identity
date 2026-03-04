import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Target className="text-primary" size={32} />,
      title: t('about.agile'),
      desc: t('about.agileDesc'),
    },
    {
      icon: <Shield className="text-primary" size={32} />,
      title: t('about.security'),
      desc: t('about.securityDesc'),
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "Full Stack",
      desc: "Desarrollo integral de soluciones escalables y eficientes.",
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t('about.title')}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {t('about.content')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Scrum Master</span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Full Stack Dev</span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Cybersecurity</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 flex items-start space-x-6 hover:bg-white/10 transition-all group"
              >
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
