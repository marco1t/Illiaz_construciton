import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <header id="accueil" className="hero">
            <img
                src="./images/image_fond_accueil.png"
                alt="Construction Background"
                className="hero-bg"
            />
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <h1 className="hero-title">
                    Votre Maçon de <span className="text-primary">Confiance</span>
                </h1>
                <p className="hero-description">
                    Construction, Rénovation & Extension. Une expertise familiale
                    au service de vos projets depuis plus de 10 ans.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <a href="#contact" className="btn-primary">
                        Demander un devis
                    </a>
                    <a href="#realisations" className="btn-secondary">
                        Voir nos réalisations
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
