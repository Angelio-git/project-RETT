"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "framer-motion"

import Floating, {
  FloatingElement,
} from "@/components/ui/parallax-floating"

const exampleImages = [
  {
    url: "public/ret5.jpg",
    author: "",
    link: "",
    title: "Custom Image",
  },
  {
    url: "public/ret6.jpg",
    link: "",
    title: "Custom Image",
    author: "",
  },
  {
    url: "public/ret7.jpg",
    link: "",
    author: "",
    title: "Custom Image",
  },
  {
    url: "",
    link: "",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "/ret1.jpg",
    link: "",
    author: "",
    title: "Custom Image",
  },
  {
    url: "https://raw.githubusercontent.com/Angelio-git/project-RETT/main/public/ret2.jpg",
    link: "",
    author: "",
    title: "Custom Image",
  },
  {
    url: "public/ret4.jpg",
    title: "Custom Image",
    author: "",
    link: "",
  },
  {
    url: "public/ret3.jpg",
    author: "",
    link: "",
    title: "Custom Image",
  },
]

export const ParallaxFloatingDemo = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <div
     className="flex w-screen h-screen min-h-[600px] justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: 'url("public/webHD.png")' }}
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <img
  src="public/rett new with outline.png"
  alt="Fancy Logo"
  className="w-60 md:w-80 z-70"
/>
        <p className="text-xs z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-2 w-20 cursor-pointer">
          BUY NOW
        </p>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className="w-40 h-40  md: w-140 md:h-140 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[72%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className="w-100 h-100 md: w-80 md:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[12%] left-[43%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className="w-28 h-60 hidden md:block w-40 md:h-62 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className="w-240 h-240  md: w-320 md:h-320 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-280 h-180 hidden md:block w-80 md:h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[63%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            className="w-80 h-80 hidden md:block w-60 md:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[88%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className="w-40 hidden md:block w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[45%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className="w-40 h-40 hidden md:block w-65 md:h-65 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  )
}
