
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Database,
  Zap,
  Mail,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
  ChevronRight,
  Send,
  CheckCircle2,
  Sparkles,
  Sun,
  Moon,
  Cloud,
  MessageCircle
} from 'lucide-react';
import Section from './components/Section';
import AIChat from './components/AIChat';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS } from './constants';

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Mouse Tracking for Interactive Background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorsX = useSpring(mouseX, springConfig);
  const cursorsY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert to URLSearchParams for easier processing with Google Apps Script
    const data = new URLSearchParams();
    data.append('name', formData.get('name') as string || '');
    data.append('email', formData.get('email') as string || '');
    data.append('message', formData.get('message') as string || '');

    try {
      // ⚠️ IMPORTANT: Replace this placeholder with the Web App URL from Google Apps Script
      const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
      
      if (GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: data.toString(),
        });
      }
      
      setTimeout(() => {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 3000);
      }, 1500);
    } catch (error) {
      console.error("Form submission error:", error);
      setTimeout(() => {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 3000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 overflow-x-hidden bg-surface text-content">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Interactive Spotlight */}
        <motion.div
          style={{
            x: cursorsX,
            y: cursorsY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className={`absolute w-[600px] h-[600px] rounded-full blur-[120px] ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-indigo-500/[0.02]'}`}
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          style={{
            x: cursorsX,
            y: cursorsY,
            translateX: '-20%',
            translateY: '-30%',
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full blur-[160px] ${theme === 'dark' ? 'bg-blue-600/10' : 'bg-indigo-600/[0.02]'}`}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          style={{
            x: cursorsX,
            y: cursorsY,
            translateX: '20%',
            translateY: '30%',
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full blur-[160px] ${theme === 'dark' ? 'bg-emerald-600/10' : 'bg-emerald-600/[0.02]'}`}
        />
        <div className="absolute inset-0 mesh-grid opacity-20"></div>
      </div>

      {/* Modern Dock Navigation */}
      <nav className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 px-3 sm:px-6 py-2 sm:py-3 glass rounded-full flex items-center gap-2 sm:gap-4 md:gap-8 shadow-2xl overflow-x-auto max-w-[95vw]">
        {['about', 'skills', 'experience', 'projects', 'contact'].map(item => (
          <a
            key={item}
            href={`#${item}`}
            className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-blue-500 transition-all relative group whitespace-nowrap"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
          </a>
        ))}
        <div className="w-[1px] h-3 sm:h-4 bg-gray-500/30 mx-1 sm:mx-2"></div>
        <button
          onClick={toggleTheme}
          className="p-1.5 sm:p-2 glass rounded-full hover:text-blue-500 transition-all flex items-center justify-center flex-shrink-0"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={12} className="sm:w-[14px] sm:h-[14px]" /> : <Moon size={12} className="sm:w-[14px] sm:h-[14px]" />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <header id="about" className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 max-w-7xl mx-auto pt-10 sm:pt-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 items-center">
          <div className="space-y-8 sm:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                <p className="text-blue-500 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">System Status: Operational</p>
              </div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-content">
                SAVINKUMAR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600">ENGINEER.</span>
              </h1>
            </motion.div>

            <div className="grid gap-8 items-start">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium border-l-4 border-blue-600 pl-4 sm:pl-8 text-content-muted"
              >
                Architecting <span className="text-content">scalable automation</span> and <span className="text-content">AI document intelligence</span> for healthcare. I transform manual bottlenecks into high-throughput API workflows.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6 sm:pt-8 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-8 md:gap-12"
            >
              <a href="#projects" className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest text-xs rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 bg-inverted-surface text-inverted-content hover:bg-inverted-surface/90">
                <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2 group-hover:text-white transition-colors">
                  Access Portfolio <ChevronRight size={16} />
                </span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-500 font-mono text-xs w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Terminal size={14} className="text-emerald-500 flex-shrink-0" />
                  <span>Python / AI / Automation</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className={`absolute inset-0 rounded-full blur-[100px] ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-500/10'}`}></div>
            <div className="relative z-10 p-4 glass rounded-[64px] overflow-hidden group">
              <img
                src="/profile.jpg"
                alt="Savinkumar N"
                className={`w-full aspect-[3/4] object-cover rounded-[48px] transition-all duration-700 scale-110 group-hover:scale-100 ${theme === 'dark' ? 'grayscale group-hover:grayscale-0' : ''}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 glass rounded-3xl backdrop-blur-md">
                  <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Identity Verified</p>
                  <p className="font-bold text-content">Savinkumar N</p>
                  <p className="text-xs text-content-faint">Python Backend Engineer & AI Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            { label: "RPA Precision", value: "99.9%", color: "bg-emerald-500", width: "99%" },
            { label: "Data Extraction", value: "80.0%+", color: "bg-blue-500", width: "80%" },
            { label: "Workflow Speedup", value: "10x", color: "bg-indigo-500", width: "95%" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-4 sm:p-6 glass rounded-3xl"
            >
              <div className="flex justify-between items-center text-xs sm:text-sm mb-3">
                <span className="text-gray-500 font-medium">{stat.label}</span>
                <span className={`${stat.color.replace('bg-', 'text-')} font-mono font-bold`}>{stat.value}</span>
              </div>
              <div className="h-1.5 bg-gray-500/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: stat.width }}
                  transition={{ duration: 1.5, delay: 0.8 + i * 0.1 }}
                  className={`h-full ${stat.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </header>

      {/* SKILLS SECTION */}
      <Section id="skills" title="TECH CORE" subtitle="Capabilities Matrix">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="group p-6 sm:p-8 md:p-10 rounded-[40px] glass transition-all relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                  {idx === 0 && <Terminal size={20} className="sm:w-6 sm:h-6" />}
                  {idx === 1 && <Cpu size={20} className="sm:w-6 sm:h-6" />}
                  {idx === 2 && <Zap size={20} className="sm:w-6 sm:h-6" />}
                  {idx === 3 && <Sparkles size={20} className="sm:w-6 sm:h-6" />}
                  {idx === 4 && <Database size={20} className="sm:w-6 sm:h-6" />}
                  {idx === 5 && <Cloud size={20} className="sm:w-6 sm:h-6" />}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-content">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skill.items.map((item, sidx) => (
                  <span key={sidx} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[9px] sm:text-xs font-bold border transition-all hover:!bg-blue-600 hover:!text-white hover:!border-blue-600 bg-blue-500/5 dark:bg-white/5 text-content-muted border-blue-500/10 dark:border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE SECTION */}
      <Section id="experience" title="THE ROADMAP" subtitle="Professional Evolution" className="bg-surface-secondary">
        <div className="space-y-12 md:space-y-24 relative before:absolute before:left-4 md:before:left-1/2 before:top-4 before:bottom-4 before:w-[1px] md:before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:via-emerald-500 before:to-indigo-600">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 md:w-10 h-8 md:h-10 rounded-full glass border-2 border-blue-500 flex items-center justify-center z-10 bg-surface">
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-blue-500 animate-pulse"></div>
              </div>

              <div className={`md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pl-20' : 'md:pr-20 md:text-right'}`}>
                <span className="text-blue-600 font-mono text-xs sm:text-sm font-bold tracking-widest bg-blue-500/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/20 inline-block">
                  {exp.period}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mt-4 md:mt-6 mb-1 md:mb-2 text-content">{exp.role}</h3>
                <p className="text-base sm:text-lg md:text-xl font-bold text-content-faint tracking-tight">{exp.company}</p>
              </div>

              <div className={`md:w-1/2 pl-16 md:pl-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 sm:p-8 md:p-10 glass rounded-[32px] md:rounded-[48px] hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all ${idx % 2 === 0 ? 'md:mr-20' : 'md:ml-20'}`}
                >
                  <ul className="space-y-4 sm:space-y-6">
                    {exp.points.map((point, pidx) => (
                      <li key={pidx} className="flex gap-3 sm:gap-5">
                        <div className="mt-1 md:mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <p className="text-sm sm:text-base leading-relaxed text-content-muted">{point}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="projects" title="IMPACT ARRAY" subtitle="Selected Operations">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col rounded-[40px] md:rounded-[56px] glass overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30"
            >
              <div className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8 flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tidx) => (
                      <span key={tidx} className="text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-tighter px-2 sm:px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-black text-[9px] sm:text-[10px] uppercase tracking-widest whitespace-nowrap">
                    Production
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight group-hover:text-blue-600 transition-colors text-content">
                  {project.title}
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {project.description.map((desc, didx) => (
                    <p key={didx} className="text-sm sm:text-base md:text-lg leading-relaxed text-content-muted">{desc}</p>
                  ))}
                </div>

                <div className="pt-4 sm:pt-8">
                  <div className="relative p-6 sm:p-8 rounded-[32px] md:rounded-[40px] border group-hover:border-blue-500 transition-all duration-700 bg-blue-500/5 dark:bg-white/5 border-blue-500/10 dark:border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <div className="relative z-10 transition-colors duration-300">
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 group-hover:text-white/80 text-content-faint transition-colors duration-300">Success Metric</p>
                      <p className="text-base sm:text-lg md:text-xl font-black leading-tight group-hover:text-lg sm:group-hover:text-xl md:group-hover:text-2xl group-hover:text-white transition-all text-content">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <footer id="contact" className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 max-w-7xl mx-auto pt-12 sm:pt-16 pb-20 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-20 lg:gap-32">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-blue-600 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">Available for Hire</p>
              <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none text-content">LET'S <br /> COLLAB.</h2>
            </div>
            <p className="text-base sm:text-lg md:text-2xl font-medium max-w-md text-content-muted leading-relaxed">
              Specialized in healthcare automation & AI document intelligence. Let's build the future of medical systems.
            </p>

            <div className="grid gap-4 sm:gap-6">
              {[
                { icon: <Mail />, label: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, color: "bg-blue-600" },
                { icon: <Linkedin />, label: "linkedin/savinkumarn", href: `https://linkedin.com/in/${PERSONAL_INFO.linkedin}`, color: "bg-indigo-600" },
                { icon: <Github />, label: "github/savinkumarnsk", href: `https://github.com/savinkumarnsk`, color: "bg-gray-900 dark:bg-slate-800" },
                { icon: <MessageCircle />, label: "whatsapp/connect", href: `https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`, color: "bg-emerald-500" }
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-3 sm:gap-6 text-base sm:text-lg md:text-2xl font-black hover:text-blue-600 transition-all text-content"
                >
                  <div className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-2xl sm:rounded-3xl ${link.color} flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg flex-shrink-0`}>
                    {React.cloneElement(link.icon as React.ReactElement, { size: 24, className: 'text-white sm:w-7 sm:h-7' })}
                  </div>
                  <span className="break-all">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            <div className="p-6 sm:p-8 md:p-12 rounded-[32px] md:rounded-[56px] glass relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600"></div>

              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-8 sm:py-12 text-center space-y-4 sm:space-y-6"
                  >
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 size={40} className="sm:w-12 sm:h-12" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-content">Transmission Sent</h3>
                      <p className="text-sm sm:text-base text-content-faint">I'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleContactSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 sm:space-y-8"
                  >
                    <div className="space-y-4 sm:space-y-6">
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[10px] font-black text-content-faint uppercase tracking-widest ml-2 sm:ml-4">Full Name</label>
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          className="w-full border rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-blue-500 transition-all bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-content text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[10px] font-black text-content-faint uppercase tracking-widest ml-2 sm:ml-4">Email Address</label>
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full border rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-blue-500 transition-all bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-content text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[10px] font-black text-content-faint uppercase tracking-widest ml-2 sm:ml-4">Message</label>
                        <textarea
                          required
                          name="message"
                          rows={4}
                          placeholder="What's on your mind?"
                          className="w-full border rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-blue-500 transition-all resize-none bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-content text-sm sm:text-base"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      disabled={formStatus === 'sending'}
                      className="w-full group relative px-6 sm:px-8 py-4 sm:py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl overflow-hidden transition-all hover:bg-blue-500 active:scale-95 disabled:opacity-50 text-sm sm:text-xs"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                        {formStatus === 'sending' ? 'Transmitting...' : (
                          <>Send Message <Send size={16} className="sm:w-4 sm:h-4" /></>
                        )}
                      </span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            <div className="p-6 sm:p-8 md:p-10 rounded-[32px] md:rounded-[48px] glass space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[9px] sm:text-xs font-black text-content-faint uppercase tracking-widest">Academic Origin</h4>
                <div className="space-y-2">
                  <p className="text-lg sm:text-2xl font-black text-content">B.Tech AI & Data Science</p>
                  <p className="text-base sm:text-lg text-blue-600 font-bold">Hindusthan Institute of Technology</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-content-faint text-xs sm:text-sm font-mono mt-3 sm:mt-4 gap-2 sm:gap-0">
                    <span>CGPA: 8.61</span>
                    <span>2021 — 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <p className="text-gray-500 font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em]">SYSTEM_VERSION_3.0.0_STABLE • BUILT_WITH_PRECISION</p>
        </div>
      </footer>

      {/* Interactive AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;
