import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      <Link
        href="/about"
        className="text-sm font-medium text-gray-700 hover:text-[#2d5016]"
      >
        About
      </Link>
      <Link
        href="/work"
        className="text-sm font-medium text-gray-700 hover:text-[#2d5016]"
      >
        Work
      </Link>
      <a
        href="#"
        className="text-sm font-medium text-gray-700 hover:text-[#2d5016]"
      >
        Our Services
      </a>
      <a
        href="#"
        className="text-sm font-medium text-gray-700 hover:text-[#2d5016]"
      >
        Projects
      </a>
    </nav>
  );
}
