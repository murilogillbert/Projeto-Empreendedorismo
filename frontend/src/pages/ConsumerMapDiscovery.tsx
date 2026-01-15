import React from 'react';
import { MobileContainer } from '../components/layout/MobileContainer';
import { SearchBar } from '../components/ui/SearchBar';
import { CategoryChips } from '../components/ui/CategoryChips';
import { FeaturedRestaurantCard } from '../components/cards/FeaturedRestaurantCard';
import { BottomNav } from '../components/navigation/BottomNav';
import { DynamicMap } from '../components/map/DynamicMap';

export const ConsumerMapDiscovery: React.FC = () => {
    return (
        <MobileContainer>
            {/* Header / Search Area */}
            <div className="absolute top-0 z-20 w-full px-4 pt-6 pb-2 pointer-events-none">
                <div className="flex flex-col gap-3 pointer-events-auto">
                    <SearchBar />
                    <CategoryChips />
                </div>
            </div>

            {/* Main Content: Map */}
            <main className="relative flex-1 bg-[#e5e7eb] z-0 overflow-hidden">
                <DynamicMap />

                {/* Map Controls */}
                <div className="absolute right-4 top-[35%] flex flex-col gap-2 z-10">
                    <button className="flex size-10 items-center justify-center rounded-lg bg-white shadow-lg text-mocha">
                        <span className="material-symbols-outlined">my_location</span>
                    </button>
                    <div className="flex flex-col rounded-lg bg-white shadow-lg">
                        <button className="flex size-10 items-center justify-center border-b border-gray-100 text-mocha">
                            <span className="material-symbols-outlined">add</span>
                        </button>
                        <button className="flex size-10 items-center justify-center text-mocha">
                            <span className="material-symbols-outlined">remove</span>
                        </button>
                    </div>
                </div>

                {/* Featured Card (Floating at bottom of map area) */}
                <div className="absolute bottom-24 left-0 w-full px-4 z-10">
                    <FeaturedRestaurantCard />
                </div>
            </main>

            {/* Bottom Navigation */}
            <BottomNav />
            {/* iOS Home Indicator Notch */}
            <div className="absolute bottom-1 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-black/10"></div>
        </MobileContainer>
    );
};
