import React from 'react';

export const SearchBar: React.FC = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex flex-1 items-center gap-3 h-12 rounded-xl bg-white shadow-lg border border-[#f5f2f0] px-4">
                <span className="material-symbols-outlined text-mocha">search</span>
                <input
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-medium placeholder:text-gray-400"
                    placeholder="Search for 'Pizza' or 'Sushi'..."
                    type="text"
                />
            </div>
            <button className="flex size-12 items-center justify-center rounded-xl bg-white shadow-lg border border-[#f5f2f0] text-mocha">
                <span className="material-symbols-outlined">tune</span>
            </button>
        </div>
    );
};
