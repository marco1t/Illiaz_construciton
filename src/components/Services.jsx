import React from 'react';
import { useInView } from '../hooks/useInView';
import { HardHat, Hammer, Ruler, Axe, BrickWall, Wrench } from 'lucide-react';

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      title: "Construction Neuve",
      icon: <BrickWall size={48} strokeWidth={1.5} />,
      desc: "Réalisation de maisons individuelles, fondations, vide-sanitaires et élévation de murs en parpaings ou briques."
    },
    {
      title: "Rénovation & Restauration",
      icon: <Wrench size={48} strokeWidth={1.5} />,
      desc: "Réhabilitation de l'ancien, ouverture de murs porteurs, reprises de maçonnerie et rejointoiement."
    },
    {
      title: "Extension & Surélévation",
      icon: <Ruler size={48} strokeWidth={1.5} />,
      desc: "Création de nouveaux espaces de vie, garages, annexes, en s'harmonisant parfaitement avec l'existant."
    },
    {
      title: "Pierre Naturelle",
      icon: <Axe size={48} strokeWidth={1.5} />,
      desc: "Travail de la pierre ancienne, montage de murs en pierre, restauration du patrimoine architectural local."
    },
    {
      title: "Aménagements Extérieurs",
      icon: <HardHat size={48} strokeWidth={1.5} />,
      desc: "Murets de clôture, terrasses béton, seuils, appuis de fenêtre et ouvrages en béton armé."
    },
    {
      title: "Petits Travaux",
      icon: <Hammer size={48} strokeWidth={1.5} />,
      desc: "Réparations diverses, création de cloisons, coffrages et tout besoin spécifique en maçonnerie traditionnelle."
    }
  ];

  return (
    <section id="prestations" className="section services-section" ref={ref}>
      <div className="container">
        <div className={`services-header fade-in ${isInView ? 'visible' : ''}`}>
          <div>
            <div className="section-label">Expertise</div>
            <h2 className="heading-lg">Nos Domaines<br/>d'Intervention</h2>
          </div>
          <p className="text-lg">
            De la fondation aux finitions, nous maîtrisons toutes les techniques pour concrétiser vos projets avec rigueur et précision.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`service-card fade-in ${isInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
