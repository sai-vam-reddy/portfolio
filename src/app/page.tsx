'use client';

import { motion } from 'framer-motion';
import ThreeScene from '@/components/ThreeScene';
<div className="fixed inset-0 -z-30 bg-black">
  <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full" />
  <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full" />
</div>
// --- Components ---

const Section = ({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 max-w-6xl mx-auto ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
  >
    <div className="flex gap-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-white/60">
      <a href="#home" className="hover:text-white transition-colors">Home</a>
      <a href="#about" className="hover:text-white transition-colors">About</a>
      <a href="#projects" className="hover:text-white transition-colors">Projects</a>
      <a href="#contact" className="hover:text-white transition-colors">Contact</a>
    </div>
  </motion.nav>
);

const ProjectCard = ({ title, description, tech, delay }: { title: string, description: string, tech: string[], delay: number }) => (
  <FadeIn delay={delay}>
    <div className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/60 mb-6 leading-relaxed text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-white/40">
            {t}
          </span>
        ))}
      </div>
    </div>
  </FadeIn>
);

// --- Main Page ---

export default function Home() {

  const projects = [
    {
      title: "Blue Attendance System",
      description: "Bluetooth-based smart attendance system that automates student tracking and reduces manual errors.",
      tech: ["Flutter", "Bluetooth", "Firebase"],
    },
    {
      title: "Interactive Educational Video Platform",
      description: "A platform that converts textbook content into interactive video formats to enhance learning.",
      tech: ["JavaScript", "UI/UX", "Web"],
    },
    {
      title: "Hospital Management System",
      description: "A system to manage patient records, appointments, and hospital workflows efficiently.",
      tech: ["Java", "MySQL"],
    },
    {
      title: "Smart Animal Feeding System (Grey Grass)",
      description: "Built a Flutter-based IoT system to remotely control feeding mechanisms for livestock. Integrated timer-based automation to schedule feeding, reducing manual effort and ensuring consistent feeding cycles.",
      tech: ["Flutter", "IoT", "Automation", "Mobile App"],
    }
  ];


  return (
    <main id="home" className="relative min-h-screen">
      <ThreeScene />
      <Navbar />

      {/* Hero Section */}
      <Section className="min-h-screen flex flex-col justify-center items-center text-center">
        <FadeIn>
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/50 mb-6 tracking-widest uppercase">
            Full Stack Developer • App Developer • Data Analyst
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Vamshi Reddy
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Building scalable applications and data-driven solutions using modern technologies, machine learning, and analytics tools.
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 transition-colors"
          >
            View Projects
          </motion.a>
        </FadeIn>
      </Section>

      {/* About Section */}
      <Section id="about" className="border-t border-white/5">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">About</h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                I am a passionate developer with experience in full stack development, mobile app development, and data analytics.
                I build scalable applications and analyze data to extract meaningful insights.
                I also have experience with machine learning concepts and visualization tools like Power BI and Tableau.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'C++',
                'Python',
                'Flutter',
                'JavaScript',
                'HTML',
                'CSS',
                'Node.js',
                'Machine Learning',
                'Data Analysis',
                'Power BI',
                'Tableau',
                'Git'
              ].map((skill, index) => (
                <div key={skill} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
                  <span className="text-white/40 text-xs font-mono">0{index + 1}</span>
                  <span className="text-white/90 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="border-t border-white/5">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
              <p className="text-white/50">A collection of things I've built recently.</p>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="border-t border-white/5 pb-48">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something together.</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="mailto:saivamshi200427@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full md:w-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="m22 2-10 11" /><path d="m22 2-7 20-4-9-9-4Z" /></svg>
                <span>Email Me</span>
              </a>
              <a href="https://linkedin.com/in/vamshi-reddy-865bb032b" target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full md:w-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/sai-vam-reddy" target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full md:w-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
      </div>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/20 text-sm">
        <p>© {new Date().getFullYear()} Vamshi Reddy. Designed & Developed by Vamshi Reddy</p>
      </footer>
    </main>
  );
}