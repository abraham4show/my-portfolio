import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '💛' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'TailwindCSS', icon: '💨' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '💚' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'Django', icon: '🐍' },
      { name: 'FastAPI', icon: '⚡' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Git', icon: '📦' },
      { name: 'Cloudinary', icon: '🖼️' },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[128px]" />
      
      <div ref={ref} className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning frontend, backend, database, and cloud technologies.
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="glass-card p-6 md:p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  {category.title}
                </h3>
                
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 } 
                      }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-accent/50 hover:bg-accent border border-transparent hover:border-primary/30 transition-all cursor-default group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
