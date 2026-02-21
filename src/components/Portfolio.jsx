import React from 'react';

const Portfolio = () => {
    // Liste des réalisations pour charger dynamiquement les images et les labels
    const realisations = [
        { id: 1, title: 'Maçonnerie Extérieure', tag: 'Construction', desc: 'Réalisation d\'aménagements extérieurs de qualité.' },
        { id: 2, title: 'Fondations et Murs', tag: 'Gros Œuvre', desc: 'Élévation de murs robustes en parpaings.' },
        { id: 3, title: 'Aménagement Pierre', tag: 'Rénovation', desc: 'Travaux de pierre apparente et finition.' },
        { id: 4, title: 'Terrasse et Contours', tag: 'Extérieur', desc: 'Préparation et coulage de dalle béton.' },
        { id: 5, title: 'Maison Individuelle', tag: 'Construction', desc: 'Projet complet de construction neuve.' },
        { id: 6, title: 'Rénovation Façade', tag: 'Rénovation', desc: 'Restauration complète d\'une façade existante.' },
        { id: 7, title: 'Extension', tag: 'Agrandissement', desc: 'Création d\'un espace de vie supplémentaire.' },
        { id: 8, title: 'Chantier en cours', tag: 'Construction', desc: 'Évolution d\'un chantier de maison neuve.' },
        { id: 9, title: 'Ouvrage d\'Art', tag: 'Spécial', desc: 'Travail minutieux sur un ouvrage complexe.' },
        { id: 10, title: 'Murs de Clôture', tag: 'Aménagement', desc: 'Sécurisation et délimitation de la propriété.' },
        { id: 11, title: 'Dallage', tag: 'Sol', desc: 'Préparation des sols et dallage de précision.' },
        { id: 12, title: 'Finition Intérieure', tag: 'Rénovation', desc: 'Aménagement et consolidation des espaces intérieurs.' },
        { id: 13, title: 'Projet Clé en Main', tag: 'Construction', desc: 'Remise des clés d\'une réalisation achevée.' },
    ];

    return (
        <section id="realisations" className="section-padding">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <div>
                        <div className="subtitle">Portfolio</div>
                        <h2 style={{ fontSize: '2.5rem' }}>Nos dernières réalisations</h2>
                    </div>
                </div>

                <div className="portfolio-grid">
                    {realisations.map((projet) => (
                        <div key={projet.id} className="portfolio-item">
                            <img
                                src={`${import.meta.env.BASE_URL}images/realisation-${projet.id}.png`}
                                alt={`Réalisation ${projet.title}`}
                                loading="lazy"
                            />
                            <div className="portfolio-overlay">
                                <div className="portfolio-tag">{projet.tag}</div>
                                <h4 className="portfolio-title">{projet.title}</h4>
                                <div className="portfolio-desc">{projet.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
