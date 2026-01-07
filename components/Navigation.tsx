import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      className="hidden items-center gap-8 md:flex font-sans"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <Link
        href="/about"
        className="text-sm font-medium text-gray-700 hover:text-[#2d5016] transition-colors"
      >
        About
      </Link>
      <Link
        href="/work"
        className="text-sm font-medium text-gray-700 hover:text-[#2d5016] transition-colors"
      >
        Work
      </Link>
      <Link
        href="/services"
        className="text-sm font-medium text-gray-700 hover:text-[#2d5016] transition-colors"
      >
        Our Services
      </Link>

      {/* Projects Dropdown Container */}
      <div className="relative group py-2">
        {/* CHANGED: href now points directly to residential */}
        <Link
          href="/design/residential"
          className="text-sm font-medium text-gray-700 hover:text-[#2d5016] transition-colors"
        >
          Projects
        </Link>

        {/* Dropdown Menu */}
        <div className="absolute left-0 top-full w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
          <div className="rounded-sm border border-gray-100 bg-white py-2 shadow-xl">
            <Link
              href="/design/residential"
              className="block px-4 py-3 text-[11px] tracking-widest uppercase text-gray-600 hover:bg-gray-50 hover:text-[#2d5016] transition-colors"
            >
              Residential Design
            </Link>
            <Link
              href="/design/commercial"
              className="block px-4 py-3 text-[11px] tracking-widest uppercase text-gray-600 hover:bg-gray-50 hover:text-[#2d5016] transition-colors"
            >
              Commercial Design
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
