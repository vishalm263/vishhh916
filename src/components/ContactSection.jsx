import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../data/personal';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState({});
  
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // For direct email link approach
      const mailtoLink = `mailto:vishalpm263@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      
      // Open the mailto link in a new window
      window.open(mailtoLink, '_blank');
      
      // Show success message
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError(true);
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
    <section id="contact" className="section-padding bg-black-100">
      <div className="container-padding mx-auto">
        <motion.h2 
          {...fadeIn(0)}
          className="section-heading text-center"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          {...fadeIn(0.1)}
          className="text-secondary text-center max-w-2xl mx-auto mb-12"
        >
          Have a project in mind? Let's work together! Feel free to reach out using the contact form or through any of the provided channels.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div {...fadeIn(0.2)}>
            <h3 className="text-2xl font-bold text-white-100 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 bg-tertiary rounded-lg mr-4 text-white-100">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white-100 mb-1">Location</h4>
                  <p className="text-secondary">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-tertiary rounded-lg mr-4 text-white-100">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white-100 mb-1">Email</h4>
                  <a 
                    href={`mailto:vishalpm263@gmail.com`}
                    className="text-secondary hover:text-white-100 transition-colors"
                  >
                    vishalpm263@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-tertiary rounded-lg mr-4 text-white-100">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white-100 mb-1">Phone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-secondary hover:text-white-100 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-black-200 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-white-100 mb-3">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href={personalInfo.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-tertiary rounded-lg text-white-100 hover:bg-opacity-80 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href={personalInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-tertiary rounded-lg text-white-100 hover:bg-opacity-80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href={personalInfo.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-tertiary rounded-lg text-white-100 hover:bg-opacity-80 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div {...fadeIn(0.3)}>
            <h3 className="text-2xl font-bold text-white-100 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-black-200 border ${errors.name ? 'border-red-500' : 'border-tertiary'} rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary text-white-100`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-secondary mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-black-200 border ${errors.email ? 'border-red-500' : 'border-tertiary'} rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary text-white-100`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-black-200 border ${errors.subject ? 'border-red-500' : 'border-tertiary'} rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary text-white-100`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 bg-black-200 border ${errors.message ? 'border-red-500' : 'border-tertiary'} rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary text-white-100 resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane className="ml-2" />
              </Button>
              
              {submitSuccess && (
                <div className="p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
                  <p className="text-green-500">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {submitError && (
                <div className="p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
                  <p className="text-red-500">There was an error sending your message. Please try again or contact me directly at vishalpm263@gmail.com.</p>
                </div>
              )}
              
              <p className="text-xs text-secondary text-center mt-4">
                By submitting this form, your message will be sent to vishalpm263@gmail.com via your default email client.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 