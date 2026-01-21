import Link from 'next/link';

export default function Features() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white py-32 px-8">
            <h1 className="text-7xl font-extrabold text-center mb-24 drop-shadow-2xl">Features</h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl transform hover:scale-105 transition">
                    <h2 className="text-5xl font-bold mb-12">Rolling Participation</h2>
                    <p className="text-2xl leading-relaxed">
                        Join challenges anytime – no fixed start date. Complete your 60-day streak from your start day and become eligible for prizes.
                    </p>
                </div>

                <div className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl transform hover:scale-105 transition">
                    <h2 className="text-5xl font-bold mb-12">Daily Proof Upload</h2>
                    <p className="text-2xl leading-relaxed">
                        Upload photos or videos every day as proof. Keep your streak alive with community verification.
                    </p>
                </div>

                <div className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl transform hover:scale-105 transition">
                    <h2 className="text-5xl font-bold mb-12">Community Voting</h2>
                    <p className="text-2xl leading-relaxed">
                        In group challenges, members vote on proofs – fair, fun, and social habit building.
                    </p>
                </div>

                <div className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl transform hover:scale-105 transition">
                    <h2 className="text-5xl font-bold mb-12">Growing Prize Pools</h2>
                    <p className="text-2xl leading-relaxed">
                        75% of entry fees goes to winners. The more participants, the bigger the rewards!
                    </p>
                </div>

                <div className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl transform hover:scale-105 transition">
                    <h2 className="text-5xl font-bold mb-12">Real-Time Leaderboard</h2>
                    <p className="text-2xl leading-relaxed">
                        Track streaks and rankings live – stay motivated with competition.
                    </p>
                </div>

                <div className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl transform hover:scale-105 transition">
                    <h2 className="text-5xl font-bold mb-12">Secure Payouts</h2>
                    <p className="text-2xl leading-relaxed">
                        Winners receive prizes securely – transparent and reliable.
                    </p>
                </div>
            </div>

            <div className="text-center mt-32">
                <Link href="/" className="bg-white text-purple-700 px-16 py-8 rounded-full text-3xl font-bold hover:bg-gray-100 transition shadow-2xl transform hover:scale-105">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}