"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import { useTheme } from "@/context/ThemeContext";
import LanguageSwitcher from "./LanguageSwitcher";
import BrandLogo from "./BrandLogo";

import { useState } from "react";

export default function Navbar() {
    const { t } = useLanguage();
    const { settings } = useData();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <BrandLogo />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/portfolio" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.work}</Link>
                        <Link href="/our-services" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.services}</Link>
                        {settings.showPricing && <Link href="/pricing-plans" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.pricing}</Link>}
                        <Link href="/faq" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.faq}</Link>
                        {settings.showBlog && <Link href="/blog" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">{t.nav.blog}</Link>}
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
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-6 gap-4">
                        <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800">{t.nav.work}</Link>
                        <Link href="/our-services" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800">{t.nav.services}</Link>
                        {settings.showPricing && (
                            <Link href="/pricing-plans" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800">{t.nav.pricing}</Link>
                        )}
                        <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800">{t.nav.faq}</Link>
                        {settings.showBlog && (
                            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800">{t.nav.blog}</Link>
                        )}
                        <Link href="/contact-us" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white py-2">{t.nav.contact}</Link>

                        <Link href="/contact-us" onClick={() => setIsMenuOpen(false)} className="mt-4 flex h-14 items-center justify-center px-6 rounded-2xl bg-primary text-white text-lg font-black shadow-lg shadow-primary/25">
                            {t.nav.getStarted}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
