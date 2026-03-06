import React, { useRef, useEffect, useState } from 'react';
import python from '../img/python.png';
import react from '../img/react.png';
import javascript from '../img/javascript.png';
import php from '../img/php.png';
import html from "../img/html.png";
import css from "../img/css.png";
import sql from "../img/sql.png";
import mysql from "../img/mysql.png";
import postgresql from "../img/postgresql.png";
import git from "../img/git.png";
import github from "../img/github.png";
import figma from "../img/figma.png";
import glpi from "../img/glpi.png";
import nessus from "../img/nessus.png";
import zap from "../img/zap.png";
import skipfish from "../img/skipfish.png";
import wpscan from "../img/wpscan.png";

import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Code2, Database, Wrench, 
  Layout, Server, Shield, 
  GitBranch, Figma, Search, 
  Terminal, Globe, Cpu,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const allSkills = [
    {name: 'Python', icon: <img src={python} alt="Python" width={60} /> },
    { name: 'React', icon:  <img src={react} alt="react" width={60} /> },
    { name: 'HTML5', icon: <img src={html} alt="HTML5" width={60} /> },
    { name: 'CSS3', icon: <img src={css} alt="CSS3" width={60} /> },
    { name: 'JavaScript', icon: <img src={javascript} alt="JavaScript" width={60} /> },
    { name: 'PHP', icon: <img src={php} alt="PHP" width={100} />},
    { name: 'SQL', icon: <img src={sql} alt="SQL" width={60} /> },
    { name: 'MySQL', icon: <img src={mysql} alt="MySQL" width={100} /> },
    { name: 'PostgreSQL', icon: <img src={postgresql} alt="PostgreSQL" width={60} /> },
    { name: 'Git', icon: <img src={git} alt="Git" width={60} /> },
    { name: 'GitHub', icon: <img src={github} alt="GitHub" width={60} /> },
    { name: 'Figma', icon: <img src={figma} alt="Figma" width={60} /> },
    { name: 'GLPI', icon: <img src={glpi} alt="GLPI" width={80} /> },
    { name: 'Nessus Tenable', icon: <img src={nessus} alt="Nessus" width={100} /> },
    { name: 'OWASP ZAP', icon: <img src={zap} alt="OWASP ZAP" width={60} /> },
    { name: 'Skipfish', icon: <img src={skipfish} alt="Skipfish" width={60} /> },
    { name: 'WPScan', icon: <img src={wpscan} alt="WPScan" width={60} /> },
  ];

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 500);
    }
  };

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

        <div className="relative group perspective-1000" style={{ perspective: '1200px' }}>
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/80 border border-white/10 text-white transition-all hover:bg-primary hover:text-background ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/80 border border-white/10 text-white transition-all hover:bg-primary hover:text-background ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex space-x-12 overflow-x-auto scrollbar-hide pb-12 pt-4 px-12 snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              perspective: '1200px',
              transformStyle: 'preserve-3d'
            }}
          >
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  z: 50,
                  rotateY: 15,
                  rotateX: -5,
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                className="flex-shrink-0 w-40 h-48 glass-card p-6 flex flex-col items-center justify-center space-y-4 snap-center hover:bg-white/10 transition-all cursor-default group relative preserve-3d"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div 
                  className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {skill.icon}
                </div>
                <span 
                  className="text-sm font-bold text-white/80 text-center uppercase tracking-wider group-hover:text-primary transition-colors"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {skill.name}
                </span>
                
                {/* 3D Shadow effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" style={{ transform: 'translateZ(-10px)' }} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-8 text-xs font-bold uppercase tracking-widest text-white/30">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_rgba(37,99,235,0.5)]" />
            <span>Languages</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_5px_rgba(96,165,250,0.5)]" />
            <span>Databases</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_5px_rgba(30,64,175,0.5)]" />
            <span>Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

