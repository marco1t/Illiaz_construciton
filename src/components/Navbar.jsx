import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import classNames from 'classnames';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Présentation', href: '#presentation' },
    { name: 'Prestations', href: '#prestations' },
    { name: 'Réalisations', href: '#realisations' }
  ];

  return (
    <nav className={classNames('navbar', { 'scrolled': scrolled })}>
      <div className="container nav-content">
        <a href="#accueil" className="nav-brand">
          <HardHat size={32} className="nav-brand-icon" />
          ILIAZ
        </a>

        <ul className={classNames('nav-links', { 'active': menuOpen })}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-only" style={{ display: 'none' }}>
             {/* Hidden on desktop, shown on mobile if needed */}
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#contact" className="btn btn-primary nav-cta" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
            Devis
          </a>
          <button 
            className="nav-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
