"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function FAQPage() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="bg-white dark:bg-background-dark transition-colors min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-800/50">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                            {t.faq.title}
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t.faq.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto space-y-4">
                        {t.faq.questions.map((faq: any) => (
                            <div
                                key={faq.id}
                                className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30"
                            >
                                <button
                                    onClick={() => toggleAccordion(faq.id)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                                >
                                    <span className="text-lg font-bold text-slate-900 dark:text-white pr-8">
                                        {faq.q}
                                    </span>
                                    <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${openIndex === faq.id ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === faq.id ? 'max-h-96' : 'max-h-0'}`}
                                >
                                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 italic">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">{t.contactPage.title} {t.contactPage.titleAccent}</h2>
                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">{t.contactPage.description}</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 shadow-lg shadow-primary/25"
                    >
                        {t.nav.contact}
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </section>
        </div>
    );
}
