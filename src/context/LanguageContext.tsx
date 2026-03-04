import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const translations: Record<Language, any> = {
    es: {
      nav: {
        about: 'Sobre Mí',
        experience: 'Experiencia',
        projects: 'Proyectos',
        skills: 'Habilidades',
        contact: 'Contacto',
      },
      hero: {
        greeting: 'Hola, soy',
        role: 'Ingeniera de Sistemas',
        specialization: 'Especialista en Gerencia de Proyectos',
        description: 'Liderando la transformación digital con un enfoque en desarrollo Full Stack, seguridad de la información y metodologías ágiles.',
        cta: 'Trabajemos juntos',
        cv: 'Ver currículo',
      },
      about: {
        title: 'Sobre Mí',
        content: 'Ingeniera de Sistemas con Especialización en Gerencia de Proyectos. Mi enfoque combina la excelencia técnica con una visión estratégica organizacional. Soy una apasionada de la optimización de procesos y la implementación de soluciones tecnológicas que generen un impacto real e institucional.',
        agile: 'Mentalidad Ágil',
        agileDesc: 'Experiencia trabajando bajo metodología Scrum, garantizando entregas de valor continuo y adaptabilidad.',
        security: 'Seguridad Primero',
        securityDesc: 'Sólida base en análisis de vulnerabilidades y protección de activos de información.',
      },
      experience: {
        title: 'Experiencia Destacada',
        security: {
          role: 'Prácticas en Seguridad de la Información',
          desc: 'Implementación y configuración de GLPI con Fusion Inventory en más de 600 equipos. Desarrollo de manuales de vulnerabilidades institucionales.',
          tools: 'Herramientas: Nessus, OWASP ZAP, Skipfish, WPScan.',
        }
      },
      projects: {
        title: 'Proyectos Principales',
        viewCode: 'Ver Código',
        prosaber: {
          title: 'PROSABER',
          problem: 'Necesidad de centralizar y automatizar simulacros académicos tipo Saber Pro.',
          desc: 'Plataforma web con arquitectura de roles (Admin, Docente, Estudiante). Gestión de notas y desempeño.',
          tech: 'PHP, Python, MySQL',
        },
        pastosetp: {
          title: 'PASTO SETP',
          problem: 'Falta de un sistema centralizado para la consulta de rutas de transporte público.',
          desc: 'Plataforma informativa para administración y consulta de rutas. Documentación técnica bajo Scrum.',
          tech: 'React, Node.js, PostgreSQL',
        },
        onconnect: {
          title: 'ONCONNECT',
          problem: 'Aislamiento y falta de seguimiento personalizado para pacientes oncológicos.',
          desc: 'Aplicación para seguimiento médico, gestión de citas y redes de apoyo entre usuarios.',
          tech: 'React, Firebase, Tailwind',
        },
        nariñoemplea: {
          title: 'NARIÑO EMPLEA',
          problem: 'Dificultad en la búsqueda de empleo local de forma eficiente.',
          desc: 'Plataforma de búsqueda de empleo regional desarrollada bajo metodología Scrum.',
          tech: 'React, Express, MySQL',
        }
      },
      skills: {
        title: 'Habilidades Técnicas',
        languages: 'Lenguajes',
        databases: 'Bases de Datos',
        tools: 'Herramientas',
      },
      certs: {
        title: 'Certificaciones y Participaciones',
      },
      contact: {
        title: 'Contacto',
        subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
        downloadCv: 'Descargar CV',
      }
    },
    en: {
      nav: {
        about: 'About Me',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        greeting: "Hi, I'm",
        role: 'Systems Engineer',
        specialization: 'Project Management Specialist',
        description: 'Leading digital transformation with a focus on Full Stack development, information security, and agile methodologies.',
        cta: "Let's work together",
        cv: 'View Resume',
      },
      about: {
        title: 'About Me',
        content: 'Systems Engineer with a Specialization in Project Management. My approach combines technical excellence with a strategic organizational vision. I am passionate about process optimization and implementing technological solutions that generate real institutional impact.',
        agile: 'Agile Mindset',
        agileDesc: 'Experience working under Scrum methodology, ensuring continuous value delivery and adaptability.',
        security: 'Security First',
        securityDesc: 'Solid foundation in vulnerability analysis and information asset protection.',
      },
      experience: {
        title: 'Featured Experience',
        security: {
          role: 'Information Security Intern',
          desc: 'Implementation and configuration of GLPI with Fusion Inventory on over 600 devices. Development of institutional vulnerability manuals.',
          tools: 'Tools: Nessus, OWASP ZAP, Skipfish, WPScan.',
        }
      },
      projects: {
        title: 'Main Projects',
        viewCode: 'View Code',
        prosaber: {
          title: 'PROSABER',
          problem: 'Need to centralize and automate Saber Pro type academic drills.',
          desc: 'Web platform with role architecture (Admin, Teacher, Student). Grade and performance management.',
          tech: 'PHP, Python, MySQL',
        },
        pastosetp: {
          title: 'PASTO SETP',
          problem: 'Lack of a centralized system for public transport route consultation.',
          desc: 'Informative platform for route administration and consultation. Technical documentation under Scrum.',
          tech: 'React, Node.js, PostgreSQL',
        },
        onconnect: {
          title: 'ONCONNECT',
          problem: 'Isolation and lack of personalized tracking for oncology patients.',
          desc: 'Application for medical tracking, appointment management, and support networks among users.',
          tech: 'React, Firebase, Tailwind',
        },
        nariñoemplea: {
          title: 'NARIÑO EMPLEA',
          problem: 'Difficulty in efficiently searching for local employment.',
          desc: 'Regional job search platform developed under Scrum methodology.',
          tech: 'React, Express, MySQL',
        }
      },
      skills: {
        title: 'Technical Skills',
        languages: 'Languages',
        databases: 'Databases',
        tools: 'Tools',
      },
      certs: {
        title: 'Certifications & Participations',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Have a project in mind? Let\'s talk!',
        downloadCv: 'Download CV',
      }
    }
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
