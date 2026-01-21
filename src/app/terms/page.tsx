// src/app/terms/page.tsx (Terms of Service – Duolingo Benzeri Detaylı, Dark Mode)
export default function Terms() {
    return (
        <div className="min-h-screen bg-black text-white py-32 px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-7xl font-extrabold text-center mb-24 drop-shadow-2xl">Terms of Service</h1>
                <p className="text-2xl text-center mb-16 opacity-90">Last updated: January 2026</p>

                <div className="space-y-20">
                    <section>
                        <h2 className="text-5xl font-bold mb-12">1. Acceptance of Terms</h2>
                        <p className="text-2xl leading-relaxed opacity-90">
                            By accessing or using Streaky Challenge (the "App"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the App.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">2. Eligibility</h2>
                        <p className="text-2xl leading-relaxed opacity-90">
                            You must be at least 18 years old to participate in paid challenges or receive prizes. Users under 18 may use free features with parental consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">3. Challenges & Participation</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            Challenges are rolling – join anytime. To win, complete the full duration (e.g., 60 days) of daily approved proofs from your join date.
                        </p>
                        <p className="text-2xl leading-relaxed opacity-90">
                            Entry fees contribute to prize pools. No guarantee of winnings – prizes depend on participation and completion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">4. Proofs & Verification</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            Upload daily photos/videos as proof. In group challenges, community votes determine approval.
                        </p>
                        <p className="text-2xl leading-relaxed opacity-90">
                            Admins reserve the right to reject proofs or ban users for fraud, inappropriate content, or violations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">5. Prize Pools & Payouts</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            75% of entry fees forms the winners pool, 25% is platform commission.
                        </p>
                        <p className="text-2xl leading-relaxed opacity-90">
                            Prizes distributed to streak completers. Payouts processed securely via our payment partner.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">6. Refunds & Cancellations</h2>
                        <p className="text-2xl leading-relaxed opacity-90">
                            No refunds after joining a paid challenge (fee committed to prize pool). See Refund Policy for details.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">7. User Conduct</h2>
                        <p className="text-2xl leading-relaxed opacity-90">
                            No cheating, harassment, or inappropriate proofs. Violations may result in ban and prize forfeiture.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">8. Changes to Terms</h2>
                        <p className="text-2xl leading-relaxed opacity-90">
                            We may update these terms. Continued use constitutes acceptance.
                        </p>
                    </section>
                </div>

                <p className="text-center text-2xl mt-32 opacity-80">Contact: support@streakychallenge.com for questions.</p>
            </div>
        </div>
    );
}