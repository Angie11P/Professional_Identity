import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import profilePic from '../img/img2.jpg';

function About() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative group"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(37,99,235,0.2)] max-w-[320px] mx-auto">
              <img
                src={profilePic}
                alt="Angie Puerres Caicedo"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 top-1/4 glass-card p-3 z-30 hidden xl:block"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Available</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t('about.title')}
            </h2>
            <div className="space-y-6 mb-8">
              {t('about.content').split('\n\n').map((paragraph: string, i: number) => (
                <p key={i} className="text-xl text-white/70 leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Full Stack Dev</span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Product Owner</span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">Analyst</span>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all group"
            >
              <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
