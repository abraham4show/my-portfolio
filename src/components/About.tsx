import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cloud, Database, Briefcase, Calendar, MapPin } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Full Stack Development', description: 'End-to-end web solutions' },
  { icon: Cloud, label: 'Cloud Architecture', description: 'AWS & DevOps expertise' },
  { icon: Database, label: 'Database Design', description: 'MongoDB & SQL optimization' },
];

const experience = [
 { year: '2024 - Present', role: 'Freelance Full Stack Developer', company: 'Self-Employed' },
  { year: '2022 - 2024', role: 'IT Support Officer', company: 'segodaf Limited' },
  { year: '2021', role: 'IT Support Officer', company: 'Euro Asia' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      
      <div ref={ref} className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Building Digital <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I am a full-stack developer specializing in building scalable, high-performance web applications
              using modern technologies like React, Node.js, TypeScript, Python, and AWS.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - About text and highlights */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-primary-foreground">
                    SA
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Shorinwa Afolabi</h3>
                    <p className="text-muted-foreground">Full Stack Developer & DevOps Engineer</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Available Worldwide</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  I focus on clean architecture, performance optimization, and exceptional user experience.
                  With expertise spanning from frontend development to cloud infrastructure, I deliver
                  comprehensive solutions that scale.
                </p>
              </div>

              {/* Highlight cards */}
              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/30 transition-all cursor-default"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right column - Experience timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="relative pl-16 pb-8 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    
                    <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-2 text-sm text-primary mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.year}</span>
                      </div>
                      <h4 className="font-semibold text-lg">{exp.role}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
