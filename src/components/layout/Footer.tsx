import { brand, footerLinks } from "../../data/portfolioData";

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
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.837c-3.148 0-3.517.012-4.756.068-2.667.122-3.907 1.38-4.029 4.029-.056 1.238-.067 1.606-.067 4.755 0 3.148.012 3.518.067 4.756.122 2.645 1.358 3.907 4.029 4.029 1.238.056 1.606.068 4.756.068 3.148 0 3.518-.012 4.756-.068 2.667-.122 3.908-1.384 4.029-4.029.056-1.238.068-1.606.068-4.756 0-3.148-.013-3.517-.068-4.755-.122-2.65-1.363-3.908-4.029-4.029-1.239-.056-1.608-.068-4.756-.068zm0 4.667a5.334 5.334 0 1 1 0 10.667 5.334 5.334 0 0 1 0-10.667zm0 1.837a3.497 3.497 0 1 0 0 6.993 3.497 3.497 0 0 0 0-6.993zm6.406-1.845a1.246 1.246 0 1 1 0 2.492 1.246 1.246 0 0 1 0-2.492z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
        <h6 className="foot-tag">{brand.tagline}</h6>
        <p className="foot-desc">
          A full-service production house for brand campaigns, television drama and feature film
          — from strategy and casting to production and distribution.
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
