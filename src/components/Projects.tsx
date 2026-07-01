import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  demoCredentials?: {
    admin: { username: string; password: string };
    teacher: { username: string; password: string };
    student: { username: string; password: string };
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Shopanidam E-commerce Platform',
    description:
      'A modern e-commerce web application built with React and Node.js, featuring product browsing, shopping cart functionality, secure checkout, and dynamic content management. Designed with a responsive UI to ensure seamless shopping across all devices.',
    image: '/img/portfolioProject.jpg',
    tags: ['React', 'Node.js', 'E-commerce', 'Responsive Design'],
    liveUrl: 'https://shopanidam.com/',
    githubUrl: 'https://github.com/abraham4show/',
    featured: true,
  },
  {
    id: 2,
    title: 'Dispatch Riders Platform',
    description:
      'A logistics and dispatch management platform that connects customers with dispatch riders. Includes features such as request creation, order tracking, and real-time status updates. Built with a scalable React frontend and Node.js backend.',
    image: '/img/portfolioImage.jpeg',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'HFC Youth Ministry Website',
    description:
      'A responsive and modern website developed for a youth ministry to showcase events, announcements, and activities. Built with React and TailwindCSS, featuring clean UI design, fast performance, and mobile-friendly layout.',
    image: '/img/portfolioImage2.jpeg.jpg',
    tags: ['React', 'TailwindCSS', 'Responsive Design', 'Frontend'],
    liveUrl: 'https://hfc-youth-ministry.netlify.app/',
    githubUrl: 'https://github.com/abraham4show/youth-ministry',
  },
  {
    id: 4,
    title: 'Wedding Photo Upload Platform',
    description:
      'A photo upload and sharing platform built with React and Node.js, allowing wedding guests to upload images and videos. Integrated with Cloudinary for media storage and MongoDB for data management, ensuring secure and efficient file handling.',
    image: '/img/image.png',
    tags: ['React', 'Node.js', 'Cloudinary', 'MongoDB'],
    liveUrl: 'https://picture-uploads.netlify.app/',
    githubUrl: 'https://github.com/abraham4show/fileUpload',
  },
  {
    id: 6,
    title: 'Oni-Ikoyi Estate — Luxury Real Estate Platform',
    description:
      'A premium real estate platform for Nigeria\'s most exclusive waterfront estate. The website showcases luxury properties with multi-image galleries, interactive 3D property viewing, and a complete inspection booking system integrated with Formspree for direct owner communication. Features include property filtering by type (Land, Detached, Semi-Detached, Duplex), dynamic property cards with availability status, and a responsive design optimized for all devices. Built with React, TypeScript, TailwindCSS, and Framer Motion for smooth animations.',
    image: '/img/IKOYI-BG.jpg',
    tags: ['React', 'TypeScript', 'TailwindCSS', '3D Integration', 'Framer Motion', 'Real Estate'],
    liveUrl: 'https://oni-ikoyi.netlify.app/',
    githubUrl: 'https://github.com/abraham4show/oni-ikoyi-dreamweaver.git',
    featured: true,
  },
  {
    id: 5,
    title: 'School Management System',
    description:
      'A full‑stack school management platform where teachers can create and publish exams, students can take exams and view results, and admins manage classes, attendance, and users. Features include role‑based dashboards, automatic exam scoring, real‑time notifications, and bulk data assignments. Built with Django REST Framework, React, Tailwind CSS, JWT authentication, and PostgreSQL.',
    image: '/img/school-management.png',
    tags: ['Django', 'React', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'Render', 'Netlify'],
    liveUrl: 'https://django-school-project.netlify.app',
    githubUrl: 'https://github.com/abraham4show/django-school-project-backend',
    demoCredentials: {
      admin: { username: 'Afostardb', password: 'admin123' },
      teacher: { username: 'mary', password: 'changeme123' },
      student: { username: 'bob', password: 'changeme123' },
    },
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative h-full glass-card rounded-2xl overflow-hidden hover-lift">
        {/* Image */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                Featured
              </span>
            </div>
          )}

          {/* Hover overlay with links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary text-primary-foreground"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card border border-border"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-accent text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Demo Credentials (only if present) */}
          {project.demoCredentials && (
            <div className="mt-4 pt-2 border-t border-border/50">
              <p className="text-xs text-muted-foreground font-medium mb-1">Demo Credentials:</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-muted-foreground">
                  <span className="font-medium text-primary">Admin:</span>{' '}
                  {project.demoCredentials.admin.username}
                  <br />
                  <span className="text-[10px]">pw: {project.demoCredentials.admin.password}</span>
                </div>
                <div className="text-muted-foreground">
                  <span className="font-medium text-primary">Teacher:</span>{' '}
                  {project.demoCredentials.teacher.username}
                  <br />
                  <span className="text-[10px]">pw: {project.demoCredentials.teacher.password}</span>
                </div>
                <div className="text-muted-foreground">
                  <span className="font-medium text-primary">Student:</span>{' '}
                  {project.demoCredentials.student.username}
                  <br />
                  <span className="text-[10px]">pw: {project.demoCredentials.student.password}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />

      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my expertise in building modern, scalable applications.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View more button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/abraham4show" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;