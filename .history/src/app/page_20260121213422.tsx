import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Hero */}
      <div className="text-center my-16">
        <h2 className="text-5xl font-bold text-gray-800 mb-8">Join Challenges, Build Streaks, Win Prize Pools!</h2>
        <p className="text-2xl text-gray-600 mb-12">Upload daily proofs, compete with friends, share 75% of the pool with winners.</p>
        <div className="flex justify-center gap-8">
          <Link href="#" className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-700">Download on App Store(Coming Soon)</Link>
          <Link href="#" className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-700">Download on Google Play(Coming Soon)</Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-24">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Rolling Participation</h3>
          <p>Join anytime – complete 60-day streak from your start date.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Daily Proofs & Vote</h3>
          <p>Upload photos/videos – community votes for fairness.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Real Money Prizes</h3>
          <p>75% of entry fees to winners – secure payouts via Paddle.</p>
        </div>
      </div>

      {/* Screenshots Placeholder */}
      <div className="my-24 text-center">
        <h2 className="text-4xl font-bold mb-12">App Screenshots</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Placeholder images – gerçek screenshot'ları ekle */}
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
        </div>
      </div>
    </div>
  );
};