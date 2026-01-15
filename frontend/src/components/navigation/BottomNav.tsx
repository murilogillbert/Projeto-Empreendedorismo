import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
    icon: string;
    label: string;
    to: string;
    isFill?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isFill }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-mocha/50'}`}
        >
            <span className={`material-symbols-outlined ${isActive || isFill ? 'fill-1' : ''}`}>{icon}</span>
            <span className="text-[10px] font-bold">{label}</span>
        </Link>
    );
};

export const BottomNav: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="bg-white border-t border-gray-100 px-6 pt-3 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sticky bottom-0 z-50 safe-area-bottom">
            <div className="flex items-end justify-between">
                <NavItem icon="explore" label="Home" to="/" />
                <NavItem icon="table_bar" label="Sessions" to="/sessions" />

                {/* Central Scanner Button */}
                <div className="relative -top-4">
                    <div className="absolute -inset-2 rounded-full bg-white shadow-lg"></div>
                    <Link
                        to="/menu"
                        className="relative flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/40 transition-transform active:scale-90"
                    >
                        <span className="material-symbols-outlined text-[28px]">qr_code_scanner</span>
                    </Link>
                </div>

                {isHome ? (
                    <NavItem icon="bookmark" label="Saved" to="/saved" />
                ) : (
                    <NavItem icon="list_alt" label="Orders" to="/order-summary" />
                )}

                <NavItem icon="person" label="Profile" to="/profile" />
            </div>
        </nav>
    );
};
