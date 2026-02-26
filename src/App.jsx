import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthConfirmation from './pages/AuthConfirmation';
import { supabase } from './lib/supabaseClient';

function App() {
    // La app inicia por defecto pidiendo Login primero
    const [currentPage, setCurrentPage] = useState('login');

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
                if (session && currentPage === 'login') {
                    // Auto-login al dashboard si la sesión de supabase sigue viva
                    setCurrentPage('dashboard');
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
                    onClick={() => setCurrentPage('login')}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${currentPage === 'login' ? 'bg-primary text-background-dark' : 'bg-accent-dark text-slate-100'
                        }`}
                >
                    View Login
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
            {currentPage === 'login' && <Login onNavigate={setCurrentPage} />}
            {currentPage === 'register' && <Register onNavigate={setCurrentPage} />}
            {currentPage === 'dashboard' && <Dashboard onNavigate={setCurrentPage} />}
            {currentPage === 'confirmation' && <AuthConfirmation onNavigate={setCurrentPage} />}
        </div>
    );
}

export default App;
