"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
            <button
                onClick={() => setLanguage("fr")}
                className={`rounded-md px-3 py-1 text-xs font-semibold transition-all ${language === "fr"
                        ? "bg-white text-primary shadow-sm dark:bg-slate-700 dark:text-white"
                        : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
            >
                FR
            </button>
            <button
                onClick={() => setLanguage("en")}
                className={`rounded-md px-3 py-1 text-xs font-semibold transition-all ${language === "en"
                        ? "bg-white text-primary shadow-sm dark:bg-slate-700 dark:text-white"
                        : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
            >
                EN
            </button>
        </div>
    );
}
