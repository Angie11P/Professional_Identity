import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Database, Wrench, 
  Layout, Server, Shield, 
  GitBranch, Figma, Search, 
  Terminal, Globe, Cpu
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: t('skills.languages'),
      icon: <Code2 className="text-primary" />,
      skills: [
        { name: 'Python', icon: <Cpu size={20} /> },
        { name: 'React', icon: <Layout size={20} /> },
        { name: 'JavaScript', icon: <Code2 size={20} /> },
        { name: 'PHP', icon: <Server size={20} /> },
        { name: 'HTML5', icon: <Globe size={20} /> },
        { name: 'CSS3', icon: <Layout size={20} /> },
        { name: 'SQL', icon: <Database size={20} /> },
      ]
    },
    {
      title: t('skills.databases'),
      icon: <Database className="text-primary" />,
      skills: [
        { name: 'MySQL', icon: <Database size={20} /> },
        { name: 'PostgreSQL', icon: <Database size={20} /> },
      ]
    },
    {
      title: t('skills.tools'),
      icon: <Wrench className="text-primary" />,
      skills: [
        { name: 'Git & GitHub', icon: <GitBranch size={20} /> },
        { name: 'Figma', icon: <Figma size={20} /> },
        { name: 'GLPI', icon: <Terminal size={20} /> },
        { name: 'Nessus', icon: <Shield size={20} /> },
        { name: 'OWASP ZAP', icon: <Shield size={20} /> },
        { name: 'Skipfish', icon: <Search size={20} /> },
        { name: 'WPScan', icon: <Search size={20} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5 transition-all cursor-default"
                  >
                    <div className="text-primary/70">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-white/80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
