import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-accent/90 backdrop-blur-md text-[var(--color-accent-600)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-text">
              Atuhaire
            </Link>
            <p className="text-sm max-w-md">
              Award-winning actor from Uganda, bringing stories to life through powerful performances.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>contact@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={18} />
                <span>+123 456 7890</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-primary transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-text/10 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Atuhaire Emmanuel Abala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
