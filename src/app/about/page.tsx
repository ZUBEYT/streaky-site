export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white py-32 px-8">
            <h1 className="text-7xl font-extrabold text-center mb-24 drop-shadow-2xl">About Streaky Challenge</h1>

            <div className="max-w-5xl mx-auto text-center">
                <p className="text-3xl leading-relaxed mb-16">
                    Streaky Challenge is the ultimate habit-building app with real money rewards. We believe true motivation comes from commitment and community.
                </p>

                <p className="text-3xl leading-relaxed mb-16">
                    Join rolling challenges anytime, upload daily proofs, compete in groups with voting, and win from growing prize pools. 75% of all entry fees goes directly to winners.
                </p>

                <p className="text-3xl leading-relaxed mb-32">
                    Whether you're building fitness habits, learning skills, or daily routines – Streaky makes it rewarding and fun.
                </p>

                <div className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl">
                    <h2 className="text-5xl font-bold mb-12">Get in Touch</h2>
                    <p className="text-3xl mb-8">Email: support@streakychallenge.com</p>
                    <p className="text-2xl">We're here to help you succeed!</p>
                </div>
            </div>
        </div>
    );
}