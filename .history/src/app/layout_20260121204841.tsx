import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Streaky Challenge',
  description: 'Build habits and win money with daily streaks!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 text-center">
          <h1 className="text-4xl font-bold">Streaky Challenge</h1>
          <p className="text-xl mt-4">Build Habits. Win Real Money.</p>
        </header>

        <main className="min-h-screen bg-gray-50">
          {children}
        </main>

        <footer className="bg-black text-white p-8 text-center">
          <div className="mb-4">
            <Link href="/" className="mx-4 hover:underline">Home</Link>
            <Link href="/features" className="mx-4 hover:underline">Features</Link>
            <Link href="/about" className="mx-4 hover:underline">About</Link>
            <Link href="/terms" className="mx-4 hover:underline">Terms of Service</Link>
            <Link href="/privacy" className="mx-4 hover:underline">Privacy Policy</Link>
            <Link href="/refund" className="mx-4 hover:underline">Refund Policy</Link>
          </div>
          <p>© 2026 Streaky Challenge. All rights reserved.</p>
          <p className="mt-2">Contact: support@streakychallenge.com</p>
        </footer>
      </body>
    </html>
  );
};