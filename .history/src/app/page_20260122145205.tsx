import Link from 'next/link';
import Image from 'next/image';

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
          <div className="bg-white/30 text-white px-16 py-8 rounded-full text-3xl font-bold cursor-not-allowed opacity-70 shadow-2xl">
            Coming Soon on App Store
          </div>
          <div className="bg-white/30 text-white px-16 py-8 rounded-full text-3xl font-bold cursor-not-allowed opacity-70 shadow-2xl">
            Coming Soon on Google Play
          </div>
        </div>



        {/* See Challenges Button */}
        <Link href="/pricing" className="bg-white text-purple-700 px-20 py-10 rounded-full text-4xl font-bold hover:bg-gray-100 transition shadow-2xl transform hover:scale-105 inline-block">
          View All Challenges & Pricing
        </Link>
      </div>

      {/* Features */}
      <div className="bg-white/10 py-32 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="bg-white/20 p-16 rounded-3xl text-center backdrop-blur shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-5xl font-bold mb-8">Rolling Participation</h3>
            <p className="text-2xl leading-relaxed">Join anytime – complete your streak from your start date.</p>
          </div>
          <div className="bg-white/20 p-16 rounded-3xl text-center backdrop-blur shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-5xl font-bold mb-8">Daily Proofs & Vote</h3>
            <p className="text-2xl leading-relaxed">Upload proofs daily – community votes for fairness.</p>
          </div>
          <div className="bg-white/20 p-16 rounded-3xl text-center backdrop-blur shadow-2xl transform hover:scale-105 transition">
            <h3 className="text-5xl font-bold mb-8">Real Money Prizes</h3>
            <p className="text-2xl leading-relaxed">75% of entry fees to winners – secure payouts.</p>
          </div>
        </div>
      </div>

      {/* Screenshots */}
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