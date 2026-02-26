import React, { useState, useEffect, useRef } from 'react';
import { Scissors, User, LogOut, LayoutDashboard, LogIn, UserPlus } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

export const Header = ({ onNavigate }) => {
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Fetch initial user state and listen for auth changes
    useEffect(() => {
        // Obtenemos sesión al montar
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user || null);
        });

        // Suscribirnos a futuros cambios de login/logout
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Handle click outside to close the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const handleLogout = async () => {
        setIsMenuOpen(false);
        await supabase.auth.signOut();
        if (onNavigate) onNavigate('home');
    };

    const handleNavigation = (page) => {
        setIsMenuOpen(false);
        if (onNavigate) onNavigate(page);
    };

    // Helper logic for User Display
    const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';
    const initials = displayName.substring(0, 2).toUpperCase();

    return (
        <header className="relative flex items-center justify-between border-b border-white/10 px-6 py-4 lg:px-20 bg-background-dark">
            <div className="flex items-center gap-3">
                <div className="text-primary">
                    <Scissors className="w-8 h-8" />
                </div>
                <h2 className="text-slate-100 text-xl font-bold font-serif tracking-tight cursor-pointer" onClick={() => handleNavigation('home')}>Vibrans Barbershop</h2>
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

                {/* Profile Container */}
                <div className="relative" ref={menuRef}>
                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`bg-accent-dark border-2 ${isMenuOpen ? 'border-primary' : 'border-white/10'} rounded-full w-10 h-10 flex items-center justify-center overflow-hidden cursor-pointer hover:border-primary transition-colors`}
                        title="Perfil"
                    >
                        {user ? (
                            user.user_metadata?.avatar_url ? (
                                <img src={user.user_metadata.avatar_url} alt="User Avatar" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-xs font-bold text-slate-200 pointer-events-none">{initials}</span>
                            )
                        ) : (
                            <User className="text-slate-400 w-5 h-5 pointer-events-none" />
                        )}
                    </div>

                    {/* Contextual Menu Dropdown */}
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-surface-dark ring-1 ring-black ring-opacity-5 border border-gray-700 z-50 overflow-hidden transform opacity-100 transition-all duration-200 origin-top-right">
                            {user ? (
                                // --- AUTHENTICATED MENU ---
                                <div>
                                    <div className="px-4 py-3 border-b border-gray-700 bg-background-dark/50 text-sm">
                                        <p className="text-slate-400">Conectado como</p>
                                        <p className="font-bold text-white truncate" title={user.email}>{displayName}</p>
                                    </div>
                                    <div className="py-1">
                                        <button
                                            onClick={() => handleNavigation('dashboard')}
                                            className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-gray-800 hover:text-white flex items-center gap-2 transition-colors"
                                        >
                                            <LayoutDashboard className="w-4 h-4" />
                                            Mi Perfil (Dashboard)
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 flex items-center gap-2 transition-colors border-t border-gray-700/50 mt-1"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Cerrar Sesión
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // --- GUEST MENU ---
                                <div className="py-1">
                                    <button
                                        onClick={() => handleNavigation('login')}
                                        className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-gray-800 hover:text-white flex items-center gap-2 transition-colors"
                                    >
                                        <LogIn className="w-4 h-4" />
                                        Iniciar Sesión
                                    </button>
                                    <button
                                        onClick={() => handleNavigation('register')}
                                        className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-gray-800 hover:text-white flex items-center gap-2 transition-colors border-t border-gray-700/50 mt-1"
                                    >
                                        <UserPlus className="w-4 h-4" />
                                        Crear Cuenta
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
