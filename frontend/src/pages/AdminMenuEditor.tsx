import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileContainer } from '../components/layout/MobileContainer';
import { AdminBottomNav } from '../components/navigation/AdminBottomNav';
import { AdminMenuItemRow } from '../components/admin/AdminMenuItemRow';

interface MockItem {
    id: string;
    name: string;
    price: number;
    active: boolean;
    category: string;
    ingredients: string[];
}

const INITIAL_ITEMS: MockItem[] = [
    { id: '1', name: 'Truffle Parmesan Fries', price: 14.0, active: true, category: 'Appetizers', ingredients: ['Potatoes', 'Truffle Oil', 'Parmesan'] },
    { id: '2', name: 'Artisan Bruschetta', price: 12.5, active: true, category: 'Appetizers', ingredients: ['Tomatoes', 'Balsamic', 'Basil', 'Sourdough'] },
    { id: '3', name: 'Wagyu Burger', price: 24.0, active: true, category: 'Mains', ingredients: ['Wagyu Beef', 'Cheddar', 'Onion Jam', 'Brioche'] },
    { id: '4', name: 'Wild Mushroom Risotto', price: 19.5, active: false, category: 'Mains', ingredients: ['Arborio Rice', 'Porcini', 'Truffle Butter'] },
];

export const AdminMenuEditor: React.FC = () => {
    const [items, setItems] = useState<MockItem[]>(INITIAL_ITEMS);
    const [activeCategory, setActiveCategory] = useState('All');

    const handleToggle = (id: string) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, active: !item.active } : item
        ));
    };

    const filteredItems = activeCategory === 'All'
        ? items
        : items.filter(item => item.category === activeCategory);

    return (
        <MobileContainer>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl px-4 py-4 border-b border-gray-100 dark:border-zinc-800/50">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link to="/admin" className="size-10 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-zinc-800 text-charcoal dark:text-white">
                            <span className="material-symbols-outlined text-xl">arrow_back</span>
                        </Link>
                        <h1 className="text-xl font-black tracking-tight">Menu Editor</h1>
                    </div>
                    <button className="bg-primary text-white size-10 flex items-center justify-center rounded-2xl shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-2xl">add</span>
                    </button>
                </div>

                {/* Categories Bar */}
                <div className="flex gap-2 mt-6 overflow-x-auto no-scrollbar pb-1">
                    {['All', 'Appetizers', 'Mains', 'Drinks', 'Desserts'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all
                ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-gray-50 dark:bg-zinc-800 text-gray-500 dark:text-gray-400'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <main className="flex-1 px-4 py-6 pb-32 overflow-y-auto no-scrollbar bg-gray-50/30 dark:bg-black">
                {/* Statistics or Alerts related to Menu */}
                <div className="mb-8 grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Items</p>
                        <h3 className="text-2xl font-black">{items.length}</h3>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Unavailable</p>
                        <h3 className="text-2xl font-black text-primary">{items.filter(i => !i.active).length}</h3>
                    </div>
                </div>

                {/* Items List */}
                <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4 ml-1">Menu Inventory</h2>
                <div className="space-y-3">
                    {filteredItems.map(item => (
                        <AdminMenuItemRow
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            isActive={item.active}
                            onToggle={handleToggle}
                            onEdit={(id) => console.log('Edit item:', id)}
                        />
                    ))}
                </div>

                {/* Database Relationship Insight (Informational for Manager) */}
                <div className="mt-8 p-5 bg-mocha/5 dark:bg-primary/5 rounded-[32px] border border-mocha/10 dark:border-primary/10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-mocha dark:text-primary">info</span>
                        <h3 className="text-sm font-black text-mocha dark:text-primary uppercase tracking-widest">Ingredients & Allergens</h3>
                    </div>
                    <p className="text-xs text-mocha/70 dark:text-gray-400 leading-relaxed">
                        Every item is linked to its ingredients for real-time cost calculation. Allergens are automatically flagged based on selected components.
                    </p>
                    <div className="mt-4 flex gap-2">
                        <button className="text-[10px] font-black uppercase tracking-widest text-mocha dark:text-primary underline">Manage Ingredients</button>
                        <div className="size-1 rounded-full bg-mocha/20 dark:bg-primary/20 self-center"></div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-mocha dark:text-primary underline">Allergens List</button>
                    </div>
                </div>
            </main>

            <AdminBottomNav />
        </MobileContainer>
    );
};
