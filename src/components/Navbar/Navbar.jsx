import mainLogo from "../../assets/Project 2_3 (1).png";
import { Link } from "react-router-dom";
import {
  RiCloseLargeLine,
  RiMenu2Line,
  RiMoonLine,
  RiSunLine,
} from "@remixicon/react";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const links = [
  { id: "home", label: "HOME" },
  { id: "skills", label: "SKILLS" },
  { id: "work", label: "WORK" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`flex h-10 w-10 items-center justify-center rounded-full text-content/70 transition-colors duration-200 hover:bg-content/[0.06] hover:text-content ${className}`}
    >
      {isDark ? <RiSunLine size={22} /> : <RiMoonLine size={22} />}
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll-spy: highlight the section currently centered in the viewport.
  useEffect(() => {
    // Track each section's visibility and activate the most-visible one, so
    // overlapping sections near the bottom don't fight over the highlight.
    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });
        let best = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best) setActive(best);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav
      data-scroll
      className="sticky top-3 z-30 mb-8 flex items-center justify-between gap-4 rounded-full border border-content/[0.07] bg-surface/80 px-4 py-2 font-[gilroy-regular] font-bold backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.06),0px_0px_0px_1px_rgba(25,28,33,0.04)]"
    >
      <Link to="/" onClick={() => go("home")} className="shrink-0">
        <img
          className="h-10 md:h-8 transition-[filter] duration-300 dark:brightness-0 dark:invert"
          src={mainLogo}
          alt="logo"
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => go(id)}
                className={`relative rounded-full px-4 py-2 text-base transition-colors duration-200 ${
                  isActive
                    ? "text-content"
                    : "text-content/55 hover:text-content"
                }`}
              >
                {label}
                <span
                  className={`absolute left-1/2 -bottom-0.5 h-1 -translate-x-1/2 rounded-full bg-[#08D9D6] transition-all duration-300 ${
                    isActive ? "w-5" : "w-0"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* Right cluster: theme toggle + mobile menu */}
      <div className="flex items-center gap-1">
        <ThemeToggle />

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-content/[0.06] transition-colors"
        >
          {open ? <RiCloseLargeLine size={24} /> : <RiMenu2Line size={26} />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <ul className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 flex flex-col gap-1 rounded-3xl border border-content/[0.07] bg-surface p-3 shadow-[0px_18px_40px_-18px_rgba(37,42,52,0.35)] md:hidden">
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => go(id)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-lg transition-colors ${
                  active === id
                    ? "bg-content/[0.05] text-content"
                    : "text-content/70 hover:bg-content/[0.04]"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
