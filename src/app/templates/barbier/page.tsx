"use client";

import React from "react";
import Link from "next/link";

export default function BarbierLandingPage() {
    return (
        <div className="min-h-screen bg-neutral-900 font-sans text-neutral-300 selection:bg-orange-500/30">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 transition-all">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-orange-500 text-3xl">content_cut</span>
                        <span className="font-black text-2xl tracking-tighter text-white uppercase">The Vintage Barber</span>
                    </div>
                    <nav className="hidden md:flex gap-8 text-sm font-bold text-neutral-400 uppercase tracking-wider">
                        <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
                        <a href="#equipe" className="hover:text-orange-500 transition-colors">L'Artisan</a>
                        <a href="#galerie" className="hover:text-orange-500 transition-colors">Galerie</a>
                        <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
                    </nav>
                    <button className="bg-orange-600 text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-widest hover:bg-orange-500 transition-colors group flex items-center gap-2">
                        Réserver 
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">calendar_month</span>
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <iframe 
                        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 grayscale mix-blend-luminosity"
                        src="https://www.youtube.com/embed/7yBsz8R-8h0?autoplay=1&mute=1&loop=1&playlist=7yBsz8R-8h0&controls=0&disablekb=1&playsinline=1"
                        allow="autoplay; encrypted-media"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/80 to-neutral-900"></div>
                </div>
                
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-32">
                    <div className="inline-block p-4 rounded-full border border-orange-500/30 mb-8 bg-black/40 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-orange-500 text-4xl">cut</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tight mb-6">
                        L'artisan de <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">votre style</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 font-medium">
                        Un savoir-faire traditionnel, une ambiance authentique et un service sur-mesure pour hommes modernes.
                    </p>
                    <button className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold px-10 py-4 uppercase tracking-widest rounded transition-all transform hover:scale-105 shadow-xl shadow-orange-600/20">
                        Prendre rendez-vous en ligne
                    </button>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-24 bg-neutral-900 border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 fade-in">
                        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">Notre Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Services Classiques</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Coupe Traditionnelle', desc: 'Coupe aux ciseaux, finitions à la tondeuse, shampoing et coiffage.', price: '25€', icon: 'content_cut' },
                            { title: 'Taille de Barbe', desc: 'Rasage à l\'ancienne au coupe-chou, serviette chaude et huile nourrissante.', price: '18€', icon: 'face' },
                            { title: 'Le Forfait Premium', desc: 'La totale : Coupe, taille de barbe, soin visage et massage crânien.', price: '40€', icon: 'local_fire_department' }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-neutral-800 p-10 rounded text-center border border-neutral-700 hover:border-orange-500/50 transition-colors group cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                <span className="material-symbols-outlined text-4xl text-orange-500 mb-6">{service.icon}</span>
                                <h3 className="text-2xl font-black text-white mb-4 uppercase">{service.title}</h3>
                                <p className="text-neutral-400 mb-8">{service.desc}</p>
                                <span className="text-3xl font-black text-white">{service.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Galerie */}
            <section id="galerie" className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Notre Travail</h2>
                        <div className="w-16 h-1 bg-orange-500 mx-auto mt-6"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" alt="Barber cut 1" className="w-full h-64 object-cover rounded hover:opacity-75 transition-opacity" />
                        <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" alt="Barber cut 2" className="w-full h-64 object-cover rounded hover:opacity-75 transition-opacity" />
                        <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop" alt="Barber cut 3" className="w-full h-64 object-cover rounded hover:opacity-75 transition-opacity" />
                        <img src="https://images.unsplash.com/photo-1532710093739-9470acff878b?q=80&w=800&auto=format&fit=crop" alt="Barber tools" className="w-full h-64 object-cover rounded hover:opacity-75 transition-opacity" />
                    </div>
                </div>
            </section>

            {/* Features Info Box */}
            <section className="bg-orange-600 text-black py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
                    <div>
                        <span className="material-symbols-outlined text-4xl mb-4">pin_drop</span>
                        <h4 className="font-black uppercase text-xl mb-2">Centre-ville</h4>
                        <p className="font-medium opacity-80">14 Rue des Forgerons, <br/>85110 Chantonnay</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined text-4xl mb-4">schedule</span>
                        <h4 className="font-black uppercase text-xl mb-2">Horaires</h4>
                        <p className="font-medium opacity-80">Mar-Ven: 9h - 19h <br/>Samedi: 9h - 17h</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined text-4xl mb-4">phone_iphone</span>
                        <h4 className="font-black uppercase text-xl mb-2">Contact</h4>
                        <p className="font-medium opacity-80">02 51 00 00 00 <br/>hello@vintagebarber.fr</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-12 text-center text-neutral-600">
                <p className="mb-4">© The Vintage Barber • Artisan Indépendant</p>
                <p className="text-sm">
                    Démo PixUp Agency.
                    <Link href="/portfolio" className="text-orange-500 hover:text-white transition-colors ml-2 border-b border-orange-500/30">Retour</Link>
                </p>
            </footer>
        </div>
    );
}
