import React from 'react';
import { useInView } from '../hooks/useInView';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="presentation" className="section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          
          <div className={`about-content fade-in ${isInView ? 'visible' : ''}`}>
            <div className="about-content-inner">
              <div className="section-label">Notre Histoire</div>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>
                L'Exigence du Travail Bien Fait
              </h2>
              
              <p className="text-lg" style={{ marginBottom: '1.5rem' }}>
                ILIAZ CONSTRUCTIONS est née d'une passion transmise et d'une volonté de bâtir. Spécialisée dans la maçonnerie de maisons individuelles, la rénovation et l'extension, notre entreprise familiale met un point d'honneur à réaliser des ouvrages durables.
              </p>
              
              <p className="text-lg" style={{ marginBottom: '2.5rem' }}>
                Forts de plus de 10 ans d'expérience dans le métier, nous avons fondé notre propre structure en 2023. Indépendants et engagés, nous intervenons sur le secteur de Fougères et dans un rayon de 70km autour de Saint Germain en Coglès.
              </p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {['Maitrise des techniques traditionnelles', 'Accompagnement sur-mesure', 'Respect strict des normes en vigueur'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
                    <CheckCircle2 size={24} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`about-image fade-in stagger-2 ${isInView ? 'visible' : ''}`}>
            <img
              src={`${import.meta.env.BASE_URL}images/realisation-12.png`}
              alt="Artisan maçon au travail"
            />
            <div className="about-experience">
              <div className="years">10+</div>
              <div className="text">Années<br/>d'expertise</div>
            </div>
          </div>

        </div>

        <div className={`about-stats fade-in stagger-3 ${isInView ? 'visible' : ''}`}>
          <div className="stat-item">
            <h4>2023</h4>
            <p>Création de l'entreprise</p>
          </div>
          <div className="stat-item">
            <h4>70km</h4>
            <p>Rayon d'intervention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
