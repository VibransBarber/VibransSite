import React, { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

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
        </div>
    );
}

export default App;
