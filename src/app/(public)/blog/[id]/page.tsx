"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";

export default function BlogPost() {
    const { id } = useParams();
    const { t } = useLanguage();
    const { articles, settings } = useData();

    if (!settings.showBlog) {
        notFound();
    }

    const article = articles.find(a => a.id === id);

    if (!article) {
        notFound();
    }

    return (
        <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 pt-32 transition-colors">
            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-bold">
                <span className="material-symbols-outlined">arrow_back</span>
                {t.blogPage.backToBlog || "Back to Blog"}
            </Link>

            <article className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6 text-sm font-bold text-primary uppercase tracking-widest">
                        <span>{article.category}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                        <span>{article.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
                        {article.title}
                    </h1>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 w-fit">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                            {article.author.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white">{article.author}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Author</p>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
                    <img
                        src={article.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary-hover transition-colors">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                {/* Footer / Sharing */}
                <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <h4 className="font-bold text-slate-900 dark:text-white">Share this article:</h4>
                        <div className="flex gap-2">
                            {['facebook', 'twitter', 'linkedin'].map(social => (
                                <button key={social} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all">
                                    <span className="material-symbols-outlined text-xl">share</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <Link href="/blog" className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
                        Discover more stories
                    </Link>
                </div>
            </article>
        </main>
    );
}
