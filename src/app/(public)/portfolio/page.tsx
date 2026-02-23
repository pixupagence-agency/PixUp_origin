"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";

export default function Portfolio() {
    const { t } = useLanguage();
    const { projects } = useData();
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <>
            {/*  Main Content  */}
            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 pt-32">
                {/*  Hero / Header Section  */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                            {t.portfolio.title} <span className="text-primary">{t.portfolio.titleAccent}</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                            {t.portfolio.description}
                        </p>
                    </div>
                    {/*  Filter Bar  */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                        <button className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium transition-all shadow-md shadow-primary/25 whitespace-nowrap">
                            {t.portfolio.allWork}
                        </button>
                    </div>
                </div>
                {/*  Masonry Grid  */}
                <div className="masonry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="masonry-item group relative cursor-pointer overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-transparent dark:border-white/5 hover:border-primary/30 transition-all duration-300" onClick={() => setSelectedProject(project)}>
                            <img alt={project.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" src={project.image || "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop"} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
                                <h3 className="text-white text-2xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.title}</h3>
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white">
                                    <span className="material-symbols-outlined text-xl">arrow_outward</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*  Load More Button  */}
                <div className="mt-12 flex justify-center">
                    <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all font-medium">
                        {t.portfolio.loadMore}
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                </div>
            </main>

            {/*  Project Detail Modal  */}
            {selectedProject && (
                <div className="modal fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="project-modal">
                    {/*  Backdrop  */}
                    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
                    {/*  Modal Content Container  */}
                    <div className="modal-content relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800">
                        {/*  Close Button  */}
                        <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 p-2 bg-white/20 dark:bg-black/20 backdrop-blur-md hover:bg-white/40 dark:hover:bg-black/40 rounded-full text-white transition-colors" >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        {/*  Scrollable Content  */}
                        <div className="overflow-y-auto overflow-x-hidden flex-1 no-scrollbar">
                            {/*  Hero Image  */}
                            <div className="relative h-64 md:h-96 w-full">
                                <img alt={selectedProject.title} className="w-full h-full object-cover" src={selectedProject.image || "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop"} />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">{selectedProject.category}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                    <p className="text-slate-300 text-lg md:text-xl">{t.portfolio.description}</p>
                                </div>
                            </div>
                            {/*  Content Body  */}
                            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {/*  Main Text  */}
                                <div className="lg:col-span-2 space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.portfolio.modal.challenge}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {selectedProject.title} was a unique project that required a creative approach to fulfill the client's needs.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t.portfolio.modal.solution}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Our team developed a custom solution focusing on user experience and brand identity.
                                        </p>
                                    </div>
                                </div>
                                {/*  Sidebar Info  */}
                                <div className="lg:col-span-1 space-y-8">
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t.portfolio.modal.client}</p>
                                                <p className="text-slate-900 dark:text-white font-medium">{selectedProject.title} Client</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t.portfolio.modal.timeline}</p>
                                                <p className="text-slate-900 dark:text-white font-medium">--</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t.portfolio.modal.services}</p>
                                                <p className="text-slate-900 dark:text-white font-medium">{selectedProject.category}</p>
                                            </div>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                                            <button className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                                                {t.portfolio.modal.visitSite}
                                                <span className="material-symbols-outlined text-lg">arrow_outward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}