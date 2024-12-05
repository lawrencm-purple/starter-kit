import React from "react";
import Image from "next/image";

type HeroBannerProps = {
  title: string;
  description: string;
  image: string;
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="relative max-h-[400px] overflow-hidden rounded-xl border bg-white p-8">
      <Image
        src={image}
        alt="Hero Banner"
        width={800}
        height={400}
        objectFit="cover"
        className="absolute bottom-0 left-0 right-0 top-0 z-0 h-auto w-full"
      />
      <div className="text-5xl font-extrabold tracking-tight">{title}</div>
      <div className="font-normal tracking-normal">{description}</div>
    </div>
  );
};

export { HeroBanner };
