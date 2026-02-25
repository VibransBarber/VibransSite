import React from 'react';
import { Scissors, User, Calendar, History, LogOut, Plus } from 'lucide-react';

export const Sidebar = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'bookings', label: 'Bookings', icon: Calendar },
        { id: 'history', label: 'History', icon: History },
    ];

    return (
        <aside className="w-72 flex flex-col bg-surface-dark border-r border-accent-dark h-full p-6 text-slate-400">
            <div className="flex items-center gap-3 mb-10">
                <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                    <Scissors className="text-background-dark w-6 h-6" />
                </div>
                <div>
                    <h1 className="font-serif text-xl font-black text-primary tracking-tight leading-none">Vibrans</h1>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Barbershop</p>
                </div>
            </div>
            <nav className="flex-1 flex flex-col gap-2">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === item.id
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : 'hover:bg-accent-dark hover:text-white'
                            }`}
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm font-semibold">{item.label}</span>
                    </button>
                ))}
                <div className="mt-auto">
                    <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-all w-full text-left">
                        <LogOut className="w-5 h-5" />
                        <span className="text-sm font-semibold">Logout</span>
                    </button>
                </div>
            </nav>
            <button className="mt-6 w-full py-4 bg-primary text-background-dark font-bold rounded-xl shadow-[0_0_20px_rgba(236,200,19,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" /> Book Now
            </button>
        </aside>
    );
};
