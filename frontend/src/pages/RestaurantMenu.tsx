import React from 'react';
import { Link } from 'react-router-dom';
import { MobileContainer } from '../components/layout/MobileContainer';
import { MenuCategoryHeader } from '../components/menu/MenuCategoryHeader';
import { MenuItemCard } from '../components/menu/MenuItemCard';
import { BottomNav } from '../components/navigation/BottomNav';

export const RestaurantMenu: React.FC = () => {
    return (
        <MobileContainer>
            {/* Minimalist Sticky Header */}
            <div className="flex items-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl px-4 py-4 justify-between border-b border-gray-100 dark:border-zinc-800/50 sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Link to="/" className="size-10 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-zinc-800 text-charcoal dark:text-white transition-colors active:bg-gray-200">
                        <span className="material-symbols-outlined text-xl">arrow_back</span>
                    </Link>
                    <div>
                        <h1 className="text-[17px] font-black leading-tight tracking-tight text-charcoal dark:text-white">The Gourmet Kitchen</h1>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <div className="size-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <p className="text-[11px] text-mocha dark:text-primary font-bold uppercase tracking-wider">Open Now • Kitchen active</p>
                        </div>
                    </div>
                </div>
                <button className="size-10 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-zinc-800 text-charcoal dark:text-white">
                    <span className="material-symbols-outlined text-xl">more_vert</span>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar bg-gray-50/50 dark:bg-black">
                {/* Hero Section with Glassmorphism Info */}
                <div className="relative px-4 pt-4 pb-8">
                    <div
                        className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-[32px] min-h-[220px] shadow-2xl relative"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAaz6BoDpigbw_GodhVA7ughUEOuA23Qcqxh9rgpWyvAFlx7RpzIDrkaCCDcIwJAF2bai2lEBqQzstFAJQFrLuLK2Wv3HUHzQplTRII4swkzFuP4RFK4bUg55FIgk_3d3VY7SqsFwUHJVz4b6pjHZF6FbF4sklB1lOR0KIF8Ymyk9ka-IAfKxfa638XnonNYqP2ah3_tVZzBNK0oaIStqzU0V2C9KZY2CD1RFOmxmXSaPF8il_z82UPB7i9xn9m7N5oHrMjAupIujI')" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Glassmorphism Info Card */}
                        <div className="absolute bottom-4 inset-x-4 p-4 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl flex items-center justify-between">
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <span className="material-symbols-outlined text-primary text-xl fill-1">star</span>
                                    <span className="text-[11px] font-black text-white mt-0.5">4.9</span>
                                </div>
                                <div className="w-px h-8 bg-white/20"></div>
                                <div className="flex flex-col items-center">
                                    <span className="material-symbols-outlined text-white text-xl">schedule</span>
                                    <span className="text-[11px] font-black text-white mt-0.5">25-35m</span>
                                </div>
                                <div className="w-px h-8 bg-white/20"></div>
                                <div className="flex flex-col items-center">
                                    <span className="material-symbols-outlined text-white text-xl">distance</span>
                                    <span className="text-[11px] font-black text-white mt-0.5">0.4mi</span>
                                </div>
                            </div>
                            <Link to="/reservation" className="bg-primary text-white text-[11px] font-black px-5 py-2.5 rounded-2xl shadow-lg shadow-primary/40 uppercase tracking-widest active:scale-95 transition-transform">
                                Book Table
                            </Link>
                        </div>
                    </div>
                </div>

                <MenuCategoryHeader />

                <div className="px-4 pb-48">
                    {/* Appetizers Section */}
                    <div className="flex items-center justify-between mt-8 mb-4 px-1">
                        <h2 className="text-2xl font-black tracking-tight text-charcoal dark:text-white">Appetizers</h2>
                        <span className="size-2 rounded-full bg-primary/20"></span>
                    </div>
                    <div className="space-y-4">
                        <MenuItemCard
                            title="Truffle Parmesan Fries"
                            price={14.00}
                            description="Hand-cut potatoes, truffle oil, aged parmesan, fresh parsley infused with sea salt."
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCDDk7EjZRrZIdgXqOkXI8rdzxNquQGu3vvsFo9ZJOB6PzDJOPFutDZJaMEu27mU-yM-W5b1R15SXR8lxYbtDMELf4XIWh4RZQwGeTHts_AAchACMx17urEAZPQUSsXsRNKAi3HoabtQgVZVMNEp6U8n7Bjef8A-33J4YPL-kZxlbz1nMwbky7qUx6PL24VM3Apm3CDY2iK7I3OvqvImXRXiFIE4-CrpCTcq4zFVf9sFtZl06NkCEqns15opkezSPwNoM9LQ5Hf5WLh"
                            tags={['Dairy', 'Truffle']}
                        />
                        <MenuItemCard
                            title="Artisan Bruschetta"
                            price={12.50}
                            description="Heirloom tomatoes, balsamic glaze, fresh basil, sourdough with garlic rub."
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCEg8gEGlufxPmKbD8Zh7p4RgLOWDjtSHBKbCVx-okk8z5vSrjH4B7BbUARQoS47iMhi_gp67lzeMWo1i4FaWHugOVl6KtzxfLGU2sZoCGTVVZ6O1Agt5n97lZfpqXDhb42upSonKGG_lQSMsGzAVdLZfO25zqUfpKU5NNg07SiXnLl9EQhmTiiDCoeEGIyW4CZ-aHB529kzxo6Rgc9X_Gu-3DINZVamxrIH2E0prD4p-hdO0KODb1V2cPrlDQj19AUSR3ZA6Z_Lm_Q"
                            isVegan
                            tags={['Healthy']}
                        />
                    </div>

                    {/* Mains Section */}
                    <div className="flex items-center justify-between mt-12 mb-4 px-1">
                        <h2 className="text-2xl font-black tracking-tight text-charcoal dark:text-white">Main Course</h2>
                        <span className="size-2 rounded-full bg-primary/20"></span>
                    </div>
                    <div className="space-y-4">
                        <MenuItemCard
                            title="Signature Wagyu Burger"
                            price={24.00}
                            description="8oz Wagyu patty, aged cheddar, caramelized onion jam, brioche bun, secret aioli."
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBLAk2X6Y_LGQdCkzkrvu_kpud0XhHdKGWkKf_Fzc05CVPqDSqKV_FezMbaY4EWuUguC-DfRGWIYBc9sdRpcTHKItfotM8M8LyPZ68iY0D7bX28z2TyCTUZ38tLZ2fbJ7mq39SWpzoLNbGo5R6lhI8dCmP1XHFVDkYDlxqdrrpGoksydRbeHaOzaIZgGLwVEfbHg-vAlKgtIdMjd4YU9ArjGBnQPndRy-SnkMd0l3wCvNCkakHh9ACizUkeTx4fNoke45LkyxDvo1Ui"
                            tags={['Chef Special', 'Popular']}
                        />
                        <MenuItemCard
                            title="Wild Mushroom Risotto"
                            price={19.50}
                            description="Arborio rice, porcini mushrooms, truffle butter, white wine, pecorino romano."
                            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDzgvwqYVyBkQtUrfIUmLjgAYMMlRTDPcviSP2WAx5bn1AR_KuZyg2C0v0GT2MLDNgAPB3YlXrxX37eE-L697rcqFhCHw9ka8TTjYqrRpOYBGAhkfsdwzOxsizUDR5eqqlZ48f3iAEZgbkxuh7NnMz2I6PRvGYBwiLbcySMNcZ8PMD0shOI4TWgwW3LwPxz3PDBKASBuvyq7-2RCmzCBinVRpOvd5PC-iL_DE1Y6qDHGZ844Y3nurUx1xslkFAm9Q1NtdiVASAsRNuY"
                            tags={['Vegetarian']}
                        />
                    </div>
                </div>
            </div>

            {/* Premium Floating Cart Redesign */}
            <div className="fixed bottom-[92px] inset-x-4 z-50">
                <Link to="/order-summary" className="block group">
                    <div className="bg-charcoal dark:bg-zinc-900 text-white rounded-[24px] p-5 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-md relative overflow-hidden transition-all group-active:scale-95">
                        {/* Animated background hint */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16 rounded-full group-hover:bg-primary/30 transition-colors"></div>

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="relative size-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/40">
                                <span className="material-symbols-outlined text-2xl">shopping_basket</span>
                                <div className="absolute -top-1.5 -right-1.5 size-5 bg-white text-primary text-[11px] font-black rounded-full flex items-center justify-center shadow-md">2</div>
                            </div>
                            <div>
                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Ongoing Order</p>
                                <div className="flex items-baseline gap-1.5 mt-0.5">
                                    <p className="text-xl font-black text-white">$38.00</p>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Subtotal</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl relative z-10 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="text-xs font-black text-charcoal uppercase tracking-widest group-hover:text-white">View Cart</span>
                            <span className="material-symbols-outlined text-charcoal text-base font-bold group-hover:text-white">east</span>
                        </div>
                    </div>
                </Link>
            </div>

            <BottomNav />
        </MobileContainer>
    );
};
