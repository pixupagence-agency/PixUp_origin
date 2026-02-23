"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import Link from "next/link";

export default function PixupHomePage() {
    const { t } = useLanguage();
    const { services, testimonials } = useData();

    return (
        <>
            {/*  Main Content Wrapper  */}
            <main className="flex-grow pt-20">
                {/*  Hero Section  ... */}
                {/* ... (keep existing hero code) ... */}
                <section className="relative min-h-[600px] lg:min-h-[800px] flex items-center justify-center px-4 overflow-hidden">
                    {/*  Background Decoration  */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]"></div>
                        {/*  Abstract 3D Render Placeholder  */}
                        <img alt="Abstract 3D Design Background" className="w-full h-full object-cover opacity-60 dark:opacity-40 mix-blend-overlay" data-alt="Abstract 3D fluid shapes with blue and purple gradients" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAF2eKocx5A56vpK0iavRHzPgzQYmiVTqy1_8RKKMlEJmtDKKP41wP6z-ockgCOlwuBzhhNJQmn1k4L3Ie9Qz179UXIQBD2-k9bAGAwObSk-wTUDM5fnKPDuxza1bR0DgtLJUmHeBCMQQolIgevoINjYnrwwem3ve3qIa326rBzGk-nBWqGsX2NQZ09snLdZBAFJcXv0vWNwaMS-VDNk20Re8-JLDMlZuTU-GOiJpdYshZeeHiyWOd5T7D2zqYBpeJNLPiTtNX4Iva" />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/10 border border-white/20 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">{t.home.heroBadge}</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                            {t.home.heroTitleLine1} <br className="hidden sm:block" />
                            <span className="text-gradient">{t.home.heroTitleLine2}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                            {t.home.heroDescription}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                            <Link href="/portfolio" className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary hover:bg-blue-600 text-white font-bold text-base transition-all hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 group">
                                {t.home.viewOurWork}
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/our-services" className="w-full sm:w-auto h-12 px-8 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold text-base transition-all flex items-center justify-center">
                                {t.home.ourServices}
                            </Link>
                        </div>
                    </div>
                </section>
                {/*  Marquee / Client Logos  */}
                {/* <div className="py-8 border-y border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm overflow-hidden">
                    <div className="flex items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap px-4">
                        <span className="text-xl font-black font-display tracking-tighter">ACME</span>
                        <span className="text-xl font-bold font-serif italic">Globex</span>
                        <span className="text-xl font-extrabold tracking-widest uppercase">Soylent</span>
                        <span className="text-xl font-bold font-mono">Umbrella</span>
                        <span className="text-xl font-black tracking-tight">Initech</span>
                    </div>
                </div> */}
                {/*  Services Section  */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">{t.home.expertiseTitle}</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">{t.home.expertiseDesc}</p>
                        </div>
                        <Link className="text-primary font-bold hover:underline decoration-2 underline-offset-4 flex items-center gap-1" href="/our-services">
                            {t.home.viewAllServices} <span className="material-symbols-outlined text-sm">arrow_outward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.filter(s => s.active).slice(0, 4).map((service) => (
                            <div key={service.id} className="group p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.name}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                {/*  Selected Work / Philosophy Section  */}
                <section className="py-24 bg-surface-light dark:bg-surface-dark border-y border-slate-200 dark:border-white/5 relative overflow-hidden">
                    {/*  Background pattern  */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#135bec 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wide">{t.home.philosophyTag}</div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                                    {t.home.philosophyTitle}
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {t.home.philosophyDesc}
                                </p>
                                <div className="flex flex-col gap-6 pt-4">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 min-w-6 text-primary">
                                            <span className="material-symbols-outlined">check_circle</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t.home.philosophyBullet1Title}</h4>
                                            <p className="text-slate-600 dark:text-slate-400 mt-1">{t.home.philosophyBullet1Desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 min-w-6 text-primary">
                                            <span className="material-symbols-outlined">check_circle</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t.home.philosophyBullet2Title}</h4>
                                            <p className="text-slate-600 dark:text-slate-400 mt-1">{t.home.philosophyBullet2Desc}</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/contact-us" className="inline-block mt-8 px-8 py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                                    {t.home.meetTheTeam}
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img alt="Team Collaboration" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" data-alt="Creative team collaborating in a modern office with sticky notes on glass wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFxyuy6LR-Ky27XKnBFTYVNSFnmCWB3X4M1KbivtOVXldDwIp_9zVPe1vdwrwe-0xNLP4_4RSRTsU9jDEz-_f05PnJDbmgw-AalgwkP_VtYJe-4cBbPZcOLIDXLOU71g5P-E2jCT5FbgFfgOLG4uMLkRZ-IPJmOqIpfY4c0hf8e9RX7rBZWZ-EAu8ckd3N3SvPruTZcCuU_xdKVn2AawDNhL6j2R1kDxX-fU4dCPCxim76GX85afomwT69LV5P35UvWbNAQXUZiack" />
                                </div>
                                {/*  Floating Stat Card  */}
                                <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 max-w-[200px]">
                                    <div className="text-4xl font-black text-primary mb-1">10+</div>
                                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{t.home.statsYears}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Testimonials Section  */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto bg-white/30 dark:bg-black/20 rounded-3xl mb-24 backdrop-blur-sm border border-slate-100 dark:border-white/5">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">{t.home.testimonialTitle}</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">{t.home.testimonialDesc}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 border border-slate-50 dark:border-white/5 flex flex-col gap-6 relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-6xl italic">format_quote</span>
                                </div>
                                <div className="flex gap-1 text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-sm filled">star</span>
                                    ))}
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic relative z-10">"{testimonial.content}"</p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-slate-100 flex items-center justify-center text-primary font-bold">
                                        {testimonial.avatar ? <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" /> : testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/*  CTA Section  */}
                <section className="py-24 px-4">
                    <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
                        {/*  Decorative Circles  */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{t.home.ctaTitle}</h2>
                            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                                {t.home.ctaDesc}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact-us" className="bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105 active:scale-95 inline-block">
                                    {t.home.startProject}
                                </Link>
                                <Link href="/contact-us" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors inline-block">
                                    {t.home.scheduleCall}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/*  Floating Action Button for Contact  */}
            <a className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300" href="#">
                <span className="material-symbols-outlined text-2xl">chat</span>
            </a>

        </>
    );
}