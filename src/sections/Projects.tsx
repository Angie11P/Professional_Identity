import React from 'react';
import pastosetp from '../img/pastosetp.png';
import prosaber from '../img/prosaber.png';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'prosaber',
      title: t('projects.prosaber.title'),
      desc: t('projects.prosaber.desc'),
      characteristics: t('projects.prosaber.characteristics'),
      tech: t('projects.prosaber.tech'),
      image: prosaber,
      github: 'https://github.com/Dianarosero/Proyecto_Saberquest',
    },
    {
      id: 'pastosetp',
      title: t('projects.pastosetp.title'),
      desc: t('projects.pastosetp.desc'),
      characteristics: t('projects.pastosetp.characteristics'),
      tech: t('projects.pastosetp.tech'),
      image: pastosetp,
      github: 'https://github.com/Angie11P/PASTOSETP',
      demo: 'https://pastosetp.vercel.app',
    },
    // {
    //   id: 'onconnect',
    //   title: t('projects.onconnect.title'),
    //   desc: t('projects.onconnect.desc'),
    //   characteristics: t('projects.onconnect.characteristics'),
    //   tech: t('projects.onconnect.tech'),
    //   image: 'https://picsum.photos/seed/health/800/600',
    //   github: '#',
    // },
    // {
    //   id: 'nariñoemplea',
    //   title: t('projects.nariñoemplea.title'),
    //   desc: t('projects.nariñoemplea.desc'),
    //   characteristics: t('projects.nariñoemplea.characteristics'),
    //   tech: t('projects.nariñoemplea.tech'),
    //   image: 'https://picsum.photos/seed/jobs/800/600',
    //   github: '#',
    // }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-white/60 max-w-2xl">Soluciones tecnológicas diseñadas con enfoque estratégico y metodologías ágiles.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a href={project.github} className="p-2 bg-background/80 backdrop-blur-md rounded-full text-white hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded border border-primary/20">
                    {project.tech}
                  </span>
                </div>

                <div className="mb-6 space-y-4 flex-1">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">{t('projects.descriptionLabel')}</h4>
                    <p className="text-sm text-white/70">{project.desc}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">{t('projects.characteristicsLabel')}</h4>
                    {Array.isArray(project.characteristics) && (
                      <ul className="text-sm text-white/70 list-disc pl-4 space-y-1">
                        {project.characteristics.map((char: string, i: number) => (
                          <li key={i}>{char}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2 text-xs text-white/40">
                    <Code2 size={14} />
                    <span>Scrum Methodology</span>
                  </div>
                  <div className="flex space-x-4">
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-primary font-bold text-sm"
                      >
                        <span>{t('projects.viewSite')}</span>
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                    {project.github && project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-primary font-bold text-sm"
                      >
                        <span>{t('projects.viewCode')}</span>
                        <Github size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
