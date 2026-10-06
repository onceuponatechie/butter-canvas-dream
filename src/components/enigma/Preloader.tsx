import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const brand = "Essy";

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          clearInterval(t);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, var(--color-preloader-glow) 0%, var(--color-preloader-blush) 58%, var(--color-backdrop) 100%)",
          }}
        >
          <div className="relative flex flex-col items-center">
            <div
              className="relative flex items-center justify-center"
              style={{
                width: 440,
                height: 440,
                borderRadius: 9999,
                background:
                  "radial-gradient(circle at 35% 25%, var(--color-paper) 0%, var(--color-preloader-glow) 44%, var(--color-preloader-blush) 74%, var(--color-preloader-shadow) 100%)",
                boxShadow:
                  "0 40px 80px color-mix(in oklab, var(--color-ink) 9%, transparent), inset 0 -30px 60px color-mix(in oklab, var(--color-paper) 90%, transparent)",
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: 260,
                  height: 120,
                  left: 30,
                  bottom: 40,
                  background:
                    "radial-gradient(ellipse at center, color-mix(in oklab, var(--color-paper) 85%, transparent) 0%, transparent 70%)",
                  filter: "blur(10px)",
                }}
              />
              <div className="relative z-10 flex text-[52px] font-medium tracking-tight text-neutral-500">
                {brand.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="mt-6 text-[15px] tabular-nums text-neutral-500">
              {pct}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}