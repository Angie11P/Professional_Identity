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
        viewSite: 'Visitar Sitio',
        descriptionLabel: 'Descripción',
        characteristicsLabel: 'Características de trabajo',
        prosaber: {
          title: 'PROSABER',
          desc: 'Plataforma web desarrollada para la gestión de simulacros académicos tipo Saber Pro. Incluye un sistema de roles (administrador, docente y estudiante) que permite la creación, aplicación y seguimiento de evaluaciones. Se enfoca en el análisis del desempeño estudiantil mediante el uso de bases de datos estructuradas.',
          characteristics: [
            'Participe con colaboradora en el desarrollo',
            'Plataforma desarrollada con fines educativos'
          ],
          tech: 'PHP, Python, Css, MySQL',
        },
        pastosetp: {
          title: 'PASTOSETP',
          desc: 'Aplicación web informativa orientada a la consulta y administración de rutas de transporte. El proyecto incorpora modelado de bases de datos y documentación técnica bajo metodología Scrum, facilitando el acceso organizado a la información de movilidad.',
          characteristics: [
            'Bajo metodología Scrum',
            'Proyecto desarrollado y presentado con fines educativos'
          ],
          tech: 'React, Vite.js, Supabase, Vercel',
        },
        onconnect: {
          title: 'ONCONNECT',
          desc: 'Aplicación web dirigida a pacientes oncológicos que permite el registro personalizado, seguimiento de la enfermedad, gestión de citas y medicamentos. También integra espacios de apoyo entre usuarios y acceso a información médica relevante, con un enfoque social y centrado en el usuario.',
          characteristics: [
            'Bajo metodología Scrum'
          ],
          tech: 'React, Firebase, Tailwind',
        },
        nariñoemplea: {
          title: 'NARIÑO EMPLEA',
          desc: 'Plataforma web diseñada para conectar personas en búsqueda de empleo con empresas en Nariño. Facilita la publicación y consulta de ofertas laborales, mejorando la accesibilidad a oportunidades mediante una solución digital estructurada.',
          characteristics: [
            'Bajo metodología Scrum'
          ],
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
        ia: {
          title: 'AI DEVELOPMENT BIG SCHOOL',
          org: 'Certificación en desarrollo con IA de 0 a producción',
          year: '2026',
        },
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
        viewSite: 'Visit Site',
        descriptionLabel: 'Description',
        characteristicsLabel: 'Work Characteristics',
        prosaber: {
          title: 'PROSABER',
          desc: 'Web platform developed for the management of Saber Pro type academic drills. It includes a role system (administrator, teacher, and student) that allows the creation, application, and tracking of evaluations. It focuses on the analysis of student performance through structured databases.',
          characteristics: [
            'Participated as a collaborator in development',
            'Platform developed for educational purposes'
          ],
          tech: 'PHP, Python, MySQL',
        },
        pastosetp: {
          title: 'PASTO SETP',
          desc: 'Informative web application aimed at consulting and managing transport routes. The project incorporates database modeling and technical documentation under the Scrum methodology, facilitating organized access to mobility information.',
          characteristics: [
            'Under Scrum methodology',
            'Project developed and presented for educational purposes'
          ],
          tech: 'React, Node.js, PostgreSQL',
        },
        onconnect: {
          title: 'ONCONNECT',
          desc: 'Web application aimed at oncology patients that allows personalized registration, disease tracking, appointment, and medication management. It also integrates support spaces between users and access to relevant medical information, with a social and user-centered focus.',
          characteristics: [
            'Under Scrum methodology'
          ],
          tech: 'React, Firebase, Tailwind',
        },
        nariñoemplea: {
          title: 'NARIÑO EMPLEA',
          desc: 'Web platform designed to connect job seekers with companies in Nariño. It facilitates the publication and consultation of job offers, improving accessibility to opportunities through a structured digital solution.',
          characteristics: [
            'Under Scrum methodology'
          ],
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
        ia: {
          title: 'AI DEVELOPMENT BIG SCHOOL',
          org: 'Certification in AI development from 0 to production',
          year: '2026',
        },
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
