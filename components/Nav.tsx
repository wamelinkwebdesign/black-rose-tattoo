"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const links = [
  { href: "#studio", label: "Studio" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#boeken", label: "Boeken" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const scrollLockY = useRef(0);
  const prevScrollY = useRef(0);

  // Hide-on-scroll-down logic
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrolled = currentY > window.innerHeight - 100;
      setScrolled(isScrolled);
      setHidden(isScrolled && currentY > prevScrollY.current);
      prevScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on iOS Safari when menu is open
  useEffect(() => {
    if (!menuOpen) return;

    scrollLockY.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollLockY.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    const onTouchMove = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", onTouchMove);
      const savedY = parseInt(document.body.style.top || "0", 10) * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, savedY);
    };
  }, [menuOpen]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);

      requestAnimationFrame(() => {
        const target = document.querySelector(href);
        if (target) {
          const offset = 60;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    },
    []
  );

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1002]"
        style={{
          padding: "0.6rem 1.5rem 0.55rem",
          backgroundColor: menuOpen
            ? "rgba(13,13,13,0.98)"
            : scrolled
            ? "rgba(13,13,13,0.95)"
            : "transparent",
          transition: "background-color .5s, padding .3s, transform .3s",
          transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          {/* Logo — plain div, no motion.div for iOS Safari */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="font-[family-name:var(--font-cormorant)] text-[1.4rem] font-light tracking-[0.15em] uppercase text-cream transition-colors duration-500"
          >
            Black Rose
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-10 list-none">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[0.75rem] font-medium tracking-[0.12em] uppercase text-cream/70 hover:text-cream transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-[width] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:w-full" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — plain button, no motion.button for iOS Safari */}
          <button
            className="hidden max-md:flex flex-col justify-center items-center bg-transparent border-none cursor-pointer w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-cream transition-[transform] duration-400 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] my-[5px] bg-cream transition-[transform] duration-400 ${
                menuOpen ? "scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-cream transition-[transform] duration-400 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu (mobile only) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[1001] md:hidden"
          style={{
            backgroundColor: "rgba(13, 13, 13, 0.98)",
            WebkitBackdropFilter: "blur(20px)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="flex flex-col items-center justify-center h-[100dvh] h-[100vh] gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-[family-name:var(--font-cormorant)] text-[2rem] font-light italic text-cream tracking-[0.02em] relative group"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-[width] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:w-full" />
                </span>
              </a>
            ))}

            <p className="absolute bottom-12 text-cream/30 text-[0.65rem] tracking-[0.2em] uppercase">
              Dirk van Hasseltssteeg 56 · Amsterdam
            </p>
          </div>
        </div>
      )}
    </>
  );
}
