"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-gray-200 bg-white px-6 md:px-10">
      {/* Increased py-4 to py-6 to give the larger logo breathing room */}
      <div className="w-full py-6">
        <div className="my-[1%] md:my-[2%] flex items-center justify-between">
          {/* Logo on the left (now larger via the Logo component) */}
          <Logo />

          {/* Desktop Navigation items on the right */}
          <div className="hidden lg:flex items-center gap-10">
            <Navigation />
            <Link
              href="/contact"
              /* Increased padding (px-8 py-3) and font size (text-base) */
              className="rounded bg-black px-8 py-3 text-base font-medium text-white transition-all hover:bg-gray-800 active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-[#2d5016] transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Menu */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </header>
  );
}
