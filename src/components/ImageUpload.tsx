"use client";

import React, { useState, useRef } from 'react';

interface ImageUploadProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
}

export default function ImageUpload({ value, onChange, label }: ImageUploadProps) {
    const [dragActive, setDragActive] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isReading, setIsReading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = (file: File) => {
        setError(null);

        // Check file size (max 5MB for localStorage safety)
        if (file.size > 5 * 1024 * 1024) {
            setError("L'image est trop volumineuse (max 5Mo)");
            return;
        }

        if (file && file.type.startsWith('image/')) {
            setIsReading(true);
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    onChange(e.target.result as string);
                }
                setIsReading(false);
            };
            reader.onerror = () => {
                setError("Erreur lors de la lecture du fichier");
                setIsReading(false);
            };
            reader.readAsDataURL(file);
        } else {
            setError("Veuillez sélectionner un fichier image valide");
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

    const onButtonClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        inputRef.current?.click();
    };

    return (
        <div className="space-y-2">
            {label && <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">{label}</label>}
            <div
                className={`relative group h-40 w-full rounded-xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center p-4 gap-2 overflow-hidden
          ${dragActive ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-slate-800'}
          ${error ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={onButtonClick}
            >
                {isReading ? (
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                        <p className="text-sm font-medium text-slate-500">Chargement...</p>
                    </div>
                ) : value ? (
                    <>
                        <img src={value} alt="Preview" className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-40" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/40 text-white">
                            <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                            <p className="text-sm font-bold">Changer l'image</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-1 ${error ? 'bg-red-100 text-red-500' : 'bg-primary/10 text-primary'}`}>
                            <span className="material-symbols-outlined text-2xl">{error ? 'error' : 'add_photo_alternate'}</span>
                        </div>
                        <div className="text-center">
                            <p className={`text-sm font-bold ${error ? 'text-red-600' : 'text-slate-900 dark:text-white'}`}>
                                {error || "Cliquez ou glissez une image"}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">JPG, PNG ou WebP (max 5MB)</p>
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
            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
}
