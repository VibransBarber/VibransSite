import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import AuthConfirmation from './pages/AuthConfirmation';
import { supabase } from './lib/supabaseClient';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    // Escuchar el evento de retorno de Auth de Supabase
    useEffect(() => {
        // En GitHub Pages y SPA, los redireccionamientos de Auth traen tokens en el fragmento (hash)
        const hash = window.location.hash;

        // Si la URL tiene token de acceso o es un recovery/signup redirect implícito
        if (hash && (hash.includes('access_token=') || hash.includes('type=recovery') || hash.includes('type=signup'))) {
            setCurrentPage('confirmation');
            // Opcional: limpiar la URL en la barra de navegación para estética
            window.history.replaceState(null, document.title, window.location.pathname);
        } else {
            // Verificar si ya hay una sesión activa al arrancar
            supabase.auth.getSession().then(({ data: { session } }) => {
                if (session && currentPage === 'home') {
                    // Podríamos redirigir automáticamente al dashboard si ya inició sesión
                    // setCurrentPage('dashboard');
                }
            });
        }
    }, [currentPage]);

    // Simple routing logic to demonstrate both views
    return (
        <div className="App">
            <div className="fixed bottom-4 right-4 z-[9999] flex gap-2">
                <button
                    onClick={() => setCurrentPage('home')}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${currentPage === 'home' ? 'bg-primary text-background-dark' : 'bg-accent-dark text-slate-100'
                        }`}
                >
                    View Home
                </button>
                <button
                    onClick={() => setCurrentPage('register')}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${currentPage === 'register' ? 'bg-primary text-background-dark' : 'bg-accent-dark text-slate-100'
                        }`}
                >
                    View Register
                </button>
                <button
                    onClick={() => setCurrentPage('dashboard')}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${currentPage === 'dashboard' ? 'bg-primary text-background-dark' : 'bg-accent-dark text-slate-100'
                        }`}
                >
                    View Dashboard
                </button>
            </div>

            {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
            {currentPage === 'register' && <Register onNavigate={setCurrentPage} />}
            {currentPage === 'dashboard' && <Dashboard onNavigate={setCurrentPage} />}
            {currentPage === 'confirmation' && <AuthConfirmation onNavigate={setCurrentPage} />}
        </div>
    );
}

export default App;
