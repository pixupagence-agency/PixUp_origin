"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import PixelGrid from "@/components/PixelGrid";
import { notFound } from "next/navigation";
import Modal from "@/components/Modal";
import { useState } from "react";
import { PricingPlan } from "@/context/DataContext";

export default function PricingPlans() {
    const { t } = useLanguage();
    const { plans, faqs, settings } = useData();
    const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openPlanDetails = (e: React.MouseEvent, plan: PricingPlan) => {
        e.preventDefault();
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    if (!settings.showPricing) {
        notFound();
    }

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
                                        <span className="text-slate-500 dark:text-slate-400 font-medium">{t.pricing.monthlyShort}</span>
                                    )}
                                    {plan.billingCycle === 'yearly' && (
                                        <span className="text-slate-500 dark:text-slate-400 font-medium">{t.pricing.yearlyShort}</span>
                                    )}
                                </div>
                                <button 
                                    className={`flex items-center justify-center w-full py-4 px-4 rounded-2xl font-bold text-base transition-all ${plan.popular ? 'brand-gradient text-white shadow-lg shadow-primary/25 hover:opacity-90' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`} 
                                    onClick={(e) => openPlanDetails(e, plan)}
                                >
                                    {t.pricing.getStarted}
                                </button>
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

            {/* Plan Details Modal */}
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title={selectedPlan?.name || ""}
            >
                {selectedPlan && (
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${selectedPlan.popular ? 'brand-gradient text-white shadow-lg shadow-primary/20' : 'bg-primary/10 text-primary border border-primary/20'} tracking-wide uppercase`}>
                                    Formule {selectedPlan.name}
                                </span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{selectedPlan.price}</span>
                                    <span className="text-slate-500 dark:text-slate-400 font-medium lowercase">
                                        {selectedPlan.billingCycle === 'monthly' ? t.pricing.monthlyShort : (selectedPlan.billingCycle === 'yearly' ? t.pricing.yearlyShort : '')}
                                    </span>
                                </div>
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                "{selectedPlan.description}"
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                Ce qui est inclus
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedPlan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 group hover:border-primary/30 transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">done</span>
                                        </div>
                                        <span className="text-sm text-slate-600 dark:text-slate-300 font-medium self-center">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">info</span>
                                Détails Supplémentaires
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {selectedPlan.details || "Contactez-nous pour en savoir plus sur les spécificités de cette formule et comment elle peut répondre à vos besoins."}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}