import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { auth } from '@clerk/nextjs/app-beta';

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const { userId } = auth();
  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-water-blue via-water-cyan to-water-green tracking-tight">
        Webmaker.
      </div>
      <div>{userId}</div>
      <Link href={userId?'/dashboard':'/auth/sign-in'}>Autenticar</Link>
    </div>
  );
}
