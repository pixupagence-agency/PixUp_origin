"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Service {
    id: string;
    name: string;
    description: string;
    icon: string;
    active: boolean;
    projects: number;
    color: string;
}

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    featured: boolean;
    addedDate: string;
}

interface Article {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    date: string;
    status: 'published' | 'draft';
}

interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

interface Settings {
    agencyName: string;
    email: string;
    phone: string;
    address: string;
    founderName: string;
    founderRole: string;
    founderBio: string;
    founderAvatar: string;
    linkedin: string;
    instagram: string;
    dribbble: string;
}

interface DataContextType {
    services: Service[];
    setServices: React.Dispatch<React.SetStateAction<Service[]>>;
    projects: Project[];
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
    articles: Article[];
    setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
    testimonials: Testimonial[];
    setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
    settings: Settings;
    setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initial data matching the current UI
    const [services, setServices] = useState<Service[]>([
        { id: '1', name: 'Branding', description: 'Crafting unique visual identities that resonate with your audience and tell your story.', icon: 'diamond', active: true, projects: 12, color: 'blue' },
        { id: '2', name: 'UI/UX Design', description: 'Designing intuitive, user-centric interfaces that provide seamless digital experiences.', icon: 'layers', active: true, projects: 28, color: 'purple' },
        { id: '3', name: 'Web Development', description: 'Building robust, scalable websites and applications using modern technologies.', icon: 'code', active: true, projects: 45, color: 'blue' },
        { id: '4', name: 'SEO & Marketing', description: 'Strategic campaigns that drive growth, engagement, and measurable results.', icon: 'campaign', active: false, projects: 0, color: 'orange' },
    ]);

    const [projects, setProjects] = useState<Project[]>([
        { id: '1', title: 'Fintech Mobile App', category: 'UI/UX Design, Development', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop', featured: true, addedDate: 'Oct 20' },
        { id: '2', title: 'E-Commerce Platform Redesign', category: 'Web Development, Branding', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', featured: false, addedDate: 'Sep 15' },
        { id: '3', title: 'Oasis Corporate Identity', category: 'Branding, Marketing', image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop', featured: false, addedDate: 'Aug 02' },
    ]);

    const [articles, setArticles] = useState<Article[]>([
        { id: '1', title: 'The Future of AI in Web Design', excerpt: 'How artificial intelligence is reshaping the creative landscape and what it means for designers.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop', category: 'Design Trends', author: 'Alex Morgan', date: 'Oct 24, 2023', status: 'published' },
        { id: '2', title: '10 Tips for Better Typography', excerpt: 'Master the art of type layout with these professional tips for better readability.', image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop', category: 'Tutorials', author: 'Sarah Connor', date: 'Oct 20, 2023', status: 'published' },
        { id: '3', title: 'Understanding Color Theory in UI', excerpt: 'Dive deep into the psychology of colors and how they impact user behavior.', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop', category: 'Design Guidelines', author: 'Alex Morgan', date: 'Brouillon', status: 'draft' },
    ]);

    const [testimonials, setTestimonials] = useState<Testimonial[]>([
        { id: '1', name: 'Sarah Johnson', role: 'CEO at Techflow', content: 'PIXUP transformed our brand identity completely. Their attention to detail is unmatched in the industry.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV0R0saAlpYeF-pDtkxaGZsHcheXoboLneXgigeyycVajM52iv-f9EPf15lTV9gpqsFGqZrKFBsXEpEe3Qt2RGQ3k_0Qx2pHnf29cUegbhnleXPTS_XWe8L-_DNWQIqLV6sMXQRESxXTkUkN4-PBvO090nnEDcHfsllC3WivpNKXh8-7EIok_sJjoltCImRTir3_SFLQKIwY7N462BD0OO6d6uH4f1yWkkR3_GRYD_DEj_T6l9SZLj4-TGXxTmw6TXgzah9OY9knCx' },
        { id: '2', name: 'Michael Chen', role: 'Marketing Director at Innovate', content: 'Incredible work ethic and stunning designs. The team went above and beyond our expectations.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOGTSYycoTZEVZpNjONDvxP9Z2v5mwNIlUhljTEDsdaTlkPgyTV0K6-jXILPUxMnuiVw2xIOx_n7XCV_OgxtUkReViZNNbkUzG4rn8MZPyIpjTnIpHw_TmTtTva8B1B-JlBEfJF5z7vB-27HboTrdXcg_uFowr_EPorCLgaWOShbkj4k7Ln6p_G40R9rLl07Bm_EWiySKXmlukdpsHmfy7EDpKiACK_HUbfE6VUVayTqdklPWgukbQy1eTZmDk0gASKPZQsFX5bSbk' },
    ]);

    const [settings, setSettings] = useState<Settings>({
        agencyName: "PixUp",
        email: "hello@pixup.agency.com",
        phone: "+33 6 82 55 35 52",
        address: "Chantonnay, Vendée (85)",
        founderName: "Denis Taveneau",
        founderRole: "Fondateur",
        founderBio: "Passionate about minimal design and creating user-centric digital experiences. Over 10 years of experience in the creative industry.",
        founderAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoIJjmXDZOgk6WrXH8dwaaXxpZwHjb1sUOvjcu-0AhQXIuHm7Gdk54leiIKUjUFgHbyPTlQRcEhDTjhbBTtnI6PfCdA5b1jQYyf5RnQA6q507D588TsVPsQInTIpTDb0asDIou9ogCoTgBZoJJfRnW9lPS66h1QHi0-QoL8oRSSDqI7nDYT2VoUjjRkOuzd7dTwpLaEEiDFXipov7hzZpNSnhUL_fyiLaf5Ela5-OXVr3Z8PKrUGuSo41MY5xNNQ-AbgKpVCJdWM1E",
        linkedin: "https://linkedin.com/company/pixup",
        instagram: "https://instagram.com/pixup_agency",
        dribbble: "https://dribbble.com/pixup",
    });

    // Persistence
    useEffect(() => {
        const savedServices = localStorage.getItem('pixup_services');
        const savedProjects = localStorage.getItem('pixup_projects');
        const savedArticles = localStorage.getItem('pixup_articles');
        const savedSettings = localStorage.getItem('pixup_settings');
        const savedTestimonials = localStorage.getItem('pixup_testimonials');

        if (savedServices) setServices(JSON.parse(savedServices));
        if (savedProjects) setProjects(JSON.parse(savedProjects));
        if (savedArticles) setArticles(JSON.parse(savedArticles));
        if (savedSettings) setSettings(JSON.parse(savedSettings));
        if (savedTestimonials) setTestimonials(JSON.parse(savedTestimonials));
    }, []);

    useEffect(() => {
        localStorage.setItem('pixup_services', JSON.stringify(services));
        localStorage.setItem('pixup_projects', JSON.stringify(projects));
        localStorage.setItem('pixup_articles', JSON.stringify(articles));
        localStorage.setItem('pixup_settings', JSON.stringify(settings));
        localStorage.setItem('pixup_testimonials', JSON.stringify(testimonials));
    }, [services, projects, articles, settings, testimonials]);

    return (
        <DataContext.Provider value={{
            services, setServices,
            projects, setProjects,
            articles, setArticles,
            testimonials, setTestimonials,
            settings, setSettings
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
