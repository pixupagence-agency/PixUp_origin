"use client";

import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminDashboard() {
    const { t } = useLanguage();
    const { services, projects, articles } = useData();

    // Derived stats
    const activeProjectsCount = projects.length; // Simple mapping for now
    const publishedArticlesCount = articles.filter(a => a.status === 'published').length;

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
            <AdminSidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Header */}

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto px-4 pb-8 md:px-8">
                    <div className="max-w-7xl mx-auto flex flex-col gap-8">
                        {/* Page Title */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{t.admin.dashboardOverview}</h2>
                                <p className="text-slate-500 dark:text-slate-400 mt-1">{t.admin.welcomeBack}</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white/60 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-white/50 dark:border-slate-700/50 shadow-sm backdrop-blur-sm">
                                <span className="material-symbols-outlined text-lg">calendar_today</span>
                                <span>Last 30 Days</span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="glass-panel p-6 rounded-2xl shadow-sm hover:shadow-md transition-all-300 group bg-white dark:bg-slate-800 border dark:border-slate-700">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </div>
                                    <span className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                                        +12%
                                    </span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t.admin.totalViews}</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">124.5k</h3>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl shadow-sm hover:shadow-md transition-all-300 group bg-white dark:bg-slate-800 border dark:border-slate-700">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">folder_special</span>
                                    </div>
                                    <span className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                                        +5%
                                    </span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t.admin.portfolioVisits}</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">8,230</h3>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl shadow-sm hover:shadow-md transition-all-300 group bg-white dark:bg-slate-800 border dark:border-slate-700">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">person_add</span>
                                    </div>
                                    <span className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                                        +18%
                                    </span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t.admin.newLeads}</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">45</h3>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl shadow-sm hover:shadow-md transition-all-300 group bg-white dark:bg-slate-800 border dark:border-slate-700">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-xl text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                    </div>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t.admin.activeProjects}</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{activeProjectsCount}</h3>
                            </div>
                        </div>

                        {/* Recent Activity & Chart */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 glass-panel p-6 rounded-2xl shadow-sm border dark:border-slate-700 border-white/60 bg-white dark:bg-slate-800">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">{t.admin.trafficOverview}</h3>
                                <div className="w-full h-[280px] relative">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M0,100 L0,70 Q10,60 20,75 T40,50 T60,60 T80,30 T100,50 L100,100 Z" fill="rgba(19, 91, 236, 0.1)"></path>
                                        <path d="M0,70 Q10,60 20,75 T40,50 T60,60 T80,30 T100,50" fill="none" stroke="#135bec" strokeWidth="2"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl shadow-sm border dark:border-slate-700 border-white/60 bg-white dark:bg-slate-800">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.admin.recentActivity}</h3>
                                    <button className="text-primary text-sm font-semibold hover:underline">{t.admin.viewAll}</button>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-xl">edit_document</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-900 dark:text-white font-medium">{t.admin.portfolioVisits} updated</p>
                                            <span className="text-xs text-slate-400 dark:text-slate-500">2 mins ago</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                                            <span className="material-symbols-outlined text-xl">article</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-900 dark:text-white font-medium">{publishedArticlesCount} {t.admin.published} articles</p>
                                            <span className="text-xs text-slate-400 dark:text-slate-500">Today</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}