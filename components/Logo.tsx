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
        className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 object-contain"
        priority
        unoptimized
      />
    </Link>
  );
}
