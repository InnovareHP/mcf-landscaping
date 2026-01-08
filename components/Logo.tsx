import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/work"
      aria-label="Go to Work page"
      className="flex items-center justify-center transition-transform hover:scale-105"
    >
      <Image
        src="/logo/logo.png"
        alt="MCF Landscaping Logo"
        width={400}
        height={200}
        className="object-contain"
        priority
        unoptimized
      />
    </Link>
  );
}
