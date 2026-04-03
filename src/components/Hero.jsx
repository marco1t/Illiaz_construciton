import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Hero = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <header id="accueil" className="hero">
      <div className="hero-bg">
        <img
          src={`${import.meta.env.BASE_URL}images/image_fond_accueil.png`}
          alt="Chantier de construction"
        />
      </div>
      <div className="hero-overlay"></div>

      <div className="container" ref={ref}>
        <div className="hero-content">
          <div className={`hero-tag fade-in ${isInView ? 'visible' : ''}`}>
            Maçonnerie Générale
          </div>
          <h1 className={`heading-xl hero-title fade-in stagger-1 ${isInView ? 'visible' : ''}`}>
            L'Art de <br/>
            Bâtir <span className="text-accent">Durable</span>
          </h1>
          <p className={`text-lg hero-desc fade-in stagger-2 ${isInView ? 'visible' : ''}`}>
            Construction neuve, rénovation et extension. Une expertise familiale et un savoir-faire artisanal au service de vos projets depuis plus de 10 ans.
          </p>
          <div className={`hero-actions fade-in stagger-3 ${isInView ? 'visible' : ''}`}>
            <a href="#contact" className="btn btn-primary">
              Demander un devis
              <ArrowRight size={20} />
            </a>
            <a href="tel:+33600000000" className="btn btn-outline">
              <Phone size={20} />
              06 00 00 00 00
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
