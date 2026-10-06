import { useEffect, useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Système', href: '#systeme' },
  { label: 'Fondateur', href: '#fondateur' },
  { label: 'Limites', href: '#limites' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setMenuOpen(false);

  return (
    <>
      {/* Bannière fondateur */}
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-bleu-profond to-bleu-moyen text-dore-clair text-center py-2.5 px-5 text-sm tracking-wide font-semibold border-b-2 border-dore z-[1000]">
        FONDATEUR : DOUCET THOMAS — Toutes règles fixées par lui seul
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-[44px] left-0 w-full z-[999] transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-bleu-profond/10 py-3'
            : 'bg-white/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-[5%]">
          <a href="#accueil" className="text-1xl md:text-2xl font-bold text-bleu-profond border-b-2 border-dore pb-0.5 font-display">
            AILA CORE SYSTEMS
          </a>

          <ul
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } md:flex absolute md:static top-full left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row items-center gap-4 md:gap-10 py-6 md:py-0 font-medium text-bleu-moyen shadow-lg md:shadow-none`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  className="transition-colors duration-300 hover:text-dore"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={handleClick}
                className="border-2 border-dore px-4 py-1.5 rounded-lg text-dore font-semibold transition-all duration-300 hover:bg-dore hover:text-bleu-profond flex items-center gap-1.5"
              >
                <Lock size={15} />
                Accès Réservé
              </a>
            </li>
          </ul>

          <button
            className="md:hidden text-2xl bg-none border-none cursor-pointer text-bleu-profond"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </>
  );
}
