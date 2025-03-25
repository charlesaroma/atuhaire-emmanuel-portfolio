import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clapperboard,
  Star,
  Film
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

  // Animation variants for floating effect
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Film reel animation
  const reelAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <footer className="relative bg-[var(--color-primary-900)] backdrop-blur-md border-t border-[var(--color-accent-600)]/10 overflow-hidden">
      {/* Decorative Elements */}
      <MotionDiv
        className="absolute -left-20 top-10 opacity-10 text-[var(--color-secondary-500)]"
        animate={reelAnimation.animate}
      >
        <Film size={150} />
      </MotionDiv>
      
      <MotionDiv
        className="absolute -right-10 -bottom-10 opacity-10 text-[var(--color-secondary-500)]"
        animate={reelAnimation.animate}
      >
        <Clapperboard size={120} />
      </MotionDiv>

      {/* Floating stars */}
      <MotionDiv
        className="absolute top-10 right-1/4 opacity-10"
        animate={floatingAnimation.animate}
      >
        <Star 
          size={40} 
          className="text-[var(--color-secondary-500)] drop-shadow-[0_0_10px_var(--color-primary-500)] filter-none" 
        />
      </MotionDiv>
      
      <MotionDiv
        className="absolute bottom-20 left-1/3 opacity-10"
        animate={{
          ...floatingAnimation.animate,
          transition: { ...floatingAnimation.animate.transition, delay: 1 }
        }}
      >
        <Star 
          size={70} 
          className="text-[var(--color-secondary-500)] drop-shadow-[0_0_10px_var(--color-accent-600)] filter-none" 
        />
      </MotionDiv>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section with spotlight effect */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 relative group text-center md:text-left"
          >
            <div className="absolute inset-0 bg-gradient-radial from-[var(--color-secondary-400)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-2xl font-medium text-[var(--color-secondary)] relative">
              Atuhaire
            </h2>
            <p className="text-[var(--color-accent-600)] text-sm leading-relaxed">
              Ugandan actor and performer, bringing stories to life through authentic performances and compelling narratives.
            </p>
          </MotionDiv>

          {/* Quick Links with slide effect */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-lg font-medium text-[var(--color-secondary)]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <MotionDiv
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MotionLink
                    to={link.path}
                    className="text-[var(--color-accent-600)] hover:text-[var(--color-secondary-500)] transition-colors duration-300 text-sm flex items-center gap-2 justify-center md:justify-start"
                    whileHover={{ x: 5 }}
                  >
                    <span>•</span> {link.name}
                  </MotionLink>
                </MotionDiv>
              ))}
            </ul>
          </MotionDiv>

          {/* Contact Info */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-lg font-medium text-[var(--color-secondary)]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-[var(--color-accent-600)] text-sm group justify-center md:justify-start">
                <Mail size={16} className="group-hover:text-[var(--color-accent-600)]" />
                <span className="group-hover:text-[var(--color-secondary-300)] transition-colors duration-300">
                  emmanuelatuhaire24@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-2 text-[var(--color-accent-600)] text-sm group justify-center md:justify-start">
                <Phone size={16} className="group-hover:text-[var(--color-secondary-300)]" />
                <span className="group-hover:text-[var(--color-secondary-300)] transition-colors duration-300">
                  +256 745 652 295
                </span>
              </li>
              <li className="flex items-center space-x-2 text-[var(--color-accent-600)] text-sm group justify-center md:justify-start">
                <MapPin size={16} className="group-hover:text-[var(--color-secondary-300)]" />
                <span className="group-hover:text-[var(--color-secondary-300)] transition-colors duration-300">
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
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-lg font-medium text-[var(--color-secondary)]">Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <MotionA
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent-600)] hover:text-[var(--color-secondary-300)] transition relative"
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

        {/* Copyright with film strip effect */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[var(--color-accent-600)]/15 text-center relative"
        >
          <div className="absolute left-0 z-10 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent-600)]/50 to-transparent" />
          <p className="text-[var(--color-accent-600)] text-sm">
            © {new Date().getFullYear()} Emmanuel Atuhaire. All rights reserved.
          </p>
        </MotionDiv>
      </div>
    </footer>
  );
};

export default Footer;
