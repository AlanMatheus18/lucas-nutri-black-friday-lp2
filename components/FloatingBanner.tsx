
import React, { useState } from 'react';

const FloatingBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleScrollToForm = () => {
        // Scrolls to the form container in the hero section
        document.getElementById('form-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-brand-red/95 backdrop-blur-sm p-4 z-50 shadow-2xl animate-slide-up">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Text Content */}
                <div className="text-center sm:text-left">
                    <p className="font-bold text-white text-lg">A Black do Milhão está chegando!</p>
                    <p className="text-white/80 text-sm hidden md:block">Garanta seu acesso ao Grupo VIP e concorra a prêmios.</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 flex-shrink-0">
                    <button
                        onClick={handleScrollToForm}
                        className="bg-brand-yellow text-black px-5 py-2.5 text-sm font-bold uppercase rounded-lg transition-transform duration-300 hover:bg-yellow-300 hover:scale-105 whitespace-nowrap"
                    >
                        Garanta seu Acesso
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        aria-label="Fechar banner promocional"
                        className="text-white/70 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <style>
                {`
                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }
                .animate-slide-up {
                    animation: slide-up 0.5s ease-out forwards;
                }
                `}
            </style>
        </div>
    );
};

export default FloatingBanner;