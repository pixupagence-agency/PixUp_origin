"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PricingPlans() {
    const { t } = useLanguage();

    return (
        <>

            {/*  Background Decoration  */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[100px] dark:bg-blue-600/10"></div>
                <div className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-400/10 blur-[120px] dark:bg-purple-900/10"></div>
                <div className="absolute bottom-[0%] left-[20%] w-[30%] h-[40%] rounded-full bg-indigo-300/10 blur-[90px] dark:bg-indigo-900/10"></div>
            </div>
            {/*  Main Content  */}
            <main className="relative z-10 flex-grow py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/*  Header Section  */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                            {t.pricing.heroTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">{t.pricing.heroAccent}</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                            {t.pricing.heroDescription}
                        </p>
                        {/*  Billing Toggle  */}
                        <div className="inline-flex items-center p-1.5 rounded-full border border-slate-200 bg-white/50 dark:bg-slate-800/50 dark:border-slate-700 backdrop-blur-sm relative">
                            <div className="relative z-10 flex">
                                <label className="group relative cursor-pointer">
                                    <input defaultChecked className="peer sr-only" name="billing" type="radio" value="monthly" />
                                    <span className="flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 text-slate-500 peer-checked:bg-white peer-checked:text-slate-900 peer-checked:shadow-sm dark:peer-checked:bg-slate-700 dark:peer-checked:text-white dark:text-slate-400">
                                        {t.pricing.monthly}
                                    </span>
                                </label>
                                <label className="group relative cursor-pointer">
                                    <input className="peer sr-only" name="billing" type="radio" value="yearly" />
                                    <span className="flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 text-slate-500 peer-checked:bg-white peer-checked:text-slate-900 peer-checked:shadow-sm dark:peer-checked:bg-slate-700 dark:peer-checked:text-white dark:text-slate-400">
                                        {t.pricing.yearly}
                                    </span>
                                </label>
                            </div>
                            <div className="absolute -right-24 top-1/2 -translate-y-1/2 hidden sm:block">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                                    {t.pricing.save20}
                                </span>
                                <svg className="absolute -left-6 top-4 w-6 h-6 text-slate-400 dark:text-slate-600 rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/*  Pricing Cards Grid  */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
                        {/*  Starter Plan  */}
                        <div className="glass-card rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 group">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.pricing.starter.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t.pricing.starter.desc}</p>
                            </div>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{t.pricing.starter.price}</span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium">/mo</span>
                            </div>
                            <a className="flex items-center justify-center w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" href="#">
                                {t.pricing.getStarted}
                            </a>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>{t.pricing.features.projects5}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>{t.pricing.features.basicSupport}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>{t.pricing.features.community}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>{t.pricing.features.analytics}</span>
                                </li>
                            </ul>
                        </div>
                        {/*  Professional Plan (Highlighted)  */}
                        <div className="glass-card rounded-3xl p-8 border-primary/30 dark:border-primary/50 shadow-2xl shadow-primary/10 relative z-10 md:-mt-4 md:mb-4 bg-white/90 dark:bg-slate-800/90 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow-lg shadow-primary/30 tracking-wide uppercase">
                                    {t.pricing.mostPopular}
                                </span>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    {t.pricing.professional.name}
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>star</span>
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t.pricing.professional.desc}</p>
                            </div>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">{t.pricing.professional.price}</span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium">/mo</span>
                            </div>
                            <a className="flex items-center justify-center w-full py-3 px-4 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 transition-all" href="#">
                                {t.pricing.getStarted}
                            </a>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] fill-current">check_circle</span>
                                    <span>{t.pricing.features.unlimitedProjects}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] fill-current">check_circle</span>
                                    <span>{t.pricing.features.prioritySupport}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] fill-current">check_circle</span>
                                    <span>{t.pricing.features.sourceFiles}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] fill-current">check_circle</span>
                                    <span>{t.pricing.features.advancedAnalytics}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] fill-current">check_circle</span>
                                    <span>{t.pricing.features.collaboration}</span>
                                </li>
                            </ul>
                        </div>
                        {/*  Agency Plan  */}
                        <div className="glass-card rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 group">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.pricing.agency.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t.pricing.agency.desc}</p>
                            </div>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{t.pricing.agency.price}</span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium">/mo</span>
                            </div>
                            <a className="flex items-center justify-center w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" href="/contact-us">
                                {t.pricing.contactSales}
                            </a>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>{t.pricing.features.accountManager}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>{t.pricing.features.whiteLabel}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>{t.pricing.features.apiAccess}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>{t.pricing.features.contracts}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>{t.pricing.features.security}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*  FAQ Section  */}
                    <div className="mt-24 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-10">{t.pricing.faqTitle}</h2>
                        <div className="space-y-4">
                            {t.pricing.faqs.map((faq: any, index: number) => (
                                <details key={index} className="group glass-card rounded-2xl p-1 [&_summary::-webkit-details-marker]:hidden open:bg-white dark:open:bg-slate-800">
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{faq.q}</h3>
                                        <span className="material-symbols-outlined transition duration-300 group-open:-rotate-180 text-slate-500">expand_more</span>
                                    </summary>
                                    <div className="px-4 pb-4 pt-0">
                                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}