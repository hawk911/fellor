"use client";
import SideBar from '@/app/components/SideBar/SideBar';
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <SideBar />
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '256px' }}>
                <Header />
                <div style={{ flex: 1, padding: '25px', background: '#FCFCFD' }}>
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    );
}
