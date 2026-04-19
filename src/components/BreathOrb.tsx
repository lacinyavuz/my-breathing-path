import { motion } from "framer-motion";

export function BreathOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-terracotta-200/60 via-sage-200/40 to-cream-300/40 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-10 rounded-full bg-gradient-to-br from-terracotta-300/40 to-sage-300/40 blur-2xl"
        animate={{ scale: [1.05, 0.9, 1.05], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
