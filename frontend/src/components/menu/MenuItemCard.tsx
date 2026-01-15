import React from 'react';

interface MenuItemProps {
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    tags?: string[];
    isVegan?: boolean;
}

export const MenuItemCard: React.FC<MenuItemProps> = ({
    title,
    price,
    description,
    imageUrl,
    tags,
    isVegan
}) => {
    return (
        <div className="group flex gap-4 bg-white dark:bg-zinc-900 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800/50 transition-all active:scale-[0.98] hover:shadow-md">
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-[110px] shrink-0 shadow-sm"
                style={{ backgroundImage: `url("${imageUrl}")` }}
            ></div>
            <div className="flex flex-1 flex-col justify-between py-0.5">
                <div>
                    <div className="flex justify-between items-start gap-2">
                        <h3 className="text-charcoal dark:text-white text-[15px] font-extrabold leading-tight">{title}</h3>
                        <p className="text-primary text-[15px] font-black">${price.toFixed(2)}</p>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex flex-wrap gap-1.5">
                        {isVegan && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 font-bold uppercase tracking-wider border border-green-500/10">
                                Vegan
                            </span>
                        )}
                        {tags?.map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-mocha/5 text-mocha dark:text-primary dark:bg-primary/5 font-bold uppercase tracking-wider border border-mocha/5 dark:border-primary/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button className="size-9 flex items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30 transition-transform group-active:scale-110">
                        <span className="material-symbols-outlined text-xl">add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
