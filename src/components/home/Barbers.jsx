import React from 'react';
import { Scissors, Brush, Ruler, Droplet, UserCircle } from 'lucide-react';

const barbers = [
    {
        id: 1,
        name: "Marcus 'The Blade'",
        role: 'Master Barber & Creative Director',
        bio: 'With 15 years of experience in London and NY, Marcus defines the Vibrans signature look through sharp architectural fades.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPxrVgubLrVS6izJM67K3RQKwmHb6yeJoln4GmFP3Mwo4f1cLqCtHx-p4mzzB2PeU49THlLIsvwUqzOPEjpH6cC7iLdy5n7UmXqv5KH_ldKvOm2XdFh5c6H041C2CY5L5n9U20SFpwJZz72eoAB7zWSrGolMKKWQUxCdZrPbqpbD0AFQgSg2Pb1n56fHgZYw2U0FrjzmXqpRj7fQifyeeBhfk9o3djNpUm8trjzjm3q6E0J5U7W58fKypBE98o14XK2yrHHTDX7Wb8',
        icons: [Scissors, Brush]
    },
    {
        id: 2,
        name: 'Julian V.',
        role: 'Skin Fade & Taper Specialist',
        bio: 'The master of the seamless transition. Julian specializes in high-contrast skin fades and razor-sharp lineup work.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJlEaYgX0sGYhdjELfS4GSfvfQh9PgRU1C6jOMKtfeQQLUwEqI0qChUc6o_XRqF4fFTwwS8AYz9hVd3tQk_yqU3IlJwX5bOj06jYnz9r-yiKebye-B3hpzBC9MPcXzyKSy9239bQ0B1GoihRhGlD7BkgFu42uIDd6Hl4GGNowpqkygrHKTW0_aAN2YhgrEuGKm7sDT8XIYwHPr8cUDuP8H-l4yb__psbM5yN_5ldrClFdRxvQyMhQ-VOAv3OC1JZztB-bwb9K7jp72',
        icons: [Ruler, UserCircle]
    },
    {
        id: 3,
        name: 'Silas Stone',
        role: 'Classic Cuts & Razor Guru',
        bio: 'A purist at heart. Silas brings back the luxury of the hot towel shave and traditional scissor-over-comb techniques.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwSP_6vdi0RxlHSwsMfb9i4-dDsCJ-hjWSLMZMlcpPnhZbfOpfCB9l4WBFta8qnQExG4B7r_nK_Up9bNbaUAUAUD975i1b-f6eYdKquysRF2ptaMkzRgXdMGVy6vzjrN7EBeOZF3I60nft3WWK7XojGt-9igTnGFK560p1B9g9I-10CxSxgt0R-of3_URH38pJOd1GMnqm4wODtNKPjwzLupufdxfRgq3K6XFJLq89asawbZDAjpI1AX87wxHY69-k4_WMuwS0yA-8',
        icons: [Droplet, Scissors]
    }
];

export const Barbers = () => {
    return (
        <section id="barbers" className="w-full py-16 px-6 md:px-20 lg:px-40 bg-background-dark">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-xl">
                        <h3 className="text-3xl font-black mb-4 text-slate-100">Meet the Masters of the Craft</h3>
                        <p className="text-slate-400 text-lg">Our barbers are handpicked for their unique styles and commitment to the traditional art of grooming.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {barbers.map((barber) => (
                        <div key={barber.id} className="flex flex-col group h-full bg-white/5 border border-primary/10 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-2xl">
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img src={barber.image} alt={barber.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h4 className="font-serif text-2xl font-bold mb-1 text-primary">{barber.name}</h4>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 block">{barber.role}</span>
                                <p className="text-sm leading-relaxed text-slate-400 flex-1">{barber.bio}</p>
                                <div className="mt-6 pt-6 border-t border-primary/10 flex justify-between items-center">
                                    <div className="flex gap-3 text-primary">
                                        {barber.icons.map((Icon, i) => <Icon key={i} className="w-5 h-5" />)}
                                    </div>
                                    <button className="text-xs font-bold text-white hover:text-primary transition-colors uppercase">Book now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
