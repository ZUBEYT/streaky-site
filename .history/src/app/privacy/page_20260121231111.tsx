// src/app/privacy/page.tsx (Privacy Policy – Detaylı, Dark Mode)
export default function Privacy() {
    return (
        <div className="min-h-screen bg-black text-white py-32 px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-7xl font-extrabold text-center mb-24 drop-shadow-2xl">Privacy Policy</h1>
                <p className="text-2xl text-center mb-16 opacity-90">Last updated: January 2026</p>

                <div className="space-y-20">
                    <section>
                        <h2 className="text-5xl font-bold mb-12">1. Information We Collect</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            - Account info: Email, username.
                            - Challenge data: Participation, streaks, proofs (photos/videos).
                            - Payment info: Processed by our secure partner (we do not store card details).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">2. How We Use Your Information</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            - Provide app features (challenges, voting, payouts).
                            - Verify proofs and distribute prizes.
                            - Improve the app and send notifications.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">3. Data Storage & Security</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            Data stored securely in cloud services. Proofs are private – only visible to admins and group members for voting.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">4. Sharing Your Information</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            We do not sell your data. Shared only with payment processors and as required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">5. Your Rights</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            Access, delete, or export your data – contact support@streakychallenge.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">6. Changes to Policy</h2>
                        <p className="text-2xl leading-relaxed opacity-90">
                            We may update this policy. Continued use means acceptance.
                        </p>
                    </section>
                </div>

                <p className="text-center text-2xl mt-32 opacity-80">Questions? Email support@streakychallenge.com</p>
            </div>
        </div>
    );
}