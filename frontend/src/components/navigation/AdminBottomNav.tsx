import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AdminNavItemProps {
    icon: string;
    label: string;
    to: string;
}

const AdminNavItem: React.FC<AdminNavItemProps> = ({ icon, label, to }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-gray-400'}`}
        >
            <span className={`material-symbols-outlined text-[28px] ${isActive ? 'fill-1' : ''}`}>{icon}</span>
            <span className="text-[10px] font-bold">{label}</span>
        </Link>
    );
};

export const AdminBottomNav: React.FC = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-t border-gray-200 dark:border-zinc-800 px-6 pb-8 pt-3 flex justify-between items-center z-[100]">
            <AdminNavItem icon="dashboard" label="Overview" to="/admin" />
            <AdminNavItem icon="orders" label="Orders" to="/admin/orders" />
            <AdminNavItem icon="menu_book" label="Menu" to="/admin/menu" />
            <AdminNavItem icon="settings" label="Settings" to="/admin/settings" />
        </nav>
    );
};
