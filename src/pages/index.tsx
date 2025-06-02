import { Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistMono.className} grid items-center justify-items-center min-h-screen`}
    >
      <Link className="text-lg text-blue-600 hover:underline" href="/test">
        Go to Test Page
      </Link>
    </div>
  );
}
