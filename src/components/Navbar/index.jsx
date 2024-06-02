import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <div
      className={cn(
        "fixed",
        "top-0",
        "z-10",
        "flex",
        "items-center",
        "inset-x-0",
        "gap-4",
        "p-6",
        "bg-neutral-800/80",
        "text-emerald-400"
      )}
    >
      <a
        className={cn("hover:opacity-70", "transition-opacity", "duration-500")}
        href="https://blog.olivierlarose.com/demos/split-vignette"
        target="_blank"
      >
        Split vignette mouseover
      </a>
    </div>
  );
}
