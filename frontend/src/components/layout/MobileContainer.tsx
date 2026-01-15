import React from 'react';
import type { ReactNode } from 'react';

interface MobileContainerProps {
    children: ReactNode;
}

export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
    return (
        <div className="relative mx-auto flex h-screen max-w-[430px] flex-col overflow-hidden bg-white shadow-2xl">
            {children}
        </div>
    );
};
