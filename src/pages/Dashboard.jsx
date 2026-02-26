import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components/dashboard/Sidebar';
import { VibransNotes } from '../components/dashboard/VibransNotes';
import { ShieldCheck, Search, Bell, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const Dashboard = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();

            if (error || !session) {
                // Denegar acceso si no hay sesión
                if (onNavigate) onNavigate('login');
            } else {
                setUser(session.user);
            }
            setLoading(false);
        };

        fetchUser();
    }, [onNavigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        if (onNavigate) onNavigate('home');
    };

    if (loading) {
        return <div className="flex h-screen items-center justify-center bg-background-dark text-primary">Cargando perfil...</div>;
    }

    // Helper para obtener el nombre a mostrar (Metadata full_name de OAuth o email)
    const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Cliente';
    const initials = displayName.substring(0, 2).toUpperCase();

    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-slate-100">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="flex-1 overflow-y-auto bg-background-dark">
                {/* Header */}
                <header className="flex items-center justify-between px-10 py-6 border-b border-accent-dark sticky top-0 bg-background-dark/80 backdrop-blur-md z-10">
                    <div className="flex flex-col">
                        <h2 className="font-serif text-3xl font-bold">Bienvenido de nuevo, {displayName}</h2>
                        <p className="text-slate-500 text-sm">{user?.email}</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative w-64 hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                            <input
                                className="w-full bg-accent-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary/50 placeholder:text-slate-600"
                                placeholder="Buscar servicios..."
                                type="text"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary" />

                            {user?.user_metadata?.avatar_url ? (
                                <img src={user.user_metadata.avatar_url} alt="Profile" className="h-10 w-10 rounded-full border-2 border-primary object-cover" />
                            ) : (
                                <div className="h-10 w-10 rounded-full border-2 border-primary p-0.5">
                                    <div className="h-full w-full rounded-full bg-slate-700 flex items-center justify-center font-bold text-sm">{initials}</div>
                                </div>
                            )}

                            <button
                                onClick={handleLogout}
                                className="ml-4 flex items-center gap-2 px-3 py-1.5 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-sm font-medium"
                                title="Cerrar sesión"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="hidden sm:inline">Cerrar Sesión</span>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="p-10 max-w-6xl mx-auto space-y-8">
                    {/* Top Section Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Membership Card */}
                        <div className="lg:col-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-accent-dark to-background-dark border border-primary/20 p-8 flex flex-col justify-between group">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <ShieldCheck className="text-primary w-4 h-4" />
                                    <span className="text-xs font-black uppercase tracking-widest text-primary">Estatus Élite</span>
                                </div>
                                <h3 className="font-serif text-4xl mb-2 italic text-slate-100">Membresía Platino</h3>
                                <p className="text-slate-400 max-w-md">Reserva prioritaria, bebidas de cortesía y 20% de descuento en todos los servicios de barbería.</p>
                            </div>
                            <div className="flex items-center justify-between mt-12 relative z-10">
                                <div className="flex -space-x-3">
                                    <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-primary flex items-center justify-center text-xs font-bold text-background-dark">A</div>
                                    <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-slate-700 flex items-center justify-center text-xs font-bold text-white">L</div>
                                    <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-slate-800 flex items-center justify-center text-xs font-bold text-white">X</div>
                                </div>
                                <button className="px-6 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm font-bold hover:bg-primary hover:text-background-dark transition-all">
                                    Ver Beneficios
                                </button>
                            </div>
                        </div>

                        {/* Countdown Timer */}
                        <div className="bg-surface-dark border border-accent-dark rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
                            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">Próxima Cita</span>
                            <div className="flex gap-4 mb-6">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-serif font-bold text-primary">02</span>
                                    <span className="text-[10px] text-slate-600 uppercase font-bold">Días</span>
                                </div>
                                <span className="text-4xl font-serif font-bold text-slate-700">:</span>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-serif font-bold text-primary">04</span>
                                    <span className="text-[10px] text-slate-600 uppercase font-bold">Horas</span>
                                </div>
                            </div>
                            <p className="text-sm font-medium text-slate-300">Skin Fade y Arreglo de Barba</p>
                            <p className="text-xs text-slate-500">con el Barbero Maestro Julian</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <VibransNotes />
                        <div className="space-y-6">
                            <h3 className="font-serif text-2xl font-bold">Última Sesión</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square rounded-xl bg-slate-800 flex items-center justify-center border border-white/5">
                                    <span className="text-slate-500 text-xs text-center p-4">Foto de Estilo 1</span>
                                </div>
                                <div className="aspect-square rounded-xl bg-slate-800 flex items-center justify-center border border-white/5">
                                    <span className="text-slate-500 text-xs text-center p-4">Foto de Estilo 2</span>
                                </div>
                            </div>
                            <div className="p-6 bg-accent-dark/50 border border-accent-dark rounded-xl flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Última Visita</p>
                                    <p className="font-bold text-white mt-1">14 de Marzo, 2024</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Total Gastado</p>
                                    <p className="font-bold text-primary mt-1">$65.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
