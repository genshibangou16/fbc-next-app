import Link from "next/link";
import { Geist_Mono } from "next/font/google";
import Image from "next/image";
import styles from "./test.module.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function TestPage() {
  return (
    <div
      className={`${geistMono.className} min-h-screen pt-16`}
      id={styles.container}
    >
      <div className="w-40 h-40 relative">
        <Image
          src={"/bedf3ef793988a02900e4f9bec0cc8e6-15.jpg"}
          alt="Test Image"
          fill
          sizes="160px"
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <Link className="text-lg text-blue-600 hover:underline" href="/">
        Go back to Home
      </Link>
    </div>
  );
}
