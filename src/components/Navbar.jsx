import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X as MenuX,
  Linkedin,
  Instagram,
  Home,
  Film,
  Image as GalleryIcon,
  MessageSquare,
} from "lucide-react";

// Fix linter warning by using the motion import
const MotionDiv = motion.div;
const MotionA = motion.a;
const MotionLink = motion(Link);

// Custom X (Twitter) Icon
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

// Custom TikTok Icon
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Me", path: "/contact" },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[9999] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[--color-accent-dark]/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="hidden container mx-auto px-6 py-4 md:flex justify-between items-center relative z-[9999]">
        {/* Logo */}
        <MotionLink
          to="/"
          className="flex items-center gap-2 group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl font-medium text-[var(--color-secondary-50)] tracking-wide relative">
            Atuhaire
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[2px] bg-[var(--color-secondary-400)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </MotionLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <MotionLink
              key={link.path}
              to={link.path}
              className={`text-[var(--color-secondary-200)] text-lg transition relative pb-2 ${
                location.pathname === link.path
                  ? "text-[var(--color-secondary-400)] text-xl font-medium"
                  : ""
              }`}
            >
              {link.name}
              <motion.span
                className="absolute left-0 -bottom-0 w-full h-[2px] bg-[var(--color-secondary-400)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </MotionLink>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
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
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </MotionA>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="container flex-col md:hidden mx-auto px-6 py-4 flex justify-between items-center relative z-[9999]">
        {/* Mobile Menu Button */}
        <div className="min-h-[40px] flex items-center justify-between w-full">
          {/* Logo */}
          <MotionLink
            to="/"
            className="flex items-center gap-2 group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-medium text-[var(--color-secondary-50)] tracking-wide relative">
              Atuhaire
              <motion.span
                className="absolute left-0 bottom-0 w-full h-[2px] bg-[var(--color-secondary-400)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </MotionLink>
          <MotionDiv
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
          >
            {/* Button */}
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <MenuX size={24} /> : <Menu size={24} />}
            </button>
          </MotionDiv>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="inset-0 h-screen w-screen bg-[--color-accent-dark]/80 backdrop-blur-md flex flex-col items-center justify-center z-[9998]"
            >
              <div className="flex flex-col items-center space-y-8 w-full px-6">
                {navLinks.map((link) => (
                  <MotionLink
                    key={link.path}
                    to={link.path}
                    className={`text-2xl relative pb-2 transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-[var(--color-secondary-400)] font-medium"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <motion.span
                      className="absolute left-0 -bottom-0 w-full h-[2px] bg-[var(--color-secondary-400)]"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: location.pathname === link.path ? 1 : 0,
                      }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </MotionLink>
                ))}

                {/* Social Media Icons (Mobile) */}
                <div className="flex justify-center space-x-8 mt-12">
                  {socialLinks.map((social, index) => (
                    <MotionA
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[--color-primary] transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </MotionA>
                  ))}
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
