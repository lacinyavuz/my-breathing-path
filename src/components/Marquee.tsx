import { motion } from "framer-motion";

type MarqueeProps = { items: string[]; speed?: number };

export function Marquee({ items, speed = 40 }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-cream-200 py-8">
      <motion.div
        className="flex gap-12 whitespace-nowrap font-display text-3xl text-ink/60 sm:text-5xl"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {row.map((text, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{text}</span>
            <span className="h-2 w-2 rounded-full bg-terracotta-400 opacity-60" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
