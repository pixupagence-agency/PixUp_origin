"use client";

import React from 'react';

interface AdminToggleProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    description?: string;
}

export default function AdminToggle({ label, checked, onChange, description }: AdminToggleProps) {
    return (
        <label className="flex items-center justify-between cursor-pointer group">
            <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                    {label}
                </span>
                {description && <span className="text-xs text-slate-500 dark:text-slate-400">{description}</span>}
            </div>
            <div className="relative inline-flex items-center">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </div>
        </label>
    );
}
