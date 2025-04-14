import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from './ui/progress';
import { skills } from '../data/skills';
import { FaCode, FaServer, FaPaintBrush, FaTools, FaLayerGroup } from 'react-icons/fa';

const SkillsSection = () => {
  const fadeIn = (delay) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.5, 
      delay,
      ease: "easeInOut"
    },
    viewport: { once: true }
  });
  
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'FaCode':
        return <FaCode size={24} />;
      case 'FaServer':
        return <FaServer size={24} />;
      case 'FaLayerGroup':
        return <FaLayerGroup size={24} />;
      case 'FaPaintBrush':
        return <FaPaintBrush size={24} />;
      case 'FaTools':
        return <FaTools size={24} />;
      default:
        return <FaCode size={24} />;
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-padding mx-auto">
        <motion.h2 
          {...fadeIn(0)}
          className="section-heading text-center"
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          {...fadeIn(0.1)}
          className="text-secondary text-center max-w-3xl mx-auto mb-12"
        >
          I've worked with a variety of technologies in the web development world.
          Here's an overview of my technical skills and proficiency levels.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              {...fadeIn(0.2 + index * 0.1)}
              className="bg-black-200 p-6 rounded-lg shadow-card"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-tertiary rounded-lg mr-4 text-white-100">
                  {getIconComponent(skill.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white-100">{skill.name}</h3>
                  <p className="text-secondary text-sm">{skill.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {skill.technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white-100">{tech.name}</span>
                      <span className="text-secondary text-sm">{tech.proficiency}%</span>
                    </div>
                    <Progress value={tech.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 