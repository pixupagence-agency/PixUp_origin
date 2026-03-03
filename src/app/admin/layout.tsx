"use client";

import { useData } from "@/context/DataContext";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isLoggedIn, login } = useData();
    const { t } = useLanguage();
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(password)) {
            setError(false);
        } else {
            setError(true);
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4">
                <div className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-6">
                            <BrandLogo />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.admin.loginTitle}</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">{t.admin.accessDenied}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    {t.admin.passwordLabel}
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError(false);
                                    }}
                                    className={`w-full px-4 py-3 rounded-xl border ${error ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900'
                                        } focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white transition-all`}
                                    placeholder="••••••••"
                                    autoFocus
                                />
                                {error && (
                                    <p className="text-red-500 text-xs mt-1 font-medium">{t.admin.loginError}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-lg">lock_open</span>
                                {t.admin.loginButton}
                            </button>

                            <div className="text-center mt-6">
                                <Link href="/" className="text-sm text-slate-500 hover:text-primary transition-colors inline-flex items-center gap-1">
                                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                                    {t.admin.backToSite}
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
