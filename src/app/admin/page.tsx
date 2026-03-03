"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useData } from "@/context/DataContext";

export default function AdminPage() {
    const router = useRouter();
    const { isLoggedIn } = useData();

    useEffect(() => {
        if (isLoggedIn) {
            router.replace("/admin/dashboard");
        }
    }, [isLoggedIn, router]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
    );
}
