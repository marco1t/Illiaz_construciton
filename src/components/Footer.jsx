import React from 'react';
import { Phone, MapPin, Mail, Camera, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">

                    {/* Column 1 */}
                    <div>
                        <div className="footer-logo">ILIAZ<span>CONSTRUCTIONS</span></div>
                        <p className="footer-text">
                            Votre partenaire de confiance pour tous travaux de maçonnerie générale,
                            neuf et rénovation. Qualité et durabilité garanties.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', padding: '8px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%' }}>
                                <Facebook size={20} />
                            </a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', padding: '8px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%' }}>
                                <Camera size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="footer-heading">Coordonnées</h4>
                        <ul className="footer-list">
                            <li>
                                <MapPin size={20} className="icon" />
                                <span>Saint Germain en Coglès,<br />Ille-et-Vilaine, France</span>
                            </li>
                            <li>
                                <Phone size={20} className="icon" />
                                <a href="tel:0615153673" style={{ fontWeight: 600 }}>06 15 15 36 73</a>
                            </li>
                            <li>
                                <Mail size={20} className="icon" />
                                <a href="mailto:contact@iliaz-constructions.fr">contact@iliaz-constructions.fr</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="footer-heading">Informations</h4>
                        <ul className="footer-list">
                            <li>SIRET : 923 281 216 00013</li>
                            <li>Zone d'intervention : 70km</li>
                            <li><a href="#">Mentions Légales</a></li>
                            <li><a href="#">Confidentialité</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="footer-heading">Contact Rapide</h4>
                        <form onSubmit={e => e.preventDefault()}>
                            <input type="text" placeholder="Votre nom" className="form-input" />
                            <input type="email" placeholder="Votre email" className="form-input" />
                            <textarea placeholder="Message" className="form-input" rows={3}></textarea>
                            <button type="submit" className="submit-btn">Envoyer</button>
                        </form>
                    </div>

                </div>

                <div className="footer-bottom">
                    © {new Date().getFullYear()} ILIAZ CONSTRUCTIONS. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
