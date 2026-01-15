import React from 'react';

interface AdminMenuItemRowProps {
    id: string;
    name: string;
    price: number;
    isActive: boolean;
    onToggle: (id: string) => void;
    onEdit: (id: string) => void;
}

export const AdminMenuItemRow: React.FC<AdminMenuItemRowProps> = ({
    id,
    name,
    price,
    isActive,
    onToggle,
    onEdit,
}) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl bg-gray-50 dark:bg-zinc-800 flex items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined text-2xl">image</span>
                </div>
                <div>
                    <h4 className="text-[15px] font-bold text-charcoal dark:text-white leading-tight">{name}</h4>
                    <p className="text-xs font-black text-primary mt-0.5">${price.toFixed(2)}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Toggle Status (ativo) */}
                <button
                    onClick={() => onToggle(id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isActive ? 'bg-primary' : 'bg-gray-200 dark:bg-zinc-700'}`}
                >
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isActive ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>

                {/* Action Button */}
                <button
                    onClick={() => onEdit(id)}
                    className="size-9 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-zinc-800 text-charcoal dark:text-white active:scale-90 transition-transform"
                >
                    <span className="material-symbols-outlined text-xl">edit</span>
                </button>
            </div>
        </div>
    );
};
