"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import { useParams, useRouter } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import Link from 'next/link';

export default function AdminServiceDetail() {
    const { id } = useParams();
    const router = useRouter();
    const { t } = useLanguage();
    const { services, setServices } = useData();
    
    const [service, setService] = useState<any>(null);
    const [formData, setFormData] = useState({
        longDescription: '',
        benefits: [] as string[],
        color: 'blue',
        trustTitle: '',
        trustDescription: '',
        trustItems: [] as { title: string; description: string; icon: string }[],
        processTitle: '',
        processSteps: [] as { title: string; description: string }[]
    });
    const [newBenefit, setNewBenefit] = useState('');

    useEffect(() => {
        const currentService = services.find(s => s.id === id);
        if (currentService) {
            setService(currentService);
            setFormData({
                longDescription: currentService.longDescription || '',
                benefits: currentService.benefits || [],
                color: currentService.color || 'blue',
                trustTitle: currentService.trustTitle || '',
                trustDescription: currentService.trustDescription || '',
                trustItems: currentService.trustItems || [],
                processTitle: currentService.processTitle || '',
                processSteps: currentService.processSteps || []
            });
        }
    }, [id, services]);

    if (!service) {
        return (
            <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark">
                <div className="text-center">
                    <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500">Chargement...</p>
                </div>
            </div>
        );
    }

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedServices = services.map(s => 
            s.id === id ? { ...s, ...formData } : s
        );
        setServices(updatedServices);
        router.push('/admin/services');
    };

    const addBenefit = () => {
        if (newBenefit.trim()) {
            setFormData({
                ...formData,
                benefits: [...formData.benefits, newBenefit.trim()]
            });
            setNewBenefit('');
        }
    };

    const removeBenefit = (index: number) => {
        setFormData({
            ...formData,
            benefits: formData.benefits.filter((_, i) => i !== index)
        });
    };

    const updateBenefit = (index: number, value: string) => {
        const newBenefits = [...formData.benefits];
        newBenefits[index] = value;
        setFormData({
            ...formData,
            benefits: newBenefits
        });
    };

    // Trust Items Helpers
    const addTrustItem = () => {
        setFormData({
            ...formData,
            trustItems: [...formData.trustItems, { title: '', description: '', icon: 'star' }]
        });
    };

    const removeTrustItem = (index: number) => {
        setFormData({
            ...formData,
            trustItems: formData.trustItems.filter((_, i) => i !== index)
        });
    };

    const updateTrustItem = (index: number, field: string, value: string) => {
        const newItems = [...formData.trustItems];
        newItems[index] = { ...newItems[index], [field]: value };
        setFormData({ ...formData, trustItems: newItems });
    };

    // Process Steps Helpers
    const addProcessStep = () => {
        setFormData({
            ...formData,
            processSteps: [...formData.processSteps, { title: '', description: '' }]
        });
    };

    const removeProcessStep = (index: number) => {
        setFormData({
            ...formData,
            processSteps: formData.processSteps.filter((_, i) => i !== index)
        });
    };

    const updateProcessStep = (index: number, field: string, value: string) => {
        const newSteps = [...formData.processSteps];
        newSteps[index] = { ...newSteps[index], [field]: value };
        setFormData({ ...formData, processSteps: newSteps });
    };

    const colors = [
        { id: 'blue', label: t.admin.blue, class: 'bg-blue-500' },
        { id: 'purple', label: t.admin.purple, class: 'bg-purple-500' },
        { id: 'orange', label: t.admin.orange, class: 'bg-orange-500' },
        { id: 'emerald', label: t.admin.emerald, class: 'bg-emerald-500' },
    ];

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
                <div className="container mx-auto max-w-4xl px-4 py-8 md:px-8">
                    <Link 
                        href="/admin/services"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-6"
                    >
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        {t.admin.backToServices}
                    </Link>

                    <header className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-${formData.color === 'blue' ? 'primary' : formData.color + '-500'}/10 text-${formData.color === 'blue' ? 'primary' : formData.color + '-500'}`}>
                                <span className="material-symbols-outlined text-3xl font-variation-fill">{service.icon}</span>
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{service.name}</h1>
                                <p className="text-slate-500 dark:text-slate-400">{t.admin.editContent}</p>
                            </div>
                        </div>
                    </header>

                    <form onSubmit={handleSave} className="space-y-8 pb-20">
                        {/* Hero Content Section */}
                        <section className="glass-card p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                                Contenu du Hero
                            </h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.admin.longDescription}</label>
                                    <textarea
                                        value={formData.longDescription}
                                        onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-40 leading-relaxed"
                                        placeholder="Une description détaillée qui s'affichera en haut de la page du service..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.admin.serviceColor}</label>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        {colors.map((color) => (
                                            <button
                                                key={color.id}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, color: color.id })}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all ${
                                                    formData.color === color.id 
                                                    ? 'border-primary bg-primary/5 text-primary' 
                                                    : 'border-transparent bg-slate-50 dark:bg-slate-800 text-slate-500'
                                                }`}
                                            >
                                                <span className={`h-4 w-4 rounded-full ${color.class}`}></span>
                                                <span className="font-bold text-sm">{color.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Benefits/Expertises Section */}
                        <section className="glass-card p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                {t.admin.benefits}
                            </h2>
                            
                            <div className="space-y-4">
                                {formData.benefits.map((benefit, index) => (
                                    <div key={index} className="flex gap-3 group">
                                        <input
                                            type="text"
                                            value={benefit}
                                            onChange={(e) => updateBenefit(index, e.target.value)}
                                            className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeBenefit(index)}
                                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all"
                                        >
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                ))}

                                <div className="flex gap-3 pt-2">
                                    <input
                                        type="text"
                                        value={newBenefit}
                                        onChange={(e) => setNewBenefit(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addBenefit())}
                                        placeholder={t.admin.addBenefit}
                                        className="flex-1 px-4 py-2 rounded-xl border-dashed border-2 border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:outline-none focus:border-primary transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={addBenefit}
                                        className="px-6 py-2 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold hover:scale-105 transition-all"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Trust Section */}
                        <section className="glass-card p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">favorite</span>
                                Section Confiance
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Titre de la section</label>
                                        <input
                                            type="text"
                                            value={formData.trustTitle}
                                            onChange={(e) => setFormData({ ...formData, trustTitle: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            placeholder="ex: Pourquoi nous faire confiance ?"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Sous-titre / Description</label>
                                        <input
                                            type="text"
                                            value={formData.trustDescription}
                                            onChange={(e) => setFormData({ ...formData, trustDescription: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            placeholder="Brève description sous le titre..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Arguments de confiance (Items)</label>
                                    {formData.trustItems.map((item, index) => (
                                        <div key={index} className="relative p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-3">
                                            <button
                                                type="button"
                                                onClick={() => removeTrustItem(index)}
                                                className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-lg">close</span>
                                            </button>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                <div>
                                                    <input
                                                        type="text"
                                                        value={item.icon}
                                                        onChange={(e) => updateTrustItem(index, 'icon', e.target.value)}
                                                        className="w-full px-3 py-1.5 rounded-lg text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                                                        placeholder="Code icône (ex: brush)"
                                                    />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <input
                                                        type="text"
                                                        value={item.title}
                                                        onChange={(e) => updateTrustItem(index, 'title', e.target.value)}
                                                        className="w-full px-3 py-1.5 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                                                        placeholder="Titre de l'argument"
                                                    />
                                                </div>
                                            </div>
                                            <textarea
                                                value={item.description}
                                                onChange={(e) => updateTrustItem(index, 'description', e.target.value)}
                                                className="w-full px-3 py-1.5 rounded-lg text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-20"
                                                placeholder="Description de l'argument..."
                                            />
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addTrustItem}
                                        className="w-full py-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400 hover:border-primary hover:text-primary transition-all text-sm font-bold"
                                    >
                                        + Ajouter un argument
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Process Section */}
                        <section className="glass-card p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                Processus Créatif
                            </h2>
                            
                            <div className="space-y-4">
                                {formData.processSteps.map((step, index) => (
                                    <div key={index} className="flex gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <input
                                                type="text"
                                                value={step.title}
                                                onChange={(e) => updateProcessStep(index, 'title', e.target.value)}
                                                className="w-full px-3 py-1.5 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                                                placeholder="Titre de l'étape"
                                            />
                                            <textarea
                                                value={step.description}
                                                onChange={(e) => updateProcessStep(index, 'description', e.target.value)}
                                                className="w-full px-3 py-1.5 rounded-lg text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-20"
                                                placeholder="Description de l'étape..."
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeProcessStep(index)}
                                            className="self-start p-1 text-slate-400 hover:text-red-500"
                                        >
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addProcessStep}
                                    className="w-full py-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400 hover:border-primary hover:text-primary transition-all text-sm font-bold"
                                >
                                    + Ajouter une étape
                                </button>
                            </div>
                        </section>

                        <div className="flex items-center justify-end gap-4">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/services')}
                                className="px-8 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                            >
                                {t.admin.cancel}
                            </button>
                            <button
                                type="submit"
                                className="px-10 py-4 rounded-2xl bg-primary text-white font-black shadow-xl shadow-primary/25 hover:-translate-y-1 hover:shadow-2xl transition-all uppercase tracking-widest text-xs"
                            >
                                {t.admin.save}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
