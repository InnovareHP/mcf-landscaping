import Link from "next/link";

export default function CommercialDesign() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-8 md:p-24 font-serif">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Section: Commercial Design Header & Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <h1 className="text-4xl md:text-5xl font-normal text-black">
            Commercial Design
          </h1>

          <div className="space-y-8 text-sm leading-relaxed tracking-wide">
            <p>
              We're often quizzed, "What's a beautiful, calming, and easy to
              maintain, outdoor space feature for homes, restaurants and
              businesses?" Our answer -
              <Link
                href="https://www.facebook.com/watch/?v=366265805641155"
                target="_blank"
                className="font-bold underline decoration-1 underline-offset-4 ml-1"
              >
                a pondless waterfall!
              </Link>{" "}
              It gives people that zen vibe and it makes a whole lot of
              difference for consumers.
            </p>

            {/* Video Placeholder */}
            <div className="relative aspect-video bg-gray-200 group cursor-pointer overflow-hidden border border-gray-100 shadow-sm">
              <img
                src="/path-to-video-thumbnail.jpg"
                alt="MCF Landscaping Video Preview"
                className="object-cover w-full h-full opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/70 transition-colors">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-xs font-sans">
                00:00 / 00:45
              </div>
            </div>

            <p>
              We're proponents of simple, easy to maintain landscaping. Our
              commercial projects would always involve three appealing aspects
              of our design-build system: structurally sound and collaborative
              execution, congruent pops of colors to inspire a conversation, and
              comfortable placements of landscape elements - enough for people
              to stay.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/commercial/commercial_1.webp"
              alt="Pondless waterfall feature with red flowers"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/commercial/commercial_2.webp"
              alt="Residential house with manicured landscaping"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/commercial/commercial_3.webp"
              alt="Residential house with manicured landscaping"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Section: Detailed Commercial Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-24 items-start pt-12">
          <h2 className="text-3xl md:text-4xl font-normal leading-tight text-black col-span-2 max-w-sm">
            Our commercial projects would always involve three appealing aspects
            of our design-build system: structurally sound and collaborative
            execution, congruent pops of colors to inspire a conversation, and
            comfortable placements of landscape elements - enough for people to
            stay.
          </h2>

          <div className="space-y-6 text-sm leading-relaxed tracking-wide col-span-3">
            <p>
              Another question that has always been a part of our no cost,
              in-person discussions would have to be about pavers. We love
              installing pavers in restaurants and homes. They are a charming
              addition to hangout spaces. Some may think, installing pavers
              seems easy - like solving a puzzle. It's definitely not!
            </p>

            <Link
              href="https://jsbrickcorporation.com/how-to-keep-pavers-from-shifting/"
              target="_blank"
              className="italic underline decoration-1 underline-offset-4"
            >
              "While a paved surface can be a nice and "fast" addition...,
              installing one is not easy at all, it requires planning a lot
              work, and attention to the details. If the installation is not
              done properly, with time the pavers are going to move, sink, and
              shift."
            </Link>

            <p>
              Whether your project involves upgrading your planters or more
              structurally inclined - such as a paver or a water feature
              installation, we're here to help create that strategic space for
              your clients to enjoy!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
