import React from 'react';
import { CheckCircle } from 'lucide-react';

const plans = [
    {
        name: 'Nivel Plata',
        tagline: 'Lo Esencial',
        price: 45,
        features: ['Un Corte Esencial por mes', 'Arreglo de Barba de Cortesía'],
        excluded: ['Tratamiento con Toalla Caliente', 'Reserva Prioritaria'],
        featured: false
    },
    {
        name: 'Nivel Oro',
        tagline: 'El Estándar Refinado',
        price: 85,
        features: ['Dos Cortes Premium por mes', 'Esculpido Exclusivo de Barba', 'Afeitado con Toalla Caliente de Eucalipto', 'Reserva Móvil Prioritaria'],
        excluded: ['Acceso a Sala Privada'],
        featured: true
    },
    {
        name: 'Nivel Platino',
        tagline: 'La Experiencia Definitiva',
        price: 140,
        features: ['Cortes y Peinados Ilimitados', 'Tratamiento Facial y de Piel Completo', 'Acceso Ejecutivo a Sala Privada', 'Consultor de Estilo Personal', 'Bebida Premium de Cortesía'],
        excluded: [],
        featured: false
    }
];

export const Memberships = () => {
    return (
        <section id="memberships" className="w-full py-16 px-6 md:px-20 lg:px-40 bg-surface-dark/20 text-slate-100">
            <div className="max-w-[1200px] mx-auto">
                <header className="text-center mb-16">
                    <span className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Eleva Tu Estilo</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">Planes de Membresía Exclusivos</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">Únete al círculo de élite de Vibrans. Diseñado para el caballero moderno que valora la consistencia y el lujo.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`group relative border rounded-xl p-8 flex flex-col transition-all hover:scale-[1.02] ${plan.featured
                                ? 'bg-primary/10 border-primary shadow-[0_0_40px_-10px_rgba(236,200,19,0.3)] scale-105 z-10'
                                : 'bg-white/5 border-primary/20'
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background-dark px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                                    Más Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-primary' : ''}`}>{plan.name}</h3>
                                <p className="text-slate-400 text-sm">{plan.tagline}</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-black">${plan.price}</span>
                                <span className="text-slate-500 text-sm tracking-widest uppercase ml-2">/ mes</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-primary w-5 h-5" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                                {plan.excluded.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-500">
                                        <CheckCircle className="text-slate-700 w-5 h-5" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest transition-all ${plan.featured
                                    ? 'bg-primary text-background-dark hover:bg-primary/90'
                                    : 'border-2 border-primary/50 text-primary hover:bg-primary hover:text-background-dark'
                                    }`}
                            >
                                Seleccionar {plan.name.split(' ')[1]}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
