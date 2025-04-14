import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { education, certifications } from '../data/resume';
import { personalInfo } from '../data/personal';
import { formatDate } from '../lib/utils';
import { FaGraduationCap, FaCertificate, FaDownload, FaAward } from 'react-icons/fa';

const TimelineItem = ({ data, index, type }) => {
  // Custom icon based on type
  const IconComponent = type === 'education' 
    ? FaGraduationCap 
    : type === 'certification'
      ? FaCertificate
      : FaAward;
  
  // Format dates
  const startDate = formatDate(data.startDate);
  const endDate = data.endDate ? formatDate(data.endDate) : 'Present';
  
  // Different data structure based on type
  const title = type === 'education' 
    ? data.degree 
    : type === 'certification'
      ? data.name
      : data.title;
  
  const subtitle = type === 'education' 
    ? data.school 
    : type === 'certification'
      ? data.organization
      : data.issuer;
  
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
      className="mb-8 relative pl-8 border-l-2 border-tertiary"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] mt-1.5 p-1.5 rounded-full bg-tertiary text-white-100">
        <IconComponent size={16} />
      </div>
      
      {/* Content */}
      <div className="bg-black-200 p-5 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-white-100">{title}</h3>
        <h4 className="text-secondary font-medium mb-2">{subtitle}</h4>
        
        <div className="flex items-center text-sm mb-3">
          <span className="px-2 py-1 rounded-full bg-black-100 text-secondary">
            {startDate} - {endDate}
          </span>
          
          {data.location && (
            <span className="ml-3 text-secondary">
              {data.location}
            </span>
          )}
        </div>
        
        <p className="text-secondary">{data.description}</p>
        
        {/* URL for certifications */}
        {type === 'certification' && data.url && (
          <a 
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-tertiary hover:underline text-sm"
          >
            View Certificate
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="container-padding mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">My Resume</h2>
          <p className="text-secondary max-w-3xl mx-auto mb-6">
            My education and professional certifications.
          </p>
          
          <a 
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button className="mt-2">
              <FaDownload className="mr-2" /> Download Resume
            </Button>
          </a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white-100 mb-6 flex items-center"
            >
              <FaGraduationCap className="mr-3 text-tertiary" size={24} />
              Education
            </motion.h3>
            
            <div>
              {education.map((item, index) => (
                <TimelineItem 
                  key={item.id}
                  data={item}
                  index={index}
                  type="education"
                />
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white-100 mb-6 flex items-center"
            >
              <FaCertificate className="mr-3 text-tertiary" size={24} />
              Certifications
            </motion.h3>
            
            <div>
              {certifications.map((item, index) => (
                <TimelineItem 
                  key={item.id}
                  data={item}
                  index={index}
                  type="certification"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection; 