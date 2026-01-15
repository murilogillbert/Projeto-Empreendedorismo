import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedRestaurantCard: React.FC = () => {
    return (
        <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-2xl border border-[#f5f2f0]">
            <div className="flex flex-[1.5] flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1">
                        <span className="text-[10px] font-extrabold tracking-widest text-primary uppercase">Featured</span>
                        <div className="h-1 w-1 rounded-full bg-primary/30"></div>
                        <div className="flex items-center text-primary">
                            <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                            <span className="text-[11px] font-bold">4.8 (120+)</span>
                        </div>
                    </div>
                    <h3 className="text-base font-extrabold leading-tight text-[#181410]">The Artisan Hearth</h3>
                    <p className="text-xs font-medium text-mocha/70">Authentic Italian • 0.4 miles away</p>
                </div>
                <Link
                    to="/menu"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2 px-4 text-white shadow-lg shadow-primary/20 transition-transform active:scale-95"
                >
                    <span className="text-xs font-bold">View Menu</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
            </div>
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <div
                    className="h-full w-full bg-cover bg-center"
                    aria-label="Gourmet wood-fired pizza with fresh basil"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsnBJqli6N8I332KQIMooCB5_06xTJvdffATCDbSqT5RSBNoBFWcEGIS5aZG1kXsp9NfmUlr94Pg9Bt0dRANel2bXucNe56Ka5KpobjdjTXfv9RQfzLTOHtsdljzNyUt1ek_anWUasZRbYTHQxBbwncx9JmUtqrg9K00hgI31EGaLNW-LprbkzPv_ThC6_P0n7H-PzcP_uH3qmKZQX9YcbmcEBE82Wf61L0bU5MoKRkdt1P2CWIhvOeBB3Is06OB3vWYs60rNIuk1H')" }}
                >
                </div>
            </div>
        </div>
    );
};
