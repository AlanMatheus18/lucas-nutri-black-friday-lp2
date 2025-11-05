
import React from 'react';

const DumbbellIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 8h-4V5c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4v3c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-3h4c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"/>
        </svg>
    );
};

export default DumbbellIcon;
