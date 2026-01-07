import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-10">
      <div className="w-full py-4">
        <div className="mx-[8%] flex items-center justify-between">
          {/* Logo on the left */}
          <Logo />

          {/* Navigation items on the right */}
          <div className="flex items-center gap-8">
            <Navigation />
            <Link
              href="/contact"
              className="rounded bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
