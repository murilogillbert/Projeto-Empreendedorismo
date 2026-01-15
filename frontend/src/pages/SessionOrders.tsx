import React from 'react';
import { Link } from 'react-router-dom';
import { MobileContainer } from '../components/layout/MobileContainer';
import { BottomNav } from '../components/navigation/BottomNav';

export const SessionOrders: React.FC = () => {
    return (
        <MobileContainer>
            <div className="sticky-nav bg-white dark:bg-zinc-900 px-4 py-4 flex flex-col border-b border-gray-100 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="size-10 flex items-center justify-center rounded-full bg-background-light dark:bg-zinc-800">
                            <span className="material-symbols-outlined text-charcoal dark:text-white">arrow_back</span>
                        </Link>
                        <div>
                            <h1 className="text-lg font-bold leading-tight tracking-tight">Active Session</h1>
                            <p className="text-xs text-mocha dark:text-primary font-medium">Table 12 • 4 Guests</p>
                        </div>
                    </div>
                    <button className="size-10 flex items-center justify-center rounded-full bg-background-light dark:bg-zinc-800">
                        <span className="material-symbols-outlined text-charcoal dark:text-white">help_outline</span>
                    </button>
                </div>
                <div className="bg-gray-100 dark:bg-zinc-800 p-1 rounded-xl flex">
                    <button className="flex-1 py-2 text-sm font-bold bg-white dark:bg-zinc-700 text-primary rounded-lg shadow-sm">My Orders</button>
                    <button className="flex-1 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">Table Orders</button>
                </div>
            </div>

            <div className="pb-44 px-4 pt-6 overflow-y-auto no-scrollbar">
                {/* Stats */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-gray-100 dark:border-zinc-800">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Total Items</p>
                        <p className="text-xl font-extrabold">06</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-gray-100 dark:border-zinc-800">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Preparation</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <div className="size-2 rounded-full bg-blue-500 animate-pulse"></div>
                            <p className="text-sm font-bold">2 Cooking</p>
                        </div>
                    </div>
                </div>

                {/* Orders List */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-extrabold tracking-tight">My Items</h2>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">Ordered 12:45 PM</span>
                    </div>

                    {/* Item 1 - Served */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-zinc-800">
                        <div className="flex gap-4">
                            <div className="size-16 rounded-lg bg-center bg-cover shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDDk7EjZRrZIdgXqOkXI8rdzxNquQGu3vvsFo9ZJOB6PzDJOPFutDZJaMEu27mU-yM-W5b1R15SXR8lxYbtDMELf4XIWh4RZQwGeTHts_AAchACMx17urEAZPQUSsXsRNKAi3HoabtQgVZVMNEp6U8n7Bjef8A-33J4YPL-kZxlbz1nMwbky7qUx6PL24VM3Apm3CDY2iK7I3OvqvImXRXiFIE4-CrpCTcq4zFVf9sFtZl06NkCEqns15opkezSPwNoM9LQ5Hf5WLh')" }}></div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-base leading-tight">Truffle Parmesan Fries</h3>
                                    <span className="text-primary font-bold">$14.00</span>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 italic">"No parsley please"</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                                        <span className="material-symbols-outlined text-[14px] font-bold">check_circle</span>
                                        <span className="text-[10px] font-black uppercase tracking-wider">Served</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400">Qty: 1</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 - Cooking */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-zinc-800">
                        <div className="flex gap-4">
                            <div className="size-16 rounded-lg bg-center bg-cover shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLAk2X6Y_LGQdCkzkrvu_kpud0XhHdKGWkKf_Fzc05CVPqDSqKV_FezMbaY4EWuUguC-DfRGWIYBc9sdRpcTHKItfotM8M8LyPZ68iY0D7bX28z2TyCTUZ38tLZ2fbJ7mq39SWpzoLNbGo5R6lhI8dCmP1XHFVDkYDlxqdrrpGoksydRbeHaOzaIZgGLwVEfbHg-vAlKgtIdMjd4YU9ArjGBnQPndRy-SnkMd0l3wCvNCkakHh9ACizUkeTx4fNoke45LkyxDvo1Ui')" }}></div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-base leading-tight">Signature Wagyu Burger</h3>
                                    <span className="text-primary font-bold">$24.00</span>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Medium rare, aged cheddar</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                                        <span className="material-symbols-outlined text-[14px] font-bold">restaurant</span>
                                        <span className="text-[10px] font-black uppercase tracking-wider">Cooking</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400">Qty: 1</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 - Pending */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-zinc-800 opacity-80">
                        <div className="flex gap-4">
                            <div className="size-16 rounded-lg bg-center bg-cover shrink-0 grayscale" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgLJVOjYXYV4WKHoMxgHG5SJ-5vo-hY95mgOaBeFq62Of2MR6YUxgMC5oNvozs2yGCFZZCTK_9HQQVV4NTuByhLGu7NmNtUd79ng6LarcWTg6ZM0GP57L_yioSWLbgArQ0caZ5WX8Z3VtNsjylUWO1HzubXCqyZnGQLIUo8Bzcjws7p9rmWGRJHCO_wM-j4SaJN4vTnvBx4RnC0hpmCf8MSMUg2L33QFTQ10psC1qyqq6ZXC6sr61BvdlKjKqsiEulM_q8uduvsmNo')" }}></div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-base leading-tight">Miso Glazed Salmon</h3>
                                    <span className="text-primary font-bold">$28.00</span>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                        <span className="material-symbols-outlined text-[14px] font-bold">schedule</span>
                                        <span className="text-[10px] font-black uppercase tracking-wider">Pending</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400">Qty: 1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Members */}
                <div className="mt-10 border-t border-gray-100 dark:border-zinc-800 pt-8 pb-32">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-extrabold tracking-tight">Table Members</h2>
                        <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                            View All <span className="material-symbols-outlined text-xs">arrow_forward_ios</span>
                        </button>
                    </div>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        <div className="flex flex-col items-center gap-2">
                            <div className="size-12 rounded-full ring-2 ring-primary ring-offset-2 dark:ring-offset-zinc-900 overflow-hidden bg-gray-200">
                                <img alt="You" className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrB3-noDG7JBCYUw5Ar7aq9cdxk2riDzWGaKw_XxsaiG4RjgiSuBkvNqnVYAsDP1UjkfjdEh4bPxKUuiGM3ujYGPBCOAVRabxV5Tw0EclHKxeKkn5xFJENBSq7DU5WZ1W1k1OMtFpCBqVQhetBDR5-xm8BQDFmTIPXJDTqkGVLW8u0XG3AjS3d-riymIdPbOpmjrYs9dKu3yJqIA1hukod1UNnPIGI-Wh-F6mDaytbf2R57d924L110lDTtLfFyay3Wd5keJHwJNOB" />
                            </div>
                            <span className="text-[10px] font-bold">You</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="size-12 rounded-full overflow-hidden bg-gray-200">
                                <img alt="Sarah" className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIQi_fmu0j_jiPn6-ZiQbqw4q7rHcxB8XHQJHR41k_0Qf2fJ4uP29BpuBArAnehDipjPLExb2cavLIT00oAyCxHFteV04QKeR9id5jzv_UrJblORsQy6AEi1M09Exf5Fq_zSBRn7q52B-hXv0ET4iiDlX8z9znua4HrO9pJJR6J2fEK6Pr0cNmvaPYLquCuEXcXMbInowVCO1MbjnVg-TeEwxKp-pBYFxBxu-gK-PfzIq57avhUp5_g0pK0kQXbc0VaTiukYM61Ght" />
                            </div>
                            <span className="text-[10px] font-medium text-gray-500">Sarah</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="size-12 rounded-full overflow-hidden bg-gray-200">
                                <img alt="James" className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_fXAVIxD5IFPcP58pbDJV-nLnDyNKaO5JjArOUKavMP5v4ZR_J_6REEb6nZhydTGiy57TLceOaBU5h-B02-m1zuYGaWOhsmN8gswckSIUcbI42bo7g2cnC_QKSy2Tjg3j8MUX2GTiK9q5HobH2mWgro_vcP7t38QQtWW2O5Oa57IMp6wrT0V0WKtxtp6lKCmwKRlyEr24QXjh7jGBCv102qs_3ppQMkaihFihlZLTjYCcHrfxXdIaBuspxISzs9yvpFyXxe-KM5Bq" />
                            </div>
                            <span className="text-[10px] font-medium text-gray-500">James</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="size-12 rounded-full overflow-hidden bg-gray-200">
                                <img alt="Anna" className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6MFO48QtuajCYQ42BXFa4dmMbQAsNV7uoJ8Iah-sYcxyr5nEqiKH-gb1Fofv3wySXmaV3r9ra3SA2urAAho6c3xobGUTAmtfd7uoXO_mHeaKie7x1ZC3ucLgKhuBN3E_OSRdMeNH91SPyUUI5UWFmN2VbkoujWHfFpeZezIj-eY7jZMh7I9CUduHeWGP3_MkLgZX9AOPuzwVcO8zbpwaxbjvbf1qTZx2Z6PKXIgqPiM7AXIRpiAJ8K4Xzt9IP7Sz2htdmpYx5yG7f" />
                            </div>
                            <span className="text-[10px] font-medium text-gray-500">Anna</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-20 left-4 right-4 z-50">
                <button className="w-full bg-primary hover:bg-orange-600 text-white rounded-2xl p-4 flex items-center justify-between shadow-2xl transition-all active:scale-95">
                    <div className="flex flex-col items-start">
                        <p className="text-[10px] uppercase font-black tracking-widest opacity-80">Final Total</p>
                        <p className="text-xl font-extrabold leading-none">$66.00 <span className="text-xs font-normal opacity-70 ml-1">+ service</span></p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl">
                        <span className="text-sm font-black uppercase tracking-wider">Pay Now</span>
                        <span className="material-symbols-outlined text-lg">payments</span>
                    </div>
                </button>
            </div>

            <BottomNav />
        </MobileContainer>
    );
};
