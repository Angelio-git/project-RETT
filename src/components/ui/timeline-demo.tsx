import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "BUY",
      content: (
        <div>
          <p className="text-neutral-1800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Banished, Rett wandered the blockchain wilderness until he stumbled upon Avalanche—a chain fast as frostbite and ready to dethrone the stale memes of old.
          </p>
          <div className="grid grid-cols-1 gap-2">
            <img
              src="public/RettSecond.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-200 md:h-440 lg:h-600 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "RETT",
      content: (
        <div>
          <p className="text-neutral-1800 dark:text-neutral-2000 text-xs md:text-sm font-normal mb-8">
            In the heart of Avalanche, Rett uncovered the Magical Sword of Green Candles, forged in bullish fire and powered by unstoppable uptrends—each swing lighting the charts with gains.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            
          </p>
          <div className="grid grid-cols-1 gap-0">
            <img
              src="public/ret1.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-200 md:h-440 lg:h-600 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "NOW",
      content: (
        <div>
          <p className="text-neutral-1800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Now jacked beyond recognition, with diamond delts, Rett didn’t just join Avalanche — he conquered it, turning every dip into a pump and every doubter into a disciple
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
             
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              
            </div>
          </div>
          <div className="grid grid-cols-1 gap-0">
            <img
              src="public/Rettsecond2.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-200 md:h-440 lg:h-600 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}