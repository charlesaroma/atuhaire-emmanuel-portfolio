import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';

// Add the custom X and TikTok icons from Navbar
const XIcon = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "atuhaire.emmanuel@gmail.com",
      link: "mailto:atuhaire.emmanuel@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+256 123 456 789",
      link: "tel:+256123456789"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Kampala, Uganda",
      link: "#"
    }
  ];

  // Update social links to match Navbar/Footer
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/emmanuel-atuhaire-b0a90330b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn"
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/emmanuel.atuhaire.3?igsh=b2Nqb2x1Y3owaWI=",
      label: "Instagram"
    },
    {
      icon: <XIcon size={20} />,
      url: "https://x.com/AtuhaireEmma?s=09",
      label: "X (Twitter)"
    },
    {
      icon: <TikTokIcon size={20} />,
      url: "https://www.tiktok.com/@emmanuelatuhaire7?_t=ZM-8uqVri9J0CN&_r=1",
      label: "TikTok"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center mb-1">
          <div className="w-8 h-[2px] bg-[--color-primary] mr-2"></div>
          <span className="text-[var(--color-accent-600)] text-sm tracking-wider">GET IN TOUCH</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-normal text-[var(--color-accent-600)] mb-6">
          LET'S <span className="text-[var(--color-secondary-400)]">CONNECT</span>
        </h2>
        <p className="text-[var(--color-accent-600)] text-sm md:text-base max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center gap-4 group hover:bg-[var(--color-primary-800)]/30 p-4 rounded-lg transition-all duration-300"
              >
                <div className="p-3 bg-[var(--color-secondary-400)]/10 rounded-lg text-[var(--color-secondary-400)] group-hover:bg-[var(--color-secondary-400)]/20">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-[var(--color-accent-600)]">{info.title}</p>
                  <p className="text-[var(--color-accent-600)]">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg text-[var(--color-accent-600)]">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--color-primary-800)]/30 rounded-lg text-[var(--color-secondary-400)] hover:bg-[var(--color-secondary-400)]/20 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--color-accent-600)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-primary-800)]/30 border border-white/10 rounded-lg px-4 py-3 text-[var(--color-accent-600)] focus:outline-none focus:border-[var(--color-secondary-400)] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--color-accent-600)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[var(--color-primary-800)]/30 border border-white/10 rounded-lg px-4 py-3 text-[var(--color-accent-600)] focus:outline-none focus:border-[var(--color-secondary-400)] transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-[var(--color-accent-600)] mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[var(--color-primary-800)]/30 border border-white/10 rounded-lg px-4 py-3 text-[var(--color-accent-600)] focus:outline-none focus:border-[var(--color-secondary-400)] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-[var(--color-accent-600)] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-[var(--color-primary-800)]/30 border border-white/10 rounded-lg px-4 py-3 text-[var(--color-accent-600)] focus:outline-none focus:border-[var(--color-secondary-400)] transition-colors resize-none"
                required
              ></textarea>
            </div>
            <div className="flex justify-center md:justify-start w-full">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-transparent border cursor-pointer border-[--color-primary] hover:bg-[--color-primary] text-[var(--color-accent-600)] px-5 py-2 md:px-6 md:py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(123,97,255,0.1)]"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-secondary-400)]/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Contact;
