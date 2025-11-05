
import React from 'react';
import StarBurstIcon from './icons/StarBurstIcon';
import TrophyIcon from './icons/TrophyIcon';
import GiftIcon from './icons/GiftIcon';
import CalendarIcon from './icons/CalendarIcon';
import DumbbellIcon from './icons/DumbbellIcon';

const benefits = [
    { text: 'A melhor oferta da história', icon: <StarBurstIcon className="h-7 w-7 text-white" /> },
    { text: 'Prêmios exclusivos para os primeiros', icon: <TrophyIcon className="h-7 w-7 text-white" /> },
    { text: 'Sorteios inacreditáveis', icon: <GiftIcon className="h-7 w-7 text-white" /> },
];

const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="py-12 md:py-20" data-aos="fade-up">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-gradient-to-br from-green-500 to-brand-green rounded-3xl p-8 md:p-12 shadow-2xl text-white">
                    <h2 className="text-center text-2xl md:text-3xl font-bold uppercase mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                        Saiba o que vai rolar
                    </h2>
                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <li 
                                key={index} 
                                className="py-4 px-4 -mx-4 border-b border-white/20 last:border-b-0 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-[1.03]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0" aria-hidden="true">
                                        {benefit.icon}
                                    </div>
                                    <span className="text-lg md:text-xl font-medium">{benefit.text}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 text-center">
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide">
                            Black Friday dia 10 de novembro
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;