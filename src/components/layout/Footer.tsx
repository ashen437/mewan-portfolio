import type { ReactElement } from "react";
import { brand, footerLinks, socialLinks } from "../../data/portfolioData";

const socialIcons: Record<string, ReactElement> = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.837c-3.148 0-3.517.012-4.756.068-2.667.122-3.907 1.38-4.029 4.029-.056 1.238-.067 1.606-.067 4.755 0 3.148.012 3.518.067 4.756.122 2.645 1.358 3.907 4.029 4.029 1.238.056 1.606.068 4.756.068 3.148 0 3.518-.012 4.756-.068 2.667-.122 3.908-1.384 4.029-4.029.056-1.238.068-1.606.068-4.756 0-3.148-.013-3.517-.068-4.755-.122-2.65-1.363-3.908-4.029-4.029-1.239-.056-1.608-.068-4.756-.068zm0 4.667a5.334 5.334 0 1 1 0 10.667 5.334 5.334 0 0 1 0-10.667zm0 1.837a3.497 3.497 0 1 0 0 6.993 3.497 3.497 0 0 0 0-6.993zm6.406-1.845a1.246 1.246 0 1 1 0 2.492 1.246 1.246 0 0 1 0-2.492z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  ),
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <nav className="foot-nav">
        {footerLinks.left.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="foot-brand">
        <h3 className="logo">{brand.name}</h3>
        <div className="socials">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              {socialIcons[social.icon]}
            </a>
          ))}
        </div>
        <h6 className="foot-tag">{brand.tagline}</h6>
        <p className="foot-desc">
          A full-service production house for brand campaigns, television drama and feature film, 
          from strategy and casting to production and distribution.
        </p>
      </div>

      <nav className="foot-nav right">
        {footerLinks.right.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
