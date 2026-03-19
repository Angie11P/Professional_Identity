import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, Users, Lightbulb, Rocket, Download, ChevronLeft, ChevronRight, BookOpen, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import isoCert from '../content/ISO 27001_2022.pdf';
import impactoCert from '../content/ImpActo_Maker.pdf';
import clusterCert from '../content/Cluster_TIC.pdf';
import ceiaCert from '../content/CEIA_I_2023.pdf';
import exabreCert from '../content/EXABRE_2023.pdf';
import iaCert from '../content/desarrolloIA.PDF';

const Certifications = () => {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const items = [
    {
      title: t('certs.ia.title'),
      org: t('certs.ia.org'),
      icon: <Brain className="text-primary" size={40} />,
      year: t('certs.ia.year'),
      downloadUrl: iaCert
    },
    {
      title: t('certs.iso27001.title'),
      org: t('certs.iso27001.org'),
      icon: <Award className="text-primary" size={40} />,
      year: t('certs.iso27001.year'),
      downloadUrl: isoCert
    },
    {
      title: t('certs.impacto.title'),
      org: t('certs.impacto.org'),
      icon: <Rocket className="text-primary" size={40} />,
      year: t('certs.impacto.year'),
      downloadUrl: impactoCert
    },
    {
      title: t('certs.cluster.title'),
      org: t('certs.cluster.org'),
      icon: <Users className="text-primary" size={40} />,
      year: t('certs.cluster.year'),
      downloadUrl: clusterCert
    },
    {
      title: t('certs.ceia.title'),
      org: t('certs.ceia.org'),
      icon: <Lightbulb className="text-primary" size={40} />,
      year: t('certs.ceia.year'),
      downloadUrl: ceiaCert
    },
    {
      title: t('certs.exabre.title'),
      org: t('certs.exabre.org'),
      icon: <BookOpen className="text-primary" size={40} />,
      year: t('certs.exabre.year'),
      downloadUrl: exabreCert
    },
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
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section className="py-24 bg-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('certs.title')}</h2>
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
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.title}
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
                className="flex-shrink-0 w-80 h-64 glass-card p-6 flex flex-col items-center justify-center space-y-4 snap-center hover:bg-white/10 transition-all cursor-default group relative preserve-3d"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div 
                  className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {item.icon}
                </div>
                <h3 
                  className="text-lg font-bold text-white/80 text-center group-hover:text-primary transition-colors"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-white/50 text-sm text-center"
                  style={{ transform: 'translateZ(5px)' }}
                >
                  {item.org}
                </p>
                <div className="flex items-center space-x-3" style={{ transform: 'translateZ(10px)' }}>
                  <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">
                    {item.year}
                  </span>
                  {item.downloadUrl !== '#' && (
                    <motion.a
                      href={item.downloadUrl}
                      download
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-primary hover:border-primary/50 transition-all"
                      title="Descargar Certificado"
                    >
                      <Download size={16} />
                    </motion.a>
                  )}
                </div>
                
                {/* 3D Shadow effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" style={{ transform: 'translateZ(-10px)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
