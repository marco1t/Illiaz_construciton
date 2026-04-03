import React from 'react';
import { MapPin, Phone, Mail, HardHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div>
            <a href="#accueil" className="nav-brand footer-brand">
              <HardHat size={28} className="nav-brand-icon" />
              ILIAZ
            </a>
            <p className="footer-text">
              Excellence et durabilité en maçonnerie générale. Votre partenaire pour construire l'avenir en Ille-et-Vilaine.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><a href="#prestations">Construction Neuve</a></li>
              <li><a href="#prestations">Rénovation</a></li>
              <li><a href="#prestations">Extension</a></li>
              <li><a href="#prestations">Pierre Naturelle</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Entreprise</h4>
            <ul className="footer-list">
              <li><a href="#presentation">À Propos</a></li>
              <li><a href="#realisations">Portfolio</a></li>
              <li><a href="#">Mentions Légales</a></li>
              <li>SIRET : 923 281 216 00013</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list">
              <li>
                <MapPin size={20} className="footer-icon" />
                <span>Saint Germain en Coglès,<br/>35133, France</span>
              </li>
              <li>
                <Phone size={20} className="footer-icon" />
                <a href="tel:+33600000000" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>06 00 00 00 00</a>
              </li>
              <li>
                <Mail size={20} className="footer-icon" />
                <a href="mailto:contact@iliaz-constructions.fr">contact@iliaz-constructions.fr</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ILIAZ CONSTRUCTIONS. Tous droits réservés.</p>
          <p>Conception artisanale.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
