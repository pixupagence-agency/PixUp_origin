"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Service {
    id: string;
    name: string;
    description: string;
    icon: string;
    active: boolean;
    projects: number;
    color: string;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    featured: boolean;
    addedDate: string;
    active: boolean;
}

export interface PricingPlan {
    id: string;
    name: string;
    price: string;
    description: string;
    active: boolean;
    popular: boolean;
    users: number;
    features: string[];
    billingCycle: 'monthly' | 'one-time';
}

export interface FAQItem {
    id: string;
    category: string;
    q: string;
    a: string;
    active: boolean;
}

export interface Article {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    author: string;
    date: string;
    status: 'published' | 'draft';
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
    active: boolean;
}

export interface Settings {
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

export interface DashboardStats {
    totalViews: { value: string; trend: string; isPositive: boolean };
    portfolioVisits: { value: string; trend: string; isPositive: boolean };
    newLeads: { value: string; trend: string; isPositive: boolean };
    recentActivities: Array<{ id: string; title: string; time: string; icon: string; colorClass: string; bgClass: string }>;
    trafficHistory: number[];
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
    plans: PricingPlan[];
    setPlans: React.Dispatch<React.SetStateAction<PricingPlan[]>>;
    faqs: FAQItem[];
    setFaqs: React.Dispatch<React.SetStateAction<FAQItem[]>>;
    settings: Settings;
    setSettings: React.Dispatch<React.SetStateAction<Settings>>;
    stats: DashboardStats;
    setStats: React.Dispatch<React.SetStateAction<DashboardStats>>;
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
        { id: '1', title: 'Fintech Mobile App', category: 'UI/UX Design, Development', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop', featured: true, addedDate: 'Oct 20', active: true },
        { id: '2', title: 'E-Commerce Platform Redesign', category: 'Web Development, Branding', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', featured: false, addedDate: 'Sep 15', active: true },
        { id: '3', title: 'Oasis Corporate Identity', category: 'Branding, Marketing', image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop', featured: false, addedDate: 'Aug 02', active: true },
    ]);

    const [articles, setArticles] = useState<Article[]>([
        { id: '1', title: 'The Future of AI in Web Design', excerpt: 'How artificial intelligence is reshaping the creative landscape and what it means for designers.', content: '<p>The integration of AI into web design workflows is no longer a distant possibility—it is already here. From automated layout suggestions to generative assets, AI is empowering designers to focus more on strategy and storytelling.</p><h3>How AI is Changing the Game</h3><ul><li>Automated Prototyping: Tools can now convert sketches into functional wireframes instantly.</li><li>Generative Imagery: AI-generated visuals provide unique, custom assets without the need for extensive stock photography.</li><li>Smart Accessibility: Automated audits and fixes for inclusive design.</li></ul>', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop', category: 'Design Trends', author: 'Alex Morgan', date: 'Oct 24, 2023', status: 'published' },
        { id: '2', title: '10 Tips for Better Typography', excerpt: 'Master the art of type layout with these professional tips for better readability.', content: '<p>Typography is the foundation of digital communication. Understanding how to use type effectively can transform a basic website into a professional digital experience.</p><h3>The Fundamentals</h3><p>Hierarchy, line length, and contrast are some of the most critical factors in typography. Always prioritize readability over artistic flair when designing for the web.</p>', image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop', category: 'Tutorials', author: 'Sarah Connor', date: 'Oct 20, 2023', status: 'published' },
        { id: '3', title: 'Understanding Color Theory in UI', excerpt: 'Dive deep into the psychology of colors and how they impact user behavior.', content: '<p>Color is one of the most powerful tools in a designer\'s toolkit. It can evoke emotions, guide attention, and establish a brand\'s personality.</p><h3>The Psychological Impact</h3><p>Blue often represents trust and stability, while orange can convey energy and enthusiasm. Choosing the right palette is essential for a successful user interface.</p>', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop', category: 'Design Guidelines', author: 'Alex Morgan', date: 'Brouillon', status: 'draft' },
    ]);

    const [testimonials, setTestimonials] = useState<Testimonial[]>([
        { id: '1', name: 'Sarah Johnson', role: 'CEO at Techflow', content: 'PIXUP transformed our brand identity completely. Their attention to detail is unmatched in the industry.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV0R0saAlpYeF-pDtkxaGZsHcheXoboLneXgigeyycVajM52iv-f9EPf15lTV9gpqsFGqZrKFBsXEpEe3Qt2RGQ3k_0Qx2pHnf29cUegbhnleXPTS_XWe8L-_DNWQIqLV6sMXQRESxXTkUkN4-PBvO090nnEDcHfsllC3WivpNKXh8-7EIok_sJjoltCImRTir3_SFLQKIwY7N462BD0OO6d6uH4f1yWkkR3_GRYD_DEj_T6l9SZLj4-TGXxTmw6TXgzah9OY9knCx', active: true },
        { id: '2', name: 'Michael Chen', role: 'Marketing Director at Innovate', content: 'Incredible work ethic and stunning designs. The team went above and beyond our expectations.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOGTSYycoTZEVZpNjONDvxP9Z2v5mwNIlUhljTEDsdaTlkPgyTV0K6-jXILPUxMnuiVw2xIOx_n7XCV_OgxtUkReViZNNbkUzG4rn8MZPyIpjTnIpHw_TmTtTva8B1B-JlBEfJF5z7vB-27HboTrdXcg_uFowr_EPorCLgaWOShbkj4k7Ln6p_G40R9rLl07Bm_EWiySKXmlukdpsHmfy7EDpKiACK_HUbfE6VUVayTqdklPWgukbQy1eTZmDk0gASKPZQsFX5bSbk', active: true },
    ]);

    const [plans, setPlans] = useState<PricingPlan[]>([
        { id: '1', name: 'Starter', price: '49€', description: 'Perfect for freelancers and solo creators.', active: true, popular: false, users: 128, features: ['5 Active Projects', 'Basic Support (Email)', 'Community Access', 'Standard Analytics'], billingCycle: 'monthly' },
        { id: '2', name: 'Professional', price: '99€', description: 'For growing teams demanding power.', active: true, popular: true, users: 542, features: ['Unlimited Active Projects', 'Priority 24/7 Support', 'Full Source Files Access', 'Advanced Analytics & Reporting', 'Team Collaboration Tools'], billingCycle: 'monthly' },
        { id: '3', name: 'Agency', price: '199€', description: 'Scale your operations with full control.', active: true, popular: false, users: 86, features: ['Dedicated Account Manager', 'White Labeling Options', 'Custom API Access', 'Custom Contracts & SLAs', 'SSO & Advanced Security'], billingCycle: 'monthly' },
    ]);

    const [faqs, setFaqs] = useState<FAQItem[]>([
        { id: '1', category: 'services', q: 'What exactly does a web design agency do?', a: 'A web design agency creates user-friendly, visually appealing, and functional websites, handling everything from initial strategy to final launch.', active: true },
        { id: '2', category: 'process', q: 'How long does it take to build a website?', a: 'Timeline depends on complexity. A simple site can take 4-6 weeks, while more complex projects can take several months.', active: true },
        { id: '3', category: 'pricing', q: 'How much does a new website cost?', a: 'Cost varies based on your specific needs. We offer plans starting from 49€/month for simple solutions, and custom quotes for bespoke projects.', active: true },
        { id: '4', category: 'support', q: 'Do you offer ongoing maintenance?', a: 'Yes, we offer various maintenance plans to ensure your site\'s security, performance, and updates.', active: true },
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

    const [stats, setStats] = useState<DashboardStats>({
        totalViews: { value: '124.5k', trend: '+12%', isPositive: true },
        portfolioVisits: { value: '8,230', trend: '+5%', isPositive: true },
        newLeads: { value: '45', trend: '+18%', isPositive: true },
        recentActivities: [
            { id: '1', title: 'Portfolio Updated', time: '2 mins ago', icon: 'edit_document', colorClass: 'text-primary', bgClass: 'bg-blue-100 dark:bg-blue-900/20' },
            { id: '2', title: 'New article published', time: '1 hour ago', icon: 'article', colorClass: 'text-green-600', bgClass: 'bg-green-100 dark:bg-green-900/20' },
            { id: '3', title: 'New lead received', time: '3 hours ago', icon: 'person_add', colorClass: 'text-orange-600', bgClass: 'bg-orange-100 dark:bg-orange-900/20' }
        ],
        trafficHistory: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 110, 140, 130] // Data points for the chart
    });

    // Persistence
    useEffect(() => {
        const savedServices = localStorage.getItem('pixup_services');
        const savedProjects = localStorage.getItem('pixup_projects');
        const savedArticles = localStorage.getItem('pixup_articles');
        const savedSettings = localStorage.getItem('pixup_settings');
        const savedTestimonials = localStorage.getItem('pixup_testimonials');
        const savedPlans = localStorage.getItem('pixup_plans');
        const savedFaqs = localStorage.getItem('pixup_faqs');
        const savedStats = localStorage.getItem('pixup_stats');

        if (savedServices) setServices(JSON.parse(savedServices));
        if (savedProjects) setProjects(JSON.parse(savedProjects));
        if (savedArticles) setArticles(JSON.parse(savedArticles));
        if (savedSettings) setSettings(JSON.parse(savedSettings));
        if (savedTestimonials) setTestimonials(JSON.parse(savedTestimonials));
        if (savedPlans) setPlans(JSON.parse(savedPlans));
        if (savedFaqs) setFaqs(JSON.parse(savedFaqs));
        if (savedStats) setStats(JSON.parse(savedStats));
    }, []);

    useEffect(() => {
        localStorage.setItem('pixup_services', JSON.stringify(services));
        localStorage.setItem('pixup_projects', JSON.stringify(projects));
        localStorage.setItem('pixup_articles', JSON.stringify(articles));
        localStorage.setItem('pixup_settings', JSON.stringify(settings));
        localStorage.setItem('pixup_testimonials', JSON.stringify(testimonials));
        localStorage.setItem('pixup_plans', JSON.stringify(plans));
        localStorage.setItem('pixup_faqs', JSON.stringify(faqs));
        localStorage.setItem('pixup_stats', JSON.stringify(stats));
    }, [services, projects, articles, settings, testimonials, plans, faqs, stats]);

    return (
        <DataContext.Provider value={{
            services, setServices,
            projects, setProjects,
            articles, setArticles,
            testimonials, setTestimonials,
            plans, setPlans,
            faqs, setFaqs,
            settings, setSettings,
            stats, setStats
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
