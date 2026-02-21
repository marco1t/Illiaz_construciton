import React from 'react';
import { Home, Wrench, Plus, Hammer, Ruler, CircleDot } from 'lucide-react';

const Services = () => {
    return (
        <section id="prestations" className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '60px' }}>
                    <div className="subtitle">Nos Services</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                        Une expertise complète en maçonnerie
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                        De la fondation aux finitions, nous maîtrisons toutes les techniques
                        pour concrétiser vos projets.
                    </p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <Home size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Construction Neuve</h4>
                        <p style={{ color: 'var(--text-light)' }}>
                            Réalisation de maisons individuelles, fondations, vide-sanitaires et élévation de murs en parpaings ou briques.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <Wrench size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Rénovation Complète</h4>
                        <p style={{ color: 'var(--text-light)' }}>
                            Réhabilitation de l'ancien, ouverture de murs porteurs, reprises de maçonnerie et rejointoiement de pierres.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <Plus size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Extension & Agrandissement</h4>
                        <p style={{ color: 'var(--text-light)' }}>
                            Création de nouveaux espaces de vie, garages, annexes, en s'harmonisant avec l'existant.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <Hammer size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Maçonnerie de Pierre</h4>
                        <p style={{ color: 'var(--text-light)' }}>
                            Travail de la pierre ancienne, montage de murs en pierre, restauration du patrimoine local.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <Ruler size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Aménagements Extérieurs</h4>
                        <p style={{ color: 'var(--text-light)' }}>
                            Murets de clôture, terrasses béton, seuils, appuis de fenêtre et béton armé divers.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <CircleDot size={32} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Petits Travaux</h4>
                        <p style={{ color: 'var(--text-light)' }}>
                            Réparations diverses, création de cloisons, coffrages et tout besoin spécifique en maçonnerie traditionnelle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
