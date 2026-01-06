import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex h-20 w-20 items-center justify-center md:h-24 md:w-24">
      <Image
        src="/logo/logo.png"
        alt="MCF Landscaping Logo"
        width={96}
        height={96}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
