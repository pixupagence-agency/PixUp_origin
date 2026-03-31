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
    const [useUrl, setUseUrl] = useState(!!value && (value.startsWith('http') || value.startsWith('/')) && !value.startsWith('data:'));
    const inputRef = useRef<HTMLInputElement>(null);

    const safeValue = value || '';

    const handleFile = async (file: File) => {
        setError(null);
        
        if (file.size > 5 * 1024 * 1024) {
            setError("L'image est trop volumineuse (max 5Mo)");
            return;
        }

        if (file && file.type.startsWith('image/')) {
            setIsReading(true);
            
            try {
                // Cloudinary Unsigned Upload Logic
                const formData = new FormData();
                formData.append('file', file);
                // Utilisation du Cloud Name "kinalguw6iv" trouvé dans les logs
                // IMPORTANT: L'utilisateur doit avoir un "unsigned upload preset" nommé "pixup_preset"
                formData.append('upload_preset', 'pixup_preset'); 
                
                const response = await fetch(
                    `https://api.cloudinary.com/v1_1/kinalguw6iv/image/upload`,
                    {
                        method: 'POST',
                        body: formData,
                    }
                );

                const data = await response.json();

                if (data.secure_url) {
                    onChange(data.secure_url);
                    setUseUrl(false);
                } else {
                    console.error("Cloudinary Error:", data);
                    setError(data.error?.message || "Erreur lors de l'envoi vers Cloudinary");
                }
            } catch (err) {
                console.error("Upload failed:", err);
                setError("Erreur réseau lors de l'envoi de l'image");
            } finally {
                setIsReading(false);
            }
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

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                {label && <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">{label}</label>}
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    <button
                        type="button"
                        onClick={() => setUseUrl(false)}
                        className={`px-3 py-1 rounded-md transition-all ${!useUrl ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                    >
                        Upload
                    </button>
                    <button
                        type="button"
                        onClick={() => setUseUrl(true)}
                        className={`px-3 py-1 rounded-md transition-all ${useUrl ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                    >
                        URL
                    </button>
                </div>
            </div>

            {useUrl ? (
                <div className="space-y-2">
                    <div className="relative group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 h-40 flex items-center justify-center">
                        {safeValue && (safeValue.startsWith('http') || safeValue.startsWith('/') || safeValue.startsWith('data:')) ? (
                            <img
                                src={safeValue}
                                alt="Preview"
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={() => setError("Impossible de charger l'image depuis cette URL")}
                            />
                        ) : (
                            <div className="text-center p-4">
                                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-4xl mb-2">link</span>
                                <p className="text-xs text-slate-400">Entrez une URL pour voir l'aperçu</p>
                            </div>
                        )}
                    </div>
                    <input
                        type="text"
                        value={safeValue.startsWith('data:') ? '' : safeValue}
                        onChange={(e) => {
                            onChange(e.target.value);
                            setError(null);
                        }}
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                        placeholder="https://images.unsplash.com/..."
                    />
                </div>
            ) : (
                <div
                    className={`relative group h-40 w-full rounded-xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center p-4 gap-2 overflow-hidden
                    ${dragActive ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-slate-800'}
                    ${error ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : ''}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => inputRef.current?.click()}
                >
                    {isReading ? (
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                            <p className="text-sm font-medium text-slate-500">Chargement...</p>
                        </div>
                    ) : safeValue && safeValue.startsWith('data:') ? (
                        <>
                            <img src={safeValue} alt="Preview" className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-40" />
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
                            <div className="text-center px-4">
                                <p className={`text-sm font-bold ${error ? 'text-red-600' : 'text-slate-900 dark:text-white'}`}>
                                    {error || "Cliquez ou glissez une image"}
                                </p>
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
            )}
            {error && <p className="text-[10px] text-red-500 font-medium px-1">{error}</p>}
        </div>
    );
}
