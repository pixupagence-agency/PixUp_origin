"use client";

import React from "react";
import Link from "next/link";

export default function AssoSportiveLandingPage() {
    return (
        <div className="bg-[var(--color-sports-surface)] text-[var(--color-sports-on-surface)] font-space selection:bg-[var(--color-sports-primary)] selection:text-[var(--color-sports-on-primary)] min-h-screen">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
                
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
                }
            `}</style>
            
            {/* Dynamic Navigation */}
            <nav className="fixed top-0 w-full z-50 mix-blend-difference px-12 py-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-black font-bold">bolt</span>
                    </div>
                    <span className="text-white font-bold tracking-tighter text-2xl uppercase">SPORTS PERF</span>
                </div>
                <div className="hidden md:flex gap-16 text-white text-xs font-bold uppercase tracking-[0.3em]">
                    <a className="hover:text-[var(--color-sports-primary)] transition-colors" href="#programs">Programmes</a>
                    <a className="hover:text-[var(--color-sports-primary)] transition-colors" href="#stats">Performance</a>
                    <a className="hover:text-[var(--color-sports-primary)] transition-colors" href="#community">Communauté</a>
                </div>
                <button className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-sports-primary)] transition-all">
                    Rejoindre l'Élite
                </button>
            </nav>

            <main>
                {/* Hero Section with Brutalist Typography */}
                <section className="relative h-screen flex flex-col justify-center px-12 md:px-24 bg-black overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-40">
                        <img 
                            className="w-full h-full object-cover grayscale" 
                            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                            alt="Athlete in motion"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-4 text-[var(--color-sports-primary)] font-bold text-sm tracking-[0.5em] uppercase mb-8">
                            <span className="w-12 h-[2px] bg-[var(--color-sports-primary)]"></span>
                            La Performance Redéfinie
                        </div>
                        <h1 className="text-white text-[12vw] font-bold leading-[0.85] tracking-tighter uppercase">
                            Allez <br/> 
                            <span className="text-stroke">Plus Loin.</span>
                        </h1>
                        <p className="text-neutral-400 max-w-lg text-lg font-light leading-relaxed pt-8">
                            Rejoignez le club le plus technique. Un pôle pour les athlètes qui exigent l'excellence, la précision et une approche scientifique de la performance.
                        </p>
                        <div className="pt-12 flex gap-8 items-center">
                            <button className="bg-[var(--color-sports-primary)] text-[var(--color-sports-on-primary)] px-12 py-5 rounded-none font-bold uppercase tracking-widest text-sm hover:skew-x-[-12deg] transition-all duration-300">
                                Commencer l'Entraînement
                            </button>
                            <a className="text-white flex items-center gap-4 group" href="#">
                                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                    <span className="material-symbols-outlined">play_arrow</span>
                                </span>
                                <span className="uppercase tracking-widest text-xs font-bold">Voir le Trailer</span>
                            </a>
                        </div>
                    </div>
                    {/* Vertical Text Overlay */}
                    <div className="absolute right-12 bottom-24 hidden lg:block">
                        <div className="rotate-90 origin-right text-neutral-800 text-9xl font-bold tracking-tighter uppercase opacity-50">
                            ELITE SELECTION
                        </div>
                    </div>
                </section>

                {/* Programs Section - Kinetic Grid */}
                <section className="py-32 px-12 md:px-24 bg-white" id="programs">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
                        <h2 className="text-black text-6xl font-bold tracking-tighter uppercase">Disciplines de base.</h2>
                        <a className="text-black font-bold uppercase tracking-widest text-xs border-b-2 border-black pb-1 hover:text-[var(--color-sports-primary)] hover:border-[var(--color-sports-primary)] transition-all" href="#">Calendrier complet</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Haute Intensité */}
                        <div className="group relative bg-[#F5F5F7] p-12 overflow-hidden h-[500px] flex flex-col justify-end">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 pointer-events-none grayscale" 
                                src="https://images.unsplash.com/photo-1549576490-b0b4831da60a?q=80&w=800&auto=format&fit=crop" 
                                alt="HIIT Training"
                            />
                            <div className="absolute top-12 left-12 text-black/5 text-9xl font-bold">01</div>
                            <div className="relative z-10">
                                <h3 className="text-black text-3xl font-bold uppercase mb-4 kinetic-border pb-4">Haute Intensité</h3>
                                <p className="text-neutral-500 font-light mb-8">Conditionnement métabolique et puissance explosive pour une efficacité maximale.</p>
                                <button className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-4 group-hover:text-[var(--color-sports-primary)] transition-colors">
                                    Découvrir le programme <span className="material-symbols-outlined">north_east</span>
                                </button>
                            </div>
                        </div>
                        {/* Force & Forme */}
                        <div className="group relative bg-black p-12 overflow-hidden h-[500px] flex flex-col justify-end">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 pointer-events-none grayscale" 
                                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop" 
                                alt="Strength Training"
                            />
                            <div className="absolute top-12 left-12 text-white/5 text-9xl font-bold">02</div>
                            <div className="relative z-10">
                                <h3 className="text-white text-3xl font-bold uppercase mb-4 kinetic-border pb-4">Force & Forme</h3>
                                <p className="text-neutral-400 font-light mb-8">Entraînement de force scientifique et correction biomécanique pour la longévité.</p>
                                <button className="text-[var(--color-sports-primary)] font-bold uppercase tracking-widest text-xs flex items-center gap-4">
                                    Découvrir le programme <span className="material-symbols-outlined text-white">north_east</span>
                                </button>
                            </div>
                        </div>
                        {/* Lab de Mobilité */}
                        <div className="group relative bg-[#F5F5F7] p-12 overflow-hidden h-[500px] flex flex-col justify-end">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 pointer-events-none grayscale" 
                                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop" 
                                alt="Mobility Training"
                            />
                            <div className="absolute top-12 left-12 text-black/5 text-9xl font-bold">03</div>
                            <div className="relative z-10">
                                <h3 className="text-black text-3xl font-bold uppercase mb-4 kinetic-border pb-4">Lab de Mobilité</h3>
                                <p className="text-neutral-500 font-light mb-8">Techniques de récupération avancées et protocoles de flexibilité pour une performance optimale.</p>
                                <button className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-4 group-hover:text-[var(--color-sports-primary)] transition-colors">
                                    Découvrir le programme <span className="material-symbols-outlined">north_east</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Performance Stats Section */}
                <section className="py-40 bg-[var(--color-sports-primary)] text-black diagonal-bg" id="stats">
                    <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-20">
                        <div className="text-center">
                            <div className="text-8xl font-bold tracking-tighter mb-4">450+</div>
                            <div className="uppercase tracking-[0.3em] text-xs font-bold opacity-60">Membres Actifs</div>
                        </div>
                        <div className="text-center">
                            <div className="text-8xl font-bold tracking-tighter mb-4">12</div>
                            <div className="uppercase tracking-[0.3em] text-xs font-bold opacity-60">Plateformes Élite</div>
                        </div>
                        <div className="text-center">
                            <div className="text-8xl font-bold tracking-tighter mb-4">98%</div>
                            <div className="uppercase tracking-[0.3em] text-xs font-bold opacity-60">Objectifs Atteints</div>
                        </div>
                        <div className="text-center">
                            <div className="text-8xl font-bold tracking-tighter mb-4">1.2M</div>
                            <div className="uppercase tracking-[0.3em] text-xs font-bold opacity-60">Cal Brûlées / Mois</div>
                        </div>
                    </div>
                </section>

                {/* Community Section */}
                <section className="py-32 bg-black px-12 md:px-24" id="community">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-[var(--color-sports-primary)] font-bold text-xs tracking-[0.4em] uppercase mb-8 block">Focus Membre</span>
                            <h2 className="text-white text-6xl font-bold tracking-tighter uppercase mb-12">Construit par la <br/><span className="text-stroke italic font-light">Communauté.</span></h2>
                            <blockquote className="text-neutral-300 text-3xl font-light leading-snug italic mb-12">
                                "La méthode Sports Perf a changé ma vision de l'entraînement. Ce n'est pas seulement de la sueur ; c'est une évolution basée sur les données. L'ambiance est électrique."
                            </blockquote>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-neutral-800 overflow-hidden">
                                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&h=400&auto=format&fit=crop" alt="Auteur de l'avis"/>
                                </div>
                                <div>
                                    <div className="text-white font-bold uppercase tracking-widest">Marcus Chen</div>
                                    <div className="text-[var(--color-sports-primary)] text-xs font-bold uppercase tracking-widest">Triathlète | Membre depuis 2022</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="aspect-square bg-neutral-900 rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <img 
                                        className="w-full h-full object-cover" 
                                        src="https://images.unsplash.com/photo-1574680096145-d05b474e2158?q=80&w=800&auto=format&fit=crop" 
                                        alt="Activité 1"
                                    />
                                </div>
                                <div className="aspect-square bg-neutral-900 rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <img 
                                        className="w-full h-full object-cover" 
                                        src="https://images.unsplash.com/photo-1541534741688-6078c64b52de?q=80&w=800&auto=format&fit=crop" 
                                        alt="Activité 2"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-square bg-neutral-900 rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <img 
                                        className="w-full h-full object-cover" 
                                        src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800&auto=format&fit=crop" 
                                        alt="Activité 3"
                                    />
                                </div>
                                <div className="aspect-[3/4] bg-[var(--color-sports-primary)] rounded-none flex items-center justify-center p-8">
                                    <span className="text-black font-bold uppercase tracking-tighter text-4xl leading-tight">Rejoindre la Tribu.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white py-24 px-12 md:px-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 border-b-2 border-black/5 pb-24">
                    <div className="col-span-2">
                        <h2 className="text-black text-6xl font-bold tracking-tighter uppercase mb-12">Passez au niveau <br/>supérieur <span className="text-[var(--color-sports-primary)]">Maintenant.</span></h2>
                        <form className="flex max-w-md border-b-2 border-black pb-4" onSubmit={(e) => e.preventDefault()}>
                            <input className="bg-transparent border-none focus:ring-0 text-xl font-bold uppercase tracking-tighter w-full" placeholder="Votre Email" type="email"/>
                            <button className="material-symbols-outlined text-black font-bold">arrow_forward_ios</button>
                        </form>
                    </div>
                    <div className="space-y-6">
                        <h5 className="text-black font-bold uppercase tracking-widest text-xs">Navigation</h5>
                        <ul className="space-y-4 text-sm text-neutral-500 font-medium">
                            <li><a className="hover:text-black" href="#">Programmes</a></li>
                            <li><a className="hover:text-black" href="#">Coaching</a></li>
                            <li><a className="hover:text-black" href="#">Équipement</a></li>
                            <li><a className="hover:text-black" href="#">Tarifs</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h5 className="text-black font-bold uppercase tracking-widest text-xs">Localisation</h5>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                            Sports Perf Hub<br/>
                            Zone Industrielle, B3<br/>
                            Paris, FR
                        </p>
                        <div className="flex gap-6 pt-4">
                            <span className="material-symbols-outlined text-black cursor-pointer">public</span>
                            <span className="material-symbols-outlined text-black cursor-pointer">share</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-black font-bold tracking-tighter text-2xl uppercase">SPORTS PERF</div>
                    <div className="flex gap-12 text-xs font-bold uppercase tracking-widest text-neutral-400">
                        <Link href="/portfolio" className="text-[var(--color-sports-primary)] hover:underline">Retour au portfolio</Link>
                        <a className="hover:text-black" href="#">Confidentialité</a>
                        <a className="hover:text-black" href="#">Conditions</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
