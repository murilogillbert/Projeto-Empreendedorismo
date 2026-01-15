import React from 'react';
import { Link } from 'react-router-dom';
import { MobileContainer } from '../components/layout/MobileContainer';
import { BottomNav } from '../components/navigation/BottomNav';

export const ReservationType: React.FC = () => {
    return (
        <MobileContainer>
            {/* TopAppBar */}
            <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-white/5">
                <Link to="/" className="text-[#181411] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </Link>
                <h2 className="text-[#181411] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Reservation Type</h2>
            </div>

            <div className="flex-grow overflow-y-auto no-scrollbar pb-20">
                {/* HeadlineText */}
                <div className="px-6 py-8">
                    <h2 className="text-[#181411] dark:text-white tracking-tight text-[28px] font-bold leading-tight text-left">
                        How would you like to enjoy your meal?
                    </h2>
                    <p className="text-[#8a7460] dark:text-gray-400 mt-2 text-base">Select your preferred dining experience to continue.</p>
                </div>

                {/* Selection Cards Container */}
                <div className="px-4 space-y-6">
                    {/* Card 1: Dine-in */}
                    <div className="group relative">
                        <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white dark:bg-zinc-800 border-2 border-transparent transition-all duration-300 hover:border-primary">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover relative"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKFTlp0i80etgRgOYVT7BQkWvm7Djqyv8vWHIQHZC740SE2Zpjti17-ctvdf0tLEf5hCLbps5KRO2HzGuG7l1V-1pSvnjQ0c9xTnlsvcdzwRl2VMPKAg2QwW22KFcWxDe0hHe8Aoe6nsrXgYoSs1Qx7IYKjL1Ut-7DmJyy5mL4m8VZVQaN3GdJgjkb_zOyhlJkV2NLZZE7e_qoZWOYXvnLtV1I8rSn6lA4hdVTQMxETZiNcmpkkWKhzVQJ-oxlaofBd4dWC7WR2fjL')" }}
                            >
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur p-2 rounded-lg flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>restaurant</span>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-stretch justify-center gap-3 p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[#181411] dark:text-white text-xl font-bold leading-tight tracking-tight">Reserve a Table</p>
                                        <p className="text-[#8a7460] dark:text-gray-400 text-sm mt-1">Indoor or terrace seating</p>
                                    </div>
                                </div>
                                <p className="text-[#8a7460] dark:text-gray-300 text-base font-normal leading-relaxed">
                                    Secure your spot and choose between our cozy indoor seating or the fresh outdoor terrace.
                                </p>
                                <div className="pt-2 flex justify-end">
                                    <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-11 px-6 bg-primary text-white text-sm font-semibold tracking-wide shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                                        <span className="truncate">Reserve Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Takeaway */}
                    <div className="group relative">
                        <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white dark:bg-zinc-800 border-2 border-transparent transition-all duration-300 hover:border-primary">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover relative"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvMnKPf2ie6xCv94DC9PTgwD_9ryUA_LNg2IV7vcG3dNSXUhQjhC85bYWXchJiwpmhVmisms6E-bn-POVH7kcZA7pquovdyUWIKI9jHIFQZxWzAX_pelx3rrliBK9EYTJkpWMfCDPH5uFN7fqzi3ji3gJQZY0LfK8tq72f37z2n-tIFwSWwPEeKv1JNStU91UT8TLLivdHlnAY9lXVHx1RDl6AUe885REB2YqlQ0AUyfU0_a3K1pKPSGb2_n57rynaGMWVPV-QkrLc')" }}
                            >
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur p-2 rounded-lg flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>shopping_bag</span>
                                </div>
                                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                    Popular
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-stretch justify-center gap-3 p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[#181411] dark:text-white text-xl font-bold leading-tight tracking-tight">Pre-order for Pickup</p>
                                        <p className="text-[#8a7460] dark:text-gray-400 text-sm mt-1">Ready in 15-20 mins</p>
                                    </div>
                                </div>
                                <p className="text-[#8a7460] dark:text-gray-300 text-base font-normal leading-relaxed">
                                    Order ahead, skip the line, and enjoy your meal wherever you please. Packaged for the road.
                                </p>
                                <div className="pt-2 flex justify-end">
                                    <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-11 px-6 bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wide hover:bg-primary hover:text-white transition-all">
                                        <span className="truncate">Select Pickup</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomNav />
        </MobileContainer>
    );
};
