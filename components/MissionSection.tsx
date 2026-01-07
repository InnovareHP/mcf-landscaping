export default function MissionSection() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h3 className="mb-8 text-sm font-normal text-gray-500">Our Mission</h3>
      <p
        className="text-2xl leading-relaxed text-black md:text-3xl lg:text-4xl"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        Your reliable local landscape
        <br />
        company in West
        <br />
        Michigan creating outdoor spaces that are
        <br />
        comfortable, memorable and inspiring.
      </p>
    </div>
  );
}
