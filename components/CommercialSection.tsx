export default function CommercialSection() {
  return (
    <div className="w-full py-12 md:py-20">
      <div className="flex flex-col gap-8">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2
            className="text-4xl font-normal leading-tight text-black md:text-5xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Commercial
          </h2>
          <button className="w-fit rounded bg-black px-8 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800 active:scale-95">
            See Project
          </button>
        </div>

        {/* Content Body */}
        {/* Removed mr-96 and replaced with a responsive max-width for better readability */}
        <div className="max-w-prose lg:max-w-3xl space-y-6 pt-2">
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            We design custom-built planters for retail, hospitality, and
            business offices. These planters are designed for replaceable
            container inserts to allow for seasonal plant changes. Planters are
            paired with stylish fences to separate seating areas from on-street
            parking. Check out these cool pieces we designed and installed at{" "}
            <span className="font-semibold underline decoration-gray-400 underline-offset-4">
              Lyon&apos;s Street Café!
            </span>
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            We also do indoor landscaping. Here&apos;s a back of stairs
            installation with a mini-water feature at{" "}
            <span className="font-semibold underline decoration-gray-400 underline-offset-4">
              Lacks Enterprises!
            </span>{" "}
            Michigan&apos;s summers are amazing and Lacks Enterprises&apos;
            associates utilize an outdoor gathering space. See it here:{" "}
            <span className="font-semibold underline decoration-gray-400 underline-offset-4">
              outdoor patio.
            </span>
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            MCF Landscaping provides seasonal decoration installation and
            removal for both the interior and exterior of your property. We
            arrive early for projects. Have you seen{" "}
            <span className="font-semibold underline decoration-gray-400 underline-offset-4">
              Martha&apos;s Vineyard
            </span>{" "}
            holiday decoration last season?
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700 border-l-2 border-gray-200 pl-6 italic">
            &quot;Creative space is created by choice, made on purpose and with
            intention.&quot;
            <span className="block not-italic text-sm mt-2 font-semibold text-gray-500">
              — Artworkarchive.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
