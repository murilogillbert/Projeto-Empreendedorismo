import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MobileContainer } from '../components/layout/MobileContainer';

export const Register: React.FC = () => {
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock register logic
        localStorage.setItem('auth_token', 'mock_session_token');
        navigate('/');
    };

    return (
        <MobileContainer>
            <div className="flex flex-col flex-1 px-6 pt-12 pb-10 bg-white dark:bg-zinc-900 overflow-y-auto no-scrollbar">
                <div className="mb-8">
                    <Link to="/login" className="size-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-zinc-800 text-charcoal dark:text-white mb-6">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight mb-2">Create Account</h1>
                    <p className="text-gray-500 dark:text-gray-400">Join UTABLE for priority bookings and exclusive menus.</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-mocha/60 dark:text-gray-400 uppercase tracking-wider ml-1">First Name</label>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-4 focus:ring-2 focus:ring-primary/20 text-sm"
                                required
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-mocha/60 dark:text-gray-400 uppercase tracking-wider ml-1">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-4 focus:ring-2 focus:ring-primary/20 text-sm"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-mocha/60 dark:text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-4 focus:ring-2 focus:ring-primary/20 text-sm"
                            required
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-mocha/60 dark:text-gray-400 uppercase tracking-wider ml-1">Password</label>
                        <input
                            type="password"
                            placeholder="Create a strong password"
                            className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-4 focus:ring-2 focus:ring-primary/20 text-sm"
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-6 px-1">
                            By signing up, you agree to our <span className="text-primary font-bold">Terms of Service</span> and <span className="text-primary font-bold">Privacy Policy</span>.
                        </p>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-base shadow-xl shadow-primary/30 transition-transform active:scale-95"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
                    Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
                </p>
            </div>
        </MobileContainer>
    );
};
