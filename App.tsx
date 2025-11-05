
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingBanner from './components/FloatingBanner';

const App: React.FC = () => {
    useEffect(() => {
        // A type guard to ensure AOS is available from the CDN script
        if (typeof (window as any).AOS !== 'undefined') {
            (window as any).AOS.init({
                duration: 800,
                once: true, // animation happens only once
                easing: 'ease-in-out-quad',
            });
        }
    }, []);

    return (
        <div className="font-sans overflow-x-hidden">
            <Navbar />
            <Header />
            <main>
                <Hero />
                <Benefits />
                <Testimonials />
                <FAQ />
            </main>
            <FloatingBanner />
            <Footer />
        </div>
    );
};

export default App;