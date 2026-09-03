import { useEffect, useState } from "react";
import { brand, navLinks } from "../../data/portfolioData";
import { cn } from "../../lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="site-header"
      id="top"
      style={{ boxShadow: scrolled ? "0 1px 0 rgba(43,43,43,.15)" : "none" }}
    >
      <nav className="nav wrap">
        <a className="logo" href="#top">
          {brand.name}
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-yellow nav-cta">
          Let's Talk <span className="arrow">&rarr;</span>
        </a>
        <button
          type="button"
          className={cn("burger", open && "open")}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className="mobile-menu" hidden={!open}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-yellow" onClick={closeMenu}>
          Let's Talk &rarr;
        </a>
      </div>
    </header>
  );
};

export default Header;
