
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
        // Send PageView to server-side endpoint only on first visit (per browser)
        try {
            const seenKey = 'bf_lp_seen';
            const alreadySeen = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem(seenKey);
            if (!alreadySeen) {
                fetch('/track.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ event_name: 'PageView', event_source_url: window.location.href })
                }).catch(err => console.warn('track.php fetch failed', err));
                try { window.localStorage.setItem(seenKey, '1'); } catch(e) { /* ignore */ }
            }
        } catch (err) {
            console.warn('track call failed', err);
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