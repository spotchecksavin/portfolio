
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Sparkles,
  Sun,
  Moon,
  MessageSquare
} from 'lucide-react';
import Section from './components/Section';
import AIChat from './components/AIChat';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-200 transition-colors duration-300 overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: theme === 'dark' ? [0.1, 0.15, 0.1] : [0.05, 0.08, 0.05],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[160px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: theme === 'dark' ? [0.05, 0.08, 0.05] : [0.03, 0.05, 0.03],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[160px]"
        />
        <div className="absolute inset-0 mesh-grid opacity-20 dark:opacity-20"></div>
      </div>

      {/* Modern Dock Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-full border border-slate-200 dark:border-white/10 flex items-center gap-6 md:gap-8 shadow-2xl">
        {['about', 'skills', 'experience', 'projects', 'contact'].map(item => (
          <a 
            key={item} 
            href={`#${item}`} 
            className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all group-hover:w-full"></span>
          </a>
        ))}
        <div className="w-px h-4 bg-slate-200 dark:bg-white/10 mx-2"></div>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <header id="about" className="relative min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-ping"></div>
                <p className="text-blue-600 dark:text-blue-400 font-mono text-sm font-bold uppercase tracking-widest">System Status: Operational</p>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
                SAVINKUMAR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 dark:from-blue-500 dark:via-emerald-400 dark:to-indigo-500">ENGINEER.</span>
              </h1>
            </motion.div>
            
            <div className="grid gap-8 items-start">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 dark:text-gray-400 text-xl md:text-2xl leading-relaxed font-medium border-l-4 border-blue-600 pl-8"
              >
                Architecting <span className="text-slate-900 dark:text-white">scalable automation</span> and <span className="text-slate-900 dark:text-white">AI document intelligence</span> for healthcare. I transform manual bottlenecks into high-throughput API workflows.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-8 flex flex-wrap items-center gap-8 md:gap-12"
            >
              <a href="#projects" className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Access Portfolio <ChevronRight size={16} />
                </span>
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <div className="flex gap-8 text-slate-500 dark:text-gray-500 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-blue-600 dark:text-blue-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Terminal size={14} className="text-emerald-600 dark:text-emerald-500" />
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
            <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-500/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 p-4 glass rounded-[64px] border border-slate-200 dark:border-white/10 overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/d/19uWck_H9sS49_c773E_VCNgmpYsPciaN" 
                alt="Savinkumar N" 
                className="w-full aspect-[3/4] object-cover rounded-[48px] grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#030712] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 glass rounded-3xl border border-slate-200/50 dark:border-white/5 backdrop-blur-md">
                  <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">Identity Verified</p>
                  <p className="text-slate-900 dark:text-white font-bold">Savinkumar N</p>
                  <p className="text-xs text-slate-500 dark:text-gray-400">Backend AI and Automation Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { label: "RPA Precision", value: "99.9%", color: "bg-emerald-500", width: "99%" },
            { label: "Data Extraction", value: "80.0%+", color: "bg-blue-600", width: "80%" },
            { label: "Workflow Speedup", value: "10x", color: "bg-indigo-600", width: "95%" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-6 glass rounded-3xl border border-slate-200 dark:border-white/5"
            >
              <div className="flex justify-between items-center text-sm mb-3">
                <span className="text-slate-500 dark:text-gray-400 font-medium">{stat.label}</span>
                <span className={`${stat.color.replace('bg-', 'text-')} font-mono font-bold`}>{stat.value}</span>
              </div>
              <div className="h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5 }}
              className="group p-10 rounded-[40px] glass hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-all relative overflow-hidden border border-slate-200 dark:border-white/5"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {idx === 0 && <Terminal size={24} />}
                  {idx === 1 && <Cpu size={24} />}
                  {idx === 2 && <Zap size={24} />}
                  {idx === 3 && <Sparkles size={24} />}
                  {idx === 4 && <Database size={24} />}
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, sidx) => (
                  <span key={sidx} className="px-4 py-2 rounded-xl bg-slate-200/50 dark:bg-white/5 text-slate-600 dark:text-gray-400 text-xs font-bold border border-slate-200 dark:border-white/5 group-hover:border-blue-500/30 transition-all hover:text-blue-600 dark:hover:text-white hover:bg-blue-600/10">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE SECTION */}
      <Section id="experience" title="THE ROADMAP" subtitle="Professional Evolution" className="bg-slate-100/50 dark:bg-slate-950/30">
        <div className="space-y-24 relative before:absolute before:left-8 md:before:left-1/2 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:via-emerald-500 dark:before:via-emerald-400 before:to-indigo-600">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass border-2 border-blue-600 dark:border-blue-500 flex items-center justify-center z-10 bg-slate-50 dark:bg-[#030712]">
                <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></div>
              </div>

              <div className={`md:w-1/2 pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pl-20' : 'md:pr-20 md:text-right'}`}>
                 <span className="text-blue-600 dark:text-blue-500 font-mono text-sm font-bold tracking-widest bg-blue-600/10 px-4 py-1.5 rounded-full border border-blue-600/20">
                   {exp.period}
                 </span>
                 <h3 className="text-4xl font-black text-slate-900 dark:text-white mt-6 mb-2">{exp.role}</h3>
                 <p className="text-xl font-bold text-slate-400 dark:text-gray-500 tracking-tight">{exp.company}</p>
              </div>

              <div className={`md:w-1/2 pl-20 md:pl-0`}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`p-10 glass rounded-[48px] border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all ${idx % 2 === 0 ? 'md:mr-20' : 'md:ml-20'}`}
                >
                  <ul className="space-y-6">
                    {exp.points.map((point, pidx) => (
                      <li key={pidx} className="flex gap-5">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0"></div>
                        <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">{point}</p>
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
        <div className="grid lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10 }}
              className="group relative flex flex-col rounded-[56px] glass overflow-hidden border border-slate-200 dark:border-white/5 transition-all duration-500"
            >
              <div className="p-12 space-y-8 flex-1">
                <div className="flex justify-between items-start">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tidx) => (
                      <span key={tidx} className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-tighter px-3 py-1 rounded-lg bg-blue-600/10 border border-blue-600/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="px-5 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-[10px] uppercase tracking-widest">
                    Production
                  </div>
                </div>
                
                <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-4">
                  {project.description.map((desc, didx) => (
                    <p key={didx} className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">{desc}</p>
                  ))}
                </div>

                <div className="pt-8">
                  <div className="p-8 rounded-[40px] bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-700">
                    <p className="text-[10px] text-slate-400 dark:text-gray-500 font-black uppercase tracking-[0.3em] mb-3 group-hover:text-white/60">Success Metric</p>
                    <ul className="space-y-2">
                      {project.impact.map((imp, iidx) => (
                        <li key={iidx} className="flex items-start gap-3">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-white shrink-0" />
                          <p className="text-slate-900 dark:text-white text-xl font-black leading-tight group-hover:text-white transition-all">
                            {imp}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <footer id="contact" className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-32 pb-48">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-blue-500 font-mono text-sm font-bold uppercase tracking-widest">Available for Hire</p>
              <h2 className="text-7xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">LET'S <br /> COLLAB.</h2>
            </div>
            <p className="text-slate-600 dark:text-gray-400 text-2xl font-medium max-w-md">
              Specialized in healthcare automation & AI document intelligence. Let's build the future of medical systems.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: <Mail />, label: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, color: "bg-blue-600" },
                { icon: <Linkedin />, label: "linkedin/savinkumarn", href: `https://linkedin.com/in/${PERSONAL_INFO.linkedin}`, color: "bg-indigo-600" },
                { icon: <Github />, label: "github/savinkumarnsk", href: `https://github.com/savinkumarnsk`, color: "bg-slate-800" },
                { icon: <MessageSquare />, label: "WhatsApp", href: `https://wa.me/919597934436`, color: "bg-emerald-600" }
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  href={link.href}
                  target="_blank"
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-6 text-xl md:text-2xl font-black text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-3xl ${link.color} flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg`}>
                    {React.cloneElement(link.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="p-10 rounded-[48px] glass border border-slate-200 dark:border-white/5 space-y-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest">Academic Origin</h4>
                <div className="space-y-2">
                  <p className="text-2xl font-black text-slate-900 dark:text-white">B.Tech AI & Data Science</p>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-bold">Hindusthan Institute of Technology</p>
                  <div className="flex justify-between items-center text-slate-400 dark:text-gray-500 text-sm font-mono mt-4">
                    <span>CGPA: 8.61</span>
                    <span>2021 — 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-40 text-center">
          <p className="text-slate-400 dark:text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em]">SYSTEM_VERSION_3.0.0_STABLE • BUILT_WITH_PRECISION</p>
        </div>
      </footer>

      {/* Interactive AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;
