import Link from "next/link";
import Footer from "../Footer";

export default function Residential() {
  return (
    // Wrap in a flex container to push footer to bottom if content is short
    <div
      className="flex flex-col min-h-screen bg-white"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Main Content Area */}
      <main className="flex-grow pt-16 md:pt-24 pb-24 mx-[8%]">
        <div className="space-y-24">
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <h1 className="text-4xl md:text-5xl font-light text-black font-serif tracking-tight">
              Residential Design
            </h1>

            <div className="space-y-6 text-[0.95rem] leading-[1.8] text-gray-700">
              <p>
                Some of the most memorable projects we have created over the
                years include an outdoor
                <Link
                  href="https://www.facebook.com/watch/?v=359050366073390"
                  target="_blank"
                  className="font-bold underline decoration-1 underline-offset-4 ml-1 hover:text-[#2d5016]"
                >
                  pondless waterfall feature.
                </Link>{" "}
                We turned a flat boring area in a waterfall by creating a hill
                and cutting our water feature into the face of it. Water runs
                from the top, appearing out from under a hidden rocky slab,
                travels down a winding path before landing into a submerged
                reservoir. Using an easy to maintain pondless water fall kit,
                we&apos;re able to offer our customer an economical,
                three-season babbling waterfall to enjoy.
              </p>
              <p>
                Another favorite project that our crew loves to do is
                <Link
                  href="https://www.facebook.com/MCFLandscaping/photos/a.428392107590508/1458380557924986/"
                  target="_blank"
                  className="font-bold underline decoration-1 underline-offset-4 ml-1 hover:text-[#2d5016]"
                >
                  redesigning an existing landscape.
                </Link>{" "}
                We remove a part of the landscape and yard from house to
                sidewalk and add structural framing to the foundation to
                strengthen the build. To keep it more interesting, we installed
                metal edging for a clean, finished look.
              </p>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden border-[0.5px] border-gray-100">
              <img
                src="/residential/residential_1.webp"
                alt="Pondless waterfall feature"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border-[0.5px] border-gray-100">
              <img
                src="/residential/residential_2.webp"
                alt="Residential house"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border-[0.5px] border-gray-100">
              <img
                src="/residential/residential_3.webp"
                alt="Residential house"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border-[0.5px] border-gray-100">
              <img
                src="/residential/residential_4.webp"
                alt="Pondless waterfall feature"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <h1 className="text-4xl md:text-5xl font-light text-black font-serif tracking-tight">
              We create with you.
            </h1>

            <div className="text-[0.95rem] leading-[1.8] text-gray-700">
              <p>
                Sometimes, less is more. When a client of ours completely
                rebuilt her home and wanted to incorporate a very large raised
                driveway to the property, we made it happened by adding
                <Link
                  href="https://www.facebook.com/MCFLandscaping/photos/424772687952450"
                  target="_blank"
                  className="font-bold underline decoration-1 underline-offset-4 ml-1 hover:text-[#2d5016]"
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

      {/* Footer is now completely outside the main content divs */}
      <Footer />
    </div>
  );
}
