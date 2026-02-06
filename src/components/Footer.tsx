import { Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoBlack from '@/assets/logo-black.png';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/">
            <img src={logoBlack} alt="RUBO" className="h-10 w-auto" />
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm tracking-widest uppercase">
            <a href="/#about" className="nav-link hover:text-muted-foreground">About</a>
            <a href="/#trips" className="nav-link hover:text-muted-foreground">Trips</a>
            <a href="/#testimonials" className="nav-link hover:text-muted-foreground">Stories</a>
            <a href="/#join" className="nav-link hover:text-muted-foreground">Join</a>
            <Link to="/members" className="nav-link hover:text-muted-foreground">Team</Link>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 RUBO Cycling Collective. All rights reserved.</p>
          <p className="tracking-widest uppercase">Ride. Suffer. Repeat.</p>
        </div>
      </div>
    </footer>
  );
};
