"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Description({ mousePosition, projects }) {
  const [index, setIndex] = useState(0);
  const { x, y } = mousePosition;

  return (
    <div
      style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
      className={"h-[120vh]"}
    >
      <div
        className={cn(
          "absolute",
          "size-full",
          "flex",
          "items-center",
          "justify-center",
          "flex-col",
          "z-[1]"
        )}
      >
        {projects.map(({ name }, i) => {
          return (
            <p
              className={cn("text-[7vw] cursor-default m-0 uppercase")}
              onMouseOver={() => {
                setIndex(i);
              }}
              key={`p${i}`}
            >
              {name}
            </p>
          );
        })}
      </div>
      <motion.div
        className={cn(
          "h-[30vw]",
          "w-25vw",
          "fixed",
          "top-0",
          "rounded-[1.5vw]",
          "overflow-hidden"
        )}
        style={{ x, y }}
      >
        <Image
          src={`/images/${projects[index].handle}/about.jpg`}
          alt="image"
          fill
          className="object-cover w-full"
        />
      </motion.div>
    </div>
  );
}
