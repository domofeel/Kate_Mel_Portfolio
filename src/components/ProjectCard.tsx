import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link to={`/case/${project.id}`}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-neutral-900 border border-white/5">
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.08]"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end [text-shadow:0_2px_24px_rgba(0,0,0,0.75)]">
            <div>
              <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-4xl font-display font-medium tracking-tight">{project.title}</h3>
            </div>
            <div className="bg-white text-black p-4 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
