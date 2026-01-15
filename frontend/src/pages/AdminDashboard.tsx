import React from 'react';
import { Link } from 'react-router-dom';
import { MobileContainer } from '../components/layout/MobileContainer';
import { AdminBottomNav } from '../components/navigation/AdminBottomNav';

export const AdminDashboard: React.FC = () => {
    return (
        <MobileContainer>
            {/* Top App Bar */}
            <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBk6IL5xKErUUbURGKYPHWJFQRcJB581vVcqeC9wbNj3DPenEh9eUSj6A54RbjCbVRP2T6ZB1af4d8AF9H1kW385cOP-1TviwKLzIqNprzYCXFYykT7axTYkncvouJr6AJswphWwPFHyZ4iDhwxZXL1UItTSXIhVtWfTN-k3AhIhp8bVPIwlghzuGGnVD3i76al5r8A8s65hpKRyyWNkz3z9vQVGQthGEM6XDPQkY5tgaPIMw2PSQUKCGbhXaxavONFK4bA88zR7qDo')" }}></div>
                    <div>
                        <h1 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Manager View</h1>
                        <h2 className="text-lg font-extrabold leading-none tracking-tight">Analytics</h2>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-gray-100 dark:border-zinc-700">
                        <span className="material-symbols-outlined text-[24px]">notifications</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 pb-32 overflow-y-auto no-scrollbar">
                {/* Filter Pills */}
                <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar">
                    <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">Today</button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 text-sm font-semibold border border-gray-100 dark:border-zinc-700">Weekly</button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 text-sm font-semibold border border-gray-100 dark:border-zinc-700">Monthly</button>
                </div>

                {/* Quick Insights Section */}
                <div className="px-4 pb-4">
                    <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary">lightbulb</span>
                        <p className="text-sm font-medium leading-tight text-charcoal dark:text-gray-200">
                            <span className="font-bold text-primary">Insight:</span> Mondays are seeing a 15% increase in burger orders. Consider running a "Burger Monday" special.
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 px-4">
                    <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm col-span-2">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Today's Revenue</p>
                        <div className="flex items-end justify-between mt-1">
                            <h3 className="text-3xl font-extrabold">$1,240.50</h3>
                            <div className="flex items-center text-green-600 font-bold text-sm bg-green-500/10 px-2 py-1 rounded-lg mb-1">
                                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>+12%
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 italic">*Includes 1% app service fee ($12.40)</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Active Orders</p>
                        <h3 className="text-2xl font-extrabold mt-1">12</h3>
                        <p className="text-xs text-gray-400 mt-1">4 in kitchen</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Occupancy</p>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-2xl font-extrabold">85%</h3>
                            <span className="text-xs font-bold text-green-600">+5%</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Peak capacity</p>
                    </div>
                </div>

                {/* Busiest Times Chart */}
                <section className="mt-6 px-4">
                    <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-lg font-bold">Busiest Times</h2>
                                <div className="flex gap-1 items-center">
                                    <span className="text-xs text-gray-500 font-medium">Peak: 7PM - 9PM</span>
                                    <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">+15% traffic</span>
                                </div>
                            </div>
                            <button className="text-gray-400"><span className="material-symbols-outlined">more_horiz</span></button>
                        </div>
                        <div className="h-40 w-full relative mt-6">
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 120">
                                <defs>
                                    <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#e65c00" stopOpacity="0.3"></stop>
                                        <stop offset="100%" stopColor="#e65c00" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0,100 Q40,90 80,60 T160,70 T240,30 T320,60 T400,20 L400,120 L0,120 Z" fill="url(#chart-fill)"></path>
                                <path d="M0,100 Q40,90 80,60 T160,70 T240,30 T320,60 T400,20" fill="none" stroke="#e65c00" strokeWidth="3" strokeLinecap="round"></path>
                                <circle cx="240" cy="30" r="5" fill="#e65c00" stroke="white" strokeWidth="2"></circle>
                            </svg>
                            <div className="flex justify-between mt-2 px-1">
                                <span className="text-[10px] font-bold text-gray-400">12PM</span>
                                <span className="text-[10px] font-bold text-gray-400">3PM</span>
                                <span className="text-[10px] font-bold text-primary">6PM</span>
                                <span className="text-[10px] font-bold text-gray-400">9PM</span>
                                <span className="text-[10px] font-bold text-gray-400">12AM</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Management Tools Grid */}
                <section className="mt-6 px-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 ml-1">Management Tools</h2>
                    <div className="grid grid-cols-2 gap-3">
                        <Link to="/admin/menu" className="flex flex-col items-center justify-center gap-2 p-5 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-sm active:scale-95 transition-transform text-center ring-offset-0">
                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">restaurant_menu</span>
                            </div>
                            <span className="text-sm font-bold">Edit Menu</span>
                        </Link>
                        <button className="flex flex-col items-center justify-center gap-2 p-5 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-sm active:scale-95 transition-transform">
                            <div className="size-12 rounded-full bg-mocha/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-mocha">group</span>
                            </div>
                            <span className="text-sm font-bold">Manage Staff</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-5 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-sm active:scale-95 transition-transform">
                            <div className="size-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">payments</span>
                            </div>
                            <span className="text-sm font-bold">Payment Policy</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-5 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-sm active:scale-95 transition-transform">
                            <div className="size-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">stars</span>
                            </div>
                            <span className="text-sm font-bold">Buy Highlight</span>
                        </button>
                    </div>
                </section>

                {/* Business Model Insight */}
                <section className="mt-8 px-4 mb-8">
                    <div className="bg-charcoal dark:bg-zinc-800 p-5 rounded-2xl text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="size-10 rounded-xl bg-primary flex items-center justify-center">
                                <span className="material-symbols-outlined">account_balance_wallet</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Billing Model</h3>
                                <p className="text-lg font-bold">1% Service Fee</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            All transactions through UTABLE include a transparent 1% service fee in addition to standard payment gateway costs.
                        </p>
                        <button className="w-full bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-xl mt-4 text-xs font-bold uppercase tracking-widest border border-white/10">
                            View Full Report
                        </button>
                    </div>
                </section>
            </main>

            <AdminBottomNav />
        </MobileContainer>
    );
};
