import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatTracker from "@/components/StatTracker";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <StatTracker />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
