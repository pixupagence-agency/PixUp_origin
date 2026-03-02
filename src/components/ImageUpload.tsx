"use client";

import React, { useState, useRef } from 'react';

interface ImageUploadProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
}

export default function ImageUpload({ value, onChange, label }: ImageUploadProps) {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = (file: File) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    onChange(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const onButtonClick = () => {
        inputRef.current?.click();
    };

    return (
        <div className="space-y-2">
            {label && <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">{label}</label>}
            <div
                className={`relative group h-40 w-full rounded-xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center p-4 gap-2 overflow-hidden
          ${dragActive ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={onButtonClick}
            >
                {value ? (
                    <>
                        <img src={value} alt="Preview" className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-40" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/40 text-white">
                            <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                            <p className="text-sm font-bold">Changer l'image</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-1">
                            <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Cliquez ou glissez une image</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">JPG, PNG ou WebP (max 2MB)</p>
                        </div>
                    </>
                )}
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
