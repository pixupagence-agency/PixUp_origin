"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import PixelGrid from "@/components/PixelGrid";
import BrandLogo from "@/components/BrandLogo";

export default function ServiceDetail() {
    const { id } = useParams();
    const { t } = useLanguage();
    const { services, projects } = useData();

    const service = services.find(s => s.id === id);

    if (!service || !service.active) {
        notFound();
    }

    // Find related projects by checking if the category includes the service name
    const relatedProjects = projects
        .filter(p => p.active && p.category.toLowerCase().includes(service.name.toLowerCase()))
        .slice(0, 3);

    return (
        <>
            {/* Background Decoration */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className={`absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-${service.color === 'blue' ? 'primary' : (service.color === 'purple' ? 'secondary' : 'primary')}/10 blur-[120px]`}></div>
                <div className="absolute top-[20%] -right-[5%] w-[30%] h-[50%] rounded-full bg-secondary/10 blur-[100px]"></div>

                {/* Decorative Pixels */}
                <div className="absolute top-40 left-10 opacity-10">
                    <PixelGrid rows={10} cols={4} size={6} gap={2} className="text-primary" />
                </div>
                <div className="absolute bottom-20 right-10 opacity-10">
                    <PixelGrid rows={6} cols={15} size={8} gap={4} className="text-secondary" variant="diagonal" />
                </div>
            </div>

            <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex mb-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <Link href="/our-services" className="hover:text-primary transition-colors">{t.nav.services}</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 dark:text-white uppercase tracking-wider text-xs font-bold">{service.name}</span>
                    </nav>

                    {/* Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="animate-in fade-in slide-in-from-left duration-1000">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${service.color === 'blue' ? 'primary' : (service.color === 'purple' ? 'secondary' : 'primary')}/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20`}>
                                <span className="material-symbols-outlined text-[16px]">{service.icon}</span>
                                {service.name}
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-8">
                                {t.servicesPage.expertiseTitle} <br />
                                <span className="text-gradient">{service.name}</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                                {service.longDescription || service.description}
                            </p>
                            
                            {service.benefits && service.benefits.length > 0 && (
                                <div className="space-y-4 mb-10">
                                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-primary"></span>
                                        Expertises clés
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                                <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-wrap gap-4">
                                <Link 
                                    href={`/contact-us?subject=Service ${service.name}`}
                                    className="px-8 py-4 rounded-2xl bg-primary text-white font-bold shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all"
                                >
                                    Démarrer votre projet
                                </Link>
                                <Link 
                                    href="#process"
                                    className="px-8 py-4 rounded-2xl glass-card text-slate-900 dark:text-white font-bold hover:bg-white/50 dark:hover:bg-slate-800 transition-all"
                                >
                                    Notre processus
                                </Link>
                            </div>
                        </div>

                        <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
                            <div className="relative aspect-square max-w-lg mx-auto">
                                {/* Geometric Shapes */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                                <div className="absolute top-[10%] right-[10%] w-[60%] h-[60%] glass-card rounded-[40px] rotate-6 flex items-center justify-center p-12 border-primary/20 shadow-2xl">
                                    <span className="material-symbols-outlined text-[120px] text-primary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}>{service.icon}</span>
                                </div>
                                <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[50%] glass-card rounded-[40px] -rotate-12 flex flex-col items-center justify-center p-8 border-secondary/20 shadow-2xl">
                                    <div className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight text-center">Design Unique</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Approche Sur Mesure</div>
                                </div>
                                
                                {/* Floating decorative items */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl brand-gradient flex items-center justify-center shadow-lg animate-bounce">
                                    <span className="material-symbols-outlined text-white">bolt</span>
                                </div>
                                <div className="absolute top-1/2 -right-12 w-20 h-20 rounded-full glass-card flex items-center justify-center shadow-xl border-white/20 animate-pulse">
                                    <BrandLogo size={30} color="primary" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features/Details Grid */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Pourquoi nous faire confiance ?</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">Notre approche combine créativité sans limites et rigueur stratégique pour des résultats tangibles.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center mb-6 group-hover:brand-gradient group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">analytics</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Analyse Stratégique</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">Nous commençons chaque projet par une immersion totale dans votre univers pour comprendre vos enjeux et vos objectifs réels.</p>
                            </div>
                            <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-secondary flex items-center justify-center mb-6 group-hover:brand-gradient group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">brush</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Design sur Mesure</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">Pas de templates. Chaque design est forgé à partir d'une page blanche pour garantir une identité unique et différenciante.</p>
                            </div>
                            <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center mb-6 group-hover:brand-gradient group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">rocket_launch</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Exécution Agile</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">Nous privilégions la rapidité et la qualité avec des cycles de développement itératifs et une communication constante.</p>
                            </div>
                        </div>
                    </div>

                    {/* Related Projects */}
                    {relatedProjects.length > 0 && (
                        <div className="mb-32">
                            <div className="flex items-end justify-between mb-12">
                                <div className="max-w-xl">
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Nos dernières réalisations</h2>
                                    <p className="text-slate-500">Découvrez comment nous avons aidé nos clients dans le domaine de <span className="text-primary font-bold">{service.name}</span>.</p>
                                </div>
                                <Link 
                                    href="/portfolio" 
                                    className="hidden sm:flex items-center gap-2 text-primary font-bold hover:underline"
                                >
                                    Voir tout le portfolio <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedProjects.map((project) => (
                                    <Link key={project.id} href={project.url || "#"} className="group relative block overflow-hidden rounded-3xl glass-card aspect-[4/3]">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{project.category}</span>
                                            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQ/Process Section */}
                    <div id="process" className="bg-slate-900 dark:bg-slate-800/50 rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                            <PixelGrid rows={10} cols={10} size={20} gap={10} className="text-white" variant="diagonal" />
                        </div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-black mb-8 leading-tight">Votre projet de {service.name.toLowerCase()} mérite le meilleur <span className="text-primary">processus créatif</span>.</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-black text-xl text-primary border border-white/10">01</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Découverte & Audit</h4>
                                            <p className="text-slate-400 text-sm">Échange approfondi pour définir les contours, les cibles et les indicateurs de succès du projet.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-black text-xl text-primary border border-white/10">02</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Conception & UX</h4>
                                            <p className="text-slate-400 text-sm">Architecture de l'information et wireframes pour valider le parcours utilisateur.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-black text-xl text-primary border border-white/10">03</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Design Pixel Perfect</h4>
                                            <p className="text-slate-400 text-sm">Création de l'interface visuelle avec une attention méticuleuse portée aux détails et à l'âme de votre marque.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="glass-card bg-white/5 border-white/10 p-10 rounded-3xl">
                                <h3 className="text-2xl font-bold mb-6">Prêt à transformer vos idées ?</h3>
                                <p className="text-slate-300 mb-8 leading-relaxed">Parlons de votre prochain grand projet. Remplissez le formulaire et recevez une proposition chiffrée sous 48h.</p>
                                <Link 
                                    href={`/contact-us?subject=Service ${service.name}`}
                                    className="block w-full text-center py-4 rounded-2xl brand-gradient text-white font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all uppercase tracking-widest text-xs"
                                >
                                    Estimer mon projet
                                </Link>
                                <p className="mt-6 text-center text-xs text-slate-500">Réponse garantie sous 24-48h ouvrés.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
