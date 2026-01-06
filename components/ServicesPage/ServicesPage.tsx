import Image from 'next/image';
import React from 'react';

export default function LandscapeServices() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 font-serif space-y-8">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Left Column: Services */}
        <section>
          <h1 className="text-6xl font-normal mb-8 text-black">Our Services</h1>
          <p className="leading-relaxed text-lg tracking-wide">
            We offer the following services: general bed maintenance/detailing, Spring/Fall clean-up,
            pruning/hedging, lawn weed and feed, sprinkler system activation/winterization,
            seasonal decorations, mulching, mowing, hard scaping, irrigation installation,
            landscape construction (fences/sheds/decks) and installation, water features,
            hydroseeding, property excavation and others. For on-site, no cost assessment,
            please give us a call at <span className="whitespace-nowrap">616-862-4331!</span>
          </p>
        </section>

        {/* Right Column: Values */}
        <section className="space-y-12">

          <div>
            <h2 className="text-3xl font-thin mb-4 text-black">Comfortable.</h2>
            <p className="leading-relaxed text-lg tracking-wide">
              Designing outdoor spaces should be simple and doesn&apos;t necessarily have to alter
              the natural flow of the environment. It&apos;s how we amplify the feel of the existing space?
              When you take inspiration from what&apos;s already there and just work your design
              around it, it creates a calming impression as you walk through your yard.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-thin mb-4 text-black">Memorable.</h2>
            <p className="leading-relaxed text-lg tracking-wide">
              Adding an outdoor feature has so many benefits. It draws wildlife such as birds
              and butterflies to the garden, which can be calming to observe. When we do a
              design-build landscape, we create it with you. We take note of what&apos;s important
              to you. We understand that you may want to plant spruces and shrubs that do not
              only help control noise pollution but something that can create a visual interest
              to the home - it becomes a conversation piece during a gathering.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-thin mb-4 text-black">Inspiring.</h2>
                            <p className="leading-relaxed text-lg tracking-wide">
              We&apos;d love for you to see your home in a new light so you can &quot;travel your own backyard!&quot;
              To ensure that your plants are delivered at the highest quality, we grow them in-house.
              We have a resident horticulturist who regularly inspects our plants before they are
              transplanted in your yard. This gives you a peace of mind that they are healthy
              and thriving because we know <span className="underline decoration-1 underline-offset-4 font-semibold italic">
              &quot;Plants are the unsung heroes of our existence. They help us survive by providing
              oxygen, food, and shelter. They even heal our wounds.&quot;</span> Check out these cool
              sprouts getting ready for Spring installations for your favorite wine and spirits store
              - voted best in Grand Rapids, <strong>Martha&apos;s Vineyard!</strong> Our custom-build
              planters are inspired by your unique spaces for you to enjoy!
            </p>
          </div>

        </section>

      </div>
      <Image src="/services/services.webp" alt="Services" width={1000} height={1000} className="w-full object-cover border-2 h-[90vh]" />
    </div>
  );
}
