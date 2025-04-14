import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../data/personal';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center bg-hero-pattern bg-cover bg-center bg-no-repeat section-padding"
    >
      <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
      
      <div className="container-padding mx-auto z-10 flex flex-col items-center md:items-start">
        <div className="text-center md:text-left max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sub-heading"
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white-100 mb-4"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl text-secondary font-medium mb-6"
          >
            {personalInfo.role}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-secondary text-lg mb-8 max-w-2xl"
          >
            {personalInfo.bio}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <Button size="lg">
                View Projects
              </Button>
            </Link>
            
            <a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-6 mt-8 justify-center md:justify-start"
          >
            <a 
              href={personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-white-100 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href={personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-white-100 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href={personalInfo.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-white-100 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
          <FaArrowDown className="text-secondary hover:text-white-100 transition-colors" size={24} />
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection; 