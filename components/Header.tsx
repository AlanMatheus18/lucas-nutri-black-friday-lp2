import React, { useState, useEffect } from 'react';

const TimerBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="text-center bg-black/30 rounded-lg border border-white/20 w-20 md:w-23 shadow-inner">
        <span 
            className="text-4xl md:text-4xl font-black text-brand-yellow" 
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
            {value.toString().padStart(2, '0')}
        </span>
        <span className="block text-xs font-semibold text-white/80 uppercase tracking-wider mt-1">{label}</span>
    </div>
);

const Header: React.FC = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-11-10T00:00:00") - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <header className="bg-brand-red shadow-lg pt-5 pb-2">
            <div className="container mx-auto px-4">
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5">
                    <h3 
                        className="text-base md:text-lg font-bold tracking-wider text-white uppercase"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
                    >
                        Faltam:
                    </h3>
                    <div className="flex items-center justify-center gap-2 md:gap-3">
                        <TimerBox value={timeLeft.days} label="Dias" />
                        <TimerBox value={timeLeft.hours} label="Horas" />
                        <TimerBox value={timeLeft.minutes} label="Min" />
                        <TimerBox value={timeLeft.seconds} label="Seg" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;