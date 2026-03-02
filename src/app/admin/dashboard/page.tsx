"use client";

import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminDashboard() {
    const { t } = useLanguage();
    const { services, projects, articles, stats } = useData();

    // Derived stats
    const activeProjectsCount = projects.filter(p => p.active).length;
    const publishedArticlesCount = articles.filter(a => a.status === 'published').length;

    // Helper to generate SVG path for the chart
    const getChartPath = (data: number[], isFill = false) => {
        if (!data || data.length === 0) return '';
        const max = Math.max(...data, 1);
        const min = Math.min(...data, 0);
        const range = max - min;

        let path = '';
        data.forEach((val, i) => {
            const x = (i / (data.length - 1)) * 100;
            const y = 100 - ((val - min) / (range || 1)) * 80 - 10;
            if (i === 0) {
                path += `M${x},${y} `;
            } else {
                // simple curve via Q
                const prevX = ((i - 1) / (data.length - 1)) * 100;
                const prevY = 100 - ((data[i - 1] - min) / (range || 1)) * 80 - 10;
                const ctrlX = (prevX + x) / 2;
                path += `Q${ctrlX},${prevY} ${x},${y} `;
            }
        });

        if (isFill) {
            path += `L100,100 L0,100 Z`;
        }
        return path;
    };

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
                                    <span className={`flex items-center px-2 py-1 rounded-md text-xs font-bold ${stats.totalViews.isPositive ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' : 'text-red-600 bg-red-50 dark:bg-red-900/20'}`}>
                                        <span className="material-symbols-outlined text-sm mr-1">{stats.totalViews.isPositive ? 'trending_up' : 'trending_down'}</span>
                                        {stats.totalViews.trend}
                                    </span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t.admin.totalViews}</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stats.totalViews.value}</h3>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl shadow-sm hover:shadow-md transition-all-300 group bg-white dark:bg-slate-800 border dark:border-slate-700">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">folder_special</span>
                                    </div>
                                    <span className={`flex items-center px-2 py-1 rounded-md text-xs font-bold ${stats.portfolioVisits.isPositive ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' : 'text-red-600 bg-red-50 dark:bg-red-900/20'}`}>
                                        <span className="material-symbols-outlined text-sm mr-1">{stats.portfolioVisits.isPositive ? 'trending_up' : 'trending_down'}</span>
                                        {stats.portfolioVisits.trend}
                                    </span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t.admin.portfolioVisits}</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stats.portfolioVisits.value}</h3>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl shadow-sm hover:shadow-md transition-all-300 group bg-white dark:bg-slate-800 border dark:border-slate-700">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">person_add</span>
                                    </div>
                                    <span className={`flex items-center px-2 py-1 rounded-md text-xs font-bold ${stats.newLeads.isPositive ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' : 'text-red-600 bg-red-50 dark:bg-red-900/20'}`}>
                                        <span className="material-symbols-outlined text-sm mr-1">{stats.newLeads.isPositive ? 'trending_up' : 'trending_down'}</span>
                                        {stats.newLeads.trend}
                                    </span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t.admin.newLeads}</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stats.newLeads.value}</h3>
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
                                        <path d={getChartPath(stats.trafficHistory, true)} fill="rgba(19, 91, 236, 0.1)"></path>
                                        <path d={getChartPath(stats.trafficHistory)} fill="none" stroke="#135bec" strokeWidth="2"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-2xl shadow-sm border dark:border-slate-700 border-white/60 bg-white dark:bg-slate-800">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.admin.recentActivity}</h3>
                                    <button className="text-primary text-sm font-semibold hover:underline">{t.admin.viewAll}</button>
                                </div>
                                <div className="space-y-6">
                                    {stats.recentActivities.map((activity) => (
                                        <div key={activity.id} className="flex gap-4">
                                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${activity.bgClass} ${activity.colorClass}`}>
                                                <span className="material-symbols-outlined text-xl">{activity.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-900 dark:text-white font-medium">{activity.title}</p>
                                                <span className="text-xs text-slate-400 dark:text-slate-500">{activity.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}