import React from 'react';
import { Phone } from 'lucide-react';

const Cta = () => {
    return (
        <section className="cta-banner">
            <div className="cta-pattern"></div>
            <div className="container cta-content">
                <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Un projet de construction en tête ?</h2>
                <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                    Nous sommes à votre écoute pour étudier votre projet et vous proposer un devis gratuit et personnalisé.
                </p>
                <a href="#contact" className="btn-white">
                    <Phone size={24} />
                    Discutons de votre projet
                </a>
            </div>
        </section>
    );
};

export default Cta;
