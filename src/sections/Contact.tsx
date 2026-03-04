import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone, Download, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'puerresangie@gmail.com', href: 'mailto:puerresangie@gmail.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'Angie Puerres', href: 'https://linkedin.com' },
    { icon: <Github size={20} />, label: 'GitHub', value: 'AngiePuerres', href: 'https://github.com' },
    { icon: <Phone size={20} />, label: 'Teléfono', value: '+57 300 000 0000', href: 'tel:+573000000000' },
  ];

  return (
    <section id="contact" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full bg-radial-gradient opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-white/60 mb-12">{t('contact.subtitle')}</p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 glass-card hover:bg-white/10 transition-all group"
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

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 inline-flex items-center space-x-3 px-8 py-4 bg-white text-background font-bold rounded-full hover:bg-primary hover:text-background transition-all shadow-xl shadow-white/5"
            >
              <Download size={20} />
              <span>{t('contact.downloadCv')}</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Asunto</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-background font-bold rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-primary/20"
              >
                <span>Enviar Mensaje</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Angie Puerres Caicedo. Todos los derechos reservados.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
