import React, { useState } from 'react';
import type { FAQItem } from '../types';

const faqData: FAQItem[] = [
    {
        question: '🗓️ Quando vai ser a Black?',
        answer: 'Dia 10/11, e somente quem estiver no Grupo VIP vai ter acesso à condição especial.',
    },
    {
        question: '🎁 Quais são os bônus?',
        answer: [
            'Além da condição exclusiva, quem garantir a vaga no dia 10/11 concorre a:',
            '• iPhone 17 Pro',
            '• 1 ano de academia',
            '• Kit de suplementos completo',
            '• Encontro online com o Lucas Rabelo'
        ].join('\n')
    },
    {
        question: '💰 Preciso pagar algo para entrar no grupo?',
        answer: 'Não! O cadastro é 100% gratuito. O que será revelado no dia 10/11 é a condição especial de entrada — disponível apenas para quem estiver no grupo.',
    },
    {
        question: '📲 Onde vou receber os detalhes?',
        answer: 'Todas as informações, bônus e o acesso à condição serão enviados diretamente dentro do Grupo VIP.',
    },
];

const FaqAccordionItem: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const questionId = `faq-question-${index}`;
    const answerId = `faq-answer-${index}`;

    return (
        <div className="border-b border-gray-700 py-5">
            <h3>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    id={questionId}
                    className="w-full flex justify-between items-center text-left font-bold text-lg cursor-pointer"
                >
                    <span>{item.question}</span>
                    <span className={`transition-transform duration-300 transform ${isOpen ? 'rotate-45' : 'rotate-0'} text-2xl font-light`}>
                        +
                    </span>
                </button>
            </h3>
            <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen pt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-300 whitespace-pre-line">
                    {item.answer}
                </p>
            </div>
        </div>
    );
}


const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 
                    className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12"
                    data-aos="fade-up"
                >
                    Perguntas Frequentes – Black Lucas Rabelo
                </h2>
                <div className="space-y-2">
                    {faqData.map((item, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <FaqAccordionItem item={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;