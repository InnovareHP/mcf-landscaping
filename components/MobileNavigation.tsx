"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/about") {
      e.preventDefault();
      router.refresh();
    }
    onClose();
  };

  const handleLinkClick = () => {
    setIsProjectsOpen(false);
    onClose();
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 text-gray-700 hover:text-[#2d5016] transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="flex flex-col">
              <Link
                href="/about"
                onClick={handleAboutClick}
                className="px-6 py-4 text-base font-medium text-gray-700 hover:text-[#2d5016] hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                About
              </Link>

              <Link
                href="/work"
                onClick={handleLinkClick}
                className="px-6 py-4 text-base font-medium text-gray-700 hover:text-[#2d5016] hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                Work
              </Link>

              <Link
                href="/services"
                onClick={handleLinkClick}
                className="px-6 py-4 text-base font-medium text-gray-700 hover:text-[#2d5016] hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                Our Services
              </Link>

              {/* Projects Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={toggleProjects}
                  className="w-full flex items-center justify-between px-6 py-4 text-base font-medium text-gray-700 hover:text-[#2d5016] hover:bg-gray-50 transition-colors"
                >
                  <span>Projects</span>
                  {isProjectsOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>

                {isProjectsOpen && (
                  <div className="bg-gray-50">
                    <Link
                      href="/design/residential"
                      onClick={handleLinkClick}
                      className="block px-10 py-3 text-sm text-gray-600 hover:text-[#2d5016] hover:bg-gray-100 transition-colors"
                    >
                      Residential Design
                    </Link>
                    <Link
                      href="/design/commercial"
                      onClick={handleLinkClick}
                      className="block px-10 py-3 text-sm text-gray-600 hover:text-[#2d5016] hover:bg-gray-100 transition-colors"
                    >
                      Commercial Design
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="p-6 border-t border-gray-200">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block w-full text-center rounded bg-black px-6 py-3 text-base font-medium text-white transition-all hover:bg-gray-800 active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
