"use client";

import React, { useState } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminServices() {
    const { t } = useLanguage();
    const { services, setServices } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        icon: 'diamond',
        active: true,
        projects: 0,
        color: 'blue'
    });

    const openModal = (service: any = null) => {
        if (service) {
            setEditingService(service);
            setFormData({
                name: service.name,
                description: service.description,
                icon: service.icon,
                active: service.active,
                projects: service.projects,
                color: service.color
            });
        } else {
            setEditingService(null);
            setFormData({
                name: '',
                description: '',
                icon: 'diamond',
                active: true,
                projects: 0,
                color: 'blue'
            });
        }
        setIsModalOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingService) {
            setServices(services.map(s => s.id === editingService.id ? { ...s, ...formData } : s));
        } else {
            const newService = {
                id: Math.random().toString(36).substr(2, 9),
                ...formData
            };
            setServices([...services, newService]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: string) => {
        if (window.confirm(t.admin.confirmDeleteService)) {
            setServices(services.filter(s => s.id !== id));
        }
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
                <div className="container mx-auto max-w-5xl px-4 py-8 md:px-8">
                    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{t.admin.servicesManagement}</h1>
                            <p className="mt-1 text-slate-500 dark:text-slate-400">{t.admin.servicesDesc}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => openModal()}
                                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus:ring-4 focus:ring-primary/20"
                            >
                                <span className="material-symbols-outlined text-lg">add</span>
                                {t.admin.addService}
                            </button>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div key={service.id} className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${service.color}-50 dark:bg-${service.color}-900/20 text-${service.color === 'blue' ? 'primary' : service.color + '-600'} group-hover:bg-${service.color === 'blue' ? 'primary' : service.color + '-600'} group-hover:text-white transition-colors`}>
                                            <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => openModal(service)}
                                                className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-primary transition-colors"
                                                title={t.admin.edit}
                                            >
                                                <span className="material-symbols-outlined text-lg">edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(service.id)}
                                                className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                title={t.admin.delete}
                                            >
                                                <span className="material-symbols-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{service.name}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
                                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${service.active ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${service.active ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                                            {service.active ? t.admin.active : t.admin.inactive}
                                        </span>
                                        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{service.projects} {t.admin.activeProjects}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 dark:bg-slate-900/60 backdrop-blur-sm p-4">
                    <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 border dark:border-slate-800">
                        <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 dark:text-white">{editingService ? t.admin.editService : t.admin.addService}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.serviceName}</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="e.g. Web Development"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.serviceDesc}</label>
                                <textarea
                                    required
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-24"
                                    placeholder="Describe the service..."
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">{t.admin.icon}</label>
                                    <select
                                        value={formData.icon}
                                        onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                        className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white"
                                    >
                                        <option value="diamond">Diamond</option>
                                        <option value="layers">Layers</option>
                                        <option value="code">Code</option>
                                        <option value="campaign">Campaign</option>
                                        <option value="brush">Brush</option>
                                        <option value="smartphone">Smartphone</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.status}</label>
                                    <select
                                        value={formData.active ? 'true' : 'false'}
                                        onChange={(e) => setFormData({ ...formData, active: e.target.value === 'true' })}
                                        className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white"
                                    >
                                        <option value="true">{t.admin.active}</option>
                                        <option value="false">{t.admin.inactive}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">{t.admin.cancel}</button>
                                <button type="submit" className="flex-1 px-4 py-2 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all">{t.admin.save}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
