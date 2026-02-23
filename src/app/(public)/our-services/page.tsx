"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";

export default function OurServices() {
    const { t } = useLanguage();
    const { services } = useData();

    return (
        <main className="flex flex-col">
            {/*  Hero Section  */}
            <section className="relative isolate overflow-hidden bg-background-light dark:bg-background-dark px-6 py-24 sm:py-32 lg:px-8 transition-colors">
                {/*  Background Decoration  */}
                <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/30 to-[#9089fc]/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                        {t.servicesPage.heroTitle}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-500 dark:text-slate-400">
                        {t.servicesPage.heroDescription}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button className="flex cursor-pointer items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-all hover:bg-primary/90 shadow-lg shadow-primary/20">
                            {t.servicesPage.viewWork}
                        </button>
                        <a className="text-sm font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-1 group" href="#">
                            {t.servicesPage.learnMore} <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
                {/*  Hero Image/Graphic Placeholder  */}
                <div className="mt-16 flow-root sm:mt-24">
                    <div className="-m-2 rounded-xl bg-gray-900/5 dark:bg-white/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <div className="bg-gradient-to-br from-neutral-200 to-white dark:from-slate-800 dark:to-slate-900 aspect-[16/7] w-full rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden" data-alt="Abstract colorful digital waves representing creative flow">
                            <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5"></div>
                            {/*  Decorative Shapes  */}
                            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                            <div className="relative text-center z-10 px-4">
                                <span className="material-symbols-outlined text-6xl text-primary/50 mb-4">design_services</span>
                                <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300">{t.servicesPage.comprehensiveSolutions}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Services Grid Section  */}
            <section className="bg-white dark:bg-background-dark py-24 sm:py-32" id="services">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-primary">{t.servicesPage.whatWeDo}</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{t.servicesPage.expertiseTitle}</p>
                        <p className="mt-6 text-lg leading-8 text-neutral-500 dark:text-slate-400">
                            {t.servicesPage.expertiseDescription}
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {services.filter(s => s.active).map((service) => (
                            <div key={service.id} className="group relative flex flex-col gap-6 rounded-2xl bg-neutral-100 dark:bg-slate-800/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-primary/5 ring-1 ring-neutral-200/50 dark:ring-white/5 hover:ring-primary/20">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white dark:bg-slate-900 ring-1 ring-neutral-200 dark:ring-white/10 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">{service.icon}</span>
                                </div>
                                <div className="flex flex-col flex-auto">
                                    <h3 className="text-lg font-bold leading-8 text-slate-900 dark:text-white">{service.name}</h3>
                                    <p className="mt-2 flex-auto text-base leading-7 text-neutral-500 dark:text-slate-400">
                                        {service.description}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                                        {t.servicesPage.learnMore} <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*  CTA Section  */}
            <section className="relative isolate overflow-hidden bg-background-light dark:bg-background-dark px-6 py-24 text-center shadow-inner sm:px-16 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{t.servicesPage.ctaTitle}</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-500 dark:text-slate-400">
                        {t.servicesPage.ctaDescription}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button className="flex cursor-pointer items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30">
                            {t.servicesPage.startProject}
                        </button>
                        <a className="text-sm font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-1 group" href="/contact-us">
                            {t.servicesPage.contactSales} <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}