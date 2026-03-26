"use client";

import React from "react";
import Link from "next/link";

export default function AvocatLandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-serif text-slate-800 selection:bg-amber-700/30">
            {/* Header */}
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-amber-800 text-3xl">balance</span>
                        <span className="font-bold text-2xl tracking-tight text-slate-900">Cabinet Dupont</span>
                    </div>
                    <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                        <a href="#expertises" className="hover:text-amber-800 transition-colors">Expertises</a>
                        <a href="#cabinet" className="hover:text-amber-800 transition-colors">Le Cabinet</a>
                        <a href="#honoraires" className="hover:text-amber-800 transition-colors">Honoraires</a>
                        <a href="#contact" className="hover:text-amber-800 transition-colors">Contact</a>
                    </nav>
                    <button className="bg-slate-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-amber-800 transition-colors">
                        Prendre rendez-vous
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative">
                <div className="absolute inset-0 bg-slate-900">
                    <iframe 
                        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50"
                        src="https://www.youtube.com/embed/VtbhH-cZ-pU?autoplay=1&mute=1&loop=1&playlist=VtbhH-cZ-pU&controls=0&disablekb=1&playsinline=1"
                        allow="autoplay; encrypted-media"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="relative max-w-4xl mx-auto px-6 py-32 md:py-48 text-center text-white">
                    <span className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Défense & Conseil Juridique</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">L'Excellence Juridique à Votre Service</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                        Le Cabinet Dupont accompagne les entreprises et les particuliers avec rigueur, 
                        réactivité et indépendance pour défendre vos intérêts.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 font-sans">
                        <button className="bg-amber-700 hover:bg-amber-600 px-8 py-3.5 rounded text-white font-semibold transition-colors">
                            Consultation initiale
                        </button>
                        <button className="bg-transparent border border-white hover:bg-white hover:text-slate-900 px-8 py-3.5 rounded text-white font-semibold transition-colors">
                            Découvrir nos expertises
                        </button>
                    </div>
                </div>
            </section>

            {/* Expertises */}
            <section id="expertises" className="py-24 max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Domaines d'Intervention</h2>
                    <div className="h-1 w-20 bg-amber-700 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 font-sans">
                    {[
                        { icon: 'gavel', title: 'Droit Pénal', desc: 'Assistance et représentation à toutes les étapes de la procédure pénale.' },
                        { icon: 'corporate_fare', title: 'Droit des Affaires', desc: 'Accompagnement des dirigeants, contrats commerciaux et contentieux.' },
                        { icon: 'family_restroom', title: 'Droit de la Famille', desc: 'Divorce, succession, et protection du patrimoine familial.' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-lg shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                            <span className="material-symbols-outlined text-4xl text-amber-700 mb-6 group-hover:scale-110 transition-transform">{item.icon}</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            <a href="#" className="inline-flex items-center gap-2 mt-6 text-amber-800 font-semibold text-sm group-hover:underline">
                                En savoir plus <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            {/* Notre Equipe */}
            <section id="cabinet" className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Notre Équipe</h2>
                        <div className="h-1 w-20 bg-amber-700 mx-auto mb-6"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto font-sans">Des avocats associés expérimentés, dédiés à la réussite de vos projets et à la défense de vos intérêts stratégiques.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { name: 'Me. Jean Dupont', role: 'Associé Fondateur - Droit des Affaires', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop' },
                            { name: 'Me. Claire Leroy', role: 'Associée - Droit Pénal', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop' },
                            { name: 'Me. Antoine Morel', role: 'Avocat Collaborateur', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop' }
                        ].map((lawyer, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg mb-6 shadow-md">
                                    <img src={lawyer.img} alt={lawyer.name} className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                                    <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/20 transition-colors"></div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 font-serif">{lawyer.name}</h3>
                                <p className="text-amber-700 font-sans text-sm font-medium uppercase tracking-wider mt-1">{lawyer.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="material-symbols-outlined text-amber-700 text-4xl mb-4">balance</span>
                    <p className="mb-6 font-serif">Cabinet Dupont • Avocats au Barreau de Paris</p>
                    <p className="text-sm font-sans">
                        Site de démonstration généré par PixUp Agency.
                        <Link href="/portfolio" className="text-amber-500 hover:underline ml-2">Retour au portfolio</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}
