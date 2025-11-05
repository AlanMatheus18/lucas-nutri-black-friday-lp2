
import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react';

// --- Helper Icons ---
const CalendarIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

const ErrorIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Hero: React.FC = () => {
    // State for form fields and errors
    const [formData, setFormData] = useState({ whatsapp: '', email: '' });
    const [errors, setErrors] = useState({ whatsapp: '', email: '' });
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // Form validation logic
    const validateForm = () => {
        const newErrors = { whatsapp: '', email: '' };
        let isValid = true;

        // WhatsApp validation: Strips non-digits and checks length
        const whatsappDigits = formData.whatsapp.replace(/\D/g, '');
        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = 'Por favor, insira seu WhatsApp.';
            isValid = false;
        } else if (whatsappDigits.length < 10 || whatsappDigits.length > 15) {
            newErrors.whatsapp = 'Número de WhatsApp inválido. Verifique o DDD e o número.';
            isValid = false;
        }

        // Email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Por favor, insira seu e-mail.';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Formato de e-mail inválido.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
            const makeRequest = await axios.post('https://corsproxy.io/?https://hooks.zapier.com/hooks/catch/25166404/uiice1s/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            console.log('Zapier response:', makeRequest.data);
            // Redirect user to the specified URL
            window.location.href = 'https://lucasnutri.com.br/elementor-248/';
            
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on change for better UX
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Parallax scroll effect for the image
    useEffect(() => {
        const handleScroll = () => {
            if (imageContainerRef.current && sectionRef.current) {
                const scrollY = window.scrollY;
                const sectionHeight = sectionRef.current.offsetHeight;
                const animationStartOffset = sectionHeight / 2;

                let translateY = 0;
                let scale = 1;
                let opacity = 1;

                // Only apply effects after scrolling past the offset
                if (scrollY > animationStartOffset) {
                    const effectiveScrollY = scrollY - animationStartOffset;
                    translateY = effectiveScrollY * 0.2;
                    scale = Math.max(0.85, 1 - effectiveScrollY / 2000);
                    opacity = Math.max(0, 1 - effectiveScrollY / 850);
                }

                requestAnimationFrame(() => {
                    if (imageContainerRef.current) {
                        imageContainerRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
                        imageContainerRef.current.style.opacity = `${opacity}`;
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Set initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} id="home" className="relative overflow-hidden pt-12 pb-20 md:py-10" data-aos="fade-up">
            <div
                aria-hidden="true"
                className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-brand-green/20 blur-3xl"
            ></div>

            <div className="relative container mx-auto px-0 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 items-center">
                    {/* Left Column: Text and Form */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-lg font-semibold uppercase text-brand-green tracking-wider">A BLACK DO MILHÃO ESTÁ CHEGANDO</h2>
                        <h1 className="mt-2 text-3xl sm:text-5xl md:text-4xl font-black tracking-tight leading-tight">
                            <span className="text-brand-green animate-glowing-title">Algo que eu nunca fiz antes está prestes a acontecer...</span>
                            <span className="block text-white mt-1">A MELHOR CONDIÇÃO DA HISTÓRIA</span>
                        </h1>
                        <p className="mt-4 text-xl font-bold text-gray-200 max-w-xl mx-auto lg:mx-0">
                            Você que precisa eliminar de 5 a 15 quilos nas próximas semanas.
                        </p>
                        

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-8">
                            <div className="flex items-center gap-3 bg-black border border-brand-green/50 rounded-lg p-3 text-left w-full sm:w-auto">
                                <CalendarIcon className="h-8 w-8 text-brand-green flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-xs uppercase">BLACK LUCAS RABELO</p>
                                    <p className="text-lg font-bold text-white">10 de Novembro</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-left">
                                <MailIcon className="h-6 w-6 text-brand-yellow flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-sm text-brand-yellow">Exclusivo para quem estiver no GRUPO VIP</p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-8 text-gray-200 max-w-md mx-auto lg:mx-0">
                            Garanta seu acesso agora e fique por dentro antes de todo mundo.
                        </p>

                        <div id="form-container" className="mt-4 max-w-md mx-auto lg:mx-0">
                            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                <div>
                                    <label htmlFor="whatsapp" className="sr-only">Seu Whatsapp com DDD</label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            id="whatsapp"
                                            placeholder="📲 Seu WhatsApp com DDD"
                                            value={formData.whatsapp}
                                            onChange={handleInputChange}
                                            aria-invalid={!!errors.whatsapp}
                                            aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                                            className={`w-full bg-white/2 border-2 rounded-lg p-4 text-black placeholder-gray-400 transition ${errors.whatsapp
                                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                                    : 'border-white/20 focus:ring-brand-green focus:border-brand-green'
                                                }`}
                                        />
                                        {errors.whatsapp && <ErrorIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-red-500 pointer-events-none" />}
                                    </div>
                                    {errors.whatsapp && <p id="whatsapp-error" className="text-red-400 text-sm mt-1.5">{errors.whatsapp}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Seu melhor E-mail</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="✉️ Seu melhor e-mail"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                            className={`w-full bg-white/2 border-2 rounded-lg p-4 text-black placeholder-gray-400 transition ${errors.email
                                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                                    : 'border-white/20 focus:ring-brand-green focus:border-brand-green'
                                                }`}
                                        />
                                        {errors.email && <ErrorIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-red-500 pointer-events-none" />}
                                    </div>
                                    {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1.5">{errors.email}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-brand-green text-black px-8 py-4 text-lg font-bold uppercase rounded-lg transition-transform duration-300 hover:bg-green-400 hover:scale-105 animate-subtle-pulse"
                                >
                                    GARANTIR ACESSO AO GRUPO VIP
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div
                        ref={imageContainerRef}
                        className="relative flex justify-center items-end h-[500px] lg:h-[700px] will-change-transform"
                    >
                        <img
                            src="https://i.imgur.com/QfiSMp7.jpeg"
                            alt="Lucas Rabelo, nutricionista, em pose de confiança para a campanha Black Friday do Milhão."
                            className="w-full h-full max-w-md md:max-w-lg lg:max-w-none object-contain lg:absolute lg:bottom-0"
                            width="1080"
                            height="1080"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes oscillating-glow {
                    0%, 100% {
                        text-shadow: 0 0 4px rgba(0, 200, 83, 0.5), 0 0 7px rgba(0, 200, 83, 0.3);
                    }
                    50% {
                        text-shadow: 0 0 7px rgba(0, 200, 83, 0.8), 0 0 10px rgba(0, 200, 83, 0.5);
                    }
                }
                .animate-glowing-title {
                    animation: oscillating-glow 3s infinite ease-in-out;
                }
                @keyframes subtle-pulse {
                    0%, 100% {
                        transform: scale(1.0);
                        box-shadow: 0 4px 15px rgba(0, 200, 83, 0.2);
                    }
                    50% {
                        transform: scale(1.03);
                        box-shadow: 0 6px 20px rgba(0, 200, 83, 0.4);
                    }
                }
                .animate-subtle-pulse {
                    animation: subtle-pulse 2.5s infinite ease-in-out;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Hero;
