"use client";

import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { useLanguage } from "@/context/LanguageContext";
import { useData, FAQItem } from "@/context/DataContext";

export default function AdminFAQ() {
    const { t } = useLanguage();
    const { faqs, setFaqs } = useData();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
    const [formData, setFormData] = useState({
        category: "services",
        q: "",
        a: "",
        active: true
    });

    const openModal = (faq: FAQItem | null = null) => {
        if (faq) {
            setEditingFaq(faq);
            setFormData({
                category: faq.category,
                q: faq.q,
                a: faq.a,
                active: faq.active !== undefined ? faq.active : true
            });
        } else {
            setEditingFaq(null);
            setFormData({
                category: "services",
                q: "",
                a: "",
                active: true
            });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingFaq(null);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingFaq) {
            setFaqs(faqs.map(f => f.id === editingFaq.id ? { ...f, ...formData } : f));
        } else {
            const newFaq: FAQItem = {
                id: Math.random().toString(36).substr(2, 9),
                ...formData
            };
            setFaqs([...faqs, newFaq]);
        }
        closeModal();
    };

    const handleDelete = (id: string) => {
        if (window.confirm(t.admin.confirmDeleteFaq)) {
            setFaqs(faqs.filter(f => f.id !== id));
        }
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark transition-colors p-8">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{t.admin.faqManagement}</h1>
                            <p className="mt-1 text-slate-500 dark:text-slate-400">{t.admin.faqDesc}</p>
                        </div>
                        <button
                            onClick={() => openModal()}
                            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-blue-600"
                        >
                            <span className="material-symbols-outlined text-lg">add</span>
                            {t.admin.createQuestion}
                        </button>
                    </header>

                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                                {faq.category}
                                            </span>
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${faq.active ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'}`}>
                                                {faq.active ? t.admin.active : t.admin.inactive}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => openModal(faq)}
                                            className="rounded-lg p-2 text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-lg">edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(faq.id)}
                                            className="rounded-lg p-2 text-slate-400 dark:text-slate-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-lg">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-transparent dark:border-slate-800">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                {editingFaq ? t.admin.editQuestion : t.admin.createQuestion}
                            </h2>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.category}</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                                >
                                    <option value="services">{t.faq.categories.services}</option>
                                    <option value="process">{t.faq.categories.process}</option>
                                    <option value="pricing">{t.faq.categories.pricing}</option>
                                    <option value="support">{t.faq.categories.support}</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.question}</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.q}
                                    onChange={(e) => setFormData({ ...formData, q: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="Type the question..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.answer}</label>
                                <textarea
                                    required
                                    value={formData.a}
                                    onChange={(e) => setFormData({ ...formData, a: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-32 resize-none"
                                    placeholder="Type the answer..."
                                />
                            </div>
                            <div className="flex items-center gap-2 pt-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.active}
                                        onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                        className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 dark:bg-slate-700"
                                    />
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.active}</span>
                                </label>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                                >
                                    {t.admin.cancel}
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all"
                                >
                                    {t.admin.save}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
