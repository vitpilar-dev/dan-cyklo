import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoBlack from '@/assets/logo-black.png';
import logoWhite from '@/assets/logo-white.png';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#trips', label: 'Trips' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#join', label: 'Join Us' },
  { href: '/members', label: 'Team', isPage: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (!isHomePage) {
        window.location.href = '/' + href;
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/"
              className="block"
              onClick={() => {
                if (isHomePage) {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <img 
                src={isScrolled ? logoBlack : logoBlack} 
                alt="RUBO" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                'isPage' in link && link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="nav-link text-foreground hover:text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="nav-link text-foreground hover:text-muted-foreground"
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24"
          >
            <div className="container-custom flex flex-col gap-8">
              {navLinks.map((link, index) => (
                'isPage' in link && link.isPage ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-heading font-bold uppercase tracking-wide text-left block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-3xl font-heading font-bold uppercase tracking-wide text-left"
                  >
                    {link.label}
                  </motion.button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
