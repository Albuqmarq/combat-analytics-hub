import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Combat Analytics Hub",
  description: "Estatísticas preditivas e Tale of the Tape de MMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${oswald.variable} antialiased selection:bg-mma-blood selection:text-mma-bone`}>
        {/* Navbar */}
        <nav className="border-b-2 border-mma-lead bg-mma-black">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="font-display text-2xl font-bold tracking-wider text-mma-bone uppercase">
              Combat <span className="text-mma-blood">Hub</span>
            </div>
            <div className="flex gap-6 font-body text-sm font-bold uppercase tracking-widest text-mma-steel">
              <a href="/" className="hover:text-mma-bone transition-colors">Arena</a>
              <a href="/fighters" className="hover:text-mma-bone transition-colors">Lutadores</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
