export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Left Column - Title */}
      <div className="flex items-start">
        <h2
          className="text-5xl font-normal leading-tight text-black lg:text-7xl"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Who We Are
        </h2>
      </div>

      {/* Right Column - Body Text */}
      <div className="space-y-6 pt-2">
        <p className="text-base leading-7 text-gray-700">
          Hello! We&apos;re glad you&apos;re here. We are MCF Landscaping
          LLC! We are your team of reliable local landscape professionals in
          West Michigan creating outdoor spaces that are comfortable,
          memorable and inspiring since 1999.
        </p>
        <p className="text-base leading-7 text-gray-700">
          The past two years have been challenging for everyone. COVID-19,
          supply/inventory issues, and staffing fluctuations have been
          difficult to navigate. We are tough-minded optimists, and
          we&apos;re committed to training a reliable, skilled and vibrant
          landscape crew. We&apos;re expanding our reach, increasing our
          digital efforts, and sharpening our visuals and messaging.
        </p>
        <p className="text-base leading-7 text-gray-700">
          Our dedicated, passionate and hardworking landscape crew is the
          reason we can complete projects on time and with high quality.
          We&apos;re grateful for their commitment to excellence.
        </p>
      </div>
    </div>
  );
}

