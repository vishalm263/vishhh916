import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Button } from './ui/button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.5, 
      delay: 0.1 * index,
      ease: "easeInOut"
    },
    viewport: { once: true }
  };
  
  return (
    <motion.div 
      {...fadeIn}
      className="bg-black-200 rounded-xl overflow-hidden shadow-card group"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-tertiary bg-opacity-90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={project.source_code_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black-100 text-white-100 hover:bg-opacity-80 transition-all"
            aria-label="View Source Code"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href={project.live_demo_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black-100 text-white-100 hover:bg-opacity-80 transition-all"
            aria-label="View Live Demo"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white-100 mb-2">{project.title}</h3>
        <p className="text-secondary mb-4 line-clamp-3">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-tertiary text-white-100 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll 
    ? projects 
    : projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="section-padding bg-black-100">
      <div className="container-padding mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center"
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-secondary text-center max-w-3xl mx-auto mb-12"
        >
          Here are some of my recent projects. Each project solves a specific problem
          and demonstrates my skills in different technologies.
        </motion.p>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        {/* Show All/Less Button */}
        {projects.length > 3 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "Show All Projects"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;