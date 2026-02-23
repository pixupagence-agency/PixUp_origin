"use client";

import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { useLanguage } from "@/context/LanguageContext";

interface PricingPlan {
    id: string;
    name: string;
    price: string;
    description: string;
    active: boolean;
    popular: boolean;
    users: number;
}

export default function AdminPricing() {
    const { t } = useLanguage();

    const [plans, setPlans] = useState<PricingPlan[]>([
        {
            id: "1",
            name: "Starter",
            price: "49€",
            description: "Perfect for freelancers and solo creators.",
            active: true,
            popular: false,
            users: 128
        },
        {
            id: "2",
            name: "Professional",
            price: "99€",
            description: "For growing teams demanding power.",
            active: true,
            popular: true,
            users: 542
        },
        {
            id: "3",
            name: "Agency",
            price: "199€",
            description: "Scale your operations with full control.",
            active: true,
            popular: false,
            users: 86
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        active: true,
        popular: false
    });

    const openModal = (plan: PricingPlan | null = null) => {
        if (plan) {
            setEditingPlan(plan);
            setFormData({
                name: plan.name,
                price: plan.price,
                description: plan.description,
                active: plan.active,
                popular: plan.popular
            });
        } else {
            setEditingPlan(null);
            setFormData({
                name: "",
                price: "",
                description: "",
                active: true,
                popular: false
            });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingPlan(null);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingPlan) {
            setPlans(plans.map(p => {
                if (p.id === editingPlan.id) {
                    // If this plan is set to popular, unset others
                    const updatedPlan = { ...p, ...formData };
                    return updatedPlan;
                }
                if (formData.popular) return { ...p, popular: false };
                return p;
            }));
        } else {
            const newPlan: PricingPlan = {
                id: Math.random().toString(36).substr(2, 9),
                ...formData,
                users: 0
            };
            setPlans(formData.popular
                ? [...plans.map(p => ({ ...p, popular: false })), newPlan]
                : [...plans, newPlan]
            );
        }
        closeModal();
    };

    const handleDelete = (id: string) => {
        if (window.confirm(t.admin.confirmDelete)) {
            setPlans(plans.filter(p => p.id !== id));
        }
    };

    const togglePopular = (id: string) => {
        setPlans(plans.map(p => ({
            ...p,
            popular: p.id === id ? !p.popular : false
        })));
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto bg-background-light">
                <div className="container mx-auto max-w-5xl px-4 py-8 md:px-8">
                    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{t.admin.pricingManagement}</h1>
                            <p className="mt-1 text-slate-500">{t.admin.pricingDesc}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => openModal()}
                                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus:ring-4 focus:ring-primary/20"
                            >
                                <span className="material-symbols-outlined text-lg">add</span>
                                {t.admin.createPlan}
                            </button>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`group rounded-2xl border ${plan.popular ? 'border-2 border-primary shadow-md' : 'border-slate-200 shadow-sm'} bg-white p-6 hover:shadow-lg transition-all relative`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        {t.admin.mostPopular}
                                    </div>
                                )}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${plan.popular ? 'bg-primary text-white' : 'bg-blue-50 text-primary'}`}>
                                            <span className="material-symbols-outlined text-2xl">{plan.popular ? 'star' : 'eco'}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => togglePopular(plan.id)}
                                                className={`rounded-lg p-2 ${plan.popular ? 'text-primary bg-primary/10' : 'text-slate-400 hover:bg-slate-50 hover:text-primary'} transition-colors`}
                                                title={t.admin.markPopular}
                                            >
                                                <span className="material-symbols-outlined text-lg">{plan.popular ? 'star' : 'star_border'}</span>
                                            </button>
                                            <button
                                                onClick={() => openModal(plan)}
                                                className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-primary transition-colors"
                                                title={t.admin.editPlan}
                                            >
                                                <span className="material-symbols-outlined text-lg">edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(plan.id)}
                                                className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                title={t.admin.deletePlan}
                                            >
                                                <span className="material-symbols-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                                        <p className="text-2xl font-black text-slate-900 mt-1">{plan.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
                                            {plan.description}
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4">
                                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${plan.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${plan.active ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                                            {plan.active ? t.admin.active : t.admin.inactive}
                                        </span>
                                        <span className="text-xs font-medium text-slate-400">{plan.users} {t.admin.users}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-100">
                            <h2 className="text-xl font-bold text-slate-900">{t.admin.billings}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50">
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">{t.admin.client}</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">{t.admin.plan}</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">{t.admin.amount}</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">{t.admin.dueDate}</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">{t.admin.action}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">JD</div>
                                                <span className="text-sm font-medium text-slate-900">John Doe</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4"><span className="text-sm text-slate-600">Professional</span></td>
                                        <td className="px-6 py-4"><span className="text-sm font-bold text-slate-900">99.00€</span></td>
                                        <td className="px-6 py-4"><span className="text-sm text-slate-500">March 12, 2026</span></td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-primary text-xs font-bold hover:underline">{t.admin.viewInvoice}</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">
                                {editingPlan ? t.admin.editPlan : t.admin.createPlan}
                            </h2>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">{t.admin.planName}</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="e.g. Starter"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">{t.admin.price}</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="e.g. 49€"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">{t.admin.description}</label>
                                <textarea
                                    required
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-24 resize-none"
                                    placeholder="Short description..."
                                />
                            </div>
                            <div className="flex items-center gap-6 pt-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.active}
                                        onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                        className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                                    />
                                    <span className="text-sm font-medium text-slate-700">{t.admin.active}</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.popular}
                                        onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                                        className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                                    />
                                    <span className="text-sm font-medium text-slate-700">{t.admin.mostPopular}</span>
                                </label>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-all"
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
