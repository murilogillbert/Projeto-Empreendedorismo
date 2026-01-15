import React, { useState } from 'react';

interface Category {
    id: string;
    label: string;
}

const categories: Category[] = [
    { id: '1', label: 'Appetizers' },
    { id: '2', label: 'Mains' },
    { id: '3', label: 'Drinks' },
    { id: '4', label: 'Desserts' },
];

export const MenuCategoryHeader: React.FC = () => {
    const [activeId, setActiveId] = useState('1');

    return (
        <div className="sticky top-[73px] z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md py-3 px-4 flex gap-2.5 overflow-x-auto no-scrollbar border-b border-gray-100 dark:border-zinc-800/50">
            {categories.map((cat) => {
                const isActive = activeId === cat.id;
                return (
                    <button
                        key={cat.id}
                        onClick={() => setActiveId(cat.id)}
                        className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-2xl px-6 border transition-all duration-300
                            ${isActive
                                ? 'bg-primary border-transparent text-white shadow-lg shadow-primary/30 font-black scale-105'
                                : 'bg-gray-50 dark:bg-zinc-800/50 border-gray-100 dark:border-zinc-800 text-charcoal dark:text-gray-400 font-bold hover:bg-gray-100'
                            }`}
                    >
                        <p className="text-sm tracking-tight">{cat.label}</p>
                    </button>
                );
            })}
        </div>
    );
};
