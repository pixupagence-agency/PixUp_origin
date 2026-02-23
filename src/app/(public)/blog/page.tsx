"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import Link from "next/link";

export default function Blog() {
    const { t } = useLanguage();
    const { articles } = useData();

    return (
        <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 pt-32 transition-colors">
            {/*  Header Section  */}
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                    Our <span className="text-primary italic">Blog</span>
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                    Insights, trends, and stories from our team of designers and developers.
                    Stay updated with the latest in digital innovation.
                </p>
            </div>

            {/*  Blog Grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {articles.filter(a => a.status === 'published').map((article) => (
                    <article key={article.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                        {/*  Image Container  */}
                        <div className="relative h-64 overflow-hidden">
                            <img alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={article.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"} />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-800/90 text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-primary/20">
                                    {article.category}
                                </span>
                            </div>
                        </div>
                        {/*  Content  */}
                        <div className="flex-1 p-8 flex flex-col">
                            <div className="flex items-center gap-3 mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span>{article.date}</span>
                                <span className="w-1 h-1 rounded-full bg-primary/40"></span>
                                <span>5 min read</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                {article.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 line-clamp-3">
                                {article.excerpt}
                            </p>
                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                                        {article.author.charAt(0)}
                                    </div>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">{article.author}</span>
                                </div>
                                <Link href={`/blog/${article.id}`} className="text-primary font-bold text-sm flex items-center gap-1 group/link">
                                    Read More
                                    <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/*  Newsletter / CTA  */}
            <section className="mt-24 p-8 md:p-16 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Never miss an update</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">Subscribe to our newsletter for the latest design trends and development tips.</p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input className="flex-1 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Enter your email" type="email" />
                        <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/25">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
