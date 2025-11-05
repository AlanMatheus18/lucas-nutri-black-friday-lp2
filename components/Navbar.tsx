import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // Scrolls to the form container in the hero section
        document.getElementById('form-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        closeMenu();
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={closeMenu} className="text-white text-xl font-bold">Lucasnutri</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#benefits" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Benefícios</a>
                            <a href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Depoimentos</a>
                            <a href="#faq" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Dúvidas</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <a 
                            href="#form-container" 
                            onClick={handleScrollToForm}
                            className="bg-brand-yellow text-black px-5 py-2.5 text-sm font-bold uppercase rounded-lg transition-transform duration-300 hover:bg-yellow-300 hover:scale-105 whitespace-nowrap"
                        >
                            Garantir Vaga
                        </a>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900/50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen}>
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-sm" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#benefits" onClick={closeMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Benefícios</a>
                        <a href="#testimonials" onClick={closeMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Depoimentos</a>
                        <a href="#faq" onClick={closeMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dúvidas</a>
                        <a 
                            href="#form-container" 
                            onClick={handleScrollToForm}
                            className="bg-brand-yellow text-black block text-center w-full mt-2 px-5 py-2.5 text-sm font-bold uppercase rounded-lg transition-transform duration-300 hover:bg-yellow-300 hover:scale-105 whitespace-nowrap"
                        >
                            Garantir Vaga
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;