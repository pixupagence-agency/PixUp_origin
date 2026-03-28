"use client";

import React from "react";
import Link from "next/link";

export default function AvocatLandingPage() {
    return (
        <div className="bg-[var(--color-lawyer-surface)] text-[var(--color-lawyer-on-surface)] font-body selection:bg-[var(--color-lawyer-tertiary-fixed-dim)] selection:text-[var(--color-lawyer-on-tertiary-fixed)] min-h-screen">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
                
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
                }
            `}</style>
            
            {/* Top Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_24px_48px_-12px_rgba(0,6,102,0.04)]">
                <div className="flex justify-between items-center w-full px-12 py-6 max-w-screen-2xl mx-auto">
                    <Link className="text-2xl font-serif tracking-[0.2em] uppercase text-indigo-900" href="#">
                        CABINET DUPONT
                    </Link>
                    <div className="hidden md:flex space-x-10 items-center">
                        <a className="text-indigo-900 border-b-2 border-amber-500/50 pb-1 font-medium transition-all" href="#expertises">Expertises</a>
                        <a className="text-slate-600 hover:text-indigo-900 transition-colors" href="#firm">Le Cabinet</a>
                        <a className="text-slate-600 hover:text-indigo-900 transition-colors" href="#insights">Actualités</a>
                        <a className="text-slate-600 hover:text-indigo-900 transition-colors" href="#contact">Contact</a>
                    </div>
                    <button className="bg-[var(--color-lawyer-primary)] text-[var(--color-lawyer-on-primary)] px-8 py-3 rounded-none font-label tracking-widest text-xs uppercase hover:opacity-90 transition-all active:scale-95">
                        Prendre rendez-vous
                    </button>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-[var(--color-lawyer-primary)]">
                    <div className="absolute inset-0 z-0">
                        <img 
                            alt="Modern architectural law office interior with floor-to-ceiling windows and minimalist furniture in soft atmospheric evening light" 
                            className="w-full h-full object-cover opacity-30 grayscale" 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-lawyer-primary)] via-[var(--color-lawyer-primary)]/80 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-screen-2xl mx-auto px-12 w-full grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-8 space-y-8">
                            <span className="inline-block text-[var(--color-lawyer-tertiary-fixed-dim)] uppercase tracking-[0.3em] font-label text-sm">Fondé en 1984 | Paris — Londres</span>
                            <h1 className="text-white font-serif text-6xl md:text-8xl leading-tight tracking-tight">
                                L'Architecte de votre <br/> <span className="italic font-light">Stratégie Juridique.</span>
                            </h1>
                            <p className="text-[var(--color-lawyer-primary-fixed)] max-w-xl text-lg font-light leading-relaxed">
                                Au Cabinet Dupont, nous traitons la jurisprudence comme un art. Des solutions juridiques sur mesure pour les structures internationales complexes et une clientèle privée visionnaire.
                            </p>
                            <div className="flex gap-6 pt-6">
                                <button className="bg-white text-[var(--color-lawyer-primary)] px-10 py-4 font-label tracking-widest text-sm uppercase hover:bg-slate-100 transition-all">
                                    Voir nos dossiers
                                </button>
                                <button className="border border-white/30 text-white px-10 py-4 font-label tracking-widest text-sm uppercase hover:bg-white/10 transition-all">
                                    Notre Méthode
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Glassmorphism Stats Overlay */}
                    <div className="absolute bottom-12 right-12 hidden lg:block">
                        <div className="glass-panel p-10 space-y-8 shadow-2xl max-w-xs">
                            <div>
                                <div className="text-4xl font-serif text-[var(--color-lawyer-primary)] mb-1">400+</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500">Acquisitions mondiales</div>
                            </div>
                            <div>
                                <div className="text-4xl font-serif text-[var(--color-lawyer-primary)] mb-1">12Mrd€+</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500">Capitaux gérés</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expertises: Asymmetric Grid */}
                <section className="py-32 bg-[var(--color-lawyer-surface)]" id="expertises">
                    <div className="max-w-screen-2xl mx-auto px-12">
                        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
                            <div className="max-w-2xl">
                                <span className="text-slate-500 uppercase tracking-[0.2em] font-label text-xs mb-4 block">Nos domaines d'expertise</span>
                                <h2 className="text-[var(--color-lawyer-primary)] font-serif text-5xl leading-tight">Naviguer dans les <span className="italic font-light">complexités</span> de la gouvernance moderne et de l'entreprise.</h2>
                            </div>
                            <a className="text-slate-800 font-label tracking-widest text-sm uppercase border-b border-slate-900/30 pb-1 hover:border-slate-900 transition-all" href="#">Explorer nos expertises</a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Corporate Law */}
                            <div className="group relative bg-[var(--color-lawyer-surface-container-low)] p-12 transition-all duration-500 hover:bg-white hover:-translate-y-2">
                                <div className="mb-12">
                                    <span className="material-symbols-outlined text-4xl text-indigo-900">corporate_fare</span>
                                </div>
                                <h3 className="text-2xl font-serif text-[var(--color-lawyer-primary)] mb-6">Droit des Sociétés</h3>
                                <p className="text-slate-600 font-light leading-relaxed mb-10">Structuration transfrontalière, flux de capital-investissement et consolidation stratégique pour les entités multinationales.</p>
                                <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-[var(--color-lawyer-primary)]">arrow_forward</span>
                                </div>
                            </div>
                            {/* Intellectual Property */}
                            <div className="group relative bg-[var(--color-lawyer-surface-container-low)] p-12 transition-all duration-500 hover:bg-white hover:-translate-y-2 md:mt-12">
                                <div className="mb-12">
                                    <span className="material-symbols-outlined text-4xl text-indigo-900">gavel</span>
                                </div>
                                <h3 className="text-2xl font-serif text-[var(--color-lawyer-primary)] mb-6">Propriété Intellectuelle</h3>
                                <p className="text-slate-600 font-light leading-relaxed mb-10">Protéger les frontières numériques et les actifs immatériels dans un marché mondial de plus en plus connecté.</p>
                                <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-[var(--color-lawyer-primary)]">arrow_forward</span>
                                </div>
                            </div>
                            {/* Real Estate */}
                            <div className="group relative bg-[var(--color-lawyer-surface-container-low)] p-12 transition-all duration-500 hover:bg-white hover:-translate-y-2">
                                <div className="mb-12">
                                    <span className="material-symbols-outlined text-4xl text-indigo-900">apartment</span>
                                </div>
                                <h3 className="text-2xl font-serif text-[var(--color-lawyer-primary)] mb-6">Droit Immobilier</h3>
                                <p className="text-slate-600 font-light leading-relaxed mb-10">Développements commerciaux de haute valeur, portefeuilles résidentiels prestigieux et financements immobiliers.</p>
                                <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-[var(--color-lawyer-primary)]">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="py-32 bg-slate-900 text-white" id="firm">
                    <div className="max-w-screen-2xl mx-auto px-12">
                        <div className="grid lg:grid-cols-12 gap-24 items-center">
                            <div className="lg:col-span-4">
                                <h2 className="font-serif text-5xl mb-8">Les Associés.</h2>
                                <p className="text-slate-400 font-light text-lg mb-12">Un collectif de spécialistes dévoués à l'excellence juridique. Chaque associé apporte des décennies de maîtrise juridictionnelle.</p>
                                <button className="bg-[var(--color-lawyer-tertiary-fixed-dim)] text-[var(--color-lawyer-tertiary)] px-10 py-4 font-label tracking-widest text-xs uppercase hover:bg-amber-400 transition-all">Rencontrer le Conseil</button>
                            </div>
                            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                                <div className="relative aspect-[3/4] group overflow-hidden">
                                    <img 
                                        alt="Managing Partner" 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 to-transparent">
                                        <div className="font-serif text-2xl">Julian Dupont</div>
                                        <div className="text-[var(--color-lawyer-tertiary-fixed-dim)] text-xs uppercase tracking-widest mt-1">Associé Gérant | Spécialiste M&A</div>
                                    </div>
                                </div>
                                <div className="relative aspect-[3/4] group overflow-hidden md:mt-16">
                                    <img 
                                        alt="Associé Senior" 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 to-transparent">
                                        <div className="font-serif text-2xl">Elena Vaskov</div>
                                        <div className="text-[var(--color-lawyer-tertiary-fixed-dim)] text-xs uppercase tracking-widest mt-1">Associée Senior | Contentieux International</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-32 bg-[var(--color-lawyer-surface-container-low)] overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto px-12">
                        <div className="flex flex-col items-center text-center mb-24">
                            <span className="material-symbols-outlined text-4xl text-amber-500 mb-6">format_quote</span>
                            <div className="max-w-3xl">
                                <p className="font-serif text-3xl md:text-4xl text-[var(--color-lawyer-primary)] leading-snug mb-12 italic">"Le Cabinet Dupont ne se contente pas de gérer les risques ; il redéfinit le champ des possibles. Leur stratégie a été le facteur décisif de notre acquisition mondiale."</p>
                                <div className="flex flex-col items-center">
                                    <div className="font-sans tracking-widest text-xs uppercase text-slate-500 mb-1">Président Directeur Général</div>
                                    <div className="font-serif text-xl text-[var(--color-lawyer-primary)]">Aura Global Dynamics</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:border-white transition-all">
                                <span className="material-symbols-outlined text-[var(--color-lawyer-primary)]">chevron_left</span>
                            </button>
                            <button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:border-white transition-all">
                                <span className="material-symbols-outlined text-[var(--color-lawyer-primary)]">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Insights Bento Grid */}
                <section className="py-32 bg-white" id="insights">
                    <div className="max-w-screen-2xl mx-auto px-12">
                        <h2 className="font-serif text-5xl text-[var(--color-lawyer-primary)] mb-16">Perspectives <span className="italic font-light">Globales.</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[700px]">
                            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
                                <img 
                                    alt="Perspective 1" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-lawyer-primary)]/90 via-[var(--color-lawyer-primary)]/20 to-transparent p-12 flex flex-col justify-end">
                                    <span className="text-[var(--color-lawyer-tertiary-fixed-dim)] text-xs uppercase tracking-widest mb-4">Livre Blanc | T4 2024</span>
                                    <h3 className="text-white text-3xl font-serif mb-6">L'avenir des actifs numériques dans la juridiction européenne</h3>
                                    <a className="text-white flex items-center gap-4 text-sm font-sans uppercase tracking-widest" href="#">Lire l'article <span className="material-symbols-outlined text-xs">arrow_outward</span></a>
                                </div>
                            </div>
                            <div className="md:col-span-2 bg-slate-50 p-12 flex flex-col justify-between">
                                <div>
                                    <span className="text-slate-500 text-xs uppercase tracking-widest mb-4 block">Mise à jour réglementaire</span>
                                    <h3 className="text-[var(--color-lawyer-primary)] text-2xl font-serif">Nouvelles normes de reporting ESG pour les ETI</h3>
                                </div>
                                <a className="text-[var(--color-lawyer-primary)] flex items-center gap-4 text-sm font-sans uppercase tracking-widest border-b border-indigo-900/20 self-start pb-1" href="#">En savoir plus</a>
                            </div>
                            <div className="bg-indigo-950 p-8 flex flex-col justify-center items-center text-center text-white">
                                <div className="text-[var(--color-lawyer-tertiary-fixed-dim)] font-serif text-4xl mb-4">15+</div>
                                <p className="text-white/70 text-xs uppercase tracking-widest">Nouveaux articles publiés chaque mois</p>
                            </div>
                            <div className="bg-slate-100 p-8 flex flex-col justify-center">
                                <h3 className="text-[var(--color-lawyer-primary)] text-xl font-serif mb-4">Rejoindre notre Newsletter</h3>
                                <div className="flex border-b border-indigo-900/20 pb-2">
                                    <input className="bg-transparent border-none focus:ring-0 text-sm w-full font-light" placeholder="Adresse email" type="email"/>
                                    <button className="material-symbols-outlined text-[var(--color-lawyer-primary)]">arrow_forward</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-40 bg-indigo-950 relative overflow-hidden" id="contact">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 blur-[120px] bg-[radial-gradient(circle,_#e9c176_0%,_transparent_70%)]"></div>
                    </div>
                    <div className="max-w-screen-2xl mx-auto px-12 relative z-10 text-center">
                        <h2 className="text-white font-serif text-6xl mb-12">Sécuriser votre héritage.</h2>
                        <p className="text-indigo-100 max-w-2xl mx-auto text-xl font-light mb-16 leading-relaxed">Le Cabinet Dupont propose des consultations confidentielles pour la planification stratégique et la résolution de litiges. Laissez-nous concevoir votre voie à suivre.</p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <a className="bg-white text-[var(--color-lawyer-primary)] px-12 py-5 font-sans tracking-widest uppercase text-sm hover:bg-slate-50 transition-all font-bold" href="mailto:contact@cabinetdupont.law">Prendre rendez-vous</a>
                            <a className="text-white font-sans tracking-widest uppercase text-sm border-b border-white/30 pb-1 hover:border-white transition-all font-bold" href="tel:+33123456789">+33 (0) 1 23 45 67 89</a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-20 px-12 border-t border-slate-200/50 bg-slate-50">
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-600">
                    <div className="space-y-6">
                        <div className="font-serif italic text-lg text-indigo-900">Cabinet Dupont</div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">L'excellence juridique sur mesure pour les clients les plus exigeants et les dossiers complexes.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-indigo-900 font-bold">Liens Rapides</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-amber-600 transition-colors" href="#">Expertises</a></li>
                            <li><a className="hover:text-amber-600 transition-colors" href="#">Le Cabinet</a></li>
                            <li><a className="hover:text-amber-600 transition-colors" href="#">Actualités</a></li>
                            <li><a className="hover:text-amber-600 transition-colors" href="#">Recrutement</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-indigo-900 font-bold">Conformité</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-amber-600 transition-colors" href="#">Mentions Légales</a></li>
                            <li><a className="hover:text-amber-600 transition-colors" href="#">Politique de Confidentialité</a></li>
                            <li><a className="hover:text-amber-600 transition-colors" href="#">CGU</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-indigo-900 font-bold">Bureaux</h4>
                        <div className="text-sm space-y-4">
                            <p>Paris : 42 Rue de la Paix, 75002</p>
                            <p>Londres : 10 Upper Bank St, E14 5JJ</p>
                            <div className="flex gap-4 pt-4">
                                <a className="text-indigo-900 hover:text-amber-600" href="#"><span className="material-symbols-outlined">share</span></a>
                                <a className="text-indigo-900 hover:text-amber-600" href="#"><span className="material-symbols-outlined">public</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-sans text-sm tracking-wide text-slate-500">© 2024 Cabinet Dupont. Excellence en Jurisprudence.</p>
                    <div className="flex gap-8 text-xs uppercase tracking-widest text-slate-400 font-bold">
                        <Link href="/portfolio" className="hover:text-indigo-900 text-amber-600">Retour au portfolio</Link>
                        <a className="hover:text-indigo-900" href="#">LinkedIn</a>
                        <a className="hover:text-indigo-900" href="#">Insights</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
