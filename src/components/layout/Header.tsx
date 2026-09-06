import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { brand, navLinks } from "../../data/portfolioData";
import { cn } from "../../lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      const smoother = ScrollSmoother.get();
      const y = smoother ? smoother.scrollTop() : window.scrollY;
      setScrolled(y > 10);
    };
    update();
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  const closeMenu = () => setOpen(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(0, true);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="site-header"
      id="top"
      style={{ boxShadow: scrolled ? "0 1px 0 rgba(43,43,43,.15)" : "none" }}
    >
      <nav className="nav wrap">
        <a className="logo" href="#top" onClick={scrollToTop} aria-label={`${brand.name} — home`}>
          <img className="logo-mark" src="/images/logo-mark.png" alt={brand.name} />
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
