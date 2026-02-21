import React from 'react';
import { CircleDot } from 'lucide-react';

const About = () => {
    return (
        <section id="presentation" className="section-padding">
            <div className="container about-grid">
                <div className="about-image-wrapper">
                    <div className="about-image-bg"></div>
                    <img
                        src="./images/realisation-12.png"
                        alt="Chantier en cours"
                        className="about-image"
                    />
                    <div className="about-badge glass">
                        <h3 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '4px' }}>2023</h3>
                        <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px' }}>
                            Création de l'entreprise
                        </p>
                    </div>
                </div>

                <div>
                    <div className="subtitle">Notre Histoire</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
                        Une entreprise familiale de proximité
                    </h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-light)' }}>
                        ILIAZ CONSTRUCTIONS est née d'une passion transmise et d'une volonté de bâtir.
                        Spécialisée dans la maçonnerie de maisons individuelles, la rénovation et l'extension,
                        notre entreprise familiale met un point d'honneur à réaliser des ouvrages durables.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '32px', color: 'var(--text-light)' }}>
                        Forts de plus de 10 ans d'expérience dans le métier, nous avons fondé notre
                        propre structure en 2023. Indépendants et engagés, nous intervenons sur le secteur
                        de Fougères et dans un rayon de 70km autour de Saint Germain en Coglès.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                            <CircleDot size={20} className="text-primary" />
                            Expertise de plus de 10 ans
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                            <CircleDot size={20} className="text-primary" />
                            Particuliers et professionnels
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                            <CircleDot size={20} className="text-primary" />
                            Intervention rayon de 70km
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
