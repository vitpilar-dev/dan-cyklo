import { Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoBlack from '@/assets/logo-black.png';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/">
            <img src={logoBlack} alt="RUBO" className="h-10 w-auto invert" />
          </Link>

          <nav className="flex flex-wrap justify-center gap-8 text-sm tracking-widest uppercase">
            <Link to="/about" className="hover:opacity-70 transition-opacity">O nás</Link>
            <Link to="/events" className="hover:opacity-70 transition-opacity">Akce</Link>
            <Link to="/stories" className="hover:opacity-70 transition-opacity">Příběhy</Link>
            <Link to="/join" className="hover:opacity-70 transition-opacity">Přidej se</Link>
            <Link to="/team" className="hover:opacity-70 transition-opacity">Tým</Link>
          </nav>

          <div className="flex gap-4">
            <a href="#" className="p-2 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
          <p>© 2025 RUBO. Všechna práva vyhrazena.</p>
          <p className="tracking-widest uppercase">Ride. Suffer. Repeat.</p>
        </div>
      </div>
    </footer>
  );
};
