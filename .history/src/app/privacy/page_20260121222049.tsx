export default function Privacy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white py-32 px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-7xl font-extrabold text-center mb-24 drop-shadow-2xl">Privacy Policy</h1>

                <div className="bg-white/20 p-20 rounded-3xl backdrop-blur shadow-2xl">
                    <p className="text-xl mb-8">Last updated: January 2026</p>
                    <p className="text-2xl leading-relaxed mb-16">
                        Your privacy is important to us at Streaky Challenge.
                    </p>

                    <h2 className="text-5xl font-bold mb-12">1. Data We Collect</h2>
                    <p className="text-2xl leading-relaxed mb-16">
                        - Email and username for account.<br />
                        - Proof photos/videos (private, admin review only).<br />
                        - Payment info (processed securely by Paddle – we don't store card details).<br />
                        - Device and usage data for app improvement.
                    </p>

                    <h2 className="text-5xl font-bold mb-12">2. How We Use Data</h2>
                    <p className="text-2xl leading-relaxed mb-16">
                        To operate challenges, verify proofs, distribute prizes, and improve the app. Data stored securely in Firebase.
                    </p>

                    <h2 className="text-5xl font-bold mb-12">3. Sharing</h2>
                    <p className="text-2xl leading-relaxed mb-16">
                        We do not sell your data. Shared only with Paddle for payments and admins for verification.
                    </p>

                    <h2 className="text-5xl font-bold mb-12">4. Your Rights</h2>
                    <p className="text-2xl leading-relaxed mb-32">
                        Access, delete, or export your data – contact support@streakychallenge.com. GDPR/CCPA compliant.
                    </p>

                    <p className="text-2xl text-center">Questions? Email us anytime.</p>
                </div>
            </div>
        </div>
    );
}