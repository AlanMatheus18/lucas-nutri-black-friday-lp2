
import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TwitterIcon from './icons/TwitterIcon';
import { SiTiktok } from 'react-icons/si';
const Footer: React.FC = () => {
    return (
        <footer className="text-center py-12 border-t border-gray-800 mt-12 md:mt-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center gap-6 mb-6">
                    <a href="https://www.facebook.com/lucasrabelonutri/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                        <FacebookIcon className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/lucasrabelonutri/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                        <InstagramIcon className="h-6 w-6" />
                    </a>
                    <a href="https://www.tiktok.com/@lucasrabelonutri?_r=1&_t=ZS-918a0bl94So" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                        <SiTiktok className="h-6 w-6" />
                    </a>
                </div>
                <p className="text-base text-gray-400 mb-4">
                    Lucasnutri • Black Friday 10 de Novembro 2025
                </p>
                <div className="text-sm text-gray-400 mb-4">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <span className="mx-2">•</span>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                </div>
                <p className="text-xs text-gray-500">
                    Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
};

export default Footer;