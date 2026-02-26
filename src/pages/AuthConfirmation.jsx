import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function AuthConfirmation({ onNavigate }) {
    const [status, setStatus] = useState('Verificando tu cuenta...');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        // Al cargar este componente (que idealmente se monta al detectar el hash de Supabase),
        // supabase-js automáticamente procesará el token en la URL.
        // Solo necesitamos escuchar si el usuario se ha logueado exitosamente.

        const checkSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();

            if (session) {
                setStatus('¡Cuenta confirmada exitosamente!');
                setIsSuccess(true);
            } else if (error) {
                setStatus('Error al confirmar la cuenta: ' + error.message);
                setIsSuccess(false);
            } else {
                // Si llegamos a esta vista pero no hay sesión generada por Supabase, 
                // el link expiró o es inválido.
                setStatus('El enlace de confirmación parece inválido o ha expirado.');
                setIsSuccess(false);
            }
        };

        // Escuchar cambios de sesión directamente
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (event === 'SIGNED_IN') {
                    setStatus('¡Cuenta confirmada exitosamente!');
                    setIsSuccess(true);
                }
            }
        );

        checkSession();

        // Limpiar el listener al desmontar
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <div className="min-h-screen bg-background-dark flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-md w-full bg-surface-dark border border-gray-800 p-8 rounded-lg shadow-lg text-center transform transition-all">

                {/* Ícono dinámico */}
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-6">
                    {isSuccess ? (
                        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : status.includes('Verificando') ? (
                        <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <svg className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">Vibrans Barbershop</h2>
                <p className="text-lg text-slate-300 mb-8">{status}</p>

                {isSuccess ? (
                    <button
                        onClick={() => onNavigate('dashboard')}
                        className="w-full inline-flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-background-dark bg-primary hover:bg-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-dark"
                    >
                        Ir a mi Perfil (Dashboard)
                    </button>
                ) : (
                    <button
                        onClick={() => onNavigate('home')}
                        className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-slate-300 bg-background-dark hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:ring-offset-background-dark"
                    >
                        Volver al Inicio
                    </button>
                )}
            </div>
        </div>
    );
}
