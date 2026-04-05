export default function Operations() {
  return (
    <section id="operations" className="py-24 px-6 bg-background text-foreground fade-in">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>How We Operate</h2>
          <p className="text-foreground/80 mt-2 max-w-2xl mx-auto">
            Our structured approach ensures efficiency, scalability, and measurable outcomes across all subsidiaries.
          </p>
        </div>

        {/* Management Model */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "var(--primary-dark)" }}>Management Model</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Acquisition",
                desc: "Identify and acquire high-potential businesses across multiple sectors, focusing on value and growth potential."
              },
              {
                title: "Optimization",
                desc: "Streamline operations, integrate technology, and standardize systems to increase efficiency and reduce risk."
              },
              {
                title: "Scaling",
                desc: "Expand through structured growth strategies, leveraging centralization, IT, and process standardization."
              }
            ].map(item => (
              <div key={item.title} className="p-6 bg-background/80 border border-primary rounded-lg card">
                <h4 className="font-semibold mb-2 text-primary">{item.title}</h4>
                <p className="text-foreground/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Framework */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "var(--primary-dark)" }}>Operational Framework</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Centralized IT",
                desc: "Unified network, monitoring, and IT systems provide full visibility and control over all subsidiaries."
              },
              {
                title: "Finance & Reporting",
                desc: "Centralized accounting, financial planning, and performance tracking to ensure data-driven decisions."
              },
              {
                title: "Operations & Process",
                desc: "Standardized workflows, operational KPIs, and process automation for consistency and efficiency."
              },
              {
                title: "Governance & Compliance",
                desc: "Policies and oversight ensure that each company aligns with legal, technical, and operational standards."
              }
            ].map(item => (
              <div key={item.title} className="p-6 bg-background/80 border border-primary rounded-lg card">
                <h4 className="font-semibold mb-2 text-primary">{item.title}</h4>
                <p className="text-foreground/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiator */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "var(--primary-dark)" }}>Why We're Different</h3>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            Unlike a typical company, AMARG integrates centralized IT, finance, and operations into a cohesive framework,
            allowing rapid scaling, risk reduction, and measurable growth across all divisions.
          </p>
        </div>

      </div>
    </section>
  );
}