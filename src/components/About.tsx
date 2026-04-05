export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background text-foreground fade-in">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>About AMARG</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Structured holding company focused on acquisition, centralized operations, and scalable growth.
          </p>
        </div>

        {/* What We Are */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--primary-dark)" }}>What We Are</h3>
          <p className="text-foreground/80 max-w-4xl">
            AMARG operates as a multi-division holding company managing businesses
            across infrastructure, technology, and digital services. Each entity is
            supported by centralized systems that ensure operational consistency,
            efficiency, and scalability.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-6 bg-background/80 border border-primary rounded-lg card">
            <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--primary)" }}>Mission</h3>
            <p className="text-foreground/80">
              Acquire and operate small and medium-sized businesses using structured
              systems, technical infrastructure, and disciplined execution.
            </p>
          </div>

          <div className="p-6 bg-background/80 border border-primary rounded-lg card">
            <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--primary)" }}>Vision</h3>
            <p className="text-foreground/80">
              Build a scalable portfolio unified by centralized operations and
              technology-driven decision making.
            </p>
          </div>
        </div>

        {/* Operating Model */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "var(--primary-dark)" }}>Operating Model</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Acquisition", desc: "Acquisition of high-potential businesses." },
              { title: "Centralization", desc: "Shared IT, operations, and administrative systems." },
              { title: "Optimization", desc: "Process improvement and automation." },
              { title: "Scaling", desc: "Structured growth strategies across divisions." },
              { title: "Technology Layer", desc: "Networking, monitoring, and IT systems as core infrastructure." },
              { title: "Control", desc: "Centralized visibility and performance tracking." },
            ].map(item => (
              <div key={item.title} className="p-6 bg-background/80 border border-primary rounded-lg card">
                <h4 className="font-semibold mb-2" style={{ color: "var(--primary)" }}>{item.title}</h4>
                <p className="text-sm text-foreground/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiation */}
        <div>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "var(--primary-dark)" }}>Differentiation</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Technology-Driven", desc: "IT integrated directly into operations." },
              { title: "Centralized Systems", desc: "Shared services reduce redundancy and increase efficiency." },
              { title: "Execution Focus", desc: "Operational discipline with measurable results." },
            ].map(item => (
              <div key={item.title} className="p-6 bg-background/80 border border-primary rounded-lg card">
                <h4 className="font-semibold mb-2" style={{ color: "var(--primary)" }}>{item.title}</h4>
                <p className="text-sm text-foreground/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}