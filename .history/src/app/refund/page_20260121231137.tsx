// src/app/refund/page.tsx (Refund Policy – Kısa ve Net, Dark Mode)
export default function Refund() {
    return (
        <div className="min-h-screen bg-black text-white py-32 px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-7xl font-extrabold text-center mb-24 drop-shadow-2xl">Refund Policy</h1>
                <p className="text-2xl text-center mb-16 opacity-90">Last updated: January 2026</p>

                <div className="space-y-20">
                    <section>
                        <h2 className="text-5xl font-bold mb-12">No Refunds After Joining</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            Entry fees are committed to prize pools immediately upon joining a paid challenge. Therefore, no refunds are available once you participate.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">Technical Issues</h2>
                        <p className="text-2xl leading-relaxed opacity-90 mb-8">
                            If you experience technical problems preventing participation, contact support within 24 hours for review.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-5xl font-bold mb-12">Payment Processor</h2>
                        <p className="text-2xl leading-relaxed opacity-90">
                            Payments are processed securely by our partner. Their terms apply for disputes.
                        </p>
                    </section>
                </div>

                <p className="text-center text-2xl mt-32 opacity-80">Contact support@streakychallenge.com for assistance.</p>
            </div>
        </div>
    );
}