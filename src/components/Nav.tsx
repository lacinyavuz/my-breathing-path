import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/site";
import { Logo } from "./Logo";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-cream-100/80 border-b border-ink/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex h-20 items-center justify-between">
          <Link to="/" aria-label="My Breathing Path home" className="group">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-terracotta-400" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Book a session
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 transition-all duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-cream-100" />
        <div className="relative flex h-full flex-col items-center justify-center gap-3 px-6 pt-20">
          {navigation.map((item, i) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `font-display text-4xl transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${isActive ? "text-terracotta-400" : "text-ink"}`
              }
              style={{ transitionDelay: `${100 + i * 60}ms` }}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className={`btn-primary mt-8 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${100 + navigation.length * 60}ms` }}
          >
            Book a session
          </Link>
        </div>
      </div>
    </>
  );
}
