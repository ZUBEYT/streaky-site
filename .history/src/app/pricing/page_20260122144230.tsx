const CHALLENGES = [
    {
        id: "test-free-1",
        title: "7 Gün Ücretsiz Test Challenge",
        duration: 7,
        entryFee: 0,
        icon: "🧪",
        color: "#6C63FF",
        description: "Bu tamamen ücretsiz test challenge'ı! Her gün bir selfie yükle ve sistemi test et.",
    },
    {
        id: "1",
        title: "30 Days Early Wake Up (05:30)",
        duration: 30,
        entryFee: 5,
        icon: "🌅",
        color: "#FF9500",
        description: "Wake up at 05:30 every morning and take a selfie!",
    },
    {
        id: "2",
        title: "66 Days Workout",
        duration: 66,
        entryFee: 10,
        icon: "🏋️",
        color: "#FF6B6B",
        description: "Exercise at least 30 minutes daily + proof photo/video",
    },
    {
        id: "3",
        title: "100 Days Read a Book",
        duration: 100,
        entryFee: 15,
        icon: "📚",
        color: "#4ECDC4",
        description: "Read at least 20 pages every day, take a photo",
    },
    {
        id: "4",
        title: "21 Days Phone Off at 22:00",
        duration: 21,
        entryFee: 7,
        icon: "📵",
        color: "#6C63FF",
        description: "Phone screen off after 22:00 every night",
    },
    {
        id: "5",
        title: "30 Days Drink 3L Water",
        duration: 30,
        entryFee: 6,
        icon: "💧",
        color: "#45B7D1",
        description: "Drink 3 liters of water daily and prove it",
    },
    {
        id: "6",
        title: "75 Hard Challenge",
        duration: 75,
        entryFee: 20,
        icon: "🔥",
        color: "#F39C12",
        description: "Original 75 Hard rules (very tough!)",
    },
    {
        id: "7",
        title: "30 Days Meditation",
        duration: 30,
        entryFee: 6,
        icon: "🧘",
        color: "#9B59B6",
        description: "Meditate 10 minutes every day",
    },
    {
        id: "8",
        title: "100 Days Language Learning",
        duration: 100,
        entryFee: 0,
        icon: "🌍",
        color: "#1ABC9C",
        description: "Daily Duolingo/Anki screenshot",
    },
    {
        id: "9",
        title: "30 Days No Sugar",
        duration: 30,
        entryFee: 0,
        icon: "🍬",
        color: "#E74C3C",
        description: "No sugary drinks or food",
    },
    {
        id: "10",
        title: "NoFap 90 Days",
        duration: 90,
        entryFee: 25,
        icon: "🧠",
        color: "#2ECC71",
        description: "90 days of self-control",
    },
];

export default function Pricing() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white py-32 px-8">
            <h1 className="text-7xl font-extrabold text-center mb-24 drop-shadow-2xl">Challenges & Pricing</h1>

            <p className="text-3xl text-center mb-32 max-w-5xl mx-auto opacity-90 leading-relaxed">
                Choose a challenge, pay the one-time entry fee, complete the full duration with daily approved proofs, and win from the prize pool (75% distributed to winners).
            </p>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {CHALLENGES.map((challenge) => (
                    <div
                        key={challenge.id}
                        className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl transform hover:scale-105 transition"
                        style={{ borderLeft: `10px solid ${challenge.color}` }}
                    >
                        <div className="text-9xl mb-12 text-center">{challenge.icon}</div>
                        <h3 className="text-5xl font-bold mb-8 text-center">{challenge.title}</h3>
                        <p className="text-2xl leading-relaxed mb-12 opacity-90 text-center">{challenge.description}</p>
                        <div className="grid grid-cols-2 gap-8 mb-16">
                            <div className="text-center">
                                <p className="text-xl opacity-80">Duration</p>
                                <p className="text-4xl font-bold">{challenge.duration} Days</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl opacity-80">Entry Fee</p>
                                <p className="text-4xl font-bold">
                                    {challenge.entryFee === 0 ? 'FREE' : `$${challenge.entryFee}`}
                                </p>
                            </div>
                        </div>
                        <p className="text-xl text-center opacity-90 mb-12">
                            Winners share 75% of the total prize pool!
                        </p>
                        <div className="text-center">
                            <Link href="#" className="bg-white text-purple-700 px-16 py-8 rounded-full text-3xl font-bold hover:bg-gray-100 transition inline-block shadow-2xl">
                                Join Challenge
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}