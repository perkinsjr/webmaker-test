import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>Hello World</div>
      <Link href="/my-project">Get started</Link>
    </div>
  );
}
