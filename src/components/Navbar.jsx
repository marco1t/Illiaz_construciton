import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

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

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    ILIAZ<span>CONSTRUCTIONS</span>
                </div>

                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <a href="#accueil" className="nav-link" onClick={() => setMenuOpen(false)}>Accueil</a>
                    <a href="#presentation" className="nav-link" onClick={() => setMenuOpen(false)}>Présentation</a>
                    <a href="#prestations" className="nav-link" onClick={() => setMenuOpen(false)}>Prestations</a>
                    <a href="#realisations" className="nav-link" onClick={() => setMenuOpen(false)}>Réalisations</a>
                    <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '1rem' }} onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Menu size={28} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
