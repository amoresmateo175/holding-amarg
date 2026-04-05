export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-background text-foreground fade-in"
    >
      <h1 className="text-6xl font-bold mb-6" style={{ color: "var(--primary)" }}>
        AMARG Holding
      </h1>
      <p className="text-xl max-w-3xl mb-8">
        Multi-division holding company focused on M&A, IT operations, and scaling SMBs with efficiency and growth-driven strategies.
      </p>
      <a href="#about" className="btn-primary">
        Learn More
      </a>
    </section>
  );
}