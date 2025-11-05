
import React from 'react';

const TrophyIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v2c0 2.97 2.16 5.43 5 5.91V20H6v2h12v-2h-2v-5.09c2.84-.48 5-2.94 5-5.91V7c0-1.1-.9-2-2-2zM5 7V5h2v2H5zm14 0h-2V5h2v2z"/>
        </svg>
    );
};

export default TrophyIcon;
