"use client";

import React, { useState } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminBlog() {
    const { t } = useLanguage();
    const { articles, setArticles } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingArticle, setEditingArticle] = useState<any>(null);
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        image: '',
        category: '',
        author: 'Alex Morgan',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        status: 'published' as 'published' | 'draft'
    });

    const openModal = (article: any = null) => {
        if (article) {
            setEditingArticle(article);
            setFormData({
                title: article.title,
                excerpt: article.excerpt,
                image: article.image,
                category: article.category,
                author: article.author,
                date: article.date,
                status: article.status
            });
        } else {
            setEditingArticle(null);
            setFormData({
                title: '',
                excerpt: '',
                image: '',
                category: '',
                author: 'Alex Morgan',
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                status: 'published'
            });
        }
        setIsModalOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingArticle) {
            setArticles(articles.map(a => a.id === editingArticle.id ? { ...a, ...formData } : a));
        } else {
            const newArticle = {
                id: Math.random().toString(36).substr(2, 9),
                ...formData
            };
            setArticles([...articles, newArticle]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: string) => {
        if (window.confirm(t.admin.confirmDeleteArticle)) {
            setArticles(articles.filter(a => a.id !== id));
        }
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
                <div className="container mx-auto max-w-5xl px-4 py-8 md:px-8">
                    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{t.admin.blogManagement}</h1>
                            <p className="mt-1 text-slate-500 dark:text-slate-400">{t.admin.blogDesc}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                <span className="material-symbols-outlined text-lg">filter_list</span>
                                {t.admin.filter}
                            </button>
                            <button
                                onClick={() => openModal()}
                                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus:ring-4 focus:ring-primary/20"
                            >
                                <span className="material-symbols-outlined text-lg">add</span>
                                {t.admin.newArticle}
                            </button>
                        </div>
                    </header>

                    {/* Stats */}
                    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary">
                                    <span className="material-symbols-outlined">article</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t.admin.published}</p>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{articles.filter(a => a.status === 'published').length}</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600">
                                    <span className="material-symbols-outlined">edit_note</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t.admin.draft}</p>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{articles.filter(a => a.status === 'draft').length}</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600">
                                    <span className="material-symbols-outlined">visibility</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t.admin.totalViews}</p>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">12.5k</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                                <thead className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-xs uppercase tracking-wider text-slate-500">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">{t.admin.articleTitle}</th>
                                        <th className="px-6 py-4 font-semibold">{t.admin.author}</th>
                                        <th className="px-6 py-4 font-semibold">{t.admin.publishDate}</th>
                                        <th className="px-6 py-4 font-semibold">{t.admin.status}</th>
                                        <th className="px-6 py-4 text-right font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {articles.map((article) => (
                                        <tr key={article.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <p className="font-semibold text-slate-900 dark:text-white line-clamp-1">{article.title}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">{article.category}</p>
                                            </td>
                                            <td className="px-6 py-4">{article.author}</td>
                                            <td className="px-6 py-4">{article.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${article.status === 'published' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' : 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'}`}>
                                                    {article.status === 'published' ? t.admin.published : t.admin.draft}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button onClick={() => openModal(article)} className="text-slate-400 hover:text-primary" title={t.admin.edit}>
                                                        <span className="material-symbols-outlined">edit</span>
                                                    </button>
                                                    <button onClick={() => handleDelete(article.id)} className="text-slate-400 hover:text-red-500" title={t.admin.delete}>
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 dark:bg-slate-900/60 backdrop-blur-sm p-4">
                    <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 border dark:border-slate-800">
                        <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 dark:text-white">{editingArticle ? t.admin.editArticle : t.admin.newArticle}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.articleTitle}</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="e.g. The Future of AI"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Excerpt</label>
                                <textarea
                                    required
                                    value={formData.excerpt}
                                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-20"
                                    placeholder="Short summary of the article..."
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
                                    placeholder="https://images.unsplash.com/..."
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
                                    placeholder="e.g. Design Trends"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.author}</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.author}
                                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                        className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.status}</label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                                        className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white"
                                    >
                                        <option value="published">{t.admin.published}</option>
                                        <option value="draft">{t.admin.draft}</option>
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
