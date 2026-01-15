import React from 'react';
import { Link } from 'react-router-dom';
import { MobileContainer } from '../components/layout/MobileContainer';

export const OrderSummary: React.FC = () => {
    return (
        <MobileContainer>
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between">
                <Link to="/menu" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-[#2d2621] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                    <span className="material-symbols-outlined text-[#181411] dark:text-white">arrow_back</span>
                </Link>
                <h1 className="text-lg font-bold tracking-tight">Order Summary</h1>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-[#2d2621] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                    <span className="material-symbols-outlined text-[#181411] dark:text-white text-[20px]">more_horiz</span>
                </button>
            </header>

            <main className="flex-1 px-4 pb-40 overflow-y-auto no-scrollbar">
                {/* Section: Order Items */}
                <div className="mt-4 mb-6">
                    <div className="flex items-center justify-between mb-3 px-1">
                        <h2 className="text-lg font-bold">Your Items</h2>
                        <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full uppercase tracking-wider">3 Items</span>
                    </div>
                    <div className="space-y-3">
                        {/* Item 1 */}
                        <div className="bg-white dark:bg-[#2d2621] rounded-lg p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex gap-4 border border-transparent dark:border-white/5">
                            <div
                                className="size-20 rounded-lg bg-cover bg-center shrink-0"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-FTU_Qw4YjUG4411vR0wChKoc3jihq28CVgXZ_cXrDGOe1giahF9Cd1ROKFhnQlcDrLiKMvmRLzvaLQm8K9ZJWkE9AKGTc4dLURNoU-7DH4st42qPweQ90YoViN1QukfyJDiEf48LfYlvfjoTZQbhZQyDM3AqV4ar8mwBZn31tqeBANigIOTFRmOK5XR8TDUrDoO81NLO3jYIBdpG-qKOq-UIK3NpQxgyvWQWwETgYwnCbnKbgEzpVOyPYOk9PBXSREds5hklVuH-')" }}
                            ></div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-base">Truffle Mushroom Burger</h3>
                                        <span className="font-bold text-primary">$18.50</span>
                                    </div>
                                    <p className="text-sm text-[#8a7460] dark:text-stone-400 mt-1">Extra cheese, No onions, Medium rare</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <button className="text-primary text-sm font-semibold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">edit_note</span> Edit
                                    </button>
                                    <span className="w-px h-3 bg-stone-200 dark:bg-stone-700"></span>
                                    <button className="text-[#8a7460] text-sm font-semibold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">delete</span> Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-white dark:bg-[#2d2621] rounded-lg p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex gap-4 border border-transparent dark:border-white/5">
                            <div
                                className="size-20 rounded-lg bg-cover bg-center shrink-0"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdfRzESqV6gGQIAu-LkglezpOk-gIoP7Tqv_vnP1v15W6iuMDi2BXSEMrtZ2kk-M8k7WO9kixrAgkySyi5h3bvevH3mruZKSeccgOPKxM2EX4K1S79ZfzeVJqqsxQjBJR_sz4hvNPjdjqVgTTqm9r3Uef7qKKWQpJj07GdPxAavSWbBdBt69H7iSX52dXxujSOVGFgAfWtwHdSpdFOxdf4UgIDgwPrDqCUqsw5Hg9z-J7Qg7sME9Jx5nb2WDCWFOMaMyIe46vRGixK')" }}
                            ></div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-base">Truffle Fries</h3>
                                        <span className="font-bold text-primary">$6.50</span>
                                    </div>
                                    <p className="text-sm text-[#8a7460] dark:text-stone-400 mt-1">Large portion, Extra salt</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <button className="text-primary text-sm font-semibold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">edit_note</span> Edit
                                    </button>
                                    <span className="w-px h-3 bg-stone-200 dark:bg-stone-700"></span>
                                    <button className="text-[#8a7460] text-sm font-semibold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">delete</span> Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="bg-white dark:bg-[#2d2621] rounded-lg p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex gap-4 border border-transparent dark:border-white/5">
                            <div
                                className="size-20 rounded-lg bg-cover bg-center shrink-0"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbdITW-wzMccm4sqpLkHZ729scMnqlHbz1hqJpgQKPKVNonjzSmRJYTBDnRs9eDrk8u8jRvWgjS04a9q2uuGA65jLOP6lcQh-k_duGBXZMrLjFGOLnYiJVzTGbTOp_0siXCDw0ql-gusgTbeo0lkGSOXY4UXy3g507zYvqwZMMuxAJJ6VbpmZWjeyql-oHJVJEYSiZ4kI6MPw-DSB6RDih8Bf00xQ5rg5KgZuN36ZHL4J2HqZd1mjE_2yOUcubFTc61fVdGAGKTn5s')" }}
                            ></div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-base">Classic Iced Tea</h3>
                                        <span className="font-bold text-primary">$4.50</span>
                                    </div>
                                    <p className="text-sm text-[#8a7460] dark:text-stone-400 mt-1">Less ice, Lemon wedge</p>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <button className="text-primary text-sm font-semibold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">edit_note</span> Edit
                                    </button>
                                    <span className="w-px h-3 bg-stone-200 dark:bg-stone-700"></span>
                                    <button className="text-[#8a7460] text-sm font-semibold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">delete</span> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: Kitchen Instructions */}
                <div className="mb-6">
                    <h3 className="text-base font-bold mb-3 px-1">Kitchen Instructions</h3>
                    <div className="bg-white dark:bg-[#2d2621] rounded-lg p-1 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-transparent dark:border-white/5">
                        <textarea className="w-full bg-transparent border-none focus:ring-0 text-sm p-3 min-h-[80px] resize-none dark:placeholder-stone-500" placeholder="Add a note (e.g., Allergies, delivery preference...)"></textarea>
                    </div>
                </div>

                {/* Section: Payment Timing */}
                <div className="mb-6">
                    <h3 className="text-base font-bold mb-3 px-1">Payment Timing</h3>
                    <div className="flex p-1 bg-white dark:bg-[#2d2621] rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                        <button className="flex-1 py-3 px-4 rounded-lg text-sm font-bold bg-primary text-white transition-all duration-200">
                            Pay Now
                        </button>
                        <button className="flex-1 py-3 px-4 rounded-lg text-sm font-bold text-[#8a7460] dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all duration-200">
                            Pay at the End
                        </button>
                    </div>
                    <p className="mt-2 text-xs text-center text-[#8a7460] dark:text-stone-400">Secure checkout with instant receipt generation.</p>
                </div>

                {/* Section: Financial Summary */}
                <div className="bg-white dark:bg-[#2d2621] rounded-lg p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-transparent dark:border-white/5 mb-8">
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-[#8a7460] dark:text-stone-400">Subtotal</span>
                            <span className="font-medium">$29.50</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-[#8a7460] dark:text-stone-400">Taxes (8.5%)</span>
                            <span className="font-medium">$2.51</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-[#8a7460] dark:text-stone-400">Service Fee</span>
                            <span className="font-medium">$1.50</span>
                        </div>
                        <div className="pt-3 border-t border-dashed border-stone-200 dark:border-stone-700 flex justify-between items-center">
                            <span className="text-base font-bold">Total Amount</span>
                            <span className="text-2xl font-bold text-primary">$33.51</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Action Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-gradient-to-t from-background-light via-background-light/95 to-transparent dark:from-background-dark dark:via-background-dark/95 z-20">
                <Link to="/sessions" className="w-full bg-primary text-white h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                    <span className="material-symbols-outlined">restaurant</span>
                    Send Order to Kitchen
                </Link>
            </div>
        </MobileContainer>
    );
};
