export default function Features() {
    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-16">Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-12 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Rolling Challenges</h2>
                    <p>Join anytime – complete 60-day streak from your start date.</p>
                </div>
                <div className="bg-white p-12 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Prize Pools</h2>
                    <p>75% of entry fees to winners – real money payouts.</p>
                </div>
                <div className="bg-white p-12 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Proof Verification</h2>
                    <p>Upload daily photos/videos – community vote for fairness.</p>
                </div>
                <div className="bg-white p-12 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Leaderboard</h2>
                    <p>Track streaks and rankings in real-time.</p>
                </div>
            </div>
        </div>
    );
}