import Image from "next/image";

export default function LandscapeServices() {
  return (
    <div className="min-h-screen bg-white text-[#333] pt-24 pb-20 selection:bg-gray-100">
      {/* 8% Margin Wrapper */}
      <div className="mx-[8%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-16">
          {/* Left Column: Our Services */}
          <section className="max-w-xl">
            {/* Kept Serif for Header only */}
            <h1 className="font-serif text-[2.6rem] md:text-[3.2rem] font-light leading-tight mb-8 text-black tracking-tight">
              Our Services
            </h1>
            <p className="leading-[1.7] text-[0.95rem] text-gray-700">
              We offer the following services: general bed
              maintenance/detailing, Spring/Fall clean-up, pruning/hedging, lawn
              weed and feed, sprinkler system activation/winterization, seasonal
              decorations, mulching, mowing, hard scaping, irrigation
              installation, landscape construction (fences/sheds/decks) and
              installation, water features, hydroseeding, property excavation
              and others. For on-site, no cost assessment, please give us a call
              at{" "}
              <span className="whitespace-nowrap font-semibold">
                616-862-4331!
              </span>
            </p>
          </section>

          {/* Right Column: Values */}
          <section className="space-y-14">
            <div>
              <h2 className="font-serif text-[1.8rem] font-light mb-5 text-black tracking-tight">
                Comfortable.
              </h2>
              <p className="leading-[1.7] text-[0.95rem] text-gray-700">
                Designing outdoor spaces should be simple and doesn&apos;t
                necessarily have to alter the natural flow of the environment.
                It&apos;s how we amplify the feel of the existing space? When
                you take inspiration from what&apos;s already there and just
                work your design around it, it creates a calming impression as
                you walk through your yard.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.8rem] font-light mb-5 text-black tracking-tight">
                Memorable.
              </h2>
              <p className="leading-[1.7] text-[0.95rem] text-gray-700">
                Adding an outdoor feature has so many benefits. It draws
                wildlife such as birds and butterflies to the garden, which can
                be calming to observe. When we do a design-build landscape, we
                create it with you. We take note of what&apos;s important to
                you. We understand that you may want to plant spruces and shrubs
                that do not only help control noise pollution but something that
                can create a visual interest to the home - it becomes a
                conversation piece during a gathering.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.8rem] font-light mb-5 text-black tracking-tight">
                Inspiring.
              </h2>
              <div className="leading-[1.7] text-[0.95rem] text-gray-700 space-y-4">
                <p>
                  We&apos;d love for you to see your home in a new light so you
                  can &quot;travel your own backyard!&quot; To ensure that your
                  plants are delivered at the highest quality, we grow them
                  in-house. We have a resident horticulturist who regularly
                  inspects our plants before they are transplanted in your yard.
                </p>
                <p>
                  This gives you a peace of mind that they are healthy and
                  thriving because we know{" "}
                  {/* Styled quote specifically as serif/italic to match image branding */}
                  <a
                    href="https://www.clickandgrow.com/blogs/news/amazing-life-lessons-plants-teach-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif underline decoration-[0.5px] underline-offset-[6px] italic"
                  >
                    &quot;Plants are the unsung heroes of our existence. They
                    help us survive by providing oxygen, food, and shelter. They
                    even heal our wounds.&quot;
                  </a>{" "}
                  Check out these{" "}
                  <a
                    href="https://www.facebook.com/MCFLandscaping/photos/pcb.1425488091214233/1425487514547624"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[0.5px] underline-offset-4 cursor-pointer"
                  >
                    cool sprouts
                  </a>{" "}
                  getting ready for Spring installations for your favorite wine
                  and spirits store - voted best in Grand Rapids,{" "}
                  <a
                    href="https://www.facebook.com/mvwinesgr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-4"
                  >
                    Martha&apos;s Vineyard!
                  </a>{" "}
                  Our custom-build planters are inspired by your unique spaces
                  for you to enjoy!
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Full Width Image */}
        <div className="mt-20">
          <Image
            src="/services/services.webp"
            alt="Services"
            width={1600}
            height={900}
            className="w-full object-cover border-[0.5px] border-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
