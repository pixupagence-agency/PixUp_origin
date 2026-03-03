"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import PixelGrid from "@/components/PixelGrid";

export default function PricingPlans() {
    const { t } = useLanguage();
    const { plans, faqs } = useData();

    return (
        <>
            {/*  Background Decoration  */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
                <div className="absolute top-[20%] -right-[5%] w-[30%] h-[50%] rounded-full bg-secondary/10 blur-[100px]"></div>

                {/* Decorative Pixels */}
                <div className="absolute top-40 left-10 opacity-10">
                    <PixelGrid rows={10} cols={4} size={6} gap={2} className="text-primary" />
                </div>
                <div className="absolute bottom-20 right-10 opacity-10">
                    <PixelGrid rows={6} cols={15} size={8} gap={4} className="text-secondary" variant="diagonal" />
                </div>
            </div>

            {/*  Main Content  */}
            <main className="relative z-10 flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/*  Header Section  */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                            PRICING PLANS
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                            {t.pricing.heroTitle} <span className="text-gradient">{t.pricing.heroAccent}</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                            {t.pricing.heroDescription}
                        </p>
                        {/*  Billing Toggle  */}
                        <div className="inline-flex items-center p-1.5 rounded-full border border-slate-200 bg-white/50 dark:bg-slate-800/50 dark:border-slate-700 backdrop-blur-sm relative shadow-sm">
                            <div className="relative z-10 flex text-slate-500">
                                <label className="group relative cursor-pointer">
                                    <input defaultChecked className="peer sr-only" name="billing" type="radio" value="monthly" />
                                    <span className="flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 peer-checked:bg-white peer-checked:text-slate-900 peer-checked:shadow-sm dark:peer-checked:bg-slate-700 dark:peer-checked:text-white">
                                        {t.pricing.monthly}
                                    </span>
                                </label>
                                <label className="group relative cursor-pointer">
                                    <input className="peer sr-only" name="billing" type="radio" value="yearly" />
                                    <span className="flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 peer-checked:bg-white peer-checked:text-slate-900 peer-checked:shadow-sm dark:peer-checked:bg-slate-700 dark:peer-checked:text-white">
                                        {t.pricing.yearly}
                                    </span>
                                </label>
                            </div>
                            <div className="absolute -right-24 top-1/2 -translate-y-1/2 hidden sm:block">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30">
                                    {t.pricing.save20}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*  Pricing Cards Grid  */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative pb-20">
                        {plans.filter(p => p.active).map((plan) => (
                            <div key={plan.id} className={`glass-card rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group ${plan.popular ? 'border-primary shadow-2xl shadow-primary/20 relative z-10 md:-mt-4 md:mb-4 bg-white/95 dark:bg-slate-800/95 ring-4 ring-primary/5' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold brand-gradient text-white shadow-lg shadow-primary/30 tracking-wide uppercase border border-white/20">
                                            {t.pricing.mostPopular}
                                        </span>
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        {plan.name}
                                        {plan.popular && <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>verified</span>}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{plan.description}</p>
                                </div>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                                    {plan.billingCycle === 'monthly' && (
                                        <span className="text-slate-500 dark:text-slate-400 font-medium">/mo</span>
                                    )}
                                </div>
                                <a className={`flex items-center justify-center w-full py-4 px-4 rounded-2xl font-bold text-base transition-all ${plan.popular ? 'brand-gradient text-white shadow-lg shadow-primary/25 hover:opacity-90' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`} href="#">
                                    {t.pricing.getStarted}
                                </a>
                                <ul className="mt-10 space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                            <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/*  FAQ Section  */}
                    <div className="mt-24 max-w-3xl mx-auto pt-24 border-t border-slate-200 dark:border-white/5">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{t.pricing.faqTitle}</h2>
                            <p className="text-slate-500">Everything you need to know about our pricing and services.</p>
                        </div>
                        <div className="space-y-4">
                            {faqs.filter(f => f.category === 'pricing').map((faq) => (
                                <details key={faq.id} className="group glass-card rounded-2xl p-1 [&_summary::-webkit-details-marker]:hidden open:bg-white dark:open:bg-slate-800 transition-all duration-300">
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <h3 className="font-bold text-slate-900 dark:text-white">{faq.q}</h3>
                                        <span className="material-symbols-outlined transition duration-300 group-open:-rotate-180 text-primary">add</span>
                                    </summary>
                                    <div className="px-5 pb-5 pt-0">
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
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