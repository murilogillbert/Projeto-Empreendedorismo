import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { MobileContainer } from '../components/layout/MobileContainer';

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login logic
        localStorage.setItem('auth_token', 'mock_session_token');
        navigate(from, { replace: true });
    };

    return (
        <MobileContainer>
            <div className="flex flex-col flex-1 px-6 pt-20 pb-10 bg-white dark:bg-zinc-900">
                <div className="flex flex-col items-center mb-12">
                    <div className="size-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-primary text-5xl">restaurant_menu</span>
                    </div>
                    <h1 className="text-3xl font-black text-charcoal dark:text-white tracking-tight">UTABLE</h1>
                    <p className="text-mocha dark:text-primary font-bold uppercase tracking-widest text-xs mt-2">Elevated Dining Experience</p>
                </div>

                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-8">Welcome Back</h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-mocha/60 dark:text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">mail</span>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-mocha/60 dark:text-gray-400 uppercase tracking-wider ml-1">Password</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">lock</span>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot Password?</button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-base shadow-xl shadow-primary/30 transition-transform active:scale-95 mt-6"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 flex items-center">
                        <div className="flex-1 h-px bg-gray-100 dark:bg-zinc-800"></div>
                        <span className="px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
                        <div className="flex-1 h-px bg-gray-100 dark:bg-zinc-800"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <button className="flex items-center justify-center gap-2 border border-gray-100 dark:border-zinc-800 rounded-2xl py-3 text-sm font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                            <img src="https://www.google.com/favicon.ico" alt="Google" className="size-4" />
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-gray-100 dark:border-zinc-800 rounded-2xl py-3 text-sm font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                            <img src="https://www.apple.com/favicon.ico" alt="Apple" className="size-4" />
                            Apple
                        </button>
                    </div>
                </div>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
                    Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Sign Up</Link>
                </p>
            </div>
        </MobileContainer>
    );
};
