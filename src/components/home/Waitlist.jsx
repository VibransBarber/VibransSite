import React, { useState, useEffect } from 'react';
import { Smartphone, ArrowRight, Clock, TrendingDown } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export const WaitlistCounter = () => {
    const [waitTime, setWaitTime] = useState(0);

    useEffect(() => {
        calculateWaitTime();
    }, []);

    const calculateWaitTime = async () => {
        // Logic: Count today's scheduled appointments
        const today = new Date().toISOString().split('T')[0];
        const { count, error } = await supabase
            .from('appointments')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'scheduled')
            .gte('scheduled_at', `${today}T00:00:00Z`);

        if (!error) {
            // Mock calculation: 30 mins per appointment, 3 active barbers
            const activeBarbers = 3;
            const calculatedWait = Math.max(15, Math.ceil((count * 30) / activeBarbers));
            setWaitTime(calculatedWait);
        } else {
            setWaitTime(15); // Default fallback
        }
    };

    return (
        <div className="lg:col-span-4 flex flex-col justify-between gap-4 rounded-2xl p-8 bg-accent-dark border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Clock className="w-24 h-24 text-primary" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">Current Wait</p>
                <div className="flex items-baseline gap-2">
                    <p className="text-primary tracking-tight text-5xl font-black font-serif">{waitTime}</p>
                    <p className="text-slate-100 text-xl font-bold">mins</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-emerald-400 font-medium text-sm bg-emerald-500/10 w-fit px-3 py-1 rounded-full">
                <TrendingDown className="w-4 h-4" />
                <span>Shortest wait time today</span>
            </div>
        </div>
    );
};

export const OnlineCheckIn = () => {
    const [phone, setPhone] = useState('');

    const handleCheckIn = async (e) => {
        e.preventDefault();
        if (!phone) return;

        // Implementation of check-in logic with Supabase
        alert(`Checking in with phone: ${phone}. (Mock logic)`);
    };

    return (
        <div className="lg:col-span-8 flex flex-col justify-center gap-6 rounded-2xl p-8 bg-accent-dark border border-white/5">
            <div className="flex flex-col gap-2">
                <h3 className="text-slate-100 text-2xl font-bold font-serif flex items-center gap-3">
                    <Smartphone className="text-primary w-6 h-6" />
                    Online Check-in
                </h3>
                <p className="text-slate-400 text-base">Skip the queue. Save your spot in line before you even leave home.</p>
            </div>
            <form onSubmit={handleCheckIn} className="w-full max-w-xl">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Smartphone className="text-slate-500 w-5 h-5" />
                        </div>
                        <input
                            className="w-full h-14 pl-12 pr-4 rounded-xl bg-background-dark/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-slate-100 placeholder:text-slate-600 transition-all"
                            placeholder="Enter phone number"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="h-14 px-8 bg-primary text-background-dark rounded-xl font-bold hover:bg-primary/90 active:scale-[0.98] transition-all whitespace-nowrap flex items-center justify-center gap-2">
                        Check-in Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-slate-600 text-[10px] mt-3 uppercase tracking-tighter">By checking in, you agree to receive an SMS notification when your barber is ready.</p>
            </form>
        </div>
    );
};
