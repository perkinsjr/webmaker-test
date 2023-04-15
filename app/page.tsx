import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-water-blue via-water-cyan to-water-green tracking-tight">Webmaker.</div>
      <Link href="/my-project">Get started</Link>
    </div>
  );
}
