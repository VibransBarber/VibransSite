import React from 'react';
import { Stars } from 'lucide-react';
import { WaitlistCounter, OnlineCheckIn } from './Waitlist';

export const Hero = () => {
    return (
        <div className="@container max-w-7xl mx-auto px-4 lg:px-10 py-8 lg:py-12">
            <div className="relative flex min-h-[520px] flex-col gap-8 rounded-2xl overflow-hidden bg-accent-dark items-center justify-center p-8 text-center border border-white/5">
                {/* Hero Background Overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-40 mix-blend-overlay grayscale"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIVCsC2G7iJoNG4Ug5fZwgCwYEPw57w_tShTVUuYhSNsyqY2pm_7S-DLz3RLWOvxo2rBZGaeWHmBtNDPFFtVH53D9RpG13KRA1jB-Y9QLbEb3y7sP0aUJOrSC-5WNMKP8oMYZZ_0DevyG08M-uE0VqEsN-UpZRcj4voyIHy2Fvq6mbUHfx5viZ-nFmrxVlIxxLB8LdWX6twqc9FSUchJOmhDoPS1L32ebBppBcsBc0zxrah_MqAu8Pd30u1cELt6M970TbYn90lAo_')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col gap-6 max-w-3xl">
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-2 mx-auto">
                        <Stars className="w-4 h-4" />
                        Experiencia de Barbería Premium
                    </div>
                    <h1 className="text-slate-100 text-5xl md:text-7xl font-serif font-black leading-[1.1] tracking-tight">
                        Precisión, Estilo, <br /><span className="text-primary italic">Tradición</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl mx-auto">
                        Experimenta la cúspide del aseo urbano con nuestros barberos maestros. Donde las técnicas clásicas se encuentran con el estilo contemporáneo.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-background-dark text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                            Reservar Cita
                        </button>
                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white/5 border border-white/10 text-slate-100 text-base font-bold backdrop-blur-sm hover:bg-white/10 transition-all">
                            Ver Galería
                        </button>
                    </div>
                </div>
            </div>

            {/* Waitlist & Check-in Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                <WaitlistCounter />
                <OnlineCheckIn />
            </div>
        </div>
    );
};
