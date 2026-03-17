"use client";

import { useEffect } from 'react';
import { useData } from '@/context/DataContext';

export default function StatTracker({ type = 'view' }: { type?: 'view' | 'portfolio' }) {
    const { trackView, trackPortfolioVisit } = useData();

    useEffect(() => {
        if (type === 'view') {
            trackView?.();
        } else if (type === 'portfolio') {
            trackPortfolioVisit?.();
        }
    }, [type, trackView, trackPortfolioVisit]);

    return null;
}
