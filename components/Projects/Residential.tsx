import Link from "next/link";

export default function Residential() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-8 md:p-24 font-serif">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <h1 className="text-4xl md:text-5xl font-normal text-black">
            Residential Design
          </h1>

          <div className="space-y-6 text-sm leading-relaxed tracking-wide">
            <p>
              Some of the most memorable projects we have created over the years
              include an outdoor
              <Link
                href="https://www.facebook.com/watch/?v=359050366073390"
                target="_blank"
                className="font-bold underline decoration-1 underline-offset-4 ml-1"
              >
                pondless waterfall feature.
              </Link>{" "}
              We turned a flat boring area in a waterfall by creating a hill and
              cutting our water feature into the face of it. Water runs from the
              top, appearing out from under a hidden rocky slab, travels down a
              winding path before landing into a submerged reservoir. Using an
              easy to maintain pondless water fall kit, we're able to offer our
              customer an economical, three-season babbling waterfall to enjoy.
            </p>
            <p>
              Another favorite project that our crew loves to do is
              <Link
                href="https://www.facebook.com/MCFLandscaping/photos/a.428392107590508/1458380557924986/"
                target="_blank"
                className="font-bold underline decoration-1 underline-offset-4 ml-1"
              >
                redesigning an existing landscape.
              </Link>
              We remove a part of the landscape and yard from house to sidewalk
              and add structural framing to the foundation to strengthen the
              build. To keep it more interesting, we installed metal edging for
              a clean, finished look. Welcoming residents up the walkway are
              beautiful landscape beds. Our resident horticulturist orders
              hydroseeding for beautiful, lush grass and brand-new irrigation to
              keep plants happy and healthy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/residential/residential_1.webp"
              alt="Pondless waterfall feature with red flowers"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/residential/residential_2.webp"
              alt="Residential house with manicured landscaping"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/residential/residential_3.webp"
              alt="Residential house with manicured landscaping"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/residential/residential_4.webp"
              alt="Pondless waterfall feature with red flowers"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Section 2: We create with you */}
        <div className="gap-16 md:gap-24 items-start space-y-6">
          <h1 className="text-4xl md:text-5xl font-normal text-black">
            We create with you.
          </h1>

          <div className="text-sm leading-relaxed tracking-wide">
            <p>
              Sometimes, less is more. When a client of ours completely rebuilt
              her home and wanted to incorporate a very large raised driveway to
              the property, we made it happened by adding
              <Link
                href="https://www.facebook.com/MCFLandscaping/photos/424772687952450"
                target="_blank"
                className="font-bold underline decoration-1 underline-offset-4 ml-1"
              >
                a charming and strong retaining wall
              </Link>{" "}
              that holds the driveway in place. With the wall being over a 100
              feet long and 4 feet high, it becomes not just a great solution
              for adding strong support for the raised driveway but also a
              conversation piece.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
