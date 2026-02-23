"use client";

import React, { useState } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminPortfolio() {
    const { t } = useLanguage();
    const { projects, setProjects } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<any>(null);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: '',
        featured: false,
        addedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' })
    });

    const openModal = (project: any = null) => {
        if (project) {
            setEditingProject(project);
            setFormData({
                title: project.title,
                category: project.category,
                image: project.image,
                featured: project.featured,
                addedDate: project.addedDate
            });
        } else {
            setEditingProject(null);
            setFormData({
                title: '',
                category: '',
                image: '',
                featured: false,
                addedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' })
            });
        }
        setIsModalOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingProject) {
            setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...formData } : p));
        } else {
            const newProject = {
                id: Math.random().toString(36).substr(2, 9),
                ...formData
            };
            setProjects([...projects, newProject]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: string) => {
        if (window.confirm(t.admin.confirmDeleteProject)) {
            setProjects(projects.filter(p => p.id !== id));
        }
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
                <div className="container mx-auto max-w-5xl px-4 py-8 md:px-8">
                    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{t.admin.portfolioManagement}</h1>
                            <p className="mt-1 text-slate-500 dark:text-slate-400">{t.admin.portfolioDesc}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => openModal()}
                                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus:ring-4 focus:ring-primary/20"
                            >
                                <span className="material-symbols-outlined text-lg">add</span>
                                {t.admin.newProject}
                            </button>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all">
                                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                                    <img
                                        src={project.image || "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop"}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {project.featured && (
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/60 to-transparent p-4">
                                            <span className="rounded-full bg-white/20 px-2 py-1 text-xs font-semibold text-white backdrop-blur-md">{t.admin.featured}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-1 flex-col p-5">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">{project.title}</h3>
                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.category}</p>
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-700 px-1">
                                        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{t.admin.addedDate} {project.addedDate}</span>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => openModal(project)}
                                                className="text-slate-400 hover:text-primary"
                                                title={t.admin.edit}
                                            >
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(project.id)}
                                                className="text-slate-400 hover:text-red-500"
                                                title={t.admin.delete}
                                            >
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
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
                            <h3 className="font-bold text-slate-900 dark:text-white">{editingProject ? t.admin.editProject : t.admin.newProject}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.projectTitle}</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="e.g. Fintech App"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.category}</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="e.g. UI/UX Design, Development"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Image URL</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    checked={formData.featured}
                                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary bg-white dark:bg-slate-800"
                                />
                                <label htmlFor="featured" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.featured}</label>
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
