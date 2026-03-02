"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "@/i18n/en";
import { fr } from "@/i18n/fr";

type Language = "en" | "fr";
type Dictionary = typeof en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Default to French
    const [language, setLanguageState] = useState<Language>("fr");

    useEffect(() => {
        const savedLang = localStorage.getItem("pixup_lang_v2") as Language;
        if (savedLang && (savedLang === "en" || savedLang === "fr")) {
            setLanguageState(savedLang);
        } else {
            // Force FR if no version 2 key exists yet
            setLanguageState("fr");
            localStorage.setItem("pixup_lang_v2", "fr");
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("pixup_lang_v2", lang);
    };

    const t = language === "fr" ? fr : en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
