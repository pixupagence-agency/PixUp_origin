"use client";

import React from "react";
import Link from "next/link";

export default function AssoSportiveLandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-500/30">
            {/* Header */}
            <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-4xl">directions_run</span>
                        <div className="font-extrabold uppercase leading-none">
                            <span className="text-slate-900 block text-lg">Club Elite</span>
                            <span className="text-emerald-600 text-xs tracking-widest block">Athlétisme</span>
                        </div>
                    </div>
                    <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-600 uppercase">
                        <a href="#club" className="hover:text-emerald-600 transition-colors">Le Club</a>
                        <a href="#disciplines" className="hover:text-emerald-600 transition-colors">Disciplines</a>
                        <a href="#resultats" className="hover:text-emerald-600 transition-colors">Résultats</a>
                        <a href="#adhesion" className="hover:text-emerald-600 transition-colors">Adhésion & Contact</a>
                    </nav>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5">
                        Devenir Membre
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <iframe 
                        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 mix-blend-overlay"
                        src="https://www.youtube.com/embed/5N2evxPqvtA?autoplay=1&mute=1&loop=1&playlist=5N2evxPqvtA&controls=0&disablekb=1&playsinline=1"
                        allow="autoplay; encrypted-media"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
                    {/* Decorative Shape */}
                    <div className="absolute -bottom-10 left-0 w-full overflow-hidden transform rotate-1">
                        <div className="h-24 bg-slate-50 w-[110%] -ml-[5%]"></div>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-500/30">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Inscriptions ouvertes 2026-2027
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tight">
                            Repoussez vos <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">limites</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                            Rejoignez plus de 450 licenciés passionnés. Entraînements adaptés, 
                            infrastructures professionnelles et encadrement de haut niveau.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 flex items-center gap-2">
                                Dossier d'inscription <span className="material-symbols-outlined">download</span>
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold py-4 px-8 rounded-full transition-all">
                                Voir le planning
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disciplines Section */}
            <section id="disciplines" className="py-24 bg-slate-50 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm block mb-2">Nos Sections</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">Pour Tous Les Niveaux</h2>
                        </div>
                        <p className="text-slate-600 max-w-lg font-medium text-lg">
                            De la catégorie éveil athlétique aux vétérans, en loisir ou en compétition, 
                            nous avons un programme adapté à vous.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Athlétisme Piste', desc: 'Sprint, haies, sauts, lancers. Compétitions régionales et nationales.', icon: 'directions_run', color: 'bg-blue-500' },
                            { name: 'Hors Stade & Trail', desc: '10km, semi-marathon, marathon et préparation trail nature.', icon: 'terrain', color: 'bg-emerald-500' },
                            { name: 'Marche Nordique', desc: 'Sport santé, renforcement musculaire et cardio en plein air.', icon: 'hiking', color: 'bg-orange-500' },
                        ].map((disc, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group relative overflow-hidden">
                                <div className={`w-16 h-16 ${disc.color} rounded-2xl flex items-center justify-center shadow-lg text-white mb-8 group-hover:scale-110 transition-transform -rotate-6 group-hover:rotate-0`}>
                                    <span className="material-symbols-outlined text-3xl">{disc.icon}</span>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{disc.name}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-6">{disc.desc}</p>
                                <a href="#" className="font-bold text-emerald-600 flex items-center gap-1 group-hover:gap-3 transition-all">
                                    Découvrir la section <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner Call to action */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-600 transform skew-x-12 translate-x-10 hidden md:block opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">Prêt à chausser les pointes ?</h2>
                        <p className="text-slate-400 font-medium text-lg max-w-xl">Profitez de 2 séances d'essai gratuites pour découvrir nos infrastructures et faire connaissance avec les entraîneurs.</p>
                    </div>
                    <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-lg shadow-lg shadow-emerald-500/30 transition-all flex-shrink-0">
                        Demander mon essai
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-12 border-t border-slate-200 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-slate-500 font-bold mb-4">© Club Elite Athlétisme - Association Loi 1901</p>
                    <p className="text-sm text-slate-400">
                        Créé par l'Agence PixUp dans le cadre d'une démonstration technique.
                        <Link href="/portfolio" className="text-emerald-600 hover:text-emerald-700 font-bold ml-2 underline">Retour au portfolio PixUp</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}
