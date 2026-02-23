"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function AdminSidebar() {
    const pathname = usePathname();
    const { t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const isActive = (path: string) => {
        return pathname === path
            ? "bg-primary/10 text-primary dark:bg-primary/20"
            : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100";
    };

    const isIconActive = (path: string) => {
        return pathname === path
            ? "text-primary filled-icon"
            : "text-slate-400 group-hover:text-primary transition-colors";
    };

    return (
        <aside className="hidden md:flex flex-col w-72 h-full glass-sidebar z-20 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
            <div className="flex items-center gap-3 p-6 border-b border-slate-100/50 dark:border-slate-800/50">
                <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-primary text-2xl">auto_awesome_mosaic</span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-slate-900 text-lg font-bold tracking-tight">{t.admin.title}</h1>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">{t.admin.subtitle}</p>
                </div>
            </div>
            <nav className="flex-1 flex flex-col gap-2 p-4 overflow-y-auto">
                <p className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 mt-2">{t.admin.mainMenu}</p>

                <Link
                    href="/admin/dashboard"
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg group transition-all-300 ${isActive("/admin/dashboard")}`}
                >
                    <span className={`material-symbols-outlined ${isIconActive("/admin/dashboard")}`}>dashboard</span>
                    <span className="text-sm font-semibold">{t.admin.dashboard}</span>
                </Link>

                <Link
                    href="/admin/portfolio"
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg group transition-all-300 ${isActive("/admin/portfolio")}`}
                >
                    <span className={`material-symbols-outlined ${isIconActive("/admin/portfolio")}`}>folder_open</span>
                    <span className="text-sm font-medium">{t.admin.portfolio}</span>
                </Link>

                <Link
                    href="/admin/services"
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg group transition-all-300 ${isActive("/admin/services")}`}
                >
                    <span className={`material-symbols-outlined ${isIconActive("/admin/services")}`}>diamond</span>
                    <span className="text-sm font-medium">{t.admin.services}</span>
                </Link>

                <Link
                    href="/admin/blog"
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg group transition-all-300 ${isActive("/admin/blog")}`}
                >
                    <span className={`material-symbols-outlined ${isIconActive("/admin/blog")}`}>article</span>
                    <span className="text-sm font-medium">{t.admin.blog}</span>
                </Link>

                <Link
                    href="/admin/pricing"
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg group transition-all-300 ${isActive("/admin/pricing")}`}
                >
                    <span className={`material-symbols-outlined ${isIconActive("/admin/pricing")}`}>sell</span>
                    <span className="text-sm font-medium">{t.admin.pricing}</span>
                </Link>

                <Link
                    href="/admin/faq"
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg group transition-all-300 ${isActive("/admin/faq")}`}
                >
                    <span className={`material-symbols-outlined ${isIconActive("/admin/faq")}`}>quiz</span>
                    <span className="text-sm font-medium">{t.admin.faq}</span>
                </Link>

                <p className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 mt-6">{t.admin.system}</p>

                <Link
                    href="/admin/settings"
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg group transition-all-300 ${isActive("/admin/settings")}`}
                >
                    <span className={`material-symbols-outlined ${isIconActive("/admin/settings")}`}>settings</span>
                    <span className="text-sm font-medium">{t.admin.settings}</span>
                </Link>
            </nav>
            <div className="p-4 border-t border-slate-100/50 dark:border-slate-800/50">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
                    <img
                        alt="Admin User Profile"
                        className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMu9lPu7U1LHHfzEJHm-L1G43fJ47kh_K318q0wbU599eG2mqt1rRjNVYk05yAweiMdi62y8OYXg_9waRkUdDMegbAJv-V_LgPtPtDxLx-Qpl9agQ4YbGH57jbyp55n-6K4471nJ2xNUiOkKY5a11cSpAFvktg7VzvrZ__-Y9uYUNjTlRJ54EmqCvXQ9cnLxc_NyeN0noAtyRucCtghM-eEIGWlMa2NzKtvdOMWOuKEnc39GheUh9hbzCziK7soSqwhgDsWlmmcKZ5"
                    />
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-bold text-slate-900 dark:text-white truncate">Alex Morgan</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 truncate">{t.admin.adminAccess}</span>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                        <button
                            onClick={toggleTheme}
                            className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                            aria-label="Toggle theme"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" aria-label={t.admin.logout}>
                            <span className="material-symbols-outlined text-xl">logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
