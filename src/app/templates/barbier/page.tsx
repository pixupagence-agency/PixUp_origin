"use client";

import React from "react";
import Link from "next/link";

export default function BarbierLandingPage() {
    return (
        <div className="bg-[var(--color-barber-surface)] text-[var(--color-barber-on-surface)] font-manrope selection:bg-[var(--color-barber-primary)] selection:text-[var(--color-barber-on-primary)] min-h-screen">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;700;800&family=Manrope:wght@300;400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
                
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
                }
                .hero-text-shadow {
                    text-shadow: 0 4px 12px rgba(0,0,0,0.5);
                }
            `}</style>
            
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-[var(--color-barber-surface)]/80 backdrop-blur-md flex justify-between items-center px-12 py-6 border-b border-white/5">
                <div className="text-2xl font-bold tracking-tight text-white font-serif">
                    L'Atelier du Barbier
                </div>
                <div className="hidden md:flex gap-12 items-center">
                    <a className="text-neutral-400 uppercase text-xs tracking-widest hover:text-amber-200 transition-colors duration-300" href="#services">Services</a>
                    <a className="text-neutral-400 uppercase text-xs tracking-widest hover:text-amber-200 transition-colors duration-300" href="#gallery">Galerie</a>
                    <a className="text-neutral-400 uppercase text-xs tracking-widest hover:text-amber-200 transition-colors duration-300" href="#team">Équipe</a>
                </div>
                <button className="bg-[var(--color-barber-primary-container)] text-[var(--color-barber-on-primary-container)] px-8 py-3 font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all active:scale-95 duration-150 ease-in-out">
                    Réserver
                </button>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="relative h-screen w-full flex items-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img 
                        className="absolute inset-0 w-full h-full object-cover" 
                        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop" 
                        alt="Dramatic industrial shop setting"
                    />
                    <div className="relative z-20 px-12 md:px-24 max-w-5xl">
                        <h1 className="font-newsreader text-7xl md:text-9xl font-extrabold tracking-tighter text-white leading-[0.9] hero-text-shadow mb-8 uppercase">
                            L'Atelier du <br/> Barbier:<br/>
                            <span className="text-[var(--color-barber-primary)] italic font-normal normal-case">L'Art du Soin</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-300 max-w-xl mb-12">
                            Un sanctuaire pour l'homme moderne. Là où le savoir-faire artisanal rencontre la précision contemporaine au cœur de la ville.
                        </p>
                        <div className="flex gap-6">
                            <a className="bg-[var(--color-barber-primary)] px-10 py-5 text-[var(--color-barber-on-primary)] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all" href="#booking">
                                Prendre Rendez-vous
                            </a>
                            <a className="border border-white/20 px-10 py-5 text-[var(--color-barber-primary)] font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all text-center" href="#services">
                                Nos Services
                            </a>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-32 px-12 md:px-24 bg-[var(--color-barber-surface)]" id="services">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-[var(--color-barber-primary)] uppercase tracking-[0.4em] text-sm mb-4">Art Précis</h2>
                            <h3 className="font-newsreader text-5xl md:text-7xl font-bold leading-tight">Des services méticuleux pour l'homme exigeant.</h3>
                        </div>
                        <p className="text-neutral-400 max-w-sm mb-2 font-light">
                            Chaque prestation est une heure dévouée de savoir-faire, incluant une consultation personnalisée et des produits haut de gamme.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/5">
                        {/* Service 01 */}
                        <div className="group bg-[var(--color-barber-surface)] hover:bg-[var(--color-barber-surface-container-low)] transition-colors duration-500 p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between h-[400px]">
                            <div>
                                <span className="material-symbols-outlined text-[var(--color-barber-primary)] text-4xl mb-8">content_cut</span>
                                <h4 className="font-newsreader text-3xl font-bold mb-4">Coupe Signature</h4>
                                <p className="text-neutral-400 font-light">Coupe sur mesure, dégradé de précision et finitions au rasoir avec coiffage premium.</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="font-newsreader text-4xl text-[var(--color-barber-primary)] font-bold">65€</span>
                                <span className="text-[10px] uppercase tracking-widest text-neutral-500">45 MINS</span>
                            </div>
                        </div>
                        {/* Service 02 */}
                        <div className="group bg-[var(--color-barber-surface-container-low)] p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between h-[400px]">
                            <div>
                                <span className="material-symbols-outlined text-[var(--color-barber-primary)] text-4xl mb-8">face</span>
                                <h4 className="font-newsreader text-3xl font-bold mb-4">Taille de Barbe Expert</h4>
                                <p className="text-neutral-400 font-light">Sculptage, détails et soin à l'huile avec serviette chaude et contour au rasoir.</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="font-newsreader text-4xl text-[var(--color-barber-primary)] font-bold">45€</span>
                                <span className="text-[10px] uppercase tracking-widest text-neutral-500">30 MINS</span>
                            </div>
                        </div>
                        {/* Service 03 */}
                        <div className="group bg-[var(--color-barber-surface)] hover:bg-[var(--color-barber-surface-container-low)] transition-colors duration-500 p-12 flex flex-col justify-between h-[400px]">
                            <div>
                                <span className="material-symbols-outlined text-[var(--color-barber-primary)] text-4xl mb-8">spa</span>
                                <h4 className="font-newsreader text-3xl font-bold mb-4">Rasage à l'Ancienne</h4>
                                <p className="text-neutral-400 font-light">Le rituel ultime. Serviettes à la vapeur, huiles de pré-rasage et rasoir coupe-chou traditionnel.</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="font-newsreader text-4xl text-[var(--color-barber-primary)] font-bold">75€</span>
                                <span className="text-[10px] uppercase tracking-widest text-neutral-500">60 MINS</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="bg-black py-32 px-12 md:px-24" id="gallery">
                    <div className="text-center mb-24">
                        <h2 className="font-newsreader text-5xl md:text-6xl font-bold mb-4">La Galerie du Savoir-Faire</h2>
                        <div className="w-24 h-1 bg-[var(--color-barber-primary)] mx-auto mb-8"></div>
                    </div>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {[
                            "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
                            "https://images.unsplash.com/photo-1512690196236-d5a234e73751",
                            "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
                            "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
                            "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8",
                            "https://images.unsplash.com/photo-1590540178592-29b1aa561193"
                        ].map((src, idx) => (
                            <div key={idx} className="relative overflow-hidden group">
                                <img 
                                    className="w-full grayscale hover:grayscale-0 transition-all duration-700" 
                                    src={`${src}?q=80&w=800&auto=format&fit=crop`} 
                                    alt={`Grooming gallery ${idx + 1}`}
                                />
                                <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-[var(--color-barber-primary)]/20 transition-all duration-500 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-32 px-12 md:px-24 bg-[var(--color-barber-surface-container-low)]" id="team">
                    <div className="mb-24">
                        <h2 className="text-[var(--color-barber-primary)] uppercase tracking-[0.4em] text-sm mb-4">Les Artisans</h2>
                        <h3 className="font-newsreader text-5xl md:text-7xl font-bold">Les Maîtres de la Lame.</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Julian */}
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start group">
                            <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden">
                                <img 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop" 
                                    alt="Julian - Master Barber"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <h4 className="font-newsreader text-4xl font-bold mb-2">Julian</h4>
                                <span className="text-[var(--color-barber-primary)] uppercase tracking-widest text-xs mb-6">Fondateur & Maître Barbier</span>
                                <p className="text-neutral-400 leading-relaxed mb-6 font-light">
                                    Avec plus de 15 ans d'expérience, Julian se spécialise dans les techniques classiques européennes et les dégradés architecturaux. Il croit que le soin est un rituel de restauration.
                                </p>
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-neutral-600 cursor-pointer hover:text-[var(--color-barber-primary)] transition-colors">share</span>
                                    <span className="material-symbols-outlined text-neutral-600 cursor-pointer hover:text-[var(--color-barber-primary)] transition-colors">photo_camera</span>
                                </div>
                            </div>
                        </div>
                        {/* Elena */}
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start group">
                            <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden">
                                <img 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                    src="https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=800&auto=format&fit=crop" 
                                    alt="Elena - Stylist"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <h4 className="font-newsreader text-4xl font-bold mb-2">Elena</h4>
                                <span className="text-[var(--color-barber-primary)] uppercase tracking-widest text-xs mb-6">Styliste & Spécialiste Barbe</span>
                                <p className="text-neutral-400 leading-relaxed mb-6 font-light">
                                    Elena apporte un regard éditorial au métier de barbier traditionnel. Sa maîtrise du rasoir droit et du sculptage de barbe en a fait l'une des stylistes les plus recherchées de la ville.
                                </p>
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-neutral-600 cursor-pointer hover:text-[var(--color-barber-primary)] transition-colors">share</span>
                                    <span className="material-symbols-outlined text-neutral-600 cursor-pointer hover:text-[var(--color-barber-primary)] transition-colors">photo_camera</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Booking Section */}
                <section className="py-32 px-12 md:px-24 bg-[var(--color-barber-surface)] flex justify-center" id="booking">
                    <div className="w-full max-w-6xl bg-[var(--color-barber-surface-container)] p-12 md:p-24 relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h2 className="font-newsreader text-6xl md:text-7xl font-bold mb-8 leading-none">Votre Fauteuil vous <br/><span className="text-[var(--color-barber-primary)] italic font-normal">Attend.</span></h2>
                                <p className="text-neutral-400 text-xl font-light mb-12">
                                    Nous fonctionnons principalement sur rendez-vous pour garantir à chaque client notre attention indivisible et une expérience premium.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6">
                                        <span className="material-symbols-outlined text-[var(--color-barber-primary)]">location_on</span>
                                        <span className="font-light">124 Rue de la Forge, Quartier Historique</span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="material-symbols-outlined text-[var(--color-barber-primary)]">call</span>
                                        <span className="font-light">02 51 00 00 00</span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="material-symbols-outlined text-[var(--color-barber-primary)]">schedule</span>
                                        <span className="font-light">Mar - Sam : 10:00 - 20:00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-black/40 p-10 border border-white/5">
                                <h4 className="font-newsreader text-3xl mb-8 font-bold">Réservation Rapide</h4>
                                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2 font-bold">Prestation Souhaitée</label>
                                        <select className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-[var(--color-barber-primary)] px-0 text-white py-3 appearance-none">
                                            <option>Coupe Signature</option>
                                            <option>Taille de Barbe Expert</option>
                                            <option>Rasage à l'Ancienne</option>
                                            <option>L'Expérience Complète Atelier</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2 font-bold">Date Souhaitée</label>
                                            <input className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-[var(--color-barber-primary)] px-0 text-white py-3" type="date"/>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2 font-bold">Nom Complet</label>
                                            <input className="w-full bg-transparent border-0 border-b border-white/20 focus:ring-0 focus:border-[var(--color-barber-primary)] px-0 text-white py-3" placeholder="Jean Dupont" type="text"/>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[var(--color-barber-primary)] py-5 text-[var(--color-barber-on-primary)] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all mt-4" type="submit">
                                        Confirmer le Rendez-vous
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black py-24 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
                <div>
                    <div className="text-xl font-serif text-amber-400 mb-8 uppercase tracking-widest">L'Atelier du Barbier</div>
                    <p className="text-neutral-500 max-w-xs font-light leading-relaxed">
                        Définir le soin moderne à travers un savoir-faire intemporel et une attention obsessionnelle aux détails.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className="text-[var(--color-barber-primary)] uppercase tracking-widest text-xs font-bold mb-4">Suivez-nous</h5>
                    <a className="text-neutral-500 hover:text-white transition-all" href="#">Instagram</a>
                    <a className="text-neutral-500 hover:text-white transition-all" href="#">Facebook</a>
                    <a className="text-neutral-500 hover:text-white transition-all" href="#">Contact</a>
                    <a className="text-neutral-500 hover:text-white transition-all" href="#">Horaires</a>
                </div>
                <div className="flex flex-col justify-between items-start md:items-end">
                    <div className="text-right hidden md:block">
                        <span className="material-symbols-outlined text-amber-400 text-5xl">stat_3</span>
                    </div>
                    <p className="text-neutral-500 text-sm mt-8">
                        © 2024 L'Atelier du Barbier. 
                        <Link href="/portfolio" className="text-[var(--color-barber-primary)] hover:underline ml-2">Retour au portfolio</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}
