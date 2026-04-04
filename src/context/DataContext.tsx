"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

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
    url?: string;
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
    billingCycle: 'monthly' | 'yearly' | 'one-time';
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
    trackView: () => void;
    trackPortfolioVisit: () => void;
    trackLead: () => void;
    recordActivity: (title: string, icon: string, colorClass: string, bgClass: string) => void;
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
        { id: 'lawyer_1', title: 'Cabinet d\'Avocats - Landing Page', category: 'Web Development, UI/UX Design', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop', featured: true, addedDate: 'Oct 26', active: true, url: '/templates/avocat' },
        { id: 'barber_1', title: 'The Vintage Barber - Landing Page', category: 'Web Development, Branding', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop', featured: false, addedDate: 'Oct 25', active: true, url: '/templates/barbier' },
        { id: 'sport_1', title: 'Sports Perf - Landing Page', category: 'Web Development, UX', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop', featured: false, addedDate: 'Oct 24', active: true, url: '/templates/asso-sportive' },
    ]);

    const [articles, setArticles] = useState<Article[]>([
        { id: '1', title: 'The Future of AI in Web Design', excerpt: 'How artificial intelligence is reshaping the creative landscape and what it means for designers.', content: '<p>The integration of AI into web design workflows is no longer a distant possibility—it is already here. From automated layout suggestions to generative assets, AI is empowering designers to focus more on strategy and storytelling.</p><h3>How AI is Changing the Game</h3><ul><li>Automated Prototyping: Tools can now convert sketches into functional wireframes instantly.</li><li>Generative Imagery: AI-generated visuals provide unique, custom assets without the need for extensive stock photography.</li><li>Smart Accessibility: Automated audits and fixes for inclusive design.</li></ul>', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop', category: 'Design Trends', author: 'Alex Morgan', date: 'Oct 24, 2023', status: 'published' },
        { id: '2', title: '10 Tips for Better Typography', excerpt: 'Master the art of type layout with these professional tips for better readability.', content: '<p>Typography is the foundation of digital communication. Understanding how to use type effectively can transform a basic website into a professional digital experience.</p><h3>The Fundamentals</h3><p>Hierarchy, line length, and contrast are some of the most critical factors in typography. Always prioritize readability over artistic flair when designing for the web.</p>', image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop', category: 'Tutorials', author: 'Sarah Connor', date: 'Oct 20, 2023', status: 'published' },
        { id: '3', title: 'Understanding Color Theory in UI', excerpt: 'Dive deep into the psychology of colors and how they impact user behavior.', content: '<p>Color is one of the most powerful tools in a designer\'s toolkit. It can evoke emotions, guide attention, and establish a brand\'s personality.</p><h3>The Psychological Impact</h3><p>Blue often represents trust and stability, while orange can convey energy and enthusiasm. Choosing the right palette is essential for a successful user interface.</p>', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop', category: 'Design Guidelines', author: 'Alex Morgan', date: 'Oct 15, 2023', status: 'draft' },
    ]);

    const [testimonials, setTestimonials] = useState<Testimonial[]>([
        { id: '1', name: 'Sarah Johnson', role: 'CEO at Techflow', content: 'PIXUP transformed our brand identity completely. Their attention to detail is unmatched in the industry.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop', active: true },
        { id: '2', name: 'Michael Chen', role: 'Marketing Director at Innovate', content: 'Incredible work ethic and stunning designs. The team went above and beyond our expectations.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop', active: true },
    ]);

    const [plans, setPlans] = useState<PricingPlan[]>([
        { id: '1', name: 'Starter', price: '49€', description: 'Perfect for freelancers and solo creators.', active: true, popular: false, users: 128, features: ['5 Active Projects', 'Basic Support (Email)', 'Community Access', 'Standard Analytics'], billingCycle: 'monthly' },
        { id: '2', name: 'Professional', price: '99€', description: 'For growing teams demanding power.', active: true, popular: true, users: 542, features: ['Unlimited Active Projects', 'Priority 24/7 Support', 'Full Source Files Access', 'Advanced Analytics & Reporting', 'Team Collaboration Tools'], billingCycle: 'monthly' },
        { id: '3', name: 'Agency', price: '1999€', description: 'Scale your operations with full control.', active: true, popular: false, users: 86, features: ['Dedicated Account Manager', 'White Labeling Options', 'Custom API Access', 'Custom Contracts & SLAs', 'SSO & Advanced Security'], billingCycle: 'yearly' },
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
        email: "hello@pixup.agency",
        phone: "+33 6 82 55 35 52",
        address: "Chantonnay, Vendée (85)",
        founderName: "Denis Taveneau",
        founderRole: "Fondateur",
        founderBio: "Passionate about minimal design and creating user-centric digital experiences. Over 10 years of experience in the creative industry.",
        founderAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
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
        totalViews: { value: '0', trend: '+0%', isPositive: true },
        portfolioVisits: { value: '0', trend: '+0%', isPositive: true },
        newLeads: { value: '0', trend: '+0%', isPositive: true },
        recentActivities: [],
        trafficHistory: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
                        let parsed = JSON.parse(saved);
                        if (key === 'projects') {
                            const newProjectsMap: Record<string, string> = {
                                'lawyer_1': '/templates/avocat',
                                'barber_1': '/templates/barbier',
                                'sport_1': '/templates/asso-sportive'
                            };
                            
                            // Add missing URLs to existing entries
                            parsed = parsed.map((p: any) => {
                                if (newProjectsMap[p.id] && !p.url) {
                                    return { ...p, url: newProjectsMap[p.id] };
                                }
                                return p;
                            });

                            const hasNew = parsed.some((p: any) => p.id === 'lawyer_1');
                            if (!hasNew) {
                                const newProjects = [
                                    { id: 'lawyer_1', title: 'Cabinet d\'Avocats - Landing Page', category: 'Web Development, UI/UX Design', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop', featured: true, addedDate: 'Oct 26', active: true, url: '/templates/avocat' },
                                    { id: 'barber_1', title: 'The Vintage Barber - Landing Page', category: 'Web Development, Branding', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop', featured: false, addedDate: 'Oct 25', active: true, url: '/templates/barbier' },
                                    { id: 'sport_1', title: 'Sports Perf - Landing Page', category: 'Web Development, UX', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop', featured: false, addedDate: 'Oct 24', active: true, url: '/templates/asso-sportive' },
                                ];
                                parsed = [...parsed, ...newProjects];
                            }
                        }
                        setter(parsed);
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
            try {
                localStorage.setItem(`${STORAGE_KEY_PREFIX}${key}`, JSON.stringify(value));
            } catch (e) {
                if (e instanceof Error && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
                    console.error('LocalStorage quota exceeded! Some data might not be saved.', key);
                    // We could alert here, but it might be annoying on every change
                } else {
                    console.error('Failed to save to localStorage', key, e);
                }
            }
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

    const recordActivity = useCallback((title: string, icon: string, colorClass: string, bgClass: string) => {
        const newActivity = {
            id: Date.now().toString(),
            title,
            time: "Just now",
            icon,
            colorClass,
            bgClass
        };
        setStats(prev => ({
            ...prev,
            recentActivities: [newActivity, ...prev.recentActivities].slice(0, 10)
        }));
    }, []);

    const trackView = useCallback(() => {
        setStats(prev => {
            const current = parseInt(prev.totalViews.value.replace(/[^0-9]/g, '')) || 0;
            return {
                ...prev,
                totalViews: { ...prev.totalViews, value: (current + 1).toString() }
            };
        });
    }, []);

    const trackPortfolioVisit = useCallback(() => {
        setStats(prev => {
            const current = parseInt(prev.portfolioVisits.value.replace(/[^0-9]/g, '')) || 0;
            return {
                ...prev,
                portfolioVisits: { ...prev.portfolioVisits, value: (current + 1).toString() }
            };
        });
    }, []);

    const trackLead = useCallback(() => {
        setStats(prev => {
            const current = parseInt(prev.newLeads.value.replace(/[^0-9]/g, '')) || 0;
            return {
                ...prev,
                newLeads: { ...prev.newLeads, value: (current + 1).toString() }
            };
        });
    }, []);

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
            logout,
            trackView,
            trackPortfolioVisit,
            trackLead,
            recordActivity
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
