import Link from "next/link";

type Company = {
  name: string;
  description: string;
  href?: string; // opcional
};

type Division = {
  title: string;
  priority: "primary" | "secondary" | "tertiary";
  companies: Company[];
};

const divisions: Division[] = [
  {
    title: "Technology & IT",
    priority: "primary",
    companies: [
      { name: "TunnelNet", description: "VLANs, monitoring, cybersecurity", href: "https://tunnelnet-mfpz.vercel.app/" },
      { name: "AMARG IT Services", description: "Full IT infrastructure management", href: "https://amarg-it-msp.vercel.app/" }, // sin href
      { name: "WiFi & Connectivity", description: "Routers, access points, optimization", href: "/wifi" },
      { name: "AMARG SoftDev", description: "Web applications and automation systems", href: "https://amarg-it-msp.vercel.app/" },
    ],
  },
  {
    title: "Infrastructure Services",
    priority: "secondary",
    companies: [
      { name: "HVAC Systems", description: "Installation and maintenance" },
      { name: "Electrical Services", description: "Residential and commercial", href: "/electrical" },
      { name: "Garage Door Systems", description: "Installation, repair, automation" },
    ],
  },
  {
    title: "Support & Specialized",
    priority: "tertiary",
    companies: [
      { name: "CCTV & Surveillance", description: "Security and monitoring systems" },
      { name: "Digital Marketing", description: "SEO, SEM, hosting, reputation", href: "/marketing" },
      { name: "Travel Services", description: "Tourism operations to Ecuador" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-background text-foreground fade-in">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
            Our Portfolio
          </h2>
          <p className="text-foreground/80">
            Structured divisions aligned for operational efficiency and growth.
          </p>
        </div>

        {/* PRIMARY */}
        {divisions.filter(d => d.priority === "primary").map((division, i) => (
          <div key={i} className="mb-20">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: "var(--primary-dark)" }}>
              {division.title}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {division.companies.map((c, idx) => {
                const content = (
                  <>
                    <h4 className="font-bold text-lg" style={{ color: "var(--primary)" }}>
                      {c.name}
                    </h4>
                    <p className="text-foreground/80 text-sm mt-2">{c.description}</p>
                  </>
                );

                return c.href ? (
                  <Link
                    key={idx}
                    href={c.href}
                    className="p-6 bg-background/80 border border-primary rounded-lg card block hover:opacity-90"
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    key={idx}
                    className="p-6 bg-background/80 border border-primary rounded-lg card"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* SECONDARY */}
        {divisions.filter(d => d.priority === "secondary").map((division, i) => (
          <div key={i} className="mb-16">
            <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--primary)" }}>
              {division.title}
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {division.companies.map((c, idx) => {
                const content = (
                  <>
                    <h4 className="font-semibold text-primary">{c.name}</h4>
                    <p className="text-foreground/80 text-sm mt-1">{c.description}</p>
                  </>
                );

                return c.href ? (
                  <Link
                    key={idx}
                    href={c.href}
                    className="p-5 bg-background/80 border border-primary rounded-lg card block hover:opacity-90"
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    key={idx}
                    className="p-5 bg-background/80 border border-primary rounded-lg card"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* TERTIARY */}
        {divisions.filter(d => d.priority === "tertiary").map((division, i) => (
          <div key={i}>
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--primary-dark)" }}>
              {division.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {division.companies.map((c, idx) =>
                c.href ? (
                  <Link
                    key={idx}
                    href={c.href}
                    className="px-4 py-2 bg-background/80 border border-primary rounded-full text-sm text-foreground/80 card hover:opacity-90"
                  >
                    {c.name}
                  </Link>
                ) : (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-background/80 border border-primary rounded-full text-sm text-foreground/80 card"
                  >
                    {c.name}
                  </span>
                )
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}