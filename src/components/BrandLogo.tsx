"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
    className?: string;
    hideTextOnMobile?: boolean;
    size?: number;
    color?: 'primary' | 'secondary' | 'white' | 'slate';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", hideTextOnMobile = true, size, color }) => {
    const containerSize = size ? `${size}px` : undefined;
    return (
        <Link href="/" className={`flex items-center gap-3 group ${className}`}>
            {/* Actual Logo Image container */}
            <div 
                style={{ width: containerSize, height: containerSize }}
                className={`${!size ? 'w-10 h-10 md:w-12 md:h-12' : ''} flex-shrink-0 rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300 border border-white/10 relative`}
            >
                <img
                    src="/brand/app-logo.png"
                    alt="PixUp Logo"
                    className="w-full h-full object-cover block"
                />
            </div>

            {/* Text part: hidden on mobile per request */}
            <div className={hideTextOnMobile ? "hidden md:flex flex-col" : "flex flex-col"}>
                <span className={`text-xl font-black tracking-tighter leading-none ${color === 'primary' ? 'text-primary' : (color === 'white' ? 'text-white' : 'dark:text-white text-slate-900')}`}>
                    Pix<span className={color === 'white' ? 'text-white' : 'text-gradient'}>Up</span>
                </span>
                {!size && (
                    <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase mt-0.5">
                        Tech & Innovation
                    </span>
                )}
            </div>
        </Link>
    );
};

export default BrandLogo;
