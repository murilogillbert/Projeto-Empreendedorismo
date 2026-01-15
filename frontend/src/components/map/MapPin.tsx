import React from 'react';

interface MapPinProps {
    icon: string;
    type: 'primary' | 'secondary';
    top: string;
    left: string;
}

export const MapPin: React.FC<MapPinProps> = ({ icon, type, top, left }) => {
    const bgClass = type === 'primary' ? 'bg-primary' : 'bg-mocha';
    const opacityClass = type === 'primary' ? 'opacity-100 scale-100' : 'opacity-80 scale-90';

    return (
        <div className="absolute" style={{ top, left }}>
            <div className={`relative flex flex-col items-center ${opacityClass} transition-transform`}>
                <div className={`flex size-10 items-center justify-center rounded-full ${bgClass} text-white shadow-xl ring-4 ring-white`}>
                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </div>
                <div className="h-2 w-0.5 bg-white shadow-sm"></div>
            </div>
        </div>
    );
};
