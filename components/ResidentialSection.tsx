import Link from "next/link";

export default function ResidentialSection() {
  return (
    <div className="w-full py-12 md:py-20">
      <div className="w-full flex flex-col gap-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2
            className="text-4xl font-normal leading-tight text-black md:text-5xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Residential
          </h2>

          {/* UPDATED: Link added to redirect to the residential projects page */}
          <Link href="/design/residential">
            <button className="w-fit rounded bg-black px-8 py-2.5 text-sm font-medium text-white transition-all hover:bg-gray-800 active:scale-95">
              See Project
            </button>
          </Link>
        </div>

        {/* Text Content: Responsive scaling from mobile to 70% desktop */}
        <div className="w-full md:max-w-3xl lg:max-w-[70%] space-y-6 pt-2">
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            We have been serving our West Michigan communities for over 20 years
            since 1999. It&apos;s been decades of creating with you and yet, our
            to-do list of projects seem unending. And, for great reasons!
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            To create is truly innate in all of us. It&apos;s embedded at the
            very core of who are as people. We love to be in spaces that nurture
            creativity and foster growth. We toil with our hands like a potter
            molds clay in many ways or form. Intently, we design our outdoor
            spaces with craftsmanship and style that resonate what&apos;s most
            important to us — our connection with nature and the purpose it
            serves.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            We have helped so many households with their unique tasks and took
            on numerous contemporary builds from the ground up and some
            &quot;DIY-gone wrong&quot; projects. Our landscape professionals
            offer in-person no cost assessment at your most convenient time to
            talk about your goals, timeline, budget and expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
