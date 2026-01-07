import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/work"
      aria-label="Go to Work page"
      className="flex h-24 w-24 items-center justify-center md:h-28 md:w-28"
    >
      <Image
        src="/logo/logo.png"
        alt="MCF Landscaping Logo"
        width={200}
        height={200}
        className="h-full w-full object-contain"
        priority
      />
    </Link>
  );
}
