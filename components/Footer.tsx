import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16 w-full overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0 bg-[url('/footer/footer-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-white/75" />

      <div className="relative flex w-full items-center justify-center px-6 py-14">
        <div className="flex w-full max-w-6xl flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Contact info */}
          <div className="flex flex-col items-center gap-2 text-sm text-gray-700 lg:items-start">
            <a
              href="mailto:roy.gingrich@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-[#2d5016]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>roy.gingrich@gmail.com</span>
            </a>
            <a
              href="tel:+16168624331"
              className="flex items-center gap-2 transition-colors hover:text-[#2d5016]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>(616) 862-4331</span>
            </a>
          </div>

          {/* Logo and brand text */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-4">
              <Image
                src="/footer/logo-no-bg.png"
                alt="MCF Landscaping Logo"
                width={310}
                height={310}
                className="h-120 w-120 object-contain"
              />
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Visit our Facebook page"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-[#1f5f2b]"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="#"
              aria-label="Visit our Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-[#1f5f2b]"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
