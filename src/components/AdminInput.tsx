"use client";

import React from 'react';

interface AdminInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    icon?: string;
    className?: string;
}

export default function AdminInput({
    label,
    value,
    onChange,
    type = "text",
    placeholder = "",
    icon,
    className = ""
}: AdminInputProps) {
    return (
        <label className={`block ${className}`}>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
            <div className="mt-1 relative">
                {icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">{icon}</span>
                    </div>
                )}
                <input
                    className={`block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm ${icon ? 'pl-10' : 'px-4'} py-2.5 transition-all`}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
        </label>
    );
}
