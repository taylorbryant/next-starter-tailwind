import Image from "next/image";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  return (
    <>
      <NextSeo title="Home" />

      <div className="flex flex-col items-center justify-center space-y-12">
        <Image
          src="/team-of-critters.svg"
          alt="Four one-eyed aliens playing"
          width={576}
          height={429.734}
          priority
        />

        <h2 className="bg-yellow-300 p-3 font-bold md:text-2xl">
          Hi! Welcome to your first Next.js site.
        </h2>
      </div>
    </>
  );
}
