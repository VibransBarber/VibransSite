import React, { useState, useEffect } from 'react';
import { Scissors, Edit3, Coffee, User } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export const VibransNotes = () => {
    const [notes, setNotes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        setLoading(true);
        // Ideally we would get the user ID from auth
        // const { data: { user } } = await supabase.auth.getUser();
        // For demo, we fetch the latest note
        const { data, error } = await supabase
            .from('vibrans_notes')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(1)
            .single();

        if (data) setNotes(data);
        setLoading(false);
    };

    const defaultNotes = [
        { icon: Scissors, label: 'Preferencia de Fade', note: 'Guía 2 a los lados, low drop fade, parte superior texturizada para peinado con arcilla mate.' },
        { icon: User, label: 'Esculpido de Barba', note: 'Alineación en pómulos, disminución en patillas, mantener longitud en la barbilla.' },
        { icon: Coffee, label: 'Preferencia de Servicio', note: 'Espresso de la casa, doble carga. Prefiere acabado de afeitado con toalla caliente.' }
    ];

    return (
        <div className="bg-surface-dark border border-accent-dark rounded-xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl font-bold text-slate-100">Notas Vibrans</h3>
                <Edit3 className="text-slate-500 hover:text-primary cursor-pointer w-5 h-5" />
            </div>
            <div className="space-y-6">
                {loading ? (
                    <p className="text-slate-500 text-sm">Cargando tus notas...</p>
                ) : (
                    defaultNotes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-accent-dark flex items-center justify-center shrink-0">
                                <item.icon className="text-primary w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">{item.label}</p>
                                <p className="text-sm text-slate-400 italic mt-1">"{notes?.notes || item.note}"</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
