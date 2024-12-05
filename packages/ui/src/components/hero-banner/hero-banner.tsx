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
    <div className="relative flex items-end justify-start overflow-hidden rounded-xl border border-slate-400 bg-slate-400">
      <div className="bottom-0 top-0 z-10 mt-[200px] flex-col p-8 text-white">
        <div className="text-shadow-sm line-clamp-2 pb-2 text-5xl font-extrabold tracking-tight text-white">
          {title}
        </div>
        <div className="text-shadow-sm mt-[-10px] line-clamp-4 font-normal tracking-normal text-white">
          {description}
        </div>
      </div>
      {image && (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0">
          <Image
            src={image}
            alt="Hero Banner"
            fill={true}
            objectFit="cover"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export { HeroBanner };
