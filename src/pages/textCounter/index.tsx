import Link from "next/link";
import TextCounter from "@/components/TextCounter";

export default function TextCounterPage() {
  return (
    <div className="pt-16 flex flex-col items-center">
      <h1 className="text-2xl">Text Counter</h1>
      <TextCounter />
      <Link className="text-lg text-blue-600 hover:underline" href="/">
        Go back to Home
      </Link>
    </div>
  );
}
