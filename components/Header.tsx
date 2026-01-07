import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-6 md:px-10">
      {/* Increased py-4 to py-6 to give the larger logo breathing room */}
      <div className="w-full py-6">
        <div className="mx-[5%] md:mx-[8%] flex items-center justify-between">
          {/* Logo on the left (now larger via the Logo component) */}
          <Logo />

          {/* Navigation items on the right */}
          <div className="flex items-center gap-10">
            <Navigation />
            <Link
              href="/contact"
              /* Increased padding (px-8 py-3) and font size (text-base) */
              className="hidden sm:inline-block rounded bg-black px-8 py-3 text-base font-medium text-white transition-all hover:bg-gray-800 active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
