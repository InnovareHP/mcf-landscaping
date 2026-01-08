export default function MissionSection() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h3 className="mb-8 text-base md:text-lg font-normal text-gray-500">
        Our Mission
      </h3>
      <p
        className="leading-relaxed text-black text-[1.82rem] md:text-[2.18rem] lg:text-[2.91rem] xl:text-[3.64rem]"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        Your reliable local landscape
        <br />
        company in West Michigan <br />
        creating outdoor spaces that are
        <br />
        comfortable, memorable and inspiring.
      </p>
    </div>
  );
}
