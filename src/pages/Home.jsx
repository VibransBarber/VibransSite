import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Barbers } from '../components/home/Barbers';
import { Memberships } from '../components/home/Memberships';
import { Footer } from '../components/layout/Footer';

const Home = () => {
    return (
        <div className="bg-background-dark min-h-screen text-slate-100 selection:bg-primary/30">
            <Header />
            <main>
                <Hero />
                <Services />
                <Barbers />
                <Memberships />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
