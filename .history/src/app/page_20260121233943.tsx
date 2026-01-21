// src/app/page.tsx (Home Page – Challenge Listesi Eklendi, Profesyonel Görünüm)
import Link from 'next/link';
import Image from 'next/image';

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

const screenshots = [
  '/screenshot1.png',
  '/screenshot2.png',
  '/screenshot3.png',
  '/screenshot4.png',
  '/screenshot5.png',
  '/screenshot6.png',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Hero */}
      <div className="text-center py-32 px-8">
        <h1 className="text-7xl font-extrabold mb-8 drop-shadow-2xl">Streaky Challenge</h1>
        <p className="text-4xl font-light mb-12 drop-shadow-lg">Build Habits. Win Real Money.</p>
        <p className="text-2xl mb-20 max-w-5xl mx-auto opacity-90 leading-relaxed">
          Join rolling challenges anytime, upload daily proofs, vote on friends' progress, and share 75% of the growing prize pool with winners!
        </p>

        <div className="flex justify-center gap-16 mb-32">
          <Link href="#" className="bg-white text-purple-700 px-16 py-8 rounded-full text-3xl font-bold hover:bg-gray-100 transition shadow-2xl transform hover:scale-105">
            Download on App Store
          </Link>
          <Link href="#" className="bg-white text-purple-700 px-16 py-8 rounded-full text-3xl font-bold hover:bg-gray-100 transition shadow-2xl transform hover:scale-105">
            Download on Google Play
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white/10 py-32 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="bg-white/20 p-16 rounded-3xl text-center backdrop-blur shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-5xl font-bold mb-8">Rolling Participation</h3>
            <p className="text-2xl leading-relaxed">Join anytime – complete your 60-day streak from your start date. No fixed start!</p>
          </div>
          <div className="bg-white/20 p-16 rounded-3xl text-center backdrop-blur shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-5xl font-bold mb-8">Daily Proofs & Vote</h3>
            <p className="text-2xl leading-relaxed">Upload photos/videos daily – community votes for fairness and motivation.</p>
          </div>
          <div className="bg-white/20 p-16 rounded-3xl text-center backdrop-blur shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-5xl font-bold mb-8">Real Money Prizes</h3>
            <p className="text-2xl leading-relaxed">75% of all entry fees goes to winners – secure and transparent payouts.</p>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="py-32 px-8">
        <h2 className="text-6xl font-bold text-center mb-24 drop-shadow-2xl">Available Challenges</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {CHALLENGES.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white/20 p-12 rounded-3xl backdrop-blur shadow-2xl transform hover:scale-105 transition"
              style={{ borderLeft: `8px solid ${challenge.color}` }}
            >
              <div className="text-8xl mb-8 text-center">{challenge.icon}</div>
              <h3 className="text-4xl font-bold mb-6 text-center">{challenge.title}</h3>
              <p className="text-2xl leading-relaxed mb-8 opacity-90">{challenge.description}</p>
              <div className="flex justify-between items-center mt-12">
                <div>
                  <p className="text-xl opacity-80">Duration</p>
                  <p className="text-3xl font-bold">{challenge.duration} Days</p>
                </div>
                <div className="text-right">
                  <p className="text-xl opacity-80">Entry Fee</p>
                  <p className="text-3xl font-bold">
                    {challenge.entryFee === 0 ? 'FREE' : `$${challenge.entryFee}`}
                  </p>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link href="#" className="bg-white text-purple-700 px-12 py-6 rounded-full text-2xl font-bold hover:bg-gray-100 transition inline-block shadow-xl">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshots Carousel */}
      <div className="py-32 px-8 bg-black/20">
        <h2 className="text-6xl font-bold text-center mb-20 drop-shadow-2xl">See Streaky in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {screenshots.map((src, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
              <Image
                src={src}
                alt={`App Screenshot ${i + 1}`}
                width={400}
                height={800}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}