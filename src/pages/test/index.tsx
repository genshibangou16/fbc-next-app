import Link from "next/link";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function TestPage() {
  return (
    <div
      className={` ${geistMono.className} flex flex-col gap-4 items-center justify-center min-h-screen pt-16`}
    >
      <Link className="text-lg text-blue-600 hover:underline" href="/">
        Go back to Home
      </Link>
    </div>
  );
}
