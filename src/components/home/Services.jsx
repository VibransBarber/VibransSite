import React from 'react';
import { Scissors, Clock, CheckCircle, ChevronRight } from 'lucide-react';

const services = [
    {
        id: 1,
        name: 'Signature Cut',
        price: 45,
        duration: '45 mins',
        description: 'Our master barbers deliver a precision cut tailored to your head shape and hair type. Includes scalp massage.',
        features: ['Precision Scissors', 'Style Consultation'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvAH605Le2DTfKYBs1x-5PvrsyXnyNijZC7t88EbBrHV98Nzotj5zZR8IicgHEfZD198qlU74j4_Ny6pGN95y9yHUUnHE2BkiXVf4vcNHLhRkDM-KcgcdEK0hZs-p8r6NrKqwSnOUx7j9vuIOPFYtaimJ-sYfQXx5Jcom7OIANXtovFadfrFnOj5s6A7QB700dhsm8c93G9ePbk3KruD0D8IM3IlkmMNoNXd7AcgOIk6M9HwOY5NuvleUg5_RT9Ri65Qsa7lleXJ8b'
    },
    {
        id: 2,
        name: 'Beard Grooming',
        price: 30,
        duration: '30 mins',
        description: 'Expert shaping, trimming, and hot towel treatment for a sharp, refined look. Finishing with premium oils.',
        features: ['Razor Line-up', 'Hot Oil Finish'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOv4jcqjm5tH4glgpvqC3LiRr4nFgUndg2pRCeSk3refAD59lIK_y0X_k6DdwsWhwfSXVFETmOv4PO01fbnwLYo_hLO79Rc-NIngVf_PzvZT3gUJGYabNVrOds1HlkyRHZrOs3Kj7QgRtO3ki4wZrGvoCympHHrZ8dENLhHAVek6KkYawJ7xLsiPCYXtxRUsu8a8xT4vUr4dbqGMjafHTWGFdA_u68HxinQ79S2O_fDN3n0jLtMUfbCd8Jle4pwOPfTVchfTWcFR_2'
    },
    {
        id: 3,
        name: 'The Royal Shave',
        price: 60,
        duration: '60 mins',
        description: 'The ultimate luxury experience including a straight-razor shave, facial massage, and dual hot towel service.',
        features: ['Straight Razor', 'Facial Massage'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIUAaVgZN71MVuojNy-fBDasBIH40oGCBEGmCaWSLHXXwF7SAsw6808YMa4dwegIcstJJ0SmuMnprJoTM5-cXRLinLNP_qbH4Ac3ieVQ6XKSWlJ7iMiYBnDV2mgxY3_Av6o4ES-Pp4hsZgY8tJj30_rYU_oCxrxE9NezLeovNSWHVgIgD6GrKDRu6LRIzQqwBw1Pj2lEqYI2iSeYt0jSWW4xceVR1gqg-L3ijYhEm1IigIBYaD7aBtmmGX8oglXB8if8r47u9ixIuL'
    }
];

export const Services = () => {
    return (
        <section id="services" className="w-full bg-surface-dark/30 py-20 px-6 md:px-20 lg:px-40">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Our Specialties</h2>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-100 leading-tight">Premium Service Highlights</h3>
                    </div>
                    <p className="text-slate-400 max-w-md text-sm md:text-base">
                        Select from our range of precision services, each including a complimentary drink and a premium hot towel finish.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="group flex flex-col bg-accent-dark border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
                                    <span className="text-primary font-bold text-sm">${service.price}</span>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">{service.name}</h4>
                                    <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                                        <Clock className="w-3 h-3" />
                                        {service.duration}
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="pt-2 flex items-center justify-between">
                                    <ul className="space-y-1">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-tighter font-bold">
                                                <CheckCircle className="text-primary w-3 h-3" /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="p-2 rounded-lg bg-background-dark/50 text-slate-100 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
