export default function Refund() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white py-32 px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-7xl font-extrabold text-center mb-24 drop-shadow-2xl">Refund Policy</h1>

                <div className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl">
                    <p className="text-xl mb-8">Last updated: January 2026</p>
                    <p className="text-2xl leading-relaxed mb-16">
                        Streaky Challenge is a digital habit-building service with prize pools.
                    </p>

                    <h2 className="text-5xl font-bold mb-12">No Refunds After Joining</h2>
                    <p className="text-2xl leading-relaxed mb-16">
                        Entry fees are committed to prize pools immediately. No refunds after joining a paid challenge.
                    </p>

                    <h2 className="text-5xl font-bold mb-12">Exceptions</h2>
                    <p className="text-2xl leading-relaxed mb-16">
                        Technical issues preventing participation – contact support within 24 hours for review.
                    </p>

                    <h2 className="text-5xl font-bold mb-12">Payments</h2>
                    <p className="text-2xl leading-relaxed mb-32">
                        Processed by Paddle – their terms apply for disputes.
                    </p>

                    <p className="text-2xl text-center">Contact support@streakychallenge.com for assistance.</p>
                </div>
            </div>
        </div>
    );
}