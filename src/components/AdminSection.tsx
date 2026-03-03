"use client";

import React from 'react';

interface AdminSectionProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
}

export default function AdminSection({ title, description, children, className = "" }: AdminSectionProps) {
    return (
        <div className={`rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden ${className}`}>
            <div className="border-b border-slate-100 dark:border-slate-700 px-6 py-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h2>
                {description && <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>}
            </div>
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}
