"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import { useTheme } from "@/context/ThemeContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const { t } = useLanguage();
    const { settings } = useData();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-2xl">auto_awesome_mosaic</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-900 dark:text-white text-lg font-bold tracking-tight leading-none uppercase">{settings.agencyName || "PIXUP"}</span>
                            <span className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">CREATIVE STUDIO</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/portfolio" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.work}</Link>
                        <Link href="/our-services" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.services}</Link>
                        <Link href="/pricing-plans" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.pricing}</Link>
                        <Link href="/faq" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.faq}</Link>
                        <Link href="/blog" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.blog}</Link>
                        <Link href="/contact-us" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.contact}</Link>
                    </div>

                    {/* CTA & Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                aria-label="Toggle theme"
                            >
                                <span className="material-symbols-outlined">
                                    {theme === 'light' ? 'dark_mode' : 'light_mode'}
                                </span>
                            </button>
                            <LanguageSwitcher />
                        </div>
                        <Link href="/contact-us" className="hidden sm:flex h-10 items-center justify-center px-6 rounded-full bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                            {t.nav.getStarted}
                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                aria-label="Toggle theme"
                            >
                                <span className="material-symbols-outlined">
                                    {theme === 'light' ? 'dark_mode' : 'light_mode'}
                                </span>
                            </button>
                            <LanguageSwitcher />
                            <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
