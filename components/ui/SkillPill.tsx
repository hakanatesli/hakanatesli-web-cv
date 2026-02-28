"use client";

import { motion } from "framer-motion";

interface SkillPillProps {
  label: string;
  delay?: number;
}

export default function SkillPill({ label, delay = 0 }: SkillPillProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="glow-pill inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-light"
    >
      {label}
    </motion.span>
  );
}
