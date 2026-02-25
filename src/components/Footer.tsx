"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";

export default function Footer() {
    const { t } = useLanguage();
    const { settings } = useData();

    return (
        <footer className="bg-slate-50 dark:bg-[#0d121b] border-t border-slate-200 dark:border-white/5 pt-16 pb-8 mt-auto">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-primary text-2xl">auto_awesome_mosaic</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-900 dark:text-white text-lg font-bold tracking-tight leading-none uppercase">{settings.agencyName || "PIXUP"}</span>
                                <span className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">CREATIVE STUDIO</span>
                            </div>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4">
                            {settings.dribbble && (
                                <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href={settings.dribbble} target="_blank" rel="noopener noreferrer">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.65 16.05c-.24-.44-1.26-1.76-2.9-2.58-1-1.07-2.1-2.11-2.22-2.11-.12 0-1.12 1.04-2.12 2.11-1.64.82-2.66 2.14-2.9 2.58C7.14 17.07 6 15.17 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.17-1.14 4.07-2.85 5.05z"></path></svg>
                                </a>
                            )}
                            {settings.instagram && (
                                <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href={settings.instagram} target="_blank" rel="noopener noreferrer">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                                </a>
                            )}
                            {settings.linkedin && (
                                <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href={settings.linkedin} target="_blank" rel="noopener noreferrer">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                            )}
                        </div>
                    </div>
                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t.footer.company}</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="/">{t.footer.aboutUs}</Link></li>
                            <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="/">{t.footer.careers}</Link></li>
                            <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="/">{t.footer.ourTeam}</Link></li>
                            <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="/">{t.footer.press}</Link></li>
                        </ul>
                    </div>
                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t.footer.services}</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="/our-services">{t.footer.audit}</Link></li>
                            <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="/our-services">{t.footer.appDev}</Link></li>
                            <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="/our-services">{t.footer.webDev}</Link></li>
                            <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="/our-services">{t.footer.seo}</Link></li>
                        </ul>
                    </div>
                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t.footer.contactTitle}</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                                <span className="text-slate-600 dark:text-slate-400 whitespace-pre-line">{settings.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href={`mailto:${settings.email}`}>{settings.email}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">call</span>
                                <span className="text-slate-600 dark:text-slate-400">{settings.phone}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        © {new Date().getFullYear()} {t.footer.rights}
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
                        <Link className="hover:text-primary transition-colors" href="/legal-mentions">{t.footer.privacy}</Link>
                        <Link className="hover:text-primary transition-colors" href="/legal-mentions">{t.footer.terms}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
