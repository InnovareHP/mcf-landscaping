import Footer from "@/components/Footer";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <main className="w-full py-16">
        <div className="mx-[8%] grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
          {/* Left column: contact details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-5xl font-normal leading-tight text-black lg:text-6xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Contact us
              </h1>
              <p className="text-base leading-7 text-gray-700">
                If you have any questions or comments about our services, please
                contact us via email or phone, or send us a message using the
                contact form.
              </p>
            </div>

            <div className="space-y-5 text-gray-800">
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a
                  href="mailto:roy.gingrich@gmail.com"
                  className="mt-1 inline-block text-gray-700 underline underline-offset-4 hover:text-[#2d5016]"
                >
                  roy.gingrich@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold">Phone</p>
                <a
                  href="tel:+16168624331"
                  className="mt-1 inline-block text-gray-700 underline underline-offset-4 hover:text-[#2d5016]"
                >
                  (616) 862-4331
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="https://www.facebook.com/MCFLandscaping/"
                  aria-label="Visit our Facebook page"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition hover:border-[#2d5016] hover:text-[#2d5016]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  aria-label="Visit our Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition hover:border-[#2d5016] hover:text-[#2d5016]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="sr-only" htmlFor="firstName">
                  First Name
                </label>
                <span className="text-xs text-gray-600">
                  Name <span className="text-gray-500">(required)</span>
                </span>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="First Name"
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-[#2d5016] focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="sr-only" htmlFor="lastName">
                  Last Name
                </label>
                <span className="text-xs text-transparent select-none">
                  placeholder
                </span>
                <input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-[#2d5016] focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <span className="text-xs text-gray-600">
                Email <span className="text-gray-500">(required)</span>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-[#2d5016] focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <span className="text-xs text-gray-600">
                Phone <span className="text-gray-500">(required)</span>
              </span>
              <input
                id="phone"
                name="phone"
                required
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-[#2d5016] focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="sr-only" htmlFor="subject">
                Subject
              </label>
              <span className="text-xs text-gray-600">
                Subject <span className="text-gray-500">(required)</span>
              </span>
              <input
                id="subject"
                name="subject"
                required
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-[#2d5016] focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <span className="text-xs text-gray-600">
                Message <span className="text-gray-500">(required)</span>
              </span>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-[#2d5016] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
