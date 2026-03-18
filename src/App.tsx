/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Smartphone, 
  Database, 
  Cpu, 
  Download,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Award,
  Globe
} from "lucide-react";

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-black text-white rounded-lg">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold tracking-tight text-black">{children}</h2>
  </div>
);

const SkillBadge = ({ name }: { name: string; key?: string }) => (
  <span className="px-3 py-1 bg-zinc-100 border border-zinc-200 text-zinc-800 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors cursor-default">
    {name}
  </span>
);

const ProjectCard = ({ title, description, tags, link }: { title: string; description: string; tags: string[]; link?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md transition-all group"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-black transition-colors">{title}</h3>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black transition-colors">
          <ExternalLink size={20} />
        </a>
      )}
    </div>
    <p className="text-zinc-600 mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 bg-zinc-50 px-2 py-1 rounded border border-zinc-100">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ExperienceItem = ({ role, company, period, description }: { role: string; company: string; period: string; description: string[] }) => (
  <div className="relative pl-8 border-l border-zinc-200 pb-12 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-black rounded-full" />
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
      <div>
        <h3 className="text-xl font-bold text-zinc-900">{role}</h3>
        <p className="text-zinc-500 font-medium">{company}</p>
      </div>
      <span className="text-sm font-mono text-zinc-400 mt-1 md:mt-0">{period}</span>
    </div>
    <ul className="mt-4 space-y-2">
      {description.map((item, i) => (
        <li key={i} className="flex gap-2 text-zinc-600 leading-relaxed">
          <ChevronRight size={18} className="text-zinc-300 shrink-0 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  const skills = {
    mobile: ["React Native", "TypeScript", "JavaScript", "Redux Toolkit", "Redux-Saga", "Hooks"],
    backend: ["Node.js", "Express.js", "MongoDB", "Firebase", "Supabase", "REST APIs"],
    ai: ["AI / LLM API Integration", "Intelligent Chatbots", "Personalization Engines", "Data Processing"],
    tools: ["AWS Lambda", "Docker", "Git", "Stripe", "In-App Purchases", "RevenueCat"]
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 selection:bg-black selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">FF.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
          <a 
            href="mailto:farhan.officials96@gmail.com"
            className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all"
          >
            Hire Me
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="hero" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold tracking-widest uppercase text-zinc-500 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for new projects
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                Farhan <br />
                <span className="text-zinc-400">Fareed</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
                Senior Software Engineer specializing in <span className="text-black font-semibold">React Native</span> and <span className="text-black font-semibold">Node.js</span>. 
                Building intelligent, AI-integrated mobile and web applications that deliver exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/Farhan-96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-zinc-800 transition-all"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/farhan-fareed-a1947a137" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-zinc-200 text-black rounded-xl font-medium hover:bg-zinc-50 transition-all"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 group shadow-2xl"
            >
              {/* 
                Note to Farhan: Replace this URL with your actual profile picture path 
                after exporting the project or uploading the image to a CDN.
              */}
              <img 
                src="https://picsum.photos/seed/farhan/1200/1600" 
                alt="Farhan Fareed" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <div className="flex gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
                    <Smartphone className="text-white" size={28} />
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
                    <Database className="text-white" size={28} />
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
                    <Cpu className="text-white" size={28} />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight">Farhan Fareed</h3>
                  <p className="text-sm font-medium opacity-70 tracking-widest uppercase">Senior Software Engineer</p>
                  <p className="text-xs opacity-50 flex items-center gap-1 mt-2">
                    <MapPin size={12} />
                    Rawalpindi, Pakistan
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32">
          <SectionTitle icon={Globe}>Professional Summary</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-2xl text-zinc-600 leading-relaxed">
                Software Engineer with <span className="text-black font-semibold">3+ years of experience</span> in React Native and backend development using Node.js, Express.js, and MongoDB. 
                I specialize in building AI-powered mobile applications and intelligent systems, focusing on performance, scalability, and user-centric design.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Core Focus</h4>
                <ul className="space-y-3 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    Mobile App Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    Full Stack Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    AI Integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <SectionTitle icon={Code2}>Technical Arsenal</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Smartphone size={20} className="text-zinc-400" />
                Mobile & Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map(s => <SkillBadge key={s} name={s} />)}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Database size={20} className="text-zinc-400" />
                Backend & DB
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(s => <SkillBadge key={s} name={s} />)}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Cpu size={20} className="text-zinc-400" />
                AI & Intelligence
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map(s => <SkillBadge key={s} name={s} />)}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Globe size={20} className="text-zinc-400" />
                Cloud & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(s => <SkillBadge key={s} name={s} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <SectionTitle icon={Briefcase}>Professional Journey</SectionTitle>
          <div className="max-w-3xl">
            <ExperienceItem 
              role="Sr. React Native Developer"
              company="Swam Tech"
              period="Jan 2025 – Present"
              description={[
                "Developed cross-platform mobile apps using React Native & TypeScript.",
                "Built robust backend APIs with Node.js, Express.js, and MongoDB.",
                "Integrated AI services for chatbot-style mobile applications.",
                "Deployed applications to App Store, Play Store, and cloud environments."
              ]}
            />
            <ExperienceItem 
              role="Sr. React Native Developer (Part-Time)"
              company="The Revolution Technologies Pvt Ltd"
              period="Oct 2024 – Present"
              description={[
                "Developed mobile apps from Figma designs using React Native.",
                "Integrated Stripe payments, webhooks, and notification systems.",
                "Deployed backend services using AWS Lambda with Docker."
              ]}
            />
            <ExperienceItem 
              role="React Native Developer"
              company="Smile Tech"
              period="Jan 2022 – Dec 2024"
              description={[
                "Built and deployed cross-platform apps using React Native and Firebase.",
                "Integrated REST APIs and managed cloud backend services.",
                "Collaborated with design teams to implement pixel-perfect UIs."
              ]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <SectionTitle icon={Smartphone}>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Ask-AI-All ChatBot"
              description="AI-powered chatbot with authentication, image & link Q&A, OTP, calendar, and IAP integration."
              tags={["React Native", "AI Integration", "Node.js", "IAP"]}
            />
            <ProjectCard 
              title="Profile Nest App"
              description="Cross-platform application featuring home screen widgets for both iOS and Android platforms."
              tags={["React Native", "iOS Widgets", "Android Widgets"]}
            />
            <ProjectCard 
              title="Notigift App"
              description="Custom UI components, notifications, OTP, and In-App Purchases implementation."
              tags={["React Native", "Custom UI", "Push Notifications"]}
            />
            <ProjectCard 
              title="Kindraise App (Backend)"
              description="Serverless backend architecture deployed using AWS Lambda and Docker for scalability."
              tags={["Node.js", "AWS Lambda", "Docker", "Serverless"]}
            />
          </div>
          <div className="mt-12 p-8 bg-zinc-900 text-white rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Other Notable Projects</h3>
              <p className="text-zinc-400">Halaly App, Resumley Website, Digital Quran, Digital Tasbeeh, Trainify Inc.</p>
            </div>
            <a 
              href="https://github.com/Farhan-96" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all whitespace-nowrap"
            >
              View More on GitHub
              <ExternalLink size={18} />
            </a>
          </div>
        </section>

        {/* Education & Certs */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div>
            <SectionTitle icon={GraduationCap}>Education</SectionTitle>
            <div className="p-6 bg-white border border-zinc-200 rounded-2xl">
              <h3 className="text-xl font-bold text-zinc-900">BS (Information Technology)</h3>
              <p className="text-zinc-500 font-medium">Arid Agriculture University, Rawalpindi</p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">
                CGPA: 3.46 / 4.0
              </div>
            </div>
          </div>
          <div>
            <SectionTitle icon={Award}>Certifications</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "AI Automation Certification – Zapier",
                "n8n Level 1 Certification",
                "JavaScript Basics – HackerRank",
                "Computer Basics – Al Noor"
              ].map((cert, i) => (
                <div key={i} className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl text-sm font-medium text-zinc-700">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <div className="bg-zinc-100 rounded-[2rem] p-8 md:p-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Let's build something <br />extraordinary.</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <a href="mailto:farhan.officials96@gmail.com" className="flex items-center gap-3 text-xl font-medium hover:text-zinc-500 transition-colors">
                <Mail className="text-zinc-400" />
                farhan.officials96@gmail.com
              </a>
              <a href="tel:+923125642025" className="flex items-center gap-3 text-xl font-medium hover:text-zinc-500 transition-colors">
                <Phone className="text-zinc-400" />
                +92-312-5642025
              </a>
              <div className="flex items-center gap-3 text-xl font-medium">
                <MapPin className="text-zinc-400" />
                Rawalpindi, Pakistan
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:farhan.officials96@gmail.com"
                className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-black/10"
              >
                Send Message
              </a>
              <button 
                onClick={() => window.print()}
                className="px-8 py-4 bg-white border border-zinc-200 text-black rounded-2xl font-bold hover:bg-zinc-50 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-sm">
        <p>© 2026 Farhan Fareed. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="https://github.com/Farhan-96" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/farhan-fareed-a1947a137" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
