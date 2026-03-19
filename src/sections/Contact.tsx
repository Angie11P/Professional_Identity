import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone, Download, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'puerresangie@gmail.com', href: 'mailto:puerresangie@gmail.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'Angie Puerres Caicedo', href: 'https://linkedin.com/in/angie-puerres-caicedo-25aaa73b1' },
    { icon: <Github size={20} />, label: 'GitHub', value: 'Angie11P', href: 'https://github.com/Angie11P' },
    { icon: <Phone size={20} />, label: 'Teléfono', value: '+57 316 370 8167', href: 'tel:+573163708167' },
  ];

  return (
    <section id="contact" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full bg-radial-gradient opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-white/60 mb-12">{t('contact.subtitle')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center space-x-4 p-6 glass-card hover:bg-white/10 transition-all group text-left"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{info.label}</p>
                  <p className="text-lg font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Angie Puerres Caicedo. Todos los derechos reservados.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
