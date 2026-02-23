"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LegalMentions() {
    const { t } = useLanguage();

    return (
        <>
            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 pt-32">
                {/*  Hero Section  */}
                <div className="mb-12 lg:mb-20 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                        <span className="material-symbols-outlined text-[16px]">verified_user</span>
                        {t.legal.badge}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                        {t.legal.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        {t.legal.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                        <span>{t.legal.lastUpdated} October 24, 2023</span>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
                    {/*  Sticky Sidebar Navigation  */}
                    <aside className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 px-3">{t.legal.toc}</h3>
                            <nav className="flex flex-col gap-1">
                                {t.legal.sections.map((section: any) => (
                                    <a
                                        key={section.id}
                                        className="group flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all"
                                        href={`#${section.id}`}
                                    >
                                        <span>{section.num}. {section.title}</span>
                                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                                    </a>
                                ))}
                            </nav>
                            {/*  Sidebar Download CTA  */}
                            <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-2xl">description</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.legal.downloadTitle}</h4>
                                        <p className="text-xs text-slate-500 mt-1">{t.legal.downloadDesc}</p>
                                    </div>
                                </div>
                                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-600 hover:bg-slate-800 dark:hover:bg-slate-500 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">download</span>
                                    {t.legal.downloadBtn}
                                </button>
                            </div>
                        </div>
                    </aside>
                    {/*  Main Content Area  */}
                    <div className="flex-1 max-w-3xl">
                        {t.legal.sections.map((section: any, index: number) => (
                            <div key={section.id}>
                                <section className="mb-16 scroll-mt-32" id={section.id}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold text-sm">{section.num}</span>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
                                    </div>
                                    <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-400">
                                        <p>{section.content}</p>

                                        {/*  Specific content for each section based on ID  */}
                                        {section.id === "definitions" && (
                                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-primary">
                                                <li><strong>"{t.legal.definitions.agency}":</strong> {t.legal.definitions.agencyDesc}</li>
                                                <li><strong>"{t.legal.definitions.client}":</strong> {t.legal.definitions.clientDesc}</li>
                                                <li><strong>"{t.legal.definitions.services}":</strong> {t.legal.definitions.servicesDesc}</li>
                                                <li><strong>"{t.legal.definitions.deliverables}":</strong> {t.legal.definitions.deliverablesDesc}</li>
                                            </ul>
                                        )}

                                        {section.id === "editor-info" && (
                                            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 md:p-8 mt-6">
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Company</p>
                                                        <p className="text-slate-900 dark:text-white font-medium">PIXUP AGENCY LLC</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Status</p>
                                                        <p className="text-slate-900 dark:text-white font-medium">Limited Liability Company</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Address</p>
                                                        <p className="text-slate-900 dark:text-white font-medium">123 Creative Blvd, New York, NY 10012</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Contact</p>
                                                        <a className="text-primary hover:underline font-medium" href="mailto:legal@pixup.agency">legal@pixup.agency</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {section.id === "hosting" && (
                                            <address className="not-italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border-l-4 border-primary mt-6">
                                                Vercel Inc.<br />
                                                340 S Lemon Ave #4133<br />
                                                Walnut, CA 91789<br />
                                                USA
                                            </address>
                                        )}

                                        {section.id === "intellectual-property" && (
                                            <div className="bg-primary/5 dark:bg-primary/10 p-5 rounded-lg border border-primary/20 flex gap-4 items-start mt-6">
                                                <span className="material-symbols-outlined text-primary mt-1">info</span>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-1">{t.legal.importantNote}</h4>
                                                    <p className="text-sm">
                                                        {t.legal.importantContent}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {section.id === "terms-sale" && (
                                            <div className="space-y-8 mt-8">
                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{t.legal.paymentTitle}</h3>
                                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                        {t.legal.paymentContent}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{t.legal.lateTitle}</h3>
                                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                        {t.legal.lateContent}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </section>
                                {index < t.legal.sections.length - 1 && (
                                    <hr className="border-slate-200 dark:border-slate-800 mb-16" />
                                )}
                            </div>
                        ))}
                        {/*  Mobile Download CTA  */}
                        <div className="lg:hidden mt-8 p-6 bg-slate-900 dark:bg-slate-800 rounded-xl text-center">
                            <div className="size-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                <span className="material-symbols-outlined text-2xl">description</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{t.legal.downloadTitle}</h3>
                            <p className="text-slate-300 text-sm mb-6">{t.legal.downloadDesc}</p>
                            <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                <span className="material-symbols-outlined">download</span>
                                {t.legal.downloadBtn}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}