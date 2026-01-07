import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-24">
      {/* Left Column - Heading + Image Grid */}
      <div className="flex flex-col gap-10">
        <h2
          className="text-5xl font-normal leading-tight text-black lg:text-7xl"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Who We Are
        </h2>

        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/about/Adam.jpg"
              alt="MCF Landscaping team enjoying time together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 32vw, 100vw"
              priority
            />
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/about/Bj.jpg"
              alt="MCF Landscaping team on site"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 32vw, 100vw"
            />
          </div>

          <div className="relative col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/about/Roy.jpg"
                alt="MCF Landscaping crew member at work"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 32vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Body Text */}
      <div className="space-y-6 pt-2 text-base leading-7 text-gray-700">
        <p>
          Hello! We&apos;re glad you&apos;re here. We are{" "}
          <Link
            href="https://www.facebook.com/MCFLandscaping/"
            className="font-semibold underline decoration-2 underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            MCF Landscaping LLC
          </Link>
          ! We are your team of reliable local landscape professionals in West
          Michigan creating outdoor spaces that are comfortable, memorable and
          inspiring since 1999.
        </p>
        <p>
          The past two years of MCF Landscaping have been some of the most
          challenging ones. COVID-19 has shaped our sort of
          &quot;landscape.&quot; Availability of supplies and inventories were
          the biggest hurdles we have faced as a company. Another pressing
          concern that we share with almost everyone in our field is managing
          staffing fluctuations – putting more weights on our already burdened
          shoulders. But in spite of all these, we remain tough-minded
          optimists. The situation only made us more excited to keep moving
          forward. And in this terrain of the &quot;new normal,&quot; we train
          and assemble a reliable, skilled and vibrant landscape crew.
        </p>
        <p>
          Each year, we put in our books promising initiatives. We added more
          people into our family and opened doors to widen our reach. We have
          increased our digital efforts and also sharpened our visuals and
          company messaging – ensuring that our mission is articulated clearly
          and everyone is represented respectfully.
        </p>
        <p>
          In all of it, the credit should be given to our team of dedicated,
          passionate and hardworking landscape crew. Rain or shine, they show up
          in their best self to finish our clients&apos; projects timely and
          with the highest quality.
        </p>
      </div>
    </section>
  );
}
