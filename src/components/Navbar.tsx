export default function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Operations", href: "#operations" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background shadow-xl z-50">
      <div className="container flex justify-between items-center py-8">
        <a
          href="#hero"
          className="text-4xl font-extrabold inline-block"
          style={{ color: "var(--primary)" }}
        >
          AMARG
        </a>
        <ul className="flex gap-10 text-lg font-semibold">
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
      </div>
    </nav>
  );
}