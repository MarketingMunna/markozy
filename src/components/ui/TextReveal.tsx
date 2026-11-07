"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** Words (exact match, punctuation stripped) to render with the gradient style */
  highlight?: string[];
  delay?: number;
  /** Animate on mount instead of when scrolled into view */
  immediate?: boolean;
  id?: string;
};

/** Splits text into words that slide up from behind a mask. Screen readers get the plain text. */
export default function TextReveal({ text, as = "h2", className, highlight = [], delay = 0, immediate, id }: Props) {
  const Tag = motion[as];
  const words = text.split(" ");
  const animateProps = immediate
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-40px" } };

  return (
    <Tag
      id={id}
      className={cn("text-balance", className)}
      aria-label={text}
      {...animateProps}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
    >
      {words.map((word, i) => {
        const clean = word.replace(/[^\w'-]/g, "");
        const isHi = highlight.includes(clean);
        return (
          <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-top">
            <motion.span
              className={cn("inline-block will-change-transform", isHi && "text-gradient")}
              variants={{
                hidden: { y: "110%", rotate: 4 },
                show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
