"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Gallery({ mousePosition, handle }) {
  const { x, y } = mousePosition;

  return (
    <div
      style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
      className={cn("h-[120vh]")}
    >
      <div className={cn("size-full relative")}>
        <Image
          className={cn("w-full object-cover")}
          src={`/images/${handle}/background.jpg`}
          alt="image"
          fill
        />
      </div>
      <motion.div
        className={cn(
          "h-[30vw]",
          "w-[25vw]",
          "fixed",
          "top-0",
          "rounded-[1.5vw]",
          "overflow-hidden"
        )}
        style={{ x, y }}
      >
        <Image
          className="object-cover w-full"
          src={`/images/${handle}/1.jpg`}
          alt="image"
          fill
        />
      </motion.div>
    </div>
  );
}
