
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay, A11y, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';

// SVGs for autoplay controls
const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M8 5v14l11-7z" />
    </svg>
);

const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
);

const testimonialImages = [
    'https://i.ibb.co/1z1nQx7/testimonial-1.png', // Sibeli
    'https://i.ibb.co/L6F5L5G/testimonial-2.png', // Nanda
    'https://i.ibb.co/yQWzL7z/testimonial-3.png', // Neylla
    'https://i.ibb.co/GQLvYvF/testimonial-4.png', // Lilian
];

// Duplicate images to ensure seamless looping with different slidesPerView settings
const extendedTestimonialImages = [...testimonialImages, ...testimonialImages];


const Testimonials: React.FC = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleAutoplay = () => {
        const swiper = swiperRef.current;
        if (!swiper) return;
        if (isPlaying) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section 
            id="testimonials"
            aria-labelledby="testimonials-heading"
            className="relative bg-black py-12 md:py-20 overflow-hidden" 
        >
             <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/4 rounded-full bg-brand-green/20 blur-3xl opacity-40"></div>
            <div className="container mx-auto px-4 z-10">
                <h2 
                    id="testimonials-heading"
                    className="text-center text-3xl md:text-4xl font-black uppercase mb-12 text-brand-green animate-glowing-title"
                    data-aos="fade-up"
                >
                    O que falam sobre o Lucasnutri
                </h2>
                <div className="relative"> {/* Container for Swiper and all controls */}
                    <Swiper
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        // Add Coverflow effect module
                        modules={[Navigation, Pagination, Autoplay, A11y, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1.5}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false, // Disabling default shadows to use custom opacity/scale
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true, // WCAG: Pause on hover
                        }}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className}" aria-label="Ir para o depoimento ${index + 1}" role="button"></span>`;
                            },
                        }}
                        navigation={{
                            prevEl: '.testimonial-swiper-prev',
                            nextEl: '.testimonial-swiper-next',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2.5 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full !pb-16 testimonial-swiper" // Increased padding-bottom for pagination and autoplay control
                    >
                        {extendedTestimonialImages.map((src, index) => (
                            <SwiperSlide 
                                key={index} 
                                role="group" 
                                aria-roledescription="slide" 
                                aria-label={`Depoimento ${index + 1} de ${extendedTestimonialImages.length}`}
                            >
                                <figure className="flex justify-center items-center h-full">
                                    <img
                                        src={src}
                                        alt={`Screenshot do depoimento de um cliente sobre o Lucasnutri (${index + 1})`}
                                        className="max-h-[500px] w-auto object-contain rounded-xl shadow-lg"
                                        width="473"
                                        height="841"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <figcaption className="sr-only">Depoimento de cliente {index + 1}</figcaption>
                                </figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    {/* Accessible External Navigation Buttons */}
                    <div className="swiper-button-prev testimonial-swiper-prev" role="button" aria-label="Ver depoimento anterior"></div>
                    <div className="swiper-button-next testimonial-swiper-next" role="button" aria-label="Ver próximo depoimento"></div>
                    
                    {/* Accessible Autoplay Control Button (WCAG requirement) */}
                    <button
                        onClick={toggleAutoplay}
                        aria-label={isPlaying ? 'Pausar depoimentos' : 'Continuar depoimentos'}
                        className="swiper-autoplay-control"
                    >
                        <span className="sr-only">{isPlaying ? 'Pausar' : 'Continuar'}</span>
                        {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
                    </button>
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

                /* --- Swiper Custom Styles --- */
                .testimonial-swiper .swiper-slide {
                    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
                    opacity: 0.4;
                    transform: scale(0.85);
                }
                .testimonial-swiper .swiper-slide-active {
                    opacity: 1;
                    transform: scale(1);
                }

                .testimonial-swiper .swiper-button-prev,
                .testimonial-swiper .swiper-button-next {
                    color: #FFFFFF; /* white */
                    background-color: rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(4px);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    transition: all 0.2s ease-in-out;
                    --swiper-navigation-size: 24px;
                }
                .testimonial-swiper .swiper-button-prev:hover,
                .testimonial-swiper .swiper-button-next:hover {
                    background-color: rgba(0, 200, 83, 0.7); /* brand-green with opacity */
                    transform: scale(1.1);
                }
                
                @media (max-width: 768px) {
                    .testimonial-swiper .swiper-button-prev,
                    .testimonial-swiper .swiper-button-next {
                       display: none;
                    }
                }

                .testimonial-swiper .swiper-pagination-bullet {
                    background-color: rgba(255, 255, 255, 0.4);
                    width: 10px;
                    height: 10px;
                    opacity: 1;
                    transition: background-color 0.3s, transform 0.3s;
                }
                .testimonial-swiper .swiper-pagination-bullet-active {
                    background-color: #00C853; /* brand-green */
                    transform: scale(1.2);
                }
                .swiper-autoplay-control {
                    position: absolute;
                    bottom: 35px; /* Moved up to be above pagination */
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                    color: white;
                    opacity: 0.6;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                .swiper-autoplay-control:hover {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
