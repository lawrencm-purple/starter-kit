"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { Button } from "../../shadcn/components/ui/button";

type imageDef = {
  imageUrl?: string | null;
  imageAlt?: string | null;
};

type HeroBannerProps = {
  title: string;
  description: string;
  images: imageDef[];
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tabClass = twMerge(
    "h-10",
    "flex-1",
    "border-b",
    "border-b-white",
    "text-center",
    "text-2xl",
    "font-light",
    "uppercase",
    "tracking-tighter",
  );

  useEffect(() => {
    const fadeDuration = 3000; // Fade duration in milliseconds
    const visibleDuration = 4000; // Visible duration in milliseconds

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, visibleDuration + fadeDuration);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative m-0 mx-auto bg-black text-white">
        <div className="container relative mx-auto h-[800px] bg-black">
          <div className="absolute bottom-[100px] z-20 flex flex-col">
            <div className="text-shadow mb-8 line-clamp-2 w-[400px] pb-2 text-7xl font-extrabold tracking-tight text-purple-400">
              {title}
            </div>
            <div className="mr-[500px] text-4xl font-extralight tracking-normal text-white">
              {description}
            </div>
          </div>
        </div>

        {/* create a div that fades down to black */}
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-transparent via-black/10 to-black object-fill"></div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index }}
          >
            {image.imageUrl && (
              <Image
                src={image.imageUrl}
                alt={image.imageAlt || ""}
                fill={true}
                objectFit="cover"
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
      <div className="bg-black">
        <div className="container mx-auto text-white">
          <p className={"text-2xl font-bold tracking-tight"}>Our Services</p>

          <div className="mt-12 flex space-x-2 pb-20">
            <div className={tabClass}>Advisory</div>
            <div className={tabClass}>Security</div>
            <div className={tabClass}>Cloud</div>
            <div className={tabClass}>Data & Insights</div>
            <div className={tabClass}>Modern Run</div>
            <div className={tabClass}>Digital</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { HeroBanner };
