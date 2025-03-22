import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

// Fix linter warning
const MotionDiv = motion.div;
const MotionA = motion.a;
const MotionLink = motion(Link);

// Custom X (Twitter) Icon - Exact same as Navbar
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

// Custom TikTok Icon - Exact same as Navbar
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

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Me", path: "/contact" },
  ];

  // Exact same social links as Navbar
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/emmanuel-atuhaire-b0a90330b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/emmanuel.atuhaire.3?igsh=b2Nqb2x1Y3owaWI=",
    },
    { icon: <XIcon size={20} />, url: "https://x.com/AtuhaireEmma?s=09" },
    {
      icon: <TikTokIcon size={20} />,
      url: "https://www.tiktok.com/@emmanuelatuhaire7?_t=ZM-8uqVri9J0CN&_r=1",
    },
  ];

  return (
    <footer className="relative bg-[--color-primary-900]/80 backdrop-blur-md border-t border-[var(--color-primary-800)]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium text-[var(--color-secondary-50)]">Atuhaire</h2>
            <p className="text-[var(--color-secondary-300)] text-sm leading-relaxed">
              Ugandan actor and performer, bringing stories to life through authentic performances and compelling narratives.
            </p>
          </MotionDiv>

          {/* Quick Links */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-[var(--color-secondary-50)]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <MotionLink
                    to={link.path}
                    className="text-[var(--color-secondary-300)] hover:text-[var(--color-secondary-400)] transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Contact Info */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-[var(--color-secondary-50)]">Contact</h3>
            <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-[var(--color-secondary-300)] text-sm group">
                <Mail size={16} className="group-hover:text-[var(--color-secondary-400)]" />
                <span className="group-hover:text-[var(--color-secondary-400)] transition-colors duration-300">
                  atuhaire.emmanuel@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-2 text-[var(--color-secondary-300)] text-sm group">
                <Phone size={16} className="group-hover:text-[var(--color-secondary-400)]" />
                <span className="group-hover:text-[var(--color-secondary-400)] transition-colors duration-300">
                  +256 123 456 789
                </span>
              </li>
              <li className="flex items-center space-x-2 text-[var(--color-secondary-300)] text-sm group">
                <MapPin size={16} className="group-hover:text-[var(--color-secondary-400)]" />
                <span className="group-hover:text-[var(--color-secondary-400)] transition-colors duration-300">
                  Kampala, Uganda
                </span>
              </li>
            </ul>
          </MotionDiv>

          {/* Social Links */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-[var(--color-secondary-50)]">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <MotionA
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-secondary-50)] hover:text-[var(--color-secondary-400)] transition relative"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }} 
                >
                  {social.icon}
                </MotionA>
              ))}
            </div>
          </MotionDiv>
        </div>

        {/* Copyright */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[var(--color-primary-800)] text-center"
        >
          <p className="text-[var(--color-secondary-300)] text-sm">
            © {new Date().getFullYear()} Emmanuel Atuhaire. All rights reserved.
          </p>
        </MotionDiv>
      </div>
    </footer>
  );
};

export default Footer;
