import React from 'react';
import { Scissors, User } from 'lucide-react';

export const Header = () => {
    return (
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 lg:px-20 bg-background-dark">
            <div className="flex items-center gap-3">
                <div className="text-primary">
                    <Scissors className="w-8 h-8" />
                </div>
                <h2 className="text-slate-100 text-xl font-bold font-serif tracking-tight">Vibrans Barbershop</h2>
            </div>
            <nav className="hidden md:flex flex-1 justify-center gap-10">
                <a className="text-slate-300 hover:text-primary text-sm font-medium transition-colors" href="#services">Servicios</a>
                <a className="text-slate-300 hover:text-primary text-sm font-medium transition-colors" href="#barbers">Barberos</a>
                <a className="text-slate-300 hover:text-primary text-sm font-medium transition-colors" href="#gallery">Galería</a>
                <a className="text-slate-300 hover:text-primary text-sm font-medium transition-colors" href="#memberships">Membresías</a>
            </nav>
            <div className="flex items-center gap-4">
                <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold transition-transform active:scale-95">
                    Reservar Ahora
                </button>
                <div className="bg-accent-dark border border-white/10 rounded-full w-10 h-10 flex items-center justify-center overflow-hidden">
                    <User className="text-slate-400 w-5 h-5" />
                </div>
            </div>
        </header>
    );
};
