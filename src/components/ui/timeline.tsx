"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-red-600 dark:bg-red-600 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-40 text-white dark:text-white max-w-8xl">
          RETT
        </h2>
        <p className="text-red-100 dark:text-red-100 text-sm md:text-base max-8-sm ml-auto mr-00">

          From the depths of BASE, where safe memes thrive, RETT was cast out—too raw, too real.

            Now he rises from the Avalanche.
                                    Colder. Bolder.
            Glitched by exile. Forged by chaos.

            He’s not just Brett’s twin—he’s the upgrade.
            Welcome RETT.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 w-8 md:h-10 md:w-10 absolute left-2 md:left-3 rounded-full bg-white dark:bg-black flex items-center justify-center p-0.5 md:p-1">
                <img 
                  src="/rett pfp.png" 
                  alt="Timeline marker" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-red-200 dark:text-red-200">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 md:pl-20 pr-4 md:pr-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-red-200 dark:text-red-200">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-red-300 dark:via-red-300 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-green-500 via-green-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};