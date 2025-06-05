import { Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistMono.className} flex flex-col gap-3 justify-center items-center min-h-screen pt-16`}
    >
      <Link className="text-lg text-blue-600 hover:underline" href="/test">
        Go to Test Page
      </Link>
      <Link className="text-lg text-blue-600 hover:underline" href="/static">
        Go to Static Page
      </Link>
      <Link className="text-lg text-blue-600 hover:underline" href="/forecast">
        Go to Forecast Page
      </Link>
      <Link
        className="text-lg text-blue-600 hover:underline"
        href="/textCounter"
      >
        Go to Text Counter
      </Link>
      <Link className="text-lg text-blue-600 hover:underline" href="/form">
        Go to Form Page
      </Link>
    </div>
  );
}
