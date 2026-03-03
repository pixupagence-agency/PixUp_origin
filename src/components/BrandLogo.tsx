"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
    className?: string;
    hideTextOnMobile?: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", hideTextOnMobile = true }) => {
    return (
        <Link href="/" className={`flex items-center gap-3 group ${className}`}>
            {/* Actual Logo Image container */}
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300 border border-white/10 relative">
                <img
                    src="/brand/app-logo.png"
                    alt="PixUp Logo"
                    className="w-full h-full object-cover block"
                />
            </div>

            {/* Text part: hidden on mobile per request */}
            <div className={hideTextOnMobile ? "hidden md:flex flex-col" : "flex flex-col"}>
                <span className="text-xl font-black tracking-tighter leading-none dark:text-white text-slate-900">
                    Pix<span className="text-gradient">Up</span>
                </span>
                <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase mt-0.5">
                    Tech & Innovation
                </span>
            </div>
        </Link>
    );
};

export default BrandLogo;
