import Link from "next/link";

export default function CommercialSection() {
  return (
    <div className="w-full py-12 md:py-20">
      <div className="w-full flex flex-col gap-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2
            className="text-4xl font-normal leading-tight text-black md:text-5xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Commercial
          </h2>

          {/* UPDATED: Button now redirects to the project page */}
          <Link href="/design/commercial">
            <button className="w-fit rounded bg-black px-8 py-2.5 text-sm font-medium text-white transition-all hover:bg-gray-800 active:scale-95">
              See Project
            </button>
          </Link>
        </div>

        {/* Text Content: Matching 70% width */}
        <div className="w-full md:max-w-3xl lg:max-w-[70%] space-y-6 pt-2">
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Creative and inviting retail and hospitality spaces and business
            offices start with custom-build planters that are perfectly sized
            for our replaceable container inserts. This allows us to exchange
            colorful, cohesive and low maintenance seasonal plants throughout
            the year. Some of our planters are paired up with stylish fence to
            separate the seating area from the on-street parking. Check out
            these cool pieces we designed and installed at{" "}
            <Link
              href="https://www.facebook.com/mvwinesgr/photos/4062727853754412"
              className="font-semibold underline"
              target="_blank"
            >
              Lyon&apos;s Street Café!
            </Link>
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            We also do indoor landscaping to maximize space. Take a peek at our
            back of stairs installation -{" "}
            <a
              href="https://www.facebook.com/MCFLandscaping/photos/a.459768751119510/1420648475031528/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2d5016] transition-colors"
            >
              we added a{" "}
              <span className="font-semibold underline">
                mini-water feature at Lacks Enterprises!
              </span>
            </a>{" "}
            When staff visits the café, they’ll have this in the space to enjoy.
            Michigan has one of the best summers in the country and when the sun
            is up, Lacks Enterprises’ associates take advantage of this outdoor
            gathering space that we built and maintain. See it here:{" "}
            <a
              className="font-semibold underline cursor-pointer hover:text-[#2d5016] transition-colors"
              href="https://www.instagram.com/p/BgFZf3lgF1h/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              outdoor patio.
            </a>
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Hanging decorations for your store? We got you! MCF Landscaping
            provides seasonal decoration installation and removal for both the
            interior and exterior of your property. With this type of project,
            we arrive early at the site to have everything done and out of the
            way before your business opens. Have you seen{" "}
            <a
              href="https://www.facebook.com/mvwinesgr/photos/5437873096239874"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2d5016] transition-colors"
            >
              <span className="font-semibold underline">
                Martha&apos;s Vineyard
              </span>
            </a>{" "}
            holiday decoration last season?
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700 ">
            Designing your commercial spaces has to be intentional and attuned
            with your set goals for your clients, employees and brand. Adding
            amenities such as tables and chairs would encourage people to
            hangout and stick around for a little longer. We have seen many
            establishments finding it out that when they add more plants,
            planters and other landscape features, they attract more people.
            Artworkarchive.com couldn’t be more right when they wrote,{" "}
            <a
              href="https://www.artworkarchive.com/blog/increase-your-creativity-with-simple-space-design"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2d5016] transition-colors"
            >
              <span className="underline italic">
                &quot;Creative space is created by choice, made on purpose and
                with intention.&quot;
              </span>
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
