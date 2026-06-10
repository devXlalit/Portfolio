import { motion, useReducedMotion } from "framer-motion";

/**
 * Reusable bento tile.
 *
 * Props:
 *  - className   grid span + extra classes (e.g. "lg:col-span-6 lg:row-span-2")
 *  - eyebrow     small teal label naming the tile's content
 *  - dark        ink (#252A34) surface variant for feature tiles
 *  - accent      "teal" | "pink" — tints the eyebrow + dark-tile glow
 *  - id          anchor id for nav scroll targets
 *  - as          wrapper tag (default "div"; use "section" for anchors)
 *  - interactive enable the hover lift (default true)
 *  - index       used to stagger the reveal
 *  - bare        skip padding/border chrome (for tiles that manage their own)
 */
const BentoCard = ({
  className = "",
  eyebrow,
  dark = false,
  accent = "teal",
  id,
  as = "div",
  interactive = true,
  index = 0,
  bare = false,
  children,
}) => {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const accentText = accent === "pink" ? "text-[#FF2E63]" : "text-[#08D9D6]";
  const surface = dark
    ? "bg-gradient-to-br from-[#2c313c] via-[#252A34] to-[#1d2128] text-[#EAEAEA] border-white/10 dark:border-white/[0.04] shadow-[0px_24px_60px_-24px_rgba(37,42,52,0.55)]"
    : "bg-surface text-content border-content/[0.07] dark:border-white/[0.06] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.06),0px_0px_0px_1px_rgba(25,28,33,0.04)]";
  const chrome = bare ? "" : `rounded-3xl border p-6 md:p-8 ${surface}`;
  const hover = interactive
    ? "transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0px_18px_40px_-18px_rgba(37,42,52,0.35)]"
    : "";

  return (
    <MotionTag
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.36) }}
      className={`group relative overflow-hidden ${chrome} ${hover} ${
        id ? "scroll-mt-28" : ""
      } ${className}`}
    >
      {/* Ambient atmosphere for the dark feature tile — keeps it from reading
          as a flat slab while staying inside the brand palette. */}
      {dark && !bare && (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[#08D9D6]/20 blur-3xl" />
          <span className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#FF2E63]/10 blur-3xl" />
          <span className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#EAEAEA_1px,transparent_1px),linear-gradient(to_bottom,#EAEAEA_1px,transparent_1px)] [background-size:34px_34px]" />
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#08D9D6]/40 to-transparent" />
        </span>
      )}

      <div className="relative z-10 flex h-full flex-col">
        {eyebrow && (
          <span
            className={`mb-3 inline-flex items-center gap-2 text-xs md:text-sm font-[gilroy-medium] uppercase tracking-[0.18em] ${
              dark ? "text-[#08D9D6]" : accentText
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                accent === "pink" ? "bg-[#FF2E63]" : "bg-[#08D9D6]"
              }`}
            />
            {eyebrow}
          </span>
        )}
        {children}
      </div>
    </MotionTag>
  );
};

export default BentoCard;
