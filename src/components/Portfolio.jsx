import React from 'react';
import { useInView } from '../hooks/useInView';

const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const items = [
    { id: 1, title: 'Aménagement Extérieur', tag: 'Construction' },
    { id: 2, title: 'Fondations', tag: 'Gros Œuvre' },
    { id: 3, title: 'Restauration Pierre', tag: 'Rénovation' },
    { id: 5, title: 'Maison Individuelle', tag: 'Construction Neuve' },
    { id: 6, title: 'Façade', tag: 'Rénovation' },
    { id: 7, title: 'Extension', tag: 'Agrandissement' },
    { id: 10, title: 'Clôture', tag: 'Aménagement' }
  ];

  return (
    <section id="realisations" className="section" ref={ref}>
      <div className="container">
        <div className={`fade-in ${isInView ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Portfolio</div>
          <h2 className="heading-lg">Réalisations Récentes</h2>
        </div>

        <div className="portfolio-grid">
          {items.map((item, idx) => (
            <div 
              key={item.id} 
              className={`portfolio-item fade-in ${isInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 * (idx % 4)}s` }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/realisation-${item.id}.png`}
                alt={item.title}
                loading="lazy"
              />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{item.tag}</span>
                <h4 className="portfolio-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
