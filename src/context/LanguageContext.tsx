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
        description: 'Soy desarrolladora creativa especializada en transformar desafíos en proyectos tecnológicos eficientes y bien estructurados.',
        cta: 'Trabajemos juntos',
        cv: 'Ver currículum',
      },
      about: {
        title: 'Sobre Mí',
        content: "Soy Angie Puerres Caicedo, Ingeniera de Sistemas y Especialista en Gerencia de Proyectos con un enfoque sólido en el Desarrollo Web Full Stack. Trabajo bajo metodologías ágiles como Scrum para asegurar entregas eficientes y alineadas con los objetivos estratégicos.\n\nDisfruto trabajar en equipo, escuchar diferentes ideas y construir soluciones de manera colaborativa. Me caracterizo por ser organizada, responsable y perseverante; cuando asumo un reto, doy lo mejor de mí hasta verlo convertido en resultados concretos.\n\nCreo en el crecimiento continuo, en la importancia de adaptarse a los cambios y en mantener siempre una actitud proactiva. Me entusiasma participar en proyectos que generen impacto, donde pueda aportar no solo mis conocimientos, sino también mi creatividad, empatía y capacidad de liderazgo.",
        agile: 'Mentalidad Ágil',
        agileDesc: 'Experiencia trabajando bajo metodología Scrum, garantizando entregas de valor continuo y adaptabilidad.',
        security: 'Seguridad',
        securityDesc: 'Manejo de herramientas open source de análisis de vulnerabilidades.',
        fullstack: 'Full Stack',
        fullstackDesc: 'Desarrollo de software web dominando tanto el frontend como el backend.',
      },
      experience: {
        title: 'Experiencia Destacada',
        security: {
          role: 'Prácticas en Seguridad de la Información',
          desc: 'Se realizó Instalación, configuración y afinamiento de GLPI, seguida de su lanzamiento institucional. Se capacitó a usuarios y personal técnico para su adecuado uso. Además, se implementó una mesa de ayuda basada en las mejores prácticas de ITIL, fortaleciendo la gestión de servicios de TI.',
          tools: 'Herramientas: GLPI, Fusion Inventory, Servidores',
        },
        cybersecurity: {
          role: 'Prácticas en Seguridad de la Información',
          desc: 'Se implementó la práctica de escaneo de vulnerabilidades en plataformas de la institución mediante el uso de herramientas de ciberseguridad, permitiendo la identificación de riesgos y vulnerabilidades en los sistemas institucionales. Se realizaron escaneos periódicos, análisis detallado de los hallazgos y clasificación de vulnerabilidades según su nivel de criticidad.',
          tools: 'Herramientas: Nessus Tenable, OWASP ZAP, Skipfish, WPScan, Tor browser',
        },
        userdebug: {
          role: 'Prácticas en Seguridad de la Información',
          desc: 'Se realizó la depuración de cuentas en el Active Directory de la universidad y en las principales plataformas institucionales, incluyendo el sistema académico, el sistema contable y el sistema de apoyo académico TAU. Durante el proceso se validaron grupos, perfiles de usuario y correos electrónicos asociados al dominio institucional, con el fin de garantizar la correcta gestión de accesos.',
          tools: 'Herramientas: Excel, Access, Directorio Activo',
          extra: 'Generación de reportes de diferentes plataformas institucionales',
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
        iso27001: {
          title: 'ISO 27001:2022',
          org: 'SISTEMA DE GESTIÓN EN SEGURIDAD DE LA INFORMACIÓN.',
          year: '2026',
        },
        impacto: {
          title: 'ImpActo Maker 2026',
          org: 'Uso de Ingeligencia Artificial Generativa con impacto real.',
          year: '2026',
        },
        cluster: {
          title: 'CLUSTER TIC Nariño',
          org: 'Participación Activa como Expositora.',
          year: '2023',
        },
        ceia: {
          title: 'CEIA-I 2023',
          org: 'Congreso de Electronica e Informacion Aplicada.',
          year: '2023',
        },
        exabre: {
          title: 'EXABRE',
          org: 'Proyecto Interestructurante Estrategia basada en retos.',
          year: '2023',
        },
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
        description: 'I am a creative developer specialized in transforming challenges into efficient and well-structured technological projects.',
        cta: "Let's work together",
        cv: 'View Curriculum',
      },
      about: {
        title: 'About Me',
        content: "I am Angie Puerres Caicedo, a Systems Engineer and Project Management Specialist with a solid focus on Full Stack Web Development. I work under agile methodologies like Scrum to ensure efficient deliveries aligned with strategic objectives.\n\nI enjoy working in teams, listening to different ideas, and building solutions collaboratively. I am characterized by being organized, responsible, and persevering; when I take on a challenge, I give my best until I see it converted into concrete results.\n\nI believe in continuous growth, the importance of adapting to changes, and always maintaining a proactive attitude. I am excited to participate in projects that generate impact, where I can contribute not only my knowledge but also my creativity, empathy, and leadership skills.",
        agile: 'Agile Mindset',
        agileDesc: 'Experience working under Scrum methodology, ensuring continuous value delivery and adaptability.',
        security: 'Security',
        securityDesc: 'Proficiency in using open source vulnerability analysis tools.',
        fullstack: 'Full Stack',
        fullstackDesc: 'Proficiency in developing web applications from frontend to backend.',
      },
      experience: {
        title: 'Featured Experience',
        security: {
          role: 'Information Security Intern',
          desc: 'GLPI installation, configuration, and fine-tuning was performed, followed by its institutional launch. Users and technical staff were trained for its proper use. Additionally, a help desk was implemented based on ITIL best practices, strengthening IT service management.',
          tools: 'Tools: GLPI, Fusion Inventory, Servers',
        },
        cybersecurity: {
          role: 'Information Security Intern',
          desc: 'Vulnerability scanning was implemented on institutional platforms using cybersecurity tools, enabling the identification of risks and vulnerabilities in institutional systems. Periodic scans were performed, detailed analysis of findings, and classification of vulnerabilities according to their criticality level.',
          tools: 'Tools: Nessus, OWASP ZAP, Skipfish, WPScan, Tor',
        },
        userdebug: {
          role: 'Information Security Intern',
          desc: 'Account cleanup was performed in the university\'s Active Directory and in the main institutional platforms, including the academic system, the accounting system, and the TAU academic support system. During the process, groups, user profiles, and email addresses associated with the institutional domain were validated, in order to guarantee proper access management.',
          tools: 'Tools: Excel, Access, Active Directory',
          extra: 'Generating reports from different institutional platforms',
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
        iso27001: {
          title: 'ISO 27001:2022',
          org: 'Information Security Management System.',
          year: '2026',
        },
        impacto: {
          title: 'ImpActo Maker 2026',
          org: 'Use of Generative Artificial Intelligence with real impact.',
          year: '2026',
        },
        cluster: {
          title: 'CLUSTER TIC Nariño',
          org: 'Active Participation as Exhibitor.',
          year: '2023',
        },
        ceia: {
          title: 'CEIA-I 2023',
          org: 'Congress of Applied Electronics and Information.',
          year: '2023',
        },
        exabre: {
          title: 'EXABRE',
          org: 'Interstructural Project Challenge-based Strategy.',
          year: '2023',
        },
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
