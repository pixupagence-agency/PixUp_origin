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
    // Section visibility
    showPricing: boolean;
    showTestimonials: boolean;
    showBlog: boolean;
    adminPassword?: string;
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
    isLoggedIn: boolean;
    login: (password: string) => boolean;
    logout: () => void;
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
        { id: '3', title: 'Understanding Color Theory in UI', excerpt: 'Dive deep into the psychology of colors and how they impact user behavior.', content: '<p>Color is one of the most powerful tools in a designer\'s toolkit. It can evoke emotions, guide attention, and establish a brand\'s personality.</p><h3>The Psychological Impact</h3><p>Blue often represents trust and stability, while orange can convey energy and enthusiasm. Choosing the right palette is essential for a successful user interface.</p>', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop', category: 'Design Guidelines', author: 'Alex Morgan', date: 'Oct 15, 2023', status: 'draft' },
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
        { id: '1', category: 'services', q: 'Quels types de projets réalisez-vous chez PixUp ?', a: 'Nous sommes spécialisés dans le design d\'identité de marque (branding), la conception d\'interfaces utilisateur (UI/UX) et le développement web sur mesure.', active: true },
        { id: '2', category: 'process', q: 'Où est située l\'agence ?', a: 'L\'agence PixUp est fièrement basée à Chantonnay, en Vendée (85). Nous intervenons partout en France et à l\'international grâce au travail à distance.', active: true },
        { id: '3', category: 'process', q: 'Combien de temps faut-il pour créer un site internet ?', a: 'Le délai varie selon la complexité. Un site vitrine standard prend entre 4 et 6 semaines, tandis qu\'une plateforme sur mesure peut demander 3 à 5 mois.', active: true },
        { id: '4', category: 'support', q: 'Proposez-vous des services de maintenance ?', a: 'Oui, nous proposons des contrats de maintenance pour assurer la sécurité, les sauvegardes et les mises à jour régulières de votre site internet.', active: true },
        { id: '5', category: 'pricing', q: 'Quels sont vos tarifs pour la création d\'un site ?', a: 'Nos forfaits commencent à 49€/mois pour l\'offre Starter. Nous proposons également des solutions Professionnel à 99€/mois et Agence à 199€/mois.', active: true },
        { id: '6', category: 'services', q: 'Puis-je modifier mon site moi-même ?', a: 'Absolument. Nous livrons des outils d\'administration intuitifs qui vous permettent de mettre à jour vos contenus, textes et images sans connaissances techniques.', active: true },
        { id: '7', category: 'pricing', q: 'Quels sont les modes de paiement acceptés ?', a: 'Nous acceptons les paiements par carte bancaire (Visa, Mastercard, Amex), les virements ainsi que PayPal pour plus de flexibilité.', active: true },
        { id: '8', category: 'services', q: 'Optimisez-vous le référencement naturel (SEO) ?', a: 'Chaque site est optimisé techniquement pour les moteurs de recherche (Google) afin d\'améliorer votre visibilité en ligne dès le lancement.', active: true },
        { id: '9', category: 'pricing', q: 'Y a-t-il un engagement sur vos abonnements ?', a: 'Nos plans sont flexibles. Vous pouvez choisir un abonnement mensuel ou annuel. L\'offre annuelle vous permet d\'économiser 20% sur le tarif global.', active: true },
        { id: '10', category: 'support', q: 'Avez-vous un support technique réactif ?', a: 'Nos clients bénéficient d\'un support dédié. Les comptes Professionnel et Agence profitent d\'une assistance prioritaire 24h/24 et 7j/7 par email et chat.', active: true },
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
        showPricing: true,
        showTestimonials: true,
        showBlog: true,
        adminPassword: "admin", // Default password
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    // Persistence Helpers
    const STORAGE_KEY_PREFIX = 'pixup_v3_';

    useEffect(() => {
        const loadData = () => {
            const keys = {
                services: setServices,
                projects: setProjects,
                articles: setArticles,
                testimonials: setTestimonials,
                plans: setPlans,
                faqs: setFaqs,
                stats: setStats,
                settings: (data: any) => setSettings(prev => ({ ...prev, ...data }))
            };

            Object.entries(keys).forEach(([key, setter]) => {
                const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}${key}`);
                if (saved) {
                    try {
                        setter(JSON.parse(saved));
                    } catch (e) {
                        console.error(`Failed to parse ${key}`, e);
                    }
                }
            });
        };

        loadData();
    }, []);

    useEffect(() => {
        const dataToSave = {
            services, projects, articles, settings, testimonials, plans, faqs, stats
        };

        Object.entries(dataToSave).forEach(([key, value]) => {
            localStorage.setItem(`${STORAGE_KEY_PREFIX}${key}`, JSON.stringify(value));
        });
    }, [services, projects, articles, settings, testimonials, plans, faqs, stats]);

    const login = (password: string) => {
        if (password === (settings.adminPassword || "admin")) {
            setIsLoggedIn(true);
            sessionStorage.setItem('pixup_is_logged_in', 'true');
            // Set cookie for middleware (expires in 24h)
            document.cookie = "pixup_admin_auth=true; path=/; max-age=86400; SameSite=Strict";
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('pixup_is_logged_in');
        // Remove cookie
        document.cookie = "pixup_admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";
    };

    // Initialize auth from session
    useEffect(() => {
        const savedAuth = sessionStorage.getItem('pixup_is_logged_in');
        if (savedAuth === 'true') {
            setIsLoggedIn(true);
            // Refresh cookie for middleware
            if (!document.cookie.includes('pixup_admin_auth')) {
                document.cookie = "pixup_admin_auth=true; path=/; max-age=86400; SameSite=Strict";
            }
        }
    }, []);

    // Mask sensitive data for non-admin context
    const safeSettings = isLoggedIn ? settings : { ...settings, adminPassword: '••••••••' };
    const safeStats = isLoggedIn ? stats : {
        totalViews: { value: '0', trend: '0%', isPositive: true },
        portfolioVisits: { value: '0', trend: '0%', isPositive: true },
        newLeads: { value: '0', trend: '0%', isPositive: true },
        recentActivities: [],
        trafficHistory: []
    };

    return (
        <DataContext.Provider value={{
            services, setServices,
            projects, setProjects,
            articles, setArticles,
            testimonials, setTestimonials,
            plans, setPlans,
            faqs, setFaqs,
            settings: safeSettings, setSettings,
            stats: safeStats, setStats,
            isLoggedIn,
            login,
            logout
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
