export default function ResidentialSection() {
  return (
    <div className="w-full py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Column - Heading and Text */}
        <div className="flex-1 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <h2
              className="text-3xl font-normal leading-tight text-black lg:text-4xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Residential
            </h2>
            <button className="rounded bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 lg:mt-2">
              See Project
            </button>
          </div>

          <div className="space-y-6 pt-2">
            <p className="text-base leading-7 text-gray-700">
              We have been serving our West Michigan communities for over 20
              years since 1999. It&apos;s been decades of creating with you and
              yet, our to-do list of projects seem unending. And, for great
              reasons!
            </p>
            <p className="text-base leading-7 text-gray-700">
              To create is truly innate in all of us. It&apos;s embedded at the
              very core of who are as people. We love to be in spaces that
              nurture creativity and foster growth. We toil with our hands like
              a potter molds clay in many ways or form. Intently, we design our
              outdoor spaces with craftmanship and style that resonate
              what&apos;s most important to us - our connection with nature and
              the purpose it serves.
            </p>
            <p className="text-base leading-7 text-gray-700">
              We have helped so many households with their unique tasks and took
              on numerous contemporary builds from the ground up and some
              &quot;DIY-gone wrong&quot; projects. Our landscape professionals
              offer in-person no cost assessment at your most convenient time to
              talk about your goals, timeline, budget and expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
