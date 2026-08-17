'use client';

import { motion } from 'framer-motion';
import ThreeScene from '@/components/ThreeScene';

// ------------------------------------------------------------
// Reusable Components
// ------------------------------------------------------------

const Section = ({
  children,
  id,
  className = '',
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => (
  <section
    id={id}
    className={`py-24 px-6 md:px-12 max-w-6xl mx-auto ${className}`}
  >
    {children}
  </section>
);

const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    }}
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
    <div className="flex flex-wrap justify-center gap-5 md:gap-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-white/60">
      <a href="#home" className="hover:text-white transition-colors">
        Home
      </a>
      <a href="#about" className="hover:text-white transition-colors">
        About
      </a>
      <a href="#skills" className="hover:text-white transition-colors">
        Skills
      </a>
      <a href="#experience" className="hover:text-white transition-colors">
        Experience
      </a>
      <a href="#projects" className="hover:text-white transition-colors">
        Projects
      </a>
      <a href="#certificates" className="hover:text-white transition-colors">
        Certificates
      </a>
      <a href="#contact" className="hover:text-white transition-colors">
        Contact
      </a>
    </div>
  </motion.nav>
);

const ProjectCard = ({
  title,
  description,
  tech,
  delay,
}: {
  title: string;
  description: string;
  tech: string[];
  delay: number;
}) => (
  <FadeIn delay={delay}>
    <div className="group relative h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <p className="text-white/60 mb-6 leading-relaxed text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-white/40"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </FadeIn>
);

const SkillCard = ({
  number,
  title,
  skills,
}: {
  number: string;
  title: string;
  skills: string[];
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
  >
    <div className="flex items-center justify-between mb-5">
      <span className="text-white/30 text-xs font-mono">{number}</span>
      <span className="text-white/80 font-medium text-sm">{title}</span>
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const CertificateCard = ({
  title,
  organization,
  description,
  file,
  delay,
}: {
  title: string;
  organization: string;
  description: string;
  file: string;
  delay: number;
}) => (
  <FadeIn delay={delay}>
    <div className="group relative h-full p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 flex flex-col h-full">
        <span className="text-xs uppercase tracking-widest text-white/30 mb-4">
          Certificate
        </span>

        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-sm text-white/50 mb-3">{organization}</p>

        <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">
          {description}
        </p>

        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
        >
          View Certificate
        </a>
      </div>
    </div>
  </FadeIn>
);

// ------------------------------------------------------------
// Main Page
// ------------------------------------------------------------

export default function Home() {
  const projects = [
    {
      title: 'Grey Grass — Smart Animal Feeding System',
      description:
        'A Flutter-based IoT application for controlling an automated animal feeding and door system. The system supports remote control and scheduled automation so feeding operations can be triggered at selected times.',
      tech: ['Flutter', 'Dart', 'IoT', 'Firebase', 'Automation'],
    },
    {
      title: 'Blue Smart Bus Attendance System',
      description:
        'A BLE-based smart attendance application designed to detect student BLE IDs and record attendance automatically. The system includes student registration, bus information and attendance records.',
      tech: ['Flutter', 'Dart', 'BLE', 'Django', 'REST API', 'MySQL'],
    },
    {
      title: 'Antaraal — BLE Sensor Monitor',
      description:
        'A real-time sensor monitoring application connected to ESP32 hardware. The application displays sensor information including radiation, tilt angle, atmospheric pressure and temperature along with location information.',
      tech: ['Flutter', 'Dart', 'ESP32', 'BLE', 'GPS'],
    },
    {
      title: 'Posture Detection Application',
      description:
        'An IoT-based posture monitoring application that receives posture information from an ESP32 and presents the data through a Flutter dashboard with graphs, history and weekly comparisons.',
      tech: ['Flutter', 'Dart', 'ESP32', 'IoT', 'Data Visualization'],
    },
    {
      title: 'IoT Car Control App',
      description:
        'A mobile application for controlling an IoT car through Bluetooth, including four-wheel movement and servo motor control.',
      tech: ['Flutter', 'Dart', 'Bluetooth', 'IoT', 'ESP32'],
    },
    {
      title: 'Hospital Management System — Don Bosco',
      description:
        'A hospital management system designed to manage patient information, bed allocation, doctor details and other required patient information in real time.',
      tech: ['Application Development', 'Database', 'Real-Time Data'],
    },
    {
      title: 'Interactive Educational Video Platform',
      description:
        'A platform designed to integrate educational textbook content into interactive video formats, creating a more engaging learning experience.',
      tech: ['JavaScript', 'Web Development', 'UI/UX'],
    },
    {
      title: 'AI-based Quiz Generator',
      description:
        'An AI-based application that generates customized quizzes based on user input, providing a personalized quiz experience.',
      tech: ['Python', 'AI', 'Machine Learning'],
    },
    {
      title: 'Video to Cartoon Converter',
      description:
        'An application designed to convert live video into cartoon-style visuals, exploring computer vision and creative media processing.',
      tech: ['Python', 'Computer Vision', 'AI'],
    },
    {
      title: 'Travel Management System',
      description:
        'A travel management website that allows users to plan trips, manage itineraries and handle accommodation-related planning.',
      tech: ['Web Development', 'Database', 'UI/UX'],
    },
    {
      title: 'Hospital Management System',
      description:
        'A hospital management application focused on patient records and appointment scheduling to streamline administrative workflows.',
      tech: ['Java', 'MySQL'],
    },
    {
      title: 'GreytHR — Chatbot Development Project',
      description:
        'A chatbot project developed to improve customer support and automate responses. The chatbot was trained using company data to improve its knowledge base and response accuracy.',
      tech: ['Chatbot', 'Automation', 'Company Data'],
    },
  ];

  return (
    <main id="home" className="relative min-h-screen bg-black text-white">
      {/* Existing 3D scene — DO NOT REMOVE */}
      <ThreeScene />

      {/* Background glow — kept behind everything */}
      <div className="fixed inset-0 -z-30 bg-black pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <Navbar />

      {/* -------------------------------------------------- */}
      {/* Hero */}
      {/* -------------------------------------------------- */}

      <Section className="min-h-screen flex flex-col justify-center items-center text-center">
        <FadeIn>
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/50 mb-6 tracking-widest uppercase">
            Full Stack • App Developer • Data Analyst • ML
          </span>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Vamshi Reddy
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Building scalable applications, intelligent solutions and
            data-driven experiences using modern software, machine learning
            and analytics technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 transition-colors"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#certificates"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Certificates
            </motion.a>
          </div>
        </FadeIn>
      </Section>

      {/* -------------------------------------------------- */}
      {/* About */}
      {/* -------------------------------------------------- */}

      <Section id="about" className="border-t border-white/5">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>

              <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                I am a developer focused on building practical software
                solutions across mobile applications, full stack development,
                IoT systems, artificial intelligence and data analytics.
              </p>

              <p className="text-lg text-white/60 leading-relaxed max-w-xl mt-5">
                My experience includes developing Flutter applications,
                building backend systems with Python and Django, working with
                databases and APIs, developing IoT and BLE applications, and
                using machine learning and data analysis to create
                data-driven solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Flutter',
                'Python',
                'Django',
                'Machine Learning',
                'Data Analysis',
                'Power BI',
                'Tableau',
                'SQL',
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2"
                >
                  <span className="text-white/40 text-xs font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="text-white/90 font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* -------------------------------------------------- */}
      {/* Skills */}
      {/* -------------------------------------------------- */}

      <Section id="skills" className="border-t border-white/5">
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-white/50">
              Technologies and tools I use to build applications and
              data-driven solutions.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          <SkillCard
            number="01"
            title="Development"
            skills={[
              'Flutter',
              'Dart',
              'Python',
              'Java',
              'JavaScript',
              'HTML',
              'CSS',
              'React',
              'Next.js',
            ]}
          />

          <SkillCard
            number="02"
            title="Backend & Database"
            skills={[
              'Django',
              'Django REST Framework',
              'REST APIs',
              'MySQL',
              'SQLite',
              'Firebase',
              'SQL',
            ]}
          />

          <SkillCard
            number="03"
            title="AI, ML & Data"
            skills={[
              'Machine Learning',
              'Python',
              'Data Analysis',
              'AI',
              'RAG',
              'LangChain',
              'ChromaDB',
              'Embeddings',
            ]}
          />

          <SkillCard
            number="04"
            title="Analytics & Tools"
            skills={[
              'Power BI',
              'Tableau',
              'Git',
              'GitHub',
              'IoT',
              'BLE',
              'ESP32',
              'Firebase',
            ]}
          />
        </div>
      </Section>

      {/* -------------------------------------------------- */}
      {/* Experience */}
      {/* -------------------------------------------------- */}

      <Section id="experience" className="border-t border-white/5">
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-white/50">
              Internship and practical development experience.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn>
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30">
                    Internship
                  </span>

                  <h3 className="text-2xl font-semibold mt-2">
                    APSIS Solutions
                  </h3>
                </div>

                <span className="text-sm text-white/40">
                  2026
                </span>
              </div>

              <p className="text-white/60 leading-relaxed mt-5 max-w-3xl">
                Practical software development experience involving
                application development, problem solving and working with
                modern development technologies.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30">
                    Internship
                  </span>

                  <h3 className="text-2xl font-semibold mt-2">
                    Greytip Software
                  </h3>
                </div>

                <span className="text-sm text-white/40">
                  2025
                </span>
              </div>

              <p className="text-white/60 leading-relaxed mt-5 max-w-3xl">
                Practical experience working on software-related tasks and
                development workflows, along with exposure to real-world
                project requirements.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* -------------------------------------------------- */}
      {/* Projects */}
      {/* -------------------------------------------------- */}

      <Section id="projects" className="border-t border-white/5">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Selected Projects</h2>

              <p className="text-white/50">
                A collection of applications, AI solutions, IoT systems and
                software projects I have worked on.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={idx * 0.08}
            />
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------- */}
      {/* Certificates */}
      {/* -------------------------------------------------- */}

      <Section id="certificates" className="border-t border-white/5">
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Certifications
            </h2>

            <p className="text-white/50">
              Certificates and professional learning achievements.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          <CertificateCard
            delay={0}
            title="Data Analytics Job Simulation"
            organization="Deloitte"
            description="Completed a data analytics focused job simulation involving practical analytical tasks."
            file="/deloitte.pdf"
          />

          <CertificateCard
            delay={0.1}
            title="AI Tools & ChatGPT"
            organization="be10x"
            description="Completed training focused on AI tools and practical applications of ChatGPT."
            file="/b10x.pdf"
          />

          <CertificateCard
            delay={0.2}
            title="Building Modern Web Applications with MERN Stack"
            organization="Edunet / AICTE"
            description="Completed learning focused on building modern web applications using the MERN stack."
            file="/edunet.pdf"
          />

          <CertificateCard
            delay={0.3}
            title="Internship Certificate"
            organization="APSIS Solutions"
            description="Internship completion certificate documenting practical industry experience."
            file="/apsis.pdf"
          />

          <CertificateCard
            delay={0.4}
            title="Internship Certificate"
            organization="Greytip Software"
            description="Internship-related certificate documenting practical professional experience."
            file="/greythr.pdf"
          />
        </div>
      </Section>

      {/* -------------------------------------------------- */}
      {/* Contact */}
      {/* -------------------------------------------------- */}

      <Section
        id="contact"
        className="border-t border-white/5 pb-48"
      >
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's build something together.
            </h2>

            <p className="text-white/50 mb-10 leading-relaxed">
              Interested in working together or discussing a project?
              Feel free to reach out.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:saivamshi200427@gmail.com"
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full md:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/60"
                >
                  <path d="m22 2-10 11" />
                  <path d="m22 2-7 20-4-9-9-4Z" />
                </svg>

                <span>Email Me</span>
              </a>

              <a
                href="https://linkedin.com/in/vamshi-reddy-865bb032b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full md:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/60"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>

                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/sai-vam-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full md:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/60"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>

                <span>GitHub</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Existing subtle background decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
      </div>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/20 text-sm">
        <p>
          © {new Date().getFullYear()} Vamshi Reddy. Designed & Developed by
          Vamshi Reddy
        </p>
      </footer>
    </main>
  );
}
