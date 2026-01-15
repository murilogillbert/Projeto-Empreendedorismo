import React from 'react';

interface Category {
    id: string;
    label: string;
    icon: string;
    active?: boolean;
}

const categories: Category[] = [
    { id: '1', label: 'Italian', icon: 'local_pizza', active: true },
    { id: '2', label: 'Sushi', icon: 'set_meal' },
    { id: '3', label: 'Bakery', icon: 'bakery_dining' },
    { id: '4', label: 'Coffee', icon: 'coffee' },
];

export const CategoryChips: React.FC = () => {
    return (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    className={`flex h-9 shrink-0 items-center justify-center gap-1 rounded-xl px-4 text-xs font-semibold shadow-sm transition-colors
            ${cat.active
                            ? 'bg-primary text-white shadow-md font-bold'
                            : 'bg-white text-mocha border border-[#f5f2f0]'
                        }`}
                >
                    <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                    {cat.label}
                </button>
            ))}
        </div>
    );
};
