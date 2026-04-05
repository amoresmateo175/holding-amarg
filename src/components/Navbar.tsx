import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Operations", href: "#operations" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background shadow-xl z-50">
      <div className="container flex justify-between items-center py-8 px-6 md:px-0">
        {/* Logo */}
        <a
          href="#hero"
          className="text-4xl font-extrabold inline-block"
          style={{ color: "var(--primary)" }}
        >
          AMARG
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-background shadow-lg">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground text-lg font-semibold hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}