import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, MapPin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 bg-background-dark py-12 px-6 md:px-20 lg:px-40 mt-10 text-slate-400">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Scissors className="text-primary w-6 h-6" />
                        <h2 className="text-slate-100 text-lg font-extrabold tracking-tight uppercase">Vibrans Barbershop</h2>
                    </div>
                    <p className="text-sm max-w-xs">Premium urban grooming destination for the modern gentleman who values precision and style.</p>
                </div>
                <div className="flex flex-wrap gap-12">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-slate-100 font-bold text-sm uppercase tracking-wider">Quick Links</h4>
                        <a className="hover:text-primary transition-colors" href="#">Home</a>
                        <a className="hover:text-primary transition-colors" href="#">Services</a>
                        <a className="hover:text-primary transition-colors" href="#">Pricing</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-slate-100 font-bold text-sm uppercase tracking-wider">Connect</h4>
                        <div className="flex gap-4">
                            <Instagram className="w-5 h-5 hover:text-primary cursor-pointer" />
                            <Facebook className="w-5 h-5 hover:text-primary cursor-pointer" />
                            <Twitter className="w-5 h-5 hover:text-primary cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-slate-100 font-bold text-sm uppercase tracking-wider">Contact</h4>
                        <div className="flex gap-2 items-start">
                            <MapPin className="w-4 h-4 text-primary mt-1" />
                            <p className="text-sm">123 Urban Avenue, NY</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase font-bold tracking-widest gap-4">
                <p>© 2024 Vibrans Barbershop. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a className="hover:text-slate-300" href="#">Privacy Policy</a>
                    <a className="hover:text-slate-300" href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};
