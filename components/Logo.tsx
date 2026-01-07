import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/work"
      aria-label="Go to Work page"
      /* Increased from h-24/h-28 to h-32/h-40 */
      className="flex h-32 w-32 items-center justify-center md:h-40 md:w-40 transition-transform hover:scale-105"
    >
      <Image
        src="/logo/logo.png"
        alt="MCF Landscaping Logo"
        width={300} // Increased base width
        height={300}
        className="h-full w-full object-contain"
        priority
      />
    </Link>
  );
}
