
import React from 'react';

const StarBurstIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.88 1.44L12 5.12 13.12 1.44 16.8.32 15.68 4l3.68-1.12-1.12 3.68L22 7.68l-3.76 1.12 1.12 3.68-3.68-1.12-1.12 3.68-3.68-1.12L12 17.6l-1.12-3.68-3.68 1.12-1.12-3.68 3.68 1.12L5.76 8.8 2 7.68l3.76-1.12-1.12-3.68 3.68 1.12L7.2.32l3.68 1.12z" />
        </svg>
    );
};

export default StarBurstIcon;
