import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Cta = () => {
  const [ref, isInView] = useInView({ threshold: 0.5 });

  return (
    <section className="cta-section" ref={ref}>
      <div className="cta-bg"></div>
      <div className={`container cta-content fade-in ${isInView ? 'visible' : ''}`}>
        <h2 className="heading-lg cta-title">Prêt à Bâtir ?</h2>
        <p className="cta-desc">
          Contactez-nous pour échanger sur votre projet de construction ou de rénovation. Devis gratuit et accompagnement personnalisé.
        </p>
        <a href="#contact" className="btn btn-dark">
          Démarrer le projet
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Cta;
