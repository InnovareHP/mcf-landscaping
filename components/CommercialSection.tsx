export default function CommercialSection() {
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
              Commercial
            </h2>
            <button className="rounded bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 lg:mt-2">
              See Project
            </button>
          </div>

          <div className="space-y-6 pt-2 mr-96">
            <p className="text-base leading-7 text-gray-700">
              We design custom-built planters for retail, hospitality, and
              business offices. These planters are designed for replaceable
              container inserts to allow for seasonal plant changes. Planters
              are paired with stylish fences to separate seating areas from
              on-street parking. Check out these cool pieces we designed and
              installed at{" "}
              <span className="font-semibold underline">
                Lyon&apos;s Street Café!
              </span>
            </p>
            <p className="text-base leading-7 text-gray-700">
              We also do indoor landscaping. Here&apos;s a back of stairs
              installation with a mini-water feature at{" "}
              <span className="font-semibold underline">
                Lacks Enterprises!
              </span>{" "}
              Michigan&apos;s summers are amazing and Lacks Enterprises&apos;
              associates utilize an outdoor gathering space. See it here:{" "}
              <span className="font-semibold underline">outdoor patio.</span>
            </p>
            <p className="text-base leading-7 text-gray-700">
              MCF Landscaping provides seasonal decoration installation and
              removal for both the interior and exterior of your property. We
              arrive early for projects. Have you seen{" "}
              <span className="font-semibold underline">
                Martha&apos;s Vineyard
              </span>{" "}
              holiday decoration last season?
            </p>
            <p className="text-base leading-7 text-gray-700">
              We design commercial spaces with intention and alignment with your
              client, employee, and brand goals. Adding amenities like tables,
              chairs, plants, planters, and other landscape features encourages
              people to stay longer and attracts more visitors.{" "}
              <span className="font-semibold">
                &quot;Creative space is created by choice, made on purpose and
                with intention.&quot;
              </span>{" "}
              - Artworkarchive.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
