import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { personalInfo } from '../data/personal';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const AboutSection = () => {
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

  return (
    <section id="about" className="section-padding bg-black-100">
      <div className="container-padding mx-auto">
        <motion.h2 
          {...fadeIn(0)}
          className="section-heading text-center"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div 
            {...fadeIn(0.2)}
            className="rounded-xl overflow-hidden shadow-card mx-auto md:mx-0 max-w-[320px] md:max-w-full"
          >
            <img 
              src={profileImage}
              alt="Profile"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          {/* Content */}
          <div>
            <motion.h3 
              {...fadeIn(0.3)}
              className="text-2xl font-bold text-white-100 mb-4"
            >
              Hi there! I'm {personalInfo.name}
            </motion.h3>
            
            <motion.p 
              {...fadeIn(0.4)}
              className="text-secondary mb-6 whitespace-pre-line"
            >
              {personalInfo.longBio}
            </motion.p>
            
            <motion.div 
              {...fadeIn(0.5)}
              className="flex flex-col gap-3 text-secondary mb-6"
            >
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-tertiary" size={16} />
                <span>{personalInfo.location}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-tertiary" size={16} />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-white-100 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-tertiary" size={16} />
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-white-100 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn(0.6)}
              className="flex gap-4"
            >
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <Button>
                  Contact Me
                </Button>
              </Link>
              
              <a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  Resume
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 