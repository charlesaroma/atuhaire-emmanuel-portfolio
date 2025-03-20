import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Instagram, Twitter, Music } from "lucide-react";

// Fix linter warning by using the motion import
const MotionDiv = motion.div;
const MotionA = motion.a;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/emmanuel-atuhaire-b0a90330b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/emmanuel.atuhaire.3?igsh=b2Nqb2x1Y3owaWI=" },
    { icon: <Twitter size={20} />, url: "https://x.com/AtuhaireEmma?s=09" },
    { icon: <Music size={20} />, url: "https://www.tiktok.com/@emmanuelatuhaire7?_t=ZM-8uqVri9J0CN&_r=1" },
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[--color-accent-dark]/90 backdrop-blur-lg shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >       
          <span className="text-2xl font-medium text-[var(--color-secondary-50)] tracking-wide">
            Atuhaire
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[var(--color-secondary-200)] text-lg hover:text-white transition ${
                location.pathname === link.path ? "text-[var(--color-secondary-400)] text-xl font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
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
              className="text-[var(--color-secondary-50)] hover:text-[var(--color-secondary-400)] transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </MotionA>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[--color-accent-dark]/90 backdrop-blur-md"
          >
            <div className="px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-3 text-gray-300 hover:text-white transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Social Media Icons (Mobile) */}
              <div className="flex justify-center space-x-6 mt-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-[--color-primary] transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
