import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoBlack from '@/assets/logo-black.png';
import logoWhite from '@/assets/logo-white.png';

const countries = [
  { href: '/france', label: 'Francie' },
  { href: '/spain', label: 'Španělsko' },
  { href: '/italy', label: 'Itálie' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="block">
              <img
                src={isScrolled ? logoBlack : logoBlack}
                alt="RUBO"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <Link to="/about" className="nav-link text-foreground hover:text-muted-foreground">
                O nás
              </Link>

              {/* Dropdown: Kam jezdíme? */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="nav-link text-foreground hover:text-muted-foreground flex items-center gap-1">
                  Kam jezdíme?
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-background border border-border shadow-lg z-50"
                    >
                      {countries.map((c) => (
                        <Link
                          key={c.href}
                          to={c.href}
                          className="block px-5 py-3 text-sm tracking-widest uppercase text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/stories" className="nav-link text-foreground hover:text-muted-foreground">
                Příběhy
              </Link>
              <Link to="/join" className="nav-link text-foreground hover:text-muted-foreground">
                Přidej se
              </Link>
              <Link to="/team" className="nav-link text-foreground hover:text-muted-foreground">
                Tým
              </Link>
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
            className="fixed inset-0 z-40 bg-background pt-24 overflow-y-auto"
          >
            <div className="container-custom flex flex-col gap-6">
              <Link to="/about" className="text-2xl font-heading font-bold uppercase tracking-wide">
                O nás
              </Link>

              <div>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="text-2xl font-heading font-bold uppercase tracking-wide flex items-center gap-2"
                >
                  Kam jezdíme?
                  <ChevronDown size={20} className={`transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden ml-4 mt-2 flex flex-col gap-3"
                    >
                      {countries.map((c) => (
                        <Link key={c.href} to={c.href} className="text-lg font-heading uppercase tracking-wide text-muted-foreground">
                          {c.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/stories" className="text-2xl font-heading font-bold uppercase tracking-wide">
                Příběhy
              </Link>
              <Link to="/join" className="text-2xl font-heading font-bold uppercase tracking-wide">
                Přidej se
              </Link>
              <Link to="/team" className="text-2xl font-heading font-bold uppercase tracking-wide">
                Tým
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
