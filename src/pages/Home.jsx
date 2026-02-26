import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Barbers } from '../components/home/Barbers';
import { Memberships } from '../components/home/Memberships';
import { WaitlistCounter, OnlineCheckIn } from '../components/home/Waitlist';
import { Footer } from '../components/layout/Footer';

const Home = () => {
    return (
        <div className="bg-background-dark min-h-screen text-slate-100 selection:bg-primary/30">
            <Header />
            <main>
                <Hero />
                <section className="container mx-auto px-6 py-24 border-t border-white/5">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
                        <WaitlistCounter />
                        <OnlineCheckIn />
                    </div>
                </section>
                <Services />
                <Barbers />
                <Memberships />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
